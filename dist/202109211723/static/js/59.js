webpackJsonp([59],{"V+nC":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,wareList:[],dataForm:{id:0,purchaseId:"",skuId:"",skuNum:"",skuPrice:"",wareId:"",status:0},dataRule:{skuId:[{required:!0,message:"采购商品id不能为空",trigger:"blur"}],skuNum:[{required:!0,message:"采购数量不能为空",trigger:"blur"}],wareId:[{required:!0,message:"仓库id不能为空",trigger:"blur"}]}}},created:function(){this.getWares()},methods:{getWares:function(){var a=this;this.$http({url:this.$http.adornUrl("/ware/wareinfo/list"),method:"get",params:this.$http.adornParams({page:1,limit:500})}).then(function(t){var e=t.data;a.wareList=e.page.list})},init:function(a){var t=this;this.dataForm.id=a||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/ware/purchasedetail/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(a){var e=a.data;e&&0===e.code&&(t.dataForm.purchaseId=e.purchaseDetail.purchaseId,t.dataForm.skuId=e.purchaseDetail.skuId,t.dataForm.skuNum=e.purchaseDetail.skuNum,t.dataForm.skuPrice=e.purchaseDetail.skuPrice,t.dataForm.wareId=e.purchaseDetail.wareId,t.dataForm.status=e.purchaseDetail.status)})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(t){t&&a.$http({url:a.$http.adornUrl("/ware/purchasedetail/"+(a.dataForm.id?"update":"save")),method:"post",data:a.$http.adornData({id:a.dataForm.id||void 0,purchaseId:a.dataForm.purchaseId,skuId:a.dataForm.skuId,skuNum:a.dataForm.skuNum,skuPrice:a.dataForm.skuPrice,wareId:a.dataForm.wareId,status:a.dataForm.status})}).then(function(t){var e=t.data;e&&0===e.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(e.msg)})})}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("el-dialog",{attrs:{title:a.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:a.visible},on:{"update:visible":function(t){a.visible=t}}},[e("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&a._k(t.keyCode,"enter",13,t.key,"Enter"))return null;a.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"采购商品id",prop:"skuId"}},[e("el-input",{attrs:{placeholder:"采购商品id"},model:{value:a.dataForm.skuId,callback:function(t){a.$set(a.dataForm,"skuId",t)},expression:"dataForm.skuId"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"采购数量",prop:"skuNum"}},[e("el-input",{attrs:{placeholder:"采购数量"},model:{value:a.dataForm.skuNum,callback:function(t){a.$set(a.dataForm,"skuNum",t)},expression:"dataForm.skuNum"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"仓库",prop:"wareId"}},[e("el-select",{attrs:{placeholder:"请选择仓库",clearable:""},model:{value:a.dataForm.wareId,callback:function(t){a.$set(a.dataForm,"wareId",t)},expression:"dataForm.wareId"}},a._l(a.wareList,function(a){return e("el-option",{key:a.id,attrs:{label:a.name,value:a.id}})}))],1)],1),a._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(t){a.visible=!1}}},[a._v("取消")]),a._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},i=e("VU/8")(r,s,!1,null,null,null);t.default=i.exports}});