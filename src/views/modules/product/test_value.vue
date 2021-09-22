<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column type="expand">
        <template slot-scope="scope">
          <multi-upload-brand-icon
            @onUploadItemChange="onImagesChange, test(scope), test2(scope)"
          >
          </multi-upload-brand-icon>
        </template>
      </el-table-column>
    </el-table>
    <img
      data-v-3c66e2f8=""
      src="https://gulimall.blob.core.windows.net/brandicon/2021-08-01/2b1837c6c50add30.jpg"
      style="width: 160px; height: 120px"
    />
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <el-card v-for="(img, index) in images" :key="index">
      <el-checkbox
        v-model="selected[index]"
        :true-label="img"
        false-label
      ></el-checkbox>
    </el-card>
    <MultiUploadBrandIcon @onRemove="onRemove" @onSuccess="onSuccess" ></MultiUploadBrandIcon>
  </div>
</template>

<script>
import MultiUploadBrandIcon from "@/components/upload/MultiUploadBrandIcon";
export default {
  components: {
    MultiUploadBrandIcon,
  },
  data() {
    return {
      selected:[],
      images: [1, 2, 3, 4, 5],
      checked: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    onRemove(list,index){
      console.log(index);
    },
    onSuccess(list){
      console.log(list);
    },
    test(row) {
      console.log(1, row);
    },
    test2(row) {
      console.log(2, row);
    },
    onImagesChange(val) {
      console.log(val);
    },
  },
};
</script>