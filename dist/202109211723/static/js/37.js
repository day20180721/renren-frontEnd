webpackJsonp([37,76],{"1zVV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,orderId:"",operateMan:"",createTime:"",orderStatus:"",note:""},dataRule:{orderId:[{required:!0,message:"订单id不能为空",trigger:"blur"}],operateMan:[{required:!0,message:"操作人[用户；系统；后台管理员]不能为空",trigger:"blur"}],createTime:[{required:!0,message:"操作时间不能为空",trigger:"blur"}],orderStatus:[{required:!0,message:"订单状态【0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单】不能为空",trigger:"blur"}],note:[{required:!0,message:"备注不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/order/orderoperatehistory/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.orderId=a.orderOperateHistory.orderId,t.dataForm.operateMan=a.orderOperateHistory.operateMan,t.dataForm.createTime=a.orderOperateHistory.createTime,t.dataForm.orderStatus=a.orderOperateHistory.orderStatus,t.dataForm.note=a.orderOperateHistory.note)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/order/orderoperatehistory/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,orderId:e.dataForm.orderId,operateMan:e.dataForm.operateMan,createTime:e.dataForm.createTime,orderStatus:e.dataForm.orderStatus,note:e.dataForm.note})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"订单id",prop:"orderId"}},[a("el-input",{attrs:{placeholder:"订单id"},model:{value:e.dataForm.orderId,callback:function(t){e.$set(e.dataForm,"orderId",t)},expression:"dataForm.orderId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"操作人[用户；系统；后台管理员]",prop:"operateMan"}},[a("el-input",{attrs:{placeholder:"操作人[用户；系统；后台管理员]"},model:{value:e.dataForm.operateMan,callback:function(t){e.$set(e.dataForm,"operateMan",t)},expression:"dataForm.operateMan"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"操作时间",prop:"createTime"}},[a("el-input",{attrs:{placeholder:"操作时间"},model:{value:e.dataForm.createTime,callback:function(t){e.$set(e.dataForm,"createTime",t)},expression:"dataForm.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态【0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单】",prop:"orderStatus"}},[a("el-input",{attrs:{placeholder:"订单状态【0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单】"},model:{value:e.dataForm.orderStatus,callback:function(t){e.$set(e.dataForm,"orderStatus",t)},expression:"dataForm.orderStatus"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"note"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.note,callback:function(t){e.$set(e.dataForm,"note",t)},expression:"dataForm.note"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},n=a("VU/8")(r,o,!1,null,null,null);t.default=n.exports},FEg1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("1zVV").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/order/orderoperatehistory/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/order/orderoperatehistory/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("order:orderoperatehistory:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("order:orderoperatehistory:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderId","header-align":"center",align:"center",label:"订单id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"operateMan","header-align":"center",align:"center",label:"操作人[用户；系统；后台管理员]"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"操作时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderStatus","header-align":"center",align:"center",label:"订单状态【0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单】"}}),e._v(" "),a("el-table-column",{attrs:{prop:"note","header-align":"center",align:"center",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},n=a("VU/8")(r,o,!1,null,null,null);t.default=n.exports}});