<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    action="http://localhost:88/api/thirdPart/azure/hello/"
    :on-preview="onPreview"
    :on-remove="onRemove"
    :on-success="onSuccess"
    :on-progress="onProgress"
    :on-change="onChange"
    :before-remove="beforeRemove"
    :before-upload="beforeUpload"
    :on-exceed="onExceed"
    multiple
    :limit="max"
    :list-type="listType"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">
      <slot> 只能上传jpg/png文件，且不超过500kb </slot>
    </div>
  </el-upload>
</template>
<script>
const { BlobServiceClient } = require("@azure/storage-blob");
export default {
  props: {
    listType: {
      type: String,
      default: "picture-card",
      required: false,
    },
  },
  data() {
    return {
      max: 20,
      azureblobUrl: "",
      blobSasUrl: "",
      containerName: "",
      removedIndex: 0
    };
  },
  methods: {
    getImagesUrl(fileList) {
      var fileurls = [];
      for (var i = 0; i < fileList.length; i++) {
        var url = this.azureblobUrl + this.containerName + "/" + fileList[i].name;
         fileurls.push(url);
      }
      return fileurls;
    },
    onPreview(file) {
      // console.log("onPreview", file);
    },
    onRemove(file, fileList) {
      // console.log("onRemove", file, fileList);
      this.$emit("onRemove", this.getImagesUrl(fileList),this.removedIndex);
    },
    onSuccess(response, file, fileList) {
      // console.log("onSuccess", response, file, fileList);
      // 下面這方法似乎是異步的
      // 當我emit給父組件時他還沒完全上傳，導致我父組件的img在引用src會失效
      this.uploadSectionFile(file);
      this.$emit("onSuccess", this.getImagesUrl(fileList));
    },
    onProgress(event, file, fileList) {
      // console.log("onProgress", event, file, fileList);
    },
    onChange(file, fileList) {
      // console.log("onChange", file, fileList);
    },
    beforeUpload(file) {
      // console.log("beforeUpload", file);
    },
    beforeRemove(file, fileList) {
      this.removedIndex = fileList.indexOf(file);
      // console.log("beforeRemove", file, fileList);
    },
    onExceed(files, fileList) {
      // console.log("onExceed", files, ileList);
    },
    //file is array containing name and fullurl
    uploadSectionMultiFile() {
      // Create a new BlobServiceClient
      const blobServiceClient = new BlobServiceClient(this.blobSasUrl);
      // Get a container client from the BlobServiceClient
      const containerClient = blobServiceClient.getContainerClient(
        this.containerName
      );

      try {
        const promises = [];
        for (var i = 0; i < this.fileList.length; i++) {
          const blockBlobClient = containerClient.getBlockBlobClient(
            this.fileList[i].name
          );
          promises.push(blockBlobClient.uploadBrowserData(this.fileList[i]));
        }
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
    },
    uploadSectionFile(file) {
      // Create a new BlobServiceClient
      const blobServiceClient = new BlobServiceClient(this.blobSasUrl);
      // Get a container client from the BlobServiceClient
      const containerClient = blobServiceClient.getContainerClient(
        this.containerName
      );

      try {
        const promises = [];
        const blockBlobClient = containerClient.getBlockBlobClient(file.name);
        promises.push(blockBlobClient.uploadBrowserData(file.raw));
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
    },
    getSasAndFolder() {
      return this.$http({
        //請求sas、目標容器、當前日期(容器的資料夾)
        url: this.$http.adornUrl("/thirdPart/azure/bloburl"),
        method: "get",
        params: this.$http.adornParams({}),
      }).then(({ data }) => {
        //https://gulimall.blob.core.windows.net/
        this.azureblobUrl = data.url;
        //https://gulimall.blob.core.windows.net/
        //?sv=2020-08-04&ss=b&srt=sco&sp=rwdlactfx&se=2022-03-11T21:49:52Z&st=2021-07-31T13:49:52Z&spr=https
        //&sig=A%2B69qOhsktxEwk02dEwlaoNsFPNI4x6UyuJwywN4ah0%3D
        this.blobSasUrl = data.url + "?" + data.signature;
        //brandicon/2021-08-01
        this.containerName = data.container + "/" + data.date;
      });
    },
    reset(){
      this.$refs.upload.clearFiles();
    }
  },
  created() {
    this.getSasAndFolder();
  },
};
</script>