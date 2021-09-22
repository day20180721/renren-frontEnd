webpackJsonp([27,59],{"V+nC":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{visible:!1,wareList:[],dataForm:{id:0,purchaseId:"",skuId:"",skuNum:"",skuPrice:"",wareId:"",status:0},dataRule:{skuId:[{required:!0,message:"采购商品id不能为空",trigger:"blur"}],skuNum:[{required:!0,message:"采购数量不能为空",trigger:"blur"}],wareId:[{required:!0,message:"仓库id不能为空",trigger:"blur"}]}}},created:function(){this.getWares()},methods:{getWares:function(){var t=this;this.$http({url:this.$http.adornUrl("/ware/wareinfo/list"),method:"get",params:this.$http.adornParams({page:1,limit:500})}).then(function(e){var a=e.data;t.wareList=a.page.list})},init:function(t){var e=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/ware/purchasedetail/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm.purchaseId=a.purchaseDetail.purchaseId,e.dataForm.skuId=a.purchaseDetail.skuId,e.dataForm.skuNum=a.purchaseDetail.skuNum,e.dataForm.skuPrice=a.purchaseDetail.skuPrice,e.dataForm.wareId=a.purchaseDetail.wareId,e.dataForm.status=a.purchaseDetail.status)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/ware/purchasedetail/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,purchaseId:t.dataForm.purchaseId,skuId:t.dataForm.skuId,skuNum:t.dataForm.skuNum,skuPrice:t.dataForm.skuPrice,wareId:t.dataForm.wareId,status:t.dataForm.status})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"采购商品id",prop:"skuId"}},[a("el-input",{attrs:{placeholder:"采购商品id"},model:{value:t.dataForm.skuId,callback:function(e){t.$set(t.dataForm,"skuId",e)},expression:"dataForm.skuId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"采购数量",prop:"skuNum"}},[a("el-input",{attrs:{placeholder:"采购数量"},model:{value:t.dataForm.skuNum,callback:function(e){t.$set(t.dataForm,"skuNum",e)},expression:"dataForm.skuNum"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"仓库",prop:"wareId"}},[a("el-select",{attrs:{placeholder:"请选择仓库",clearable:""},model:{value:t.dataForm.wareId,callback:function(e){t.$set(t.dataForm,"wareId",e)},expression:"dataForm.wareId"}},t._l(t.wareList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},s=a("VU/8")(r,i,!1,null,null,null);e.default=s.exports},rhCD:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:"",status:"",wareId:""},wareList:[],dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,mergedialogVisible:!1,purchaseId:"",purchasetableData:[]}},components:{AddOrUpdate:a("V+nC").default},activated:function(){this.getDataList(),this.getWares()},methods:{mergeItem:function(){var t=this,e=this.dataListSelections.map(function(t){return t.id});this.purchaseId?this.$http({url:this.$http.adornUrl("/ware/purchase/merge"),method:"post",data:this.$http.adornData({purchaseId:this.purchaseId,items:e},!1)}).then(function(e){e.data;t.getDataList()}):this.$confirm("没有选择任何【采购单】，将自动创建新单进行合并。确认吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/ware/purchase/merge"),method:"post",data:t.$http.adornData({items:e},!1)}).then(function(e){e.data;t.getDataList()})}).catch(function(){}),this.mergedialogVisible=!1},getUnreceivedPurchase:function(){var t=this;this.$http({url:this.$http.adornUrl("/ware/purchase/unreceive/list"),method:"get",params:this.$http.adornParams({})}).then(function(e){var a=e.data;t.purchasetableData=a.page.list})},handleBatchCommand:function(t){"delete"==t&&this.deleteHandle(),"merge"==t&&(0!=this.dataListSelections.length?(this.getUnreceivedPurchase(),this.mergedialogVisible=!0):this.$alert("请先选择需要合并的需求","提示",{confirmButtonText:"确定",callback:function(t){}}))},getWares:function(){var t=this;this.$http({url:this.$http.adornUrl("/ware/wareinfo/list"),method:"get",params:this.$http.adornParams({page:1,limit:500})}).then(function(e){var a=e.data;t.wareList=a.page.list})},getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/ware/purchasedetail/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key,status:this.dataForm.status,wareId:this.dataForm.wareId})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/ware/purchasedetail/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getDataList()}}},[a("el-form-item",{attrs:{label:"仓库"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择仓库",clearable:""},model:{value:t.dataForm.wareId,callback:function(e){t.$set(t.dataForm,"wareId",e)},expression:"dataForm.wareId"}},t._l(t.wareList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择状态",clearable:""},model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}},[a("el-option",{attrs:{label:"新建",value:0}}),t._v(" "),a("el-option",{attrs:{label:"已分配",value:1}}),t._v(" "),a("el-option",{attrs:{label:"正在采购",value:2}}),t._v(" "),a("el-option",{attrs:{label:"已完成",value:3}}),t._v(" "),a("el-option",{attrs:{label:"采购失败",value:4}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"关键字"}},[a("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"参数名",clearable:""},model:{value:t.dataForm.key,callback:function(e){t.$set(t.dataForm,"key",e)},expression:"dataForm.key"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth("ware:purchasedetail:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),a("el-dropdown",{attrs:{disabled:t.dataListSelections.length<=0},on:{command:t.handleBatchCommand}},[a("el-button",{attrs:{type:"danger"}},[t._v("\n          批量操作\n          "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"delete"}},[t._v("批量删除")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"merge"}},[t._v("合并整单")])],1)],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"purchaseId","header-align":"center",align:"center",label:"采购单id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"skuId","header-align":"center",align:"center",label:"采购商品id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"skuNum","header-align":"center",align:"center",label:"采购数量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"skuPrice","header-align":"center",align:"center",label:"采购金额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"wareId","header-align":"center",align:"center",label:"仓库id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?a("el-tag",[t._v("新建")]):t._e(),t._v(" "),1==e.row.status?a("el-tag",{attrs:{type:"info"}},[t._v("已分配")]):t._e(),t._v(" "),2==e.row.status?a("el-tag",{attrs:{type:"wanring"}},[t._v("正在采购")]):t._e(),t._v(" "),3==e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("已完成")]):t._e(),t._v(" "),4==e.row.status?a("el-tag",{attrs:{type:"danger"}},[t._v("采购失败")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrUpdateHandle(e.row.id)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteHandle(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e(),t._v(" "),a("el-dialog",{attrs:{title:"合并到整单",visible:t.mergedialogVisible},on:{"update:visible":function(e){t.mergedialogVisible=e}}},[a("el-select",{attrs:{placeholder:"请选择",clearable:"",filterable:""},model:{value:t.purchaseId,callback:function(e){t.purchaseId=e},expression:"purchaseId"}},t._l(t.purchasetableData,function(e){return a("el-option",{key:e.id,attrs:{label:e.id,value:e.id}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.id))]),t._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.assigneeName)+"："+t._s(e.phone))])])})),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.mergedialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.mergeItem}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},s=a("VU/8")(r,i,!1,null,null,null);e.default=s.exports}});