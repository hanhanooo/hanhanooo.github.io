(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e16f012e"],{"5db0":function(t,a,i){},b288:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"home"},[i("van-nav-bar",{scopedSlots:t._u([{key:"left",fn:function(){return[i("div",{staticClass:"title"},[t._v(" "+t._s(t.timeTxt)+" "),t.isLogin?i("span",[t._v("，"+t._s(t.userData.nickName))]):t._e()])]},proxy:!0},{key:"right",fn:function(){return[i("van-icon",{staticClass:"search",attrs:{name:"search",size:"22"},on:{click:t.toSearch}})]},proxy:!0}])}),i("div",{staticClass:"home-box"},[i("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:5e3,duration:"1000","indicator-color":"#fff"}},t._l(t.bannerData,(function(a,s){return i("van-swipe-item",{key:s,on:{click:function(i){return t.viewProductDetail(a.pid)}}},[i("img",{staticClass:"auto-img",attrs:{src:a.bannerImg}})])})),1),i("div",{staticClass:"service-box"},[i("van-grid",{attrs:{border:!1,"column-num":2}},[i("van-grid-item",[i("div",{staticClass:"service-item left-part"},[i("div",{staticClass:"service-name"},[t._v("外送")]),i("div",{staticClass:"service-icon"},[i("van-icon",{attrs:{name:"logistics",size:"50"}})],1)])]),i("van-grid-item",[i("div",{staticClass:"service-item right-part"},[i("div",{staticClass:"service-name"},[t._v("自提")]),i("div",{staticClass:"service-icon"},[i("van-icon",{attrs:{name:"bag",size:"50"}})],1)])])],1)],1),i("div",{staticClass:"hot-product-box"},[i("div",{staticClass:"hot-product-title"},[t._v("为你推荐")]),i("van-grid",{attrs:{border:!1,"column-num":2}},t._l(t.hotProductData,(function(a,s){return i("van-grid-item",{key:s},[i("div",{staticClass:"product-box",on:{click:function(i){return t.viewProductDetail(a.pid)}}},[i("div",{staticClass:"product-img-box"},[i("img",{staticClass:"auto-img",attrs:{src:a.smallImg}})]),i("div",{staticClass:"product-info-box"},[i("div",{staticClass:"product-name"},[t._v(t._s(a.name))]),i("div",{staticClass:"product-enname"},[t._v(t._s(a.enname))]),i("div",{staticClass:"product-price"},[t._v("￥"+t._s(a.price))])])])])})),1)],1)],1)],1)},e=[],n=(i("5db0"),{name:"Home",data:function(){return{timeTxt:"",bannerData:[],hotProductData:[],userData:[],isLogin:!1}},created:function(){this.setTimeTxt(),this.getBannerData(),this.getHotProductData(),this.getuserData()},methods:{setTimeTxt:function(){var t=(new Date).getHours();this.timeTxt=t>=6&&t<12?"早上好":t>=12&&t<18?"下午好":t>=18&&t<24?"晚上好":"晚安"},getBannerData:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/banner",params:{appkey:this.appkey}}).then((function(a){300==a.data.code&&(t.$toast.clear(),t.bannerData=a.data.result)})).catch((function(a){t.$toast.clear()}))},getHotProductData:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/typeProducts",params:{appkey:this.appkey,key:"isHot",value:1}}).then((function(a){500==a.data.code&&(t.$toast.clear(),t.hotProductData=a.data.result)})).catch((function(a){t.$toast.clear()}))},viewProductDetail:function(t){this.$router.push({name:"Detail",query:{pid:t}})},getuserData:function(){var t=this,a=localStorage.getItem("CSTK");a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findMy",params:{appkey:this.appkey,tokenString:a}}).then((function(a){t.$toast.clear(),"A001"==a.data.code&&(t.userData=a.data.result[0],t.isLogin=!0)})).catch((function(a){t.$toast.clear()})))},toSearch:function(){this.$router.push({name:"Search"})}}}),r=n,o=i("2877"),c=Object(o["a"])(r,s,e,!1,null,"522beb2e",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-e16f012e.fe0e9f23.js.map