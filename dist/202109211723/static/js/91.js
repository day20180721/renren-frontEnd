webpackJsonp([91],{g99a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,name:"",subjectId:"",spuId:"",sort:""},dataRule:{name:[{required:!0,message:"专题名字不能为空",trigger:"blur"}],subjectId:[{required:!0,message:"专题id不能为空",trigger:"blur"}],spuId:[{required:!0,message:"spu_id不能为空",trigger:"blur"}],sort:[{required:!0,message:"排序不能为空",trigger:"blur"}]}}},methods:{init:function(t){var e=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/coupon/homesubjectspu/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm.name=a.homeSubjectSpu.name,e.dataForm.subjectId=a.homeSubjectSpu.subjectId,e.dataForm.spuId=a.homeSubjectSpu.spuId,e.dataForm.sort=a.homeSubjectSpu.sort)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/coupon/homesubjectspu/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,name:t.dataForm.name,subjectId:t.dataForm.subjectId,spuId:t.dataForm.spuId,sort:t.dataForm.sort})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"专题名字",prop:"name"}},[a("el-input",{attrs:{placeholder:"专题名字"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专题id",prop:"subjectId"}},[a("el-input",{attrs:{placeholder:"专题id"},model:{value:t.dataForm.subjectId,callback:function(e){t.$set(t.dataForm,"subjectId",e)},expression:"dataForm.subjectId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"spu_id",prop:"spuId"}},[a("el-input",{attrs:{placeholder:"spu_id"},model:{value:t.dataForm.spuId,callback:function(e){t.$set(t.dataForm,"spuId",e)},expression:"dataForm.spuId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{attrs:{placeholder:"排序"},model:{value:t.dataForm.sort,callback:function(e){t.$set(t.dataForm,"sort",e)},expression:"dataForm.sort"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},s=a("VU/8")(r,o,!1,null,null,null);e.default=s.exports}});