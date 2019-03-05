(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03129788","chunk-5d9ab32a"],{1864:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:t.is_disabled,size:t.display_size,options:t.filteredItems},on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},o=[],s=(i("6762"),i("2fdb"),i("cadf"),i("551c"),i("f751"),i("097d"),i("bc3a")),r=i.n(s),a=i("61da"),c={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var t=this;return this.items.length>0?this.items.filter(function(e){if(!t.existing.includes(e))return e}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(t){this.$emit("dimension-select-change",t)},updateSelector:function(){var t=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var e=this.dimensionUrl;0==this.dimensionUrl.length&&(e="/api/dimensions/table/"+this.dimension,""!=this.environment&&(e+="/environment/"+this.environment));var i=this;r.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){i.items=e.data,i.items=i.items.length>0?i.items.filter(function(t){if(!i.existing.includes(t))return t}):[],1==i.items.length&&i.$emit("dimension-select-change",i.items[0]),i.includeall&&("dfd_filter"==i.dimension?i.items.unshift("None"):"persona_characteristic"==i.dimension?i.items.unshift("All"):i.items.unshift("all")),t.selected=t.initial}).catch(function(t){a["a"].$emit("operation-failure","Error updating selector:"+t)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},l=c,u=i("2877"),m=Object(u["a"])(l,n,o,!1,null,null,null);e["default"]=m.exports},"2fdb":function(t,e,i){"use strict";var n=i("5ca1"),o=i("d2c8"),s="includes";n(n.P+n.F*i("5147")(s),"String",{includes:function(t){return!!~o(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(t,e,i){"use strict";var n=i("bc3a"),o=i.n(n),s=i("61da");e["a"]={methods:{commitObject:function(t,e,i,n,r){var a=this;"undefined"==typeof n&&(n={post:{},put:{}}),"Update"==this.commitLabel?o.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=r?a.$router.push({name:i,params:{dimension:r}}):a.$router.push({name:i})}).catch(function(t){s["a"].$emit("operation-failure",t)}):o.a.post(e,{session_id:this.$store.state.session,object:this.objt},{params:n["post"]}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=r?a.$router.push({name:i,params:{dimension:r}}):a.$router.push({name:i})}).catch(function(t){s["a"].$emit("operation-failure",t)})}},postImage:function(t){var e="/api/upload/image?session_id="+this.$store.state.session;o.a.post(e,t).then(function(t){s["a"].$emit("operation-success",t.data.message)}).catch(function(t){s["a"].$emit("operation-failure",t)})}}},"428d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"roleview"},[i("b-breadcrumb",{attrs:{items:t.bcItems}}),i("role",{attrs:{object:this.objt,label:this.commitLabel},on:{"role-commit":t.commitRole}})],1)},o=[],s=i("bc3a"),r=i.n(s),a=i("3f53"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"role"},[t.errors.length?i("p",[i("b",[t._v("Please correct the following error(s):")]),i("ul",t._l(t.errors,function(e){return i("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),i("b-form",[i("b-container",{attrs:{fluid:""}},[i("b-card",{attrs:{no:"",body:""}},[i("b-form-group",{attrs:{label:"Role","label-class":"font-weight-bold text-md-left","label-for":"theRoleInput"}},[i("b-form-input",{attrs:{id:"theRoleInput",type:"text",required:""},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),i("b-form-group",{attrs:{label:"Short Code","label-class":"font-weight-bold text-md-left","label-for":"theShortCodeInput"}},[i("b-form-input",{attrs:{id:"theShortCodeInput",type:"text",required:""},model:{value:t.objt.theShortCode,callback:function(e){t.$set(t.objt,"theShortCode",e)},expression:"objt.theShortCode"}})],1),i("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-md-left","label-for":"theTypeInput"}},[i("dimension-select",{attrs:{id:"theTypeInput",dimension:"role_type",initial:t.objt.theType},on:{"dimension-select-change":t.roleTypeSelected}})],1),i("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-md-left","label-for":"theDescription"}},[i("b-form-textarea",{attrs:{id:"theDescriptionInput",type:"text",rows:5,"max-rows":7,required:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1)],1)],1),i("b-container",{attrs:{fluid:""}},[i("b-form-row",[i("b-col",{attrs:{md:"4","offset-md":"5"}},[i("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.onCommit}},[t._v(t._s(t.commitLabel))]),i("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:t.onCancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},l=[],u=i("1864"),m={props:{object:Object,label:String},watch:{object:"setObject"},data:function(){return{errors:[],objt:this.object,commitLabel:"Create"}},components:{DimensionSelect:u["default"]},methods:{setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(t){t.preventDefault(),this.checkForm()&&this.$emit("role-commit",this.objt)},onCancel:function(t){t.preventDefault(),this.$router.push({name:"roles"})},roleTypeSelected:function(t){this.objt.theType=t},checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Role name is required"),0==this.objt.theShortCode.length&&this.errors.push("Short code is required"),0==this.objt.theType.length&&this.errors.push("Role type is required"),0==this.objt.theDescription.length&&this.errors.push("Description is required"),!this.errors.length}}},d=m,h=i("2877"),f=Object(h["a"])(d,c,l,!1,null,null,null),p=f.exports,b=i("4360"),g=i("61da"),v={props:{objectName:String},mixins:[a["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Roles",to:{name:"roles"}},{text:this.objt.theName,to:{name:"role"}}]}},components:{Role:p},data:function(){return{objt:{theName:"",theType:"",theShortCode:"",theDescription:""},commitLabel:"Create"}},beforeRouteEnter:function(t,e,i){if("New role"==t.params.objectName)i();else{var n="/api/roles/name/"+t.params.objectName;r.a.get(n,{baseURL:b["a"].state.url,params:{session_id:b["a"].state.session}}).then(function(t){i(function(e){e.commitLabel="Update",e.objt=t.data})}).catch(function(t){g["a"].$emit("operation-failure",t)})}},methods:{commitRole:function(t){this.objt=t;var e=this.$store.state.url+"/api/roles/name/"+this.objectName+"?session_id="+this.$store.state.session,i=this.$store.state.url+"/api/roles";this.commitObject(e,i,"roles")}}},j=v,y=Object(h["a"])(j,n,o,!1,null,null,null);e["default"]=y.exports},5147:function(t,e,i){var n=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}},6762:function(t,e,i){"use strict";var n=i("5ca1"),o=i("c366")(!0);n(n.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},aae3:function(t,e,i){var n=i("d3f4"),o=i("2d95"),s=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},d2c8:function(t,e,i){var n=i("aae3"),o=i("be13");t.exports=function(t,e,i){if(n(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(o(t))}}}]);
//# sourceMappingURL=chunk-03129788.bb315bb4.js.map