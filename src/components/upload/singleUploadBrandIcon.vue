<template>
  <el-upload
    action="http://localhost:88/api/thirdPart/azure/hello/"
    ref="upload"
    :http-request="uploadSectionFile"
    :file-list="fileList"
    :limit="1"
    list-type="picture"
  >
    <el-button size="small" type="primary">点击上传</el-button>
  </el-upload>
</template>
<script>
const { BlobServiceClient } = require("@azure/storage-blob");
export default {
  data() {
    return {
      fileList: [],
      iconUrl: "",
      blobSasUrl: "",
      containerName: "",
      fileName: "",
    };
  },
  watch: {
    iconUrl: function (val) {
      this.$emit("onIconChange", val);
    },
  },
  props: {
    folder: {
      type: String,
      default: "default",
      required: false,
    },
  },
  methods: {
    beforeUpdate(file) {
      return this.$http({
        //請求sas、目標容器、當前日期(容器的資料夾)
        url: this.$http.adornUrl("/thirdPart/azure/bloburl"),
        method: "get",
        params: this.$http.adornParams({}),
      }).then(({ data }) => {
        //Blob開頭的azureBlobService的Url + SAS
        this.blobSasUrl = data.url + "?" + data.signature;
        //容器+資料夾名稱
        this.containerName = this.folder + "/" + data.date;
        //圖片名稱
        this.fileName = file.name;
        //圖片全地址
        this.iconUrl = data.url + this.containerName + "/" + this.fileName;
      });
    },
    uploadSectionFile({ file }) {
      this.beforeUpdate(file).then(() => {
        // Create a new BlobServiceClient
        const blobServiceClient = new BlobServiceClient(this.blobSasUrl);
        // Get a container client from the BlobServiceClient
        const containerClient = blobServiceClient.getContainerClient(
          this.containerName
        );
        try {
          const promises = [];
          const blockBlobClient = containerClient.getBlockBlobClient(
            this.fileName
          );
          promises.push(blockBlobClient.uploadBrowserData(file));
          Promise.all(promises);
          this.$message({
            message: "上傳圖標成功",
            type: "success",
          });
        } catch (error) {
          this.$message({
            message: "上傳圖標失敗",
            type: "fail",
          });
        }
      });
    },
  },
};
</script>