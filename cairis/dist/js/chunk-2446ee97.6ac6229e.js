(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2446ee97","chunk-61f8c9da","chunk-41bf07d3","chunk-5d9ab32a","chunk-2d2102e7"],{"02f4":function(e,t,i){var s=i("4588"),n=i("be13");e.exports=function(e){return function(t,i){var o,a,r=String(n(t)),l=s(i),c=r.length;return l<0||l>=c?e?"":void 0:(o=r.charCodeAt(l),o<55296||o>56319||l+1===c||(a=r.charCodeAt(l+1))<56320||a>57343?e?r.charAt(l):o:e?r.slice(l,l+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,i){"use strict";var s=i("02f4")(!0);e.exports=function(e,t,i){return t+(i?s(e,t).length:1)}},"0bfb":function(e,t,i){"use strict";var s=i("cb7c");e.exports=function(){var e=s(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1864:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},n=[],o=(i("6762"),i("2fdb"),i("cadf"),i("551c"),i("f751"),i("097d"),i("bc3a")),a=i.n(o),r=i("61da"),l={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var i=this;a.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){i.items=t.data,i.items=i.items.length>0?i.items.filter(function(e){if(!i.existing.includes(e))return e}):[],1==i.items.length&&i.$emit("dimension-select-change",i.items[0]),i.includeall&&("dfd_filter"==i.dimension?i.items.unshift("None"):"persona_characteristic"==i.dimension?i.items.unshift("All"):i.items.unshift("all")),e.selected=e.initial}).catch(function(e){r["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=l,u=i("2877"),h=Object(u["a"])(c,s,n,!1,null,null,null);t["default"]=h.exports},"18e9":function(e,t,i){"use strict";t["a"]={computed:{environmentNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.map(function(e){return e.theEnvironmentName}):[]},environmentName:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName:""}},methods:{addEnvironmentProperty:function(e){this.objt.theEnvironmentProperties.push(e),this.envPropIndex=this.objt.theEnvironmentProperties.length-1},deleteEnvironment:function(e){this.objt.theEnvironmentProperties=this.objt.theEnvironmentProperties.filter(function(t){return t.theEnvironmentName!=e})},addEnvironment:function(e){e.preventDefault(),this.$refs.environmentDialog.show()}}}},"1e3b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"dimensionDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[i("b-card",[""==e.environment?i("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":e.dimensionSelected}}):e._e(),""!=e.environment?i("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,environment:this.environment,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":e.dimensionSelected}}):e._e()],1)],1)},n=[],o=i("1864"),a={name:"dimension-modal",props:{dimension:String,existing:{type:Array,default:function(){return[]}},initial:{type:String,default:function(){return""}},environment:{type:String,default:function(){return""}},dimensionUrl:{type:String,default:function(){return""}},label:{type:String,default:function(){return""}}},data:function(){return{selected:""}},components:{DimensionSelect:o["default"]},computed:{dialogTitle:function(){return"Select "+(this.label.length>0?this.label:void 0!=this.dimension?this.dimension:"Object")}},methods:{show:function(){this.$refs.dimensionDialog.show()},dimensionSelected:function(e){this.selected=e},onOk:function(e){0==this.selected.length?(e.preventDefault(),alert("Please select a value")):(this.$emit("dimension-modal-update",this.selected),this.$refs.dimensionDialog.hide())}}},r=a,l=i("2877"),c=Object(l["a"])(r,s,n,!1,null,null,null);t["default"]=c.exports},2084:function(e,t,i){"use strict";var s=i("f499"),n=i.n(s);i("7f7f");t["a"]={data:function(){return{propTableFields:{propactions:{label:""},name:{label:"Property"},value:{label:"Value"},rationale:{label:"Rationale"}},selectedProperty:{}}},computed:{notNone:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.filter(function(e){return"None"!=e.value}):[]}},methods:{defaultProperties:function(){return[{name:"Confidentiality",value:"None",rationale:"None"},{name:"Integrity",value:"None",rationale:"None"},{name:"Availability",value:"None",rationale:"None"},{name:"Accountability",value:"None",rationale:"None"},{name:"Anonymity",value:"None",rationale:"None"},{name:"Pseudonymity",value:"None",rationale:"None"},{name:"Unlinkability",value:"None",rationale:"None"},{name:"Unobservability",value:"None",rationale:"None"}]},updateProperty:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.map(function(t){t.name==e.name&&(t.value=e.value,t.rationale=e.rationale)})},clearProperty:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.map(function(t){t.name==e.name&&(t.value="None",t.rationale="None")})},viewProperty:function(e){this.selectedProperty=JSON.parse(n()(e)),this.selectedProperty["update"]=!0,this.$refs.propertyDialog.show()},addProperty:function(){this.selectedProperty={name:"",value:"",rationale:""},this.selectedProperty["update"]=!1,this.selectedProperty["propertyNames"]=this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.filter(function(e){return"None"==e.value}).map(function(e){return e.name}),this.$refs.propertyDialog.show()}}}},"214f":function(e,t,i){"use strict";i("b0c5");var s=i("2aba"),n=i("32e9"),o=i("79e5"),a=i("be13"),r=i("2b4c"),l=i("520a"),c=r("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),h=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();e.exports=function(e,t,i){var d=r(e),p=!o(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),f=p?!o(function(){var t=!1,i=/a/;return i.exec=function(){return t=!0,null},"split"===e&&(i.constructor={},i.constructor[c]=function(){return i}),i[d](""),!t}):void 0;if(!p||!f||"replace"===e&&!u||"split"===e&&!h){var m=/./[d],b=i(a,d,""[e],function(e,t,i,s,n){return t.exec===l?p&&!n?{done:!0,value:m.call(t,i,s)}:{done:!0,value:e.call(i,t,s)}:{done:!1}}),v=b[0],g=b[1];s(String.prototype,e,v),n(RegExp.prototype,d,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"28a5":function(e,t,i){"use strict";var s=i("aae3"),n=i("cb7c"),o=i("ebd6"),a=i("0390"),r=i("9def"),l=i("5f1b"),c=i("520a"),u=Math.min,h=[].push,d="split",p="length",f="lastIndex",m=!!function(){try{return new RegExp("x","y")}catch(e){}}();i("214f")("split",2,function(e,t,i,b){var v;return v="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[p]||2!="ab"[d](/(?:ab)*/)[p]||4!="."[d](/(.?)(.?)/)[p]||"."[d](/()()/)[p]>1||""[d](/.?/)[p]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!s(e))return i.call(n,e,t);var o,a,r,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?4294967295:t>>>0,b=new RegExp(e.source,u+"g");while(o=c.call(b,n)){if(a=b[f],a>d&&(l.push(n.slice(d,o.index)),o[p]>1&&o.index<n[p]&&h.apply(l,o.slice(1)),r=o[0][p],d=a,l[p]>=m))break;b[f]===o.index&&b[f]++}return d===n[p]?!r&&b.test("")||l.push(""):l.push(n.slice(d)),l[p]>m?l.slice(0,m):l}:"0"[d](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)}:i,[function(i,s){var n=e(this),o=void 0==i?void 0:i[t];return void 0!==o?o.call(i,n,s):v.call(String(n),i,s)},function(e,t){var s=b(v,e,this,t,v!==i);if(s.done)return s.value;var c=n(e),h=String(this),d=o(c,RegExp),p=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(m?"y":"g"),g=new d(m?c:"^(?:"+c.source+")",f),y=void 0===t?4294967295:t>>>0;if(0===y)return[];if(0===h.length)return null===l(g,h)?[h]:[];var x=0,P=0,A=[];while(P<h.length){g.lastIndex=m?P:0;var I,T=l(g,m?h:h.slice(P));if(null===T||(I=u(r(g.lastIndex+(m?0:P)),h.length))===x)P=a(h,P,p);else{if(A.push(h.slice(x,P)),A.length===y)return A;for(var j=1;j<=T.length-1;j++)if(A.push(T[j]),A.length===y)return A;P=x=I}}return A.push(h.slice(x)),A}]})},"2fdb":function(e,t,i){"use strict";var s=i("5ca1"),n=i("d2c8"),o="includes";s(s.P+s.F*i("5147")(o),"String",{includes:function(e){return!!~n(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(e,t,i){"use strict";var s=i("bc3a"),n=i.n(s),o=i("61da");t["a"]={methods:{commitObject:function(e,t,i,s,a){var r=this;"undefined"==typeof s&&(s={post:{},put:{}}),"Update"==this.commitLabel?n.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),void 0!=a?r.$router.push({name:i,params:{dimension:a}}):r.$router.push({name:i})}).catch(function(e){o["a"].$emit("operation-failure",e)}):n.a.post(t,{session_id:this.$store.state.session,object:this.objt},{params:s["post"]}).then(function(e){o["a"].$emit("operation-success",e.data.message),void 0!=a?r.$router.push({name:i,params:{dimension:a}}):r.$router.push({name:i})}).catch(function(e){o["a"].$emit("operation-failure",e)})}},postImage:function(e){var t="/api/upload/image?session_id="+this.$store.state.session;n.a.post(t,e).then(function(e){o["a"].$emit("operation-success",e.data.message)}).catch(function(e){o["a"].$emit("operation-failure",e)})}}},5147:function(e,t,i){var s=i("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[s]=!1,!"/./"[e](t)}catch(n){}}return!0}},"520a":function(e,t,i){"use strict";var s=i("0bfb"),n=RegExp.prototype.exec,o=String.prototype.replace,a=n,r="lastIndex",l=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[r]||0!==t[r]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(a=function(e){var t,i,a,u,h=this;return c&&(i=new RegExp("^"+h.source+"$(?!\\s)",s.call(h))),l&&(t=h[r]),a=n.call(h,e),l&&a&&(h[r]=h.global?a.index+a[0].length:t),c&&a&&a.length>1&&o.call(a[0],i,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),e.exports=a},"584a":function(e,t){var i=e.exports={version:"2.6.1"};"number"==typeof __e&&(__e=i)},"5f1b":function(e,t,i){"use strict";var s=i("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var o=i.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==s(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},6762:function(e,t,i){"use strict";var s=i("5ca1"),n=i("c366")(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"7f7f":function(e,t,i){var s=i("86cc").f,n=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in n||i("9e1e")&&s(n,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"94cc":function(e,t,i){"use strict";var s=i("bc3a"),n=i.n(s),o=i("61da");t["a"]={methods:{commitObject:function(e,t,i,s){var a=this;"Update"==this.commitLabel?n.a.put(e,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),void 0!=s?a.$router.push({name:i,params:{dimension:s}}):a.$router.push({name:i})}).catch(function(e){o["a"].$emit("operation-failure",e)}):n.a.post(t,{session_id:this.$store.state.session,object:this.objt}).then(function(e){o["a"].$emit("operation-success",e.data.message),void 0!=s?a.$router.push({name:i,params:{dimension:s}}):a.$router.push({name:i})}).catch(function(e){o["a"].$emit("operation-failure",e)})}}}},a21f:function(e,t,i){var s=i("584a"),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},a965:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"assetview"},[i("b-breadcrumb",{attrs:{items:e.bcItems}}),i("asset",{attrs:{object:this.objt,label:this.commitLabel},on:{"asset-commit":e.commitAsset}})],1)},n=[],o=i("3f53"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"asset"},[i("dimension-modal",{ref:"environmentDialog",attrs:{dimension:"environment",existing:e.environmentNames},on:{"dimension-modal-update":e.addAssetEnvironmentProperty}}),i("association-modal",{ref:"assetAssociationDialog",attrs:{assetAssociation:e.selectedAssociation},on:{"association-update":e.updateAssetAssociation}}),i("property-modal",{ref:"propertyDialog",attrs:{securityProperty:e.selectedProperty},on:{"property-update":e.updateProperty}}),i("asset-interface-modal",{ref:"assetInterfaceDialog",attrs:{assetInterface:e.selectedInterface},on:{"interface-update":e.updateAssetInterface}}),e.errors.length?i("p",[i("b",[e._v("Please correct the following error(s):")]),i("ul",e._l(e.errors,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),i("b-form",{on:{"property-update":e.updateProperty}},[i("b-card",{attrs:{"no-body":""}},[i("b-tabs",{attrs:{card:""}},[i("b-tab",{attrs:{title:"Summary",active:""}},[i("b-card",{attrs:{"bg-variant":"light"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-form-group",{attrs:{label:"Asset","label-class":"font-weight-bold text-md-left","label-for":"theAssetInput"}},[i("b-form-input",{attrs:{id:"theAssetInput",type:"text",required:""},model:{value:e.objt.theName,callback:function(t){e.$set(e.objt,"theName",t)},expression:"objt.theName"}})],1)],1),i("b-col",{attrs:{md:"2"}},[i("b-form-group",{attrs:{label:"Shortcode","label-class":"font-weight-bold text-md-left","label-for":"theShortCodeInput"}},[i("b-form-input",{attrs:{id:"theShortCodeInput",type:"text",required:""},model:{value:e.objt.theShortCode,callback:function(t){e.$set(e.objt,"theShortCode",t)},expression:"objt.theShortCode"}})],1)],1),i("b-col",{attrs:{md:"4"}},[i("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-md-left","label-for":"theTypeInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTypeInput",options:e.assetTypes,required:""},model:{value:e.objt.theType,callback:function(t){e.$set(e.objt,"theType",t)},expression:"objt.theType"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-md-left","label-for":"theDescriptionInput"}},[i("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:4,"max-rows":4,required:""},model:{value:e.objt.theDescription,callback:function(t){e.$set(e.objt,"theDescription",t)},expression:"objt.theDescription"}})],1)],1),i("b-col",{attrs:{md:"6"}},[i("b-form-group",{attrs:{label:"Significance","label-class":"font-weight-bold text-md-left","label-for":"theSignificanceInput"}},[i("b-form-textarea",{attrs:{id:"theSignificance",type:"text",rows:4,"max-rows":4,required:""},model:{value:e.objt.theSignificance,callback:function(t){e.$set(e.objt,"theSignificance",t)},expression:"objt.theSignificance"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Tags","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theTagsInput"}},[i("b-form-input",{attrs:{id:"theTagsInput",type:"text"},model:{value:e.objt.theTags,callback:function(t){e.$set(e.objt,"theTags",t)},expression:"objt.theTags"}})],1)],1)],1)],1)],1),i("b-tab",{attrs:{title:"Criticality"}},[i("b-card",{attrs:{"bg-variant":"light"}},[i("b-container",[i("b-row",[i("b-col",{attrs:{sm:"2"}},[i("b-form-checkbox",{model:{value:e.objt.isCritical,callback:function(t){e.$set(e.objt,"isCritical",t)},expression:"objt.isCritical"}},[e._v("Critical Asset")])],1)],1),i("b-row",[i("b-col",[e.objt.isCritical?i("b-form-textarea",{attrs:{type:"text",rows:2,"max-rows":4},model:{value:e.objt.theCriticalRationale,callback:function(t){e.$set(e.objt,"theCriticalRationale",t)},expression:"objt.theCriticalRationale"}}):e._e()],1)],1)],1)],1)],1),i("b-tab",{attrs:{title:"Interfaces"}},[i("b-card",{attrs:{"bg-variant":"light"}},[i("b-table",{attrs:{striped:"",small:"",hover:"",items:e.objt.theInterfaces,fields:e.interfaceTableFields},on:{"row-clicked":e.viewInterface},scopedSlots:e._u([{key:"HEAD_intactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(i){return i.stopPropagation(),e.addInterface(t)}}})]}},{key:"intactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(i){return i.stopPropagation(),e.deleteInterface(t.item)}}})]}}])})],1)],1)],1),i("b-container",{attrs:{fluid:""}},[i("b-card",{staticClass:"text-left",attrs:{header:"Environments","no-body":""}},[i("template",{slot:"header"},[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addEnvironment(t)}}}),e._v(" Environment\n            ")],1),i("b-row",[i("b-col",{attrs:{sm:"12"}},[i("b-tabs",{attrs:{pills:""},model:{value:e.envPropIndex,callback:function(t){e.envPropIndex=t},expression:"envPropIndex"}},e._l(this.objt.theEnvironmentProperties,function(t){return i("b-tab",{key:t.theEnvironmentName,attrs:{title:t.theName}},[i("template",{slot:"title"},[i("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(i){return e.deleteEnvironment(t.theEnvironmentName)}}}),e._v("  "+e._s(t.theEnvironmentName)+"\n                    ")],1)],2)}),1)],1)],1),i("b-row",{directives:[{name:"show",rawName:"v-show",value:this.objt.theEnvironmentProperties.length,expression:"this.objt.theEnvironmentProperties.length"}]},[i("b-col",{attrs:{sm:"12"}},[i("b-tabs",[i("b-tab",{attrs:{title:"Definition",active:""}},[i("b-table",{attrs:{striped:"",small:"",hover:"",items:e.notNone,fields:e.propTableFields},on:{"row-clicked":e.viewProperty},scopedSlots:e._u([{key:"HEAD_propactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addProperty(t)}}})]}},{key:"propactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(i){return i.stopPropagation(),e.clearProperty(t.item)}}})]}}])})],1),i("b-tab",{attrs:{title:"Associations"}},[i("b-table",{attrs:{striped:"",small:"",hover:"",items:e.assetAssociations,fields:e.assocTableFields},on:{"row-clicked":e.viewAssetAssociation},scopedSlots:e._u([{key:"HEAD_assocactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addAssetAssociation(t)}}})]}},{key:"assocactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(i){return i.stopPropagation(),e.deleteAssetAssociation(t.index)}}})]}}])})],1)],1)],1)],1)],2)],1)],1),i("b-container",{attrs:{fluid:""}},[i("b-form-row",[i("b-col",{attrs:{md:"4","offset-md":"5"}},[i("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.onCommit}},[e._v(e._s(e.commitLabel))]),i("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:e.onCancel}},[e._v("Cancel")])],1)],1)],1)],1)],1)},r=[],l=i("f499"),c=i.n(l),u=(i("28a5"),i("7f7f"),i("18e9")),h=i("94cc"),d=i("2084"),p=i("b795"),f=i("1e3b"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"associationDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[e.errors.length?i("p",[i("b",[e._v("Please correct the following error(s):")]),i("ul",e._l(e.errors,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),i("b-card",[i("b-form-group",{attrs:{label:"Asset","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theHeadAssetInput"}},[i("b-form-input",{attrs:{readonly:"",id:"theHeadAssetInput"},model:{value:e.assetAssociation.asset,callback:function(t){e.$set(e.assetAssociation,"asset",t)},expression:"assetAssociation.asset"}})],1),i("b-form-group",{attrs:{label:"Navigation","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theHeadNavInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadNavInput",options:e.navValues,required:""},model:{value:e.association.association.theHeadNav,callback:function(t){e.$set(e.association.association,"theHeadNav",t)},expression:"association.association.theHeadNav"}})],1),i("b-form-group",{attrs:{label:"Adornment","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theHeadAdornmentInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadAdornmentInput",options:e.typeValues,required:""},model:{value:e.association.association.theHeadType,callback:function(t){e.$set(e.association.association,"theHeadType",t)},expression:"association.association.theHeadType"}})],1),i("b-form-group",{attrs:{label:"nry","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theHeadNryInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadNryInput",options:e.nryValues,required:""},model:{value:e.association.association.theHeadMultiplicity,callback:function(t){e.$set(e.association.association,"theHeadMultiplicity",t)},expression:"association.association.theHeadMultiplicity"}})],1),i("b-form-group",{attrs:{label:"Role","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theHeadRoleInput"}},[i("b-form-input",{attrs:{id:"theHeadRoleInput"},model:{value:e.association.association.theHeadRole,callback:function(t){e.$set(e.association.association,"theHeadRole",t)},expression:"association.association.theHeadRole"}})],1),i("b-form-group",{attrs:{label:"Role","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theTailRoleInput"}},[i("b-form-input",{attrs:{id:"theTailRoleInput"},model:{value:e.association.association.theTailRole,callback:function(t){e.$set(e.association.association,"theTailRole",t)},expression:"association.association.theTailRole"}})],1),i("b-form-group",{attrs:{label:"nry","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theTailNryInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailNryInput",options:e.nryValues,required:""},model:{value:e.association.association.theTailMultiplicity,callback:function(t){e.$set(e.association.association,"theTailMultiplicity",t)},expression:"association.association.theTailMultiplicity"}})],1),i("b-form-group",{attrs:{label:"Adornment","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theTailAdornmentInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailAdornmentInput",options:e.typeValues,required:""},model:{value:e.association.association.theTailType,callback:function(t){e.$set(e.association.association,"theTailType",t)},expression:"association.association.theTailType"}})],1),i("b-form-group",{attrs:{label:"Navigation","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theTailNavInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailNavInput",options:e.navValues,required:""},model:{value:e.association.association.theTailNav,callback:function(t){e.$set(e.association.association,"theTailNav",t)},expression:"association.association.theTailNav"}})],1),i("b-form-group",{attrs:{label:"Tail","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theTailAssetInput"}},[i("dimension-select",{attrs:{id:"theTailAssetInput",dimension:"asset",environment:this.assetAssociation.environment,existing:[this.assetAssociation.asset],initial:this.assetAssociation.initial},on:{"dimension-select-change":e.tailAssetSelected}})],1)],1)],1)},b=[],v=i("1864"),g={name:"association-modal",props:{assetAssociation:Object},data:function(){return{association:this.assetAssociation,errors:[],navValues:["0","1"],typeValues:["Inheritance","Association","Aggregation","Composition","Dependency"],nryValues:["1","*","1..*"]}},components:{DimensionSelect:v["default"]},computed:{dialogTitle:function(){return(this.assetAssociation.update?"Update":"Add")+" Asset Association"}},methods:{checkForm:function(){return this.errors=[],0==this.association.association.theHeadType.length&&this.errors.push("Head Adornment is required"),0==this.association.association.theHeadMultiplicity.length&&this.errors.push("Head Multiplicity is required"),0==this.association.association.theTailMultiplicity.length&&this.errors.push("Tail Multiplicity is required"),0==this.association.association.theTailType.length&&this.errors.push("Tail Adornment is required"),0==this.association.association.theTailName.length&&this.errors.push("Tail Asset is required"),!this.errors.length},show:function(){this.$refs.associationDialog.show()},tailAssetSelected:function(e){this.association.association.theTailName=e},onOk:function(e){this.checkForm()?(this.$emit("association-update",{association:this.association.association,update:this.assetAssociation.update,index:this.assetAssociation.update?this.association.index:-1}),this.$refs.associationDialog.hide()):e.preventDefault()}}},y=g,x=i("2877"),P=Object(x["a"])(y,m,b,!1,null,null,null),A=P.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"interfaceDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[e.errors.length?i("p",[i("b",[e._v("Please correct the following error(s):")]),i("ul",e._l(e.errors,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),i("b-card",[i("b-form-group",{attrs:{label:"Interface","label-class":"text-sm-left","label-cols":"3","label-for":"theInterface"}},[i("dimension-select",{attrs:{id:"theInterface",dimension:"interface",initial:this.assetinterface.assetinterface.theInterfaceName,required:""},on:{"dimension-select-change":e.interfaceSelected}})],1),i("b-form-group",{attrs:{label:"Type","label-class":"text-sm-left","label-cols":"3","label-for":"theType"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theType",options:e.typeValues,required:""},model:{value:e.assetinterface.assetinterface.theInterfaceType,callback:function(t){e.$set(e.assetinterface.assetinterface,"theInterfaceType",t)},expression:"assetinterface.assetinterface.theInterfaceType"}})],1),i("b-form-group",{attrs:{label:"Access Right","label-class":"text-sm-left","label-cols":"3","label-for":"theAccessRight"}},[i("dimension-select",{attrs:{id:"theAccessRight",dimension:"access_right",initial:this.assetinterface.assetinterface.theAccessRight,required:""},on:{"dimension-select-change":e.accessRightSelected}})],1),i("b-form-group",{attrs:{label:"Privilege","label-class":"text-sm-left","label-cols":"3","label-for":"thePrivilege"}},[i("dimension-select",{attrs:{id:"thePrivilege",dimension:"privilege",initial:this.assetinterface.assetinterface.thePrivilege,required:""},on:{"dimension-select-change":e.privilegeSelected}})],1)],1)],1)},T=[],j={name:"asset-interface-modal",props:{assetInterface:Object},data:function(){return{assetinterface:this.assetInterface,errors:[],typeValues:["provided","required"]}},components:{DimensionSelect:v["default"]},computed:{dialogTitle:function(){return(this.assetInterface.update?"Update":"Add")+" Asset Interface"}},methods:{checkForm:function(){return this.errors=[],0==this.assetinterface.assetinterface.theInterfaceName.length&&this.errors.push("Interface name is required"),0==this.assetinterface.assetinterface.theInterfaceType.length&&this.errors.push("Interface type is required"),0==this.assetinterface.assetinterface.theAccessRight.length&&this.errors.push("Access right is required"),0==this.assetinterface.assetinterface.thePrivilege.length&&this.errors.push("Privilege is required"),!this.errors.length},show:function(){this.$refs.interfaceDialog.show()},interfaceSelected:function(e){this.assetinterface.assetinterface.theInterfaceName=e},accessRightSelected:function(e){this.assetinterface.assetinterface.theAccessRight=e},privilegeSelected:function(e){this.assetinterface.assetinterface.thePrivilege=e},onOk:function(e){this.checkForm()?(this.$emit("interface-update",{interface:this.assetinterface.assetinterface,update:this.assetInterface.update,index:this.assetInterface.update?this.assetinterface.index:-1}),this.$refs.interfaceDialog.hide()):e.preventDefault()}}},N=j,w=Object(x["a"])(N,I,T,!1,null,null,null),$=w.exports,k={props:{object:Object,label:String},watch:{object:"setObject"},mixins:[u["a"],h["a"],d["a"]],computed:{assetAssociations:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theAssociations:[]},unusedProperties:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theProperties.filter(function(e){return"None"==e.value}).map(function(e){return e.name}):[]}},components:{PropertyModal:p["default"],DimensionModal:f["default"],AssociationModal:A,AssetInterfaceModal:$},data:function(){return{objt:this.object,commitLabel:this.label,envPropIndex:0,errors:[],selectedAssociation:{asset:"",environment:"",update:!1,initial:"",association:{theHeadNav:0,theHeadType:"Association",theHeadMultiplicity:"*",theHeadRole:"",theTailRole:"",theTailMultiplicity:"*",theTypeType:"Association",theTailNav:0,theTailName:""}},selectedInterface:{update:!1,assetinterface:{theInterfaceName:"",theInterfaceType:"",theAccessRight:"",thePrivilege:""}},assetTypes:["Hardware","Information","People","Systems","Systems - General","System of Systems"],envFields:{envactions:{label:""},theName:{label:"Environment"}},interfaceTableFields:{intactions:{label:""},theInterfaceName:{label:"Interface"},theInterfaceType:{label:"Type"},theAccessRight:{label:"Access Right"},thePrivilege:{label:"Privilege"}},assocTableFields:[{key:"assocactions",label:""},{key:"theHeadNav",label:"Nav"},{key:"theHeadType",label:"Type"},{key:"theHeadMultiplicity",label:"Nry"},{key:"theHeadRole",label:"Role"},{key:"theTailRole",label:"Tail Role"},{key:"theTailMultiplicity",label:"Tail Nry"},{key:"theTailNav",label:"Tail Nav"},{key:"theTailName",label:"Tail Asset"}]}},methods:{checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Asset name is required"),0==this.objt.theShortCode.length&&this.errors.push("Short code is required"),0==this.objt.theType.length&&this.errors.push("Asset type is required"),0==this.objt.theDescription.length&&this.errors.push("Description is required"),0==this.objt.theSignificance.length&&this.errors.push("Significance is required"),0==this.objt.theEnvironmentProperties.length&&this.errors.push("No environment properties have been defined"),!this.errors.length},setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(e){e.preventDefault(),this.checkForm()&&(""!=this.objt.theTags&&(this.objt.theTags=this.objt.theTags.split(",").map(function(e){return e.trim()})),this.$emit("asset-commit",this.objt))},onCancel:function(e){e.preventDefault(),this.$router.push({name:"assets"})},addAssetAssociation:function(){this.selectedAssociation["asset"]=this.objt.theName,this.selectedAssociation["environment"]=this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName,this.selectedAssociation["association"]={theHeadNav:0,theHeadType:"Association",theHeadMultiplicity:"*",theHeadRole:"",theTailRole:"",theTailMultiplicity:"*",theTailNav:0,theTailType:"Association",theTailName:""},this.selectedAssociation["update"]=!1,this.$refs.assetAssociationDialog.show()},deleteAssetAssociation:function(e){this.objt.theEnvironmentProperties[this.envPropIndex].theAssociations.splice(e,1)},addInterface:function(e){this.selectedInterface["assetinterface"]={theInterfaceName:"",theInterfaceType:"",theAccessRight:"",thePrivilege:""},this.selectedInterface["update"]=!1,this.$refs.assetInterfaceDialog.show(),console.log(e)},deleteInterface:function(e){this.objt.theInterfaces.splice(e,1)},viewInterface:function(e,t){this.selectedInterface["index"]=t,this.selectedInterface["assetinterface"]=JSON.parse(c()(e)),this.selectedInterface["update"]=!0,this.$refs.assetInterfaceDialog.show()},updateAssetInterface:function(e){e.update?this.$set(this.objt.theInterfaces,e.index,e.assetinterface):this.objt.theInterfaces.push(e.assetinterface)},addEnvironment:function(e){e.preventDefault(),this.$refs.environmentDialog.show()},addAssetEnvironmentProperty:function(e){this.addEnvironmentProperty({theEnvironmentName:e,theAssociations:[],theProperties:this.defaultProperties()})},updateAssetAssociation:function(e){e.update?this.$set(this.objt.theEnvironmentProperties[this.envPropIndex].theAssociations,e.index,e.association):this.objt.theEnvironmentProperties[this.envPropIndex].theAssociations.push(e.association)},viewAssetAssociation:function(e,t){this.selectedAssociation["asset"]=this.objt.theName,this.selectedAssociation["index"]=t,this.selectedAssociation["environment"]=this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName,this.selectedAssociation["association"]=JSON.parse(c()(e)),this.selectedAssociation["update"]=!0,this.selectedAssociation["initial"]=this.selectedAssociation["association"].theTailName,this.$refs.assetAssociationDialog.show()}}},S=k,E=Object(x["a"])(S,a,r,!1,null,null,null),_=E.exports,R=i("bc3a"),D=i.n(R),C=i("4360"),H=i("61da"),q={props:{objectName:String},mixins:[o["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Assets",to:{name:"assets"}},{text:this.objt.theName,to:{name:"assetview"}}]}},components:{Asset:_},data:function(){return{objt:{theName:"",theTags:"",theShortCode:"",theType:"",theDescription:"",theSignificance:"",isCritical:0,theCriticalRationale:"",theInterfaces:[],theEnvironmentProperties:[]},commitLabel:"Create"}},beforeRouteEnter:function(e,t,i){if("New asset"==e.params.objectName)i();else{var s="/api/assets/name/"+e.params.objectName;D.a.get(s,{baseURL:C["a"].state.url,params:{session_id:C["a"].state.session}}).then(function(e){i(function(t){t.commitLabel="Update",t.objt=e.data,t.objt.theTags=e.data.theTags.join(", ")})}).catch(function(e){H["a"].$emit("operation-failure",e)})}},methods:{commitAsset:function(e){this.objt=e;var t=this.$store.state.url+"/api/assets/name/"+this.objectName+"?session_id="+this.$store.state.session,i=this.$store.state.url+"/api/assets";this.commitObject(t,i,"assets")}}},O=q,U=Object(x["a"])(O,s,n,!1,null,null,null);t["default"]=U.exports},aae3:function(e,t,i){var s=i("d3f4"),n=i("2d95"),o=i("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},b0c5:function(e,t,i){"use strict";var s=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},b795:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"propertyDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[i("b-card",[1==e.securityProperty.update?i("div",[i("b-form-group",{attrs:{label:"Property","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePropertyInput"}},[i("b-form-input",{attrs:{readonly:"",id:"thePropertyInput"},model:{value:e.securityProperty.name,callback:function(t){e.$set(e.securityProperty,"name",t)},expression:"securityProperty.name"}})],1)],1):e._e(),0==e.securityProperty.update?i("div",[i("b-form-group",{attrs:{label:"Property","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"thePropertyInput"}},[i("b-form-select",{attrs:{id:"theValueInput",options:e.securityProperty.propertyNames,required:""},model:{value:e.securityProperty.name,callback:function(t){e.$set(e.securityProperty,"name",t)},expression:"securityProperty.name"}})],1)],1):e._e(),i("b-form-group",{attrs:{label:"Value","label-class":"font-weight-bold text-sm-left","label-cols":"3","label-for":"theValueInput"}},[i("b-form-select",{attrs:{id:"theValueInput",options:e.propertyValues,required:""},model:{value:e.securityProperty.value,callback:function(t){e.$set(e.securityProperty,"value",t)},expression:"securityProperty.value"}})],1),e.valueNotNone?i("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-sm-left","label-for":"theRationaleInput"}},[i("b-form-textarea",{attrs:{id:"theRationaleInput",type:"text",rows:2,"max-rows":4,required:""},model:{value:e.securityProperty.rationale,callback:function(t){e.$set(e.securityProperty,"rationale",t)},expression:"securityProperty.rationale"}})],1):e._e()],1)],1)},n=[],o=(i("7f7f"),{name:"property-modal",props:{securityProperty:Object},computed:{valueNotNone:function(){return"None"!=this.securityProperty.value},dialogTitle:function(){return(this.securityProperty.update?"Update":"Add")+" Security Property"}},data:function(){return{propertyValues:["None","Low","Medium","High"],updateProperty:{name:"Undefined",value:"Undefined",rationale:"Undefined"}}},methods:{show:function(){this.$refs.propertyDialog.show()},onOk:function(e){this.securityProperty.rationale.length||"None"==this.securityProperty.name?(this.updateProperty.name=this.securityProperty.name,this.updateProperty.value=this.securityProperty.value,"None"==this.securityProperty.value?this.updateProperty.rationale="None":this.updateProperty.rationale=this.securityProperty.rationale,this.$emit("property-update",this.updateProperty),this.$refs.propertyDialog.hide()):(e.preventDefault(),alert("Please enter rationale"))}}}),a=o,r=i("2877"),l=Object(r["a"])(a,s,n,!1,null,null,null);t["default"]=l.exports},d2c8:function(e,t,i){var s=i("aae3"),n=i("be13");e.exports=function(e,t,i){if(s(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(e))}},f499:function(e,t,i){e.exports=i("a21f")}}]);
//# sourceMappingURL=chunk-2446ee97.6ac6229e.js.map