(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-855883f6"],{"3f53":function(t,e,n){"use strict";var o=n("bc3a"),i=n.n(o),r=n("61da");e["a"]={methods:{commitObject:function(t,e,n,o,a){var s=this;"undefined"==typeof o&&(o={post:{},put:{}}),"Update"==this.commitLabel?i.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){r["a"].$emit("operation-success",t.data.message),void 0!=a?s.$router.push({name:n,params:{dimension:a}}):s.$router.push({name:n})}).catch(function(t){r["a"].$emit("operation-failure",t)}):i.a.post(e,{session_id:this.$store.state.session,object:this.objt},{params:o["post"]}).then(function(t){r["a"].$emit("operation-success",t.data.message),void 0!=a?s.$router.push({name:n,params:{dimension:a}}):s.$router.push({name:n})}).catch(function(t){r["a"].$emit("operation-failure",t)})}},postImage:function(t){var e="/api/upload/image?session_id="+this.$store.state.session;i.a.post(e,t).then(function(t){r["a"].$emit("operation-success",t.data.message)}).catch(function(t){r["a"].$emit("operation-failure",t)})}}},"94cc":function(t,e,n){"use strict";var o=n("bc3a"),i=n.n(o),r=n("61da");e["a"]={methods:{commitObject:function(t,e,n,o){var a=this;"Update"==this.commitLabel?i.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){r["a"].$emit("operation-success",t.data.message),void 0!=o?a.$router.push({name:n,params:{dimension:o}}):a.$router.push({name:n})}).catch(function(t){r["a"].$emit("operation-failure",t)}):i.a.post(e,{session_id:this.$store.state.session,object:this.objt}).then(function(t){r["a"].$emit("operation-success",t.data.message),void 0!=o?a.$router.push({name:n,params:{dimension:o}}):a.$router.push({name:n})}).catch(function(t){r["a"].$emit("operation-failure",t)})}}}},e071:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"environmentview"},[n("b-breadcrumb",{attrs:{items:t.bcItems}}),n("environment",{attrs:{object:this.objt,label:this.commitLabel},on:{"environment-commit":t.commitEnvironment}})],1)},i=[],r=n("bc3a"),a=n.n(r),s=n("3f53"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"environment"},[n("dimension-modal",{ref:"environmentDialog",attrs:{dimension:"environment",existing:t.objt.theEnvironments},on:{"dimension-modal-update":t.addSubEnvironment}}),t.errors.length?n("p",[n("b",[t._v("Please correct the following error(s):")]),n("ul",t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),n("b-form",[n("b-container",{attrs:{fluid:""}},[n("b-card",{attrs:{"bg-variant":"light",no:"",body:""}},[n("b-row",[n("b-col",{attrs:{md:"9"}},[n("b-form-group",{attrs:{label:"Environment","label-class":"font-weight-bold text-md-left","label-col":"3","label-for":"theEnvironmentInput"}},[n("b-form-input",{attrs:{id:"theEnvironmentInput",type:"text",required:""},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1)],1),n("b-col",{attrs:{md:"3"}},[n("b-form-group",{attrs:{label:"Short Code","label-class":"font-weight-bold text-md-left","label-col":"2","label-for":"theShortCode"}},[n("b-form-input",{attrs:{id:"theShortCodeInput",type:"text",required:""},model:{value:t.objt.theShortCode,callback:function(e){t.$set(t.objt,"theShortCode",e)},expression:"objt.theShortCode"}})],1)],1)],1),n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-md-left","label-for":"theDescriptionInput"}},[n("b-form-textarea",{attrs:{id:"theDescription",type:"text",rows:"4","max-rows":"8",required:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1)],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-table",{attrs:{striped:"",bordered:"",small:"",hover:"",items:t.environments,fields:t.environmentTableFields},scopedSlots:t._u([{key:"HEAD_environmentactions",fn:function(e){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(n){return n.stopPropagation(),t.addEnvironment(e)}}})]}},{key:"environmentactions",fn:function(e){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),t.deleteEnvironment(e.item)}}})]}}])})],1),this.objt.theEnvironments.length>1?n("b-col",{attrs:{md:"3"}},[n("b-form-group",{attrs:{label:"Strategy","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theCompositeStrategy"}},[n("b-form-radio-group",{model:{value:t.theCompositeStrategy,callback:function(e){t.theCompositeStrategy=e},expression:"theCompositeStrategy"}},[n("b-form-radio",{attrs:{value:"Maximise"}},[t._v("Maximise")]),n("b-form-radio",{attrs:{value:"Override"}},[t._v("Override")])],1)],1)],1):t._e(),this.objt.theEnvironments.length>1&&"Override"==this.theCompositeStrategy?n("b-col",{attrs:{md:"3"}},[n("b-form-group",{attrs:{label:"Environment","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theEnvironmentSelect"}},[n("b-form-select",{staticClass:"mb-3",attrs:{id:"theEnvironmentSelect",options:t.objt.theEnvironments},model:{value:t.objt.theOverridingEnvironment,callback:function(e){t.$set(t.objt,"theOverridingEnvironment",e)},expression:"objt.theOverridingEnvironment"}})],1)],1):t._e()],1)],1)],1),n("b-container",{attrs:{fluid:""}},[n("b-form-row",[n("b-col",{attrs:{md:"4","offset-md":"5"}},[n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.onCommit}},[t._v(t._s(t.commitLabel))]),n("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:t.onCancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},l=[],c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("94cc")),h={props:{object:Object,label:String},components:{DimensionModal:function(){return n.e("chunk-41bf07d3").then(n.bind(null,"1e3b"))}},mixins:[c["a"]],computed:{environments:function(){return this.objt.theEnvironments.length>0?this.objt.theEnvironments.map(function(t){return{name:t}}):[]}},data:function(){return{errors:[],objt:this.object,commitLabel:"Create",theCompositeStrategy:"Maximise",environmentTableFields:{environmentactions:{label:""},name:{label:"Environment"}}}},watch:{object:"setObject",theCompositeStrategy:"setStrategy"},methods:{setObject:function(){this.objt=this.object,this.commitLabel=this.label,"None"!=this.objt.theDuplicateProperty&&(this.theCompositeStrategy=this.objt.theDuplicateProperty)},setStrategy:function(){"Maximise"==this.theCompositeStrategy?(this.objt.theDuplicateProperty="Maximise",this.objt.theOverridingEnvironment=""):this.objt.theDuplicateProperty="Override"},onCommit:function(t){t.preventDefault(),this.checkForm()&&this.$emit("environment-commit",this.objt)},onCancel:function(t){t.preventDefault(),this.$router.push({name:"environments"})},addEnvironment:function(){this.$refs.environmentDialog.show()},addSubEnvironment:function(t){var e=this.objt.theEnvironments.length;this.objt.theEnvironments.push(t),1==e&&(this.objt.theDuplicateProperty="Maximise")},deleteEnvironment:function(t){this.objt.theEnvironments.splice(t,1),this.objt.theEnvironments.length<2&&(this.objt.theDuplicateProperty="None",this.objt.theOverridingEnvironment="")},checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Environment name is required"),0==this.objt.theShortCode.length&&this.errors.push("Short code is required"),0==this.objt.theDescription.length&&this.errors.push("Description is required"),1==this.objt.theEnvironments.length&&this.errors.push("Composite environments must contain two or more environments"),!this.errors.length}}},u=h,b=n("2877"),d=Object(b["a"])(u,m,l,!1,null,null,null),p=d.exports,v=n("4360"),f=n("61da"),_={props:{objectName:String},mixins:[s["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Environments",to:{name:"environments"}},{text:this.objt.theName,to:{name:"environment"}}]}},components:{Environment:p},data:function(){return{objt:{theName:"",theShortCode:"",theDescription:"",theEnvironments:[],theDuplicateProperty:"None",theOverridingEnvironment:"",theTensions:[{value:0,attr_id:4,base_attr_id:0,rationale:"None"},{value:0,attr_id:5,base_attr_id:0,rationale:"None"},{value:0,attr_id:6,base_attr_id:0,rationale:"None"},{value:0,attr_id:7,base_attr_id:0,rationale:"None"},{value:0,attr_id:4,base_attr_id:1,rationale:"None"},{value:0,attr_id:5,base_attr_id:1,rationale:"None"},{value:0,attr_id:6,base_attr_id:1,rationale:"None"},{value:0,attr_id:7,base_attr_id:1,rationale:"None"},{value:0,attr_id:4,base_attr_id:2,rationale:"None"},{value:0,attr_id:5,base_attr_id:2,rationale:"None"},{value:0,attr_id:6,base_attr_id:2,rationale:"None"},{value:0,attr_id:7,base_attr_id:2,rationale:"None"},{value:0,attr_id:4,base_attr_id:3,rationale:"None"},{value:0,attr_id:5,base_attr_id:3,rationale:"None"},{value:0,attr_id:6,base_attr_id:3,rationale:"None"},{value:0,attr_id:7,base_attr_id:3,rationale:"None"}]},commitLabel:"Create"}},beforeRouteEnter:function(t,e,n){if("New environment"==t.params.objectName)n();else{var o="/api/environments/name/"+t.params.objectName;a.a.get(o,{baseURL:v["a"].state.url,params:{session_id:v["a"].state.session}}).then(function(t){n(function(e){e.commitLabel="Update",e.objt=t.data})}).catch(function(t){f["a"].$emit("operation-failure",t)})}},methods:{commitEnvironment:function(t){this.objt=t;var e=this.$store.state.url+"/api/environments/name/"+this.objectName+"?session_id="+this.$store.state.session,n=this.$store.state.url+"/api/environments";this.commitObject(e,n,"environments")}}},j=_,g=Object(b["a"])(j,o,i,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-855883f6.d0bd06aa.js.map