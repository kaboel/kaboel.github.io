(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e399463"],{"0da2":function(a,t,e){"use strict";var i=e("0f7e"),n=e.n(i);n.a},"0f7e":function(a,t,e){},"5df2":function(a,t,e){a.exports=e.p+"img/KS-logo-black-160.eeb35ebc.png"},"9c9b":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"vitae"}},[e("nav",{staticClass:"navbar is-spaced has-shadow"},[e("div",{staticClass:"navbar-brand has-text-centered"},[a._m(0),e("div",{staticClass:"navbar-burger burger",class:{"is-active":a.navToggle},attrs:{id:"navbarBurger","data-target":"navbarMenu"},on:{click:function(t){a.navToggle=!a.navToggle}}},[e("span"),e("span"),e("span")])]),e("div",{staticClass:"navbar-menu",class:{"is-active":a.navToggle},attrs:{id:"navbarMenu"}},[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item has-text-centered"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:"id"===a.$route.params.lang,expression:"$route.params.lang === 'id'"}],staticClass:"has-text-black f-control pl-md pr-md",attrs:{to:"/vitae/en"}},[e("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),e("span",{staticClass:"ml-sm"},[a._v("English Version")])],1),e("b-tooltip",{attrs:{label:"Still Unavailable",type:"is-warning",position:"is-bottom",animated:""}},[e("a",{directives:[{name:"show",rawName:"v-show",value:"en"===a.$route.params.lang,expression:"$route.params.lang === 'en'"}],staticClass:"has-text-black f-control pl-md pr-md disabled"},[e("font-awesome-icon",{attrs:{icon:["fas","arrow-left"]}}),e("span",{staticClass:"ml-sm"},[a._v("Versi Bahasa Indonesia")])],1)]),e("b-tooltip",{staticClass:"f-control",attrs:{label:"Close",type:"is-dark",position:"is-bottom",animated:""}},[e("router-link",{staticClass:"has-text-black pl-md pr-md",attrs:{to:"/"}},[e("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:["fas","times"]}})],1)],1)],1)])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-8-desktop is-offset-2-desktop p-lg has-text-centered"},[e("o",{staticClass:"subtitle",attrs:{id:"dataView"}},[a._v("\n                    Curriculum Vitae -\n                    "),e("strong",[a._v(a._s(a.$route.params.lang))])])],1)])]),e("div",{staticClass:"view"},[e("b-loading",{attrs:{"is-full-page":!1,active:a.isLoading},on:{"update:active":function(t){a.isLoading=t}}}),e("iframe",{attrs:{id:"file",src:a.getData(a.$route.params.lang)}})],1)])},n=[function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("a",{staticClass:"is-size-4 navbar-item",attrs:{href:"/"}},[i("img",{attrs:{src:e("5df2"),alt:"Faiq Allam | A Code Junkie, and Full Stack Web Developer"}})])}],l=e("be08"),s=e("b89f"),o={name:"vitae",components:{BLoading:s["a"],BTooltip:l["a"]},data:function(){return{navToggle:!1,isLoading:!1}},created:function(){var a=this.$route.params.lang;"id"!==a&&"en"!==a&&this.$router.push("/*"),this.counterLang("id")},mounted:function(){this.loadVitae()},updated:function(){this.counterLang("id"),this.loadVitae()},methods:{loadVitae:function(){var a=this.$loading.open(),t=document.getElementById("file");t.onload=function(t){t.preventDefault(),a.close()}},counterLang:function(a){this.$route.params.lang===a&&this.$snackbar.open({duration:5e4,message:"<b>".concat(a,"</b> version of this page is still unavailable."),type:"is-warning",position:"is-bottom-right",actionText:"Ok"})},getData:function(a){return"id"===a?null:"en"===a?"https://drive.google.com/file/d/1bsoBLmFDDO5Z3XTzz16WZlderPLPbhdr/preview":void 0}}},r=o,u=(e("0da2"),e("2877")),d=Object(u["a"])(r,i,n,!1,null,"9f87d41a",null);t["default"]=d.exports},be08:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{class:[a.newType,a.position,a.size,{"b-tooltip":a.active,"is-square":a.square,"is-animated":a.newAnimated,"is-always":a.always,"is-multiline":a.multilined,"is-dashed":a.dashed}],attrs:{"data-label":a.label}},[a._t("default")],2)},n=[];let l={defaultContainerElement:null,defaultIconPack:"mdi",defaultIconComponent:null,defaultDialogConfirmText:null,defaultDialogCancelText:null,defaultSnackbarDuration:3500,defaultSnackbarPosition:null,defaultToastDuration:2e3,defaultToastPosition:null,defaultNotificationDuration:2e3,defaultNotificationPosition:null,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on",defaultDateFormatter:null,defaultDateParser:null,defaultDateCreator:null,defaultDayNames:null,defaultMonthNames:null,defaultFirstDayOfWeek:null,defaultUnselectableDaysOfWeek:null,defaultTimeFormatter:null,defaultTimeParser:null,defaultModalCanCancel:null,defaultModalScroll:null,defaultDatepickerMobileNative:!0,defaultTimepickerMobileNative:!0,defaultNoticeQueue:!0,defaultInputHasCounter:!0,defaultUseHtml5Validation:!0,defaultDropdownMobileModal:!0};var s=l;var o={name:"BTooltip",props:{active:{type:Boolean,default:!0},type:String,label:String,position:{type:String,default:"is-top",validator:function(a){return["is-top","is-bottom","is-left","is-right"].indexOf(a)>-1}},always:Boolean,animated:Boolean,square:Boolean,dashed:Boolean,multilined:Boolean,size:{type:String,default:"is-medium"}},computed:{newType:function(){return this.type||s.defaultTooltipType},newAnimated:function(){return this.animated||s.defaultTooltipAnimated}}},r=o,u=e("2877"),d=Object(u["a"])(r,i,n,!1,null,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-0e399463.1e4ec72e.js.map