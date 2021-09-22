webpackJsonp([38,77],{S6qD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("b7HR").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/order/orderitem/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/order/orderitem/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("order:orderitem:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("order:orderitem:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderId","header-align":"center",align:"center",label:"order_id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderSn","header-align":"center",align:"center",label:"order_sn"}}),e._v(" "),a("el-table-column",{attrs:{prop:"spuId","header-align":"center",align:"center",label:"spu_id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"spuName","header-align":"center",align:"center",label:"spu_name"}}),e._v(" "),a("el-table-column",{attrs:{prop:"spuPic","header-align":"center",align:"center",label:"spu_pic"}}),e._v(" "),a("el-table-column",{attrs:{prop:"spuBrand","header-align":"center",align:"center",label:"品牌"}}),e._v(" "),a("el-table-column",{attrs:{prop:"categoryId","header-align":"center",align:"center",label:"商品分类id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"skuId","header-align":"center",align:"center",label:"商品sku编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"skuName","header-align":"center",align:"center",label:"商品sku名字"}}),e._v(" "),a("el-table-column",{attrs:{prop:"skuPic","header-align":"center",align:"center",label:"商品sku图片"}}),e._v(" "),a("el-table-column",{attrs:{prop:"skuPrice","header-align":"center",align:"center",label:"商品sku价格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"skuQuantity","header-align":"center",align:"center",label:"商品购买的数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"skuAttrsVals","header-align":"center",align:"center",label:"商品销售属性组合（JSON）"}}),e._v(" "),a("el-table-column",{attrs:{prop:"promotionAmount","header-align":"center",align:"center",label:"商品促销分解金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"couponAmount","header-align":"center",align:"center",label:"优惠券优惠分解金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"integrationAmount","header-align":"center",align:"center",label:"积分优惠分解金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"realAmount","header-align":"center",align:"center",label:"该商品经过优惠后的分解金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"giftIntegration","header-align":"center",align:"center",label:"赠送积分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"giftGrowth","header-align":"center",align:"center",label:"赠送成长值"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},n=a("VU/8")(r,o,!1,null,null,null);t.default=n.exports},b7HR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,orderId:"",orderSn:"",spuId:"",spuName:"",spuPic:"",spuBrand:"",categoryId:"",skuId:"",skuName:"",skuPic:"",skuPrice:"",skuQuantity:"",skuAttrsVals:"",promotionAmount:"",couponAmount:"",integrationAmount:"",realAmount:"",giftIntegration:"",giftGrowth:""},dataRule:{orderId:[{required:!0,message:"order_id不能为空",trigger:"blur"}],orderSn:[{required:!0,message:"order_sn不能为空",trigger:"blur"}],spuId:[{required:!0,message:"spu_id不能为空",trigger:"blur"}],spuName:[{required:!0,message:"spu_name不能为空",trigger:"blur"}],spuPic:[{required:!0,message:"spu_pic不能为空",trigger:"blur"}],spuBrand:[{required:!0,message:"品牌不能为空",trigger:"blur"}],categoryId:[{required:!0,message:"商品分类id不能为空",trigger:"blur"}],skuId:[{required:!0,message:"商品sku编号不能为空",trigger:"blur"}],skuName:[{required:!0,message:"商品sku名字不能为空",trigger:"blur"}],skuPic:[{required:!0,message:"商品sku图片不能为空",trigger:"blur"}],skuPrice:[{required:!0,message:"商品sku价格不能为空",trigger:"blur"}],skuQuantity:[{required:!0,message:"商品购买的数量不能为空",trigger:"blur"}],skuAttrsVals:[{required:!0,message:"商品销售属性组合（JSON）不能为空",trigger:"blur"}],promotionAmount:[{required:!0,message:"商品促销分解金额不能为空",trigger:"blur"}],couponAmount:[{required:!0,message:"优惠券优惠分解金额不能为空",trigger:"blur"}],integrationAmount:[{required:!0,message:"积分优惠分解金额不能为空",trigger:"blur"}],realAmount:[{required:!0,message:"该商品经过优惠后的分解金额不能为空",trigger:"blur"}],giftIntegration:[{required:!0,message:"赠送积分不能为空",trigger:"blur"}],giftGrowth:[{required:!0,message:"赠送成长值不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/order/orderitem/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.orderId=a.orderItem.orderId,t.dataForm.orderSn=a.orderItem.orderSn,t.dataForm.spuId=a.orderItem.spuId,t.dataForm.spuName=a.orderItem.spuName,t.dataForm.spuPic=a.orderItem.spuPic,t.dataForm.spuBrand=a.orderItem.spuBrand,t.dataForm.categoryId=a.orderItem.categoryId,t.dataForm.skuId=a.orderItem.skuId,t.dataForm.skuName=a.orderItem.skuName,t.dataForm.skuPic=a.orderItem.skuPic,t.dataForm.skuPrice=a.orderItem.skuPrice,t.dataForm.skuQuantity=a.orderItem.skuQuantity,t.dataForm.skuAttrsVals=a.orderItem.skuAttrsVals,t.dataForm.promotionAmount=a.orderItem.promotionAmount,t.dataForm.couponAmount=a.orderItem.couponAmount,t.dataForm.integrationAmount=a.orderItem.integrationAmount,t.dataForm.realAmount=a.orderItem.realAmount,t.dataForm.giftIntegration=a.orderItem.giftIntegration,t.dataForm.giftGrowth=a.orderItem.giftGrowth)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/order/orderitem/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,orderId:e.dataForm.orderId,orderSn:e.dataForm.orderSn,spuId:e.dataForm.spuId,spuName:e.dataForm.spuName,spuPic:e.dataForm.spuPic,spuBrand:e.dataForm.spuBrand,categoryId:e.dataForm.categoryId,skuId:e.dataForm.skuId,skuName:e.dataForm.skuName,skuPic:e.dataForm.skuPic,skuPrice:e.dataForm.skuPrice,skuQuantity:e.dataForm.skuQuantity,skuAttrsVals:e.dataForm.skuAttrsVals,promotionAmount:e.dataForm.promotionAmount,couponAmount:e.dataForm.couponAmount,integrationAmount:e.dataForm.integrationAmount,realAmount:e.dataForm.realAmount,giftIntegration:e.dataForm.giftIntegration,giftGrowth:e.dataForm.giftGrowth})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"order_id",prop:"orderId"}},[a("el-input",{attrs:{placeholder:"order_id"},model:{value:e.dataForm.orderId,callback:function(t){e.$set(e.dataForm,"orderId",t)},expression:"dataForm.orderId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"order_sn",prop:"orderSn"}},[a("el-input",{attrs:{placeholder:"order_sn"},model:{value:e.dataForm.orderSn,callback:function(t){e.$set(e.dataForm,"orderSn",t)},expression:"dataForm.orderSn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"spu_id",prop:"spuId"}},[a("el-input",{attrs:{placeholder:"spu_id"},model:{value:e.dataForm.spuId,callback:function(t){e.$set(e.dataForm,"spuId",t)},expression:"dataForm.spuId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"spu_name",prop:"spuName"}},[a("el-input",{attrs:{placeholder:"spu_name"},model:{value:e.dataForm.spuName,callback:function(t){e.$set(e.dataForm,"spuName",t)},expression:"dataForm.spuName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"spu_pic",prop:"spuPic"}},[a("el-input",{attrs:{placeholder:"spu_pic"},model:{value:e.dataForm.spuPic,callback:function(t){e.$set(e.dataForm,"spuPic",t)},expression:"dataForm.spuPic"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌",prop:"spuBrand"}},[a("el-input",{attrs:{placeholder:"品牌"},model:{value:e.dataForm.spuBrand,callback:function(t){e.$set(e.dataForm,"spuBrand",t)},expression:"dataForm.spuBrand"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品分类id",prop:"categoryId"}},[a("el-input",{attrs:{placeholder:"商品分类id"},model:{value:e.dataForm.categoryId,callback:function(t){e.$set(e.dataForm,"categoryId",t)},expression:"dataForm.categoryId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品sku编号",prop:"skuId"}},[a("el-input",{attrs:{placeholder:"商品sku编号"},model:{value:e.dataForm.skuId,callback:function(t){e.$set(e.dataForm,"skuId",t)},expression:"dataForm.skuId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品sku名字",prop:"skuName"}},[a("el-input",{attrs:{placeholder:"商品sku名字"},model:{value:e.dataForm.skuName,callback:function(t){e.$set(e.dataForm,"skuName",t)},expression:"dataForm.skuName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品sku图片",prop:"skuPic"}},[a("el-input",{attrs:{placeholder:"商品sku图片"},model:{value:e.dataForm.skuPic,callback:function(t){e.$set(e.dataForm,"skuPic",t)},expression:"dataForm.skuPic"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品sku价格",prop:"skuPrice"}},[a("el-input",{attrs:{placeholder:"商品sku价格"},model:{value:e.dataForm.skuPrice,callback:function(t){e.$set(e.dataForm,"skuPrice",t)},expression:"dataForm.skuPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品购买的数量",prop:"skuQuantity"}},[a("el-input",{attrs:{placeholder:"商品购买的数量"},model:{value:e.dataForm.skuQuantity,callback:function(t){e.$set(e.dataForm,"skuQuantity",t)},expression:"dataForm.skuQuantity"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品销售属性组合（JSON）",prop:"skuAttrsVals"}},[a("el-input",{attrs:{placeholder:"商品销售属性组合（JSON）"},model:{value:e.dataForm.skuAttrsVals,callback:function(t){e.$set(e.dataForm,"skuAttrsVals",t)},expression:"dataForm.skuAttrsVals"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品促销分解金额",prop:"promotionAmount"}},[a("el-input",{attrs:{placeholder:"商品促销分解金额"},model:{value:e.dataForm.promotionAmount,callback:function(t){e.$set(e.dataForm,"promotionAmount",t)},expression:"dataForm.promotionAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"优惠券优惠分解金额",prop:"couponAmount"}},[a("el-input",{attrs:{placeholder:"优惠券优惠分解金额"},model:{value:e.dataForm.couponAmount,callback:function(t){e.$set(e.dataForm,"couponAmount",t)},expression:"dataForm.couponAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"积分优惠分解金额",prop:"integrationAmount"}},[a("el-input",{attrs:{placeholder:"积分优惠分解金额"},model:{value:e.dataForm.integrationAmount,callback:function(t){e.$set(e.dataForm,"integrationAmount",t)},expression:"dataForm.integrationAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"该商品经过优惠后的分解金额",prop:"realAmount"}},[a("el-input",{attrs:{placeholder:"该商品经过优惠后的分解金额"},model:{value:e.dataForm.realAmount,callback:function(t){e.$set(e.dataForm,"realAmount",t)},expression:"dataForm.realAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"赠送积分",prop:"giftIntegration"}},[a("el-input",{attrs:{placeholder:"赠送积分"},model:{value:e.dataForm.giftIntegration,callback:function(t){e.$set(e.dataForm,"giftIntegration",t)},expression:"dataForm.giftIntegration"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"赠送成长值",prop:"giftGrowth"}},[a("el-input",{attrs:{placeholder:"赠送成长值"},model:{value:e.dataForm.giftGrowth,callback:function(t){e.$set(e.dataForm,"giftGrowth",t)},expression:"dataForm.giftGrowth"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},n=a("VU/8")(r,o,!1,null,null,null);t.default=n.exports}});