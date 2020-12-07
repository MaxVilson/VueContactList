(function(t){function e(e){for(var o,s,i=e[0],l=e[1],r=e[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(m.length)m.shift()();return c.push.apply(c,r||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},c=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var r=0;r<i.length;r++)e(i[r]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0673":function(t,e,n){"use strict";n("7d37")},5452:function(t,e,n){"use strict";n("af35")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",class:{overlay:t.isShowModal},attrs:{id:"app"},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[n("app-header"),n("router-view"),n("app-modal")],1)},c=[],s=n("5530"),i=(n("f5df1"),n("e008"),n("2f62")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"modal"},[n(t.modal,{tag:"component"})],1)},r=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.setContact(),t.closeModal()}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"phone"}},[t._v("Phone")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{id:"phone",type:"number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Add new contact")])])},d=[],m=(n("b0c0"),{name:"AppAddContact",data:function(){return{name:null,email:null,phone:null}},methods:{closeModal:function(){this.$store.commit("closeModal")},setContact:function(){this.$store.commit("contacts/setContact",{name:this.name,email:this.email,phone:this.phone})}}}),f=m,p=n("2877"),v=Object(p["a"])(f,u,d,!1,null,null,null),h=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.setNewField(),t.closeModal()}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"key"}},[t._v("Key")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"form-control",attrs:{id:"key",type:"text"},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"value"}},[t._v("Value")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{id:"value",type:"text"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Add new contact")])])},g=[],_={name:"AppAddNewField",data:function(){return{key:null,value:null}},methods:{closeModal:function(){this.$store.commit("closeModal")},setNewField:function(){this.$store.commit("contacts/setNewField",{key:this.key,value:this.value,id:+this.$route.params.id})}}},y=_,C=Object(p["a"])(y,b,g,!1,null,null,null),w=C.exports,O={name:"AppModal",components:{AppAddContact:h,AppAddNewField:w},computed:Object(s["a"])({},Object(i["d"])(["modal"]))},S=O,k=(n("8781"),Object(p["a"])(S,l,r,!1,null,null,null)),j=k.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header__wrapper"},[n("h1",{staticClass:"header__logo"},[t._v("My contact list")]),"home"===t.$route.name?n("button",{staticClass:"btn header__btn",on:{click:function(e){return t.showModal("AppAddContact")}}},[t._v(" Add new contact ")]):t._e()])])])},A=[],M={name:"AppHeader",methods:Object(s["a"])({},Object(i["c"])(["showModal"]))},N=M,$=(n("5452"),Object(p["a"])(N,x,A,!1,null,null,null)),E=$.exports,P={components:{AppHeader:E,AppModal:j},methods:{closeModal:function(){this.isShowModal&&this.$store.commit("closeModal")}},computed:Object(s["a"])({},Object(i["d"])(["isShowModal"]))},I=P,F=(n("5c0b"),Object(p["a"])(I,a,c,!1,null,null,null)),J=F.exports,L=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-home"},[n("app-contacts-list")],1)},T=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contacts-list"},t._l(t.contacts,(function(e){return n("article",{key:e.id,staticClass:"contacts-list__item"},[n("ul",{staticClass:"contacts-list__item-list"},[n("li",[n("b",[t._v("Name:")]),t._v(" "+t._s(e.name))]),n("li",[n("b",[t._v("Email:")]),t._v(" "+t._s(e.email))]),n("li",[n("b",[t._v("Phone:")]),t._v(" "+t._s(e.phone))])]),n("div",{staticClass:"contacts-list__item-btns"},[n("router-link",{staticClass:"btn contacts-list__item-btn",attrs:{to:{name:"contact",params:{id:e.id}}}},[t._v("More details")]),n("button",{staticClass:"btn contacts-list__item-btn",on:{click:function(n){return t.deleteContact(e.id)}}},[t._v(" Delete contact ")])],1)])})),0)},B=[],K={name:"AppContactsList",methods:Object(s["a"])({},Object(i["c"])("contacts",["deleteContact"])),computed:Object(s["a"])({},Object(i["d"])("contacts",["contacts"]))},U=K,V=(n("fb36"),Object(p["a"])(U,H,B,!1,null,null,null)),X=V.exports,q={components:{AppContactsList:X},mounted:function(){this.$store.dispatch("contacts/getContacts")}},z=q,G=Object(p["a"])(z,D,T,!1,null,null,null),Q=G.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasContact?n("section",{staticClass:"contact"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"contact__link",attrs:{to:{name:"home"}}},[t._v("Back to home page")]),n("div",{staticClass:"contact__wrapper"},[n("div",{staticClass:"form contact__form"},[t._l(t.contact,(function(e,o,a){return n("div",{directives:[{name:"show",rawName:"v-show",value:"id"!==o,expression:"key !== 'id'"}],key:o+a,staticClass:"form-group contact__group"},[n("div",{staticClass:"d-flex"},[n("label",{attrs:{for:o}},[t._v(t._s(o))]),n("span",{staticClass:"contact__delete",on:{click:function(e){return t.deleteField({key:o,id:+t.$route.params.id})}}},[t._v("Delete field")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact[o],expression:"contact[key]"}],staticClass:"form-control",attrs:{id:o,type:"text",placeholder:e},domProps:{value:t.contact[o]},on:{input:function(e){e.target.composing||t.$set(t.contact,o,e.target.value)}}}),n("i",{staticClass:"contact__clear",on:{click:function(e){return t.clearField(o)}}},[t._v("X")])])})),n("button",{staticClass:"btn",on:{click:function(e){return t.showModal("AppAddNewField")}}},[t._v("Add new field")]),n("button",{staticClass:"btn btn_blue",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.deleteLastAction({id:+t.$route.params.id})}}},[t._v(" Undo the last step ")]),n("button",{staticClass:"btn btn_red",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.editContact(t.contact)}}},[t._v(" Save ")])],2)])],1)]):t._e()},W=[],Y={methods:Object(s["a"])(Object(s["a"])({},Object(i["c"])({editContact:"contacts/editContact",showModal:"showModal",deleteField:"contacts/deleteField",deleteLastAction:"contacts/deleteLastAction"})),{},{clearField:function(t){confirm("Are you sure you want to clear field?")&&(this.contact[t]="")}}),computed:Object(s["a"])(Object(s["a"])({},Object(i["b"])("contacts",["getContact"])),{},{contact:function(){return this.getContact(+this.$route.params.id)},hasContact:function(){return"undefined"!==typeof this.contact}}),mounted:function(){this.$store.dispatch("contacts/getContacts")}},Z=Y,tt=(n("0673"),Object(p["a"])(Z,R,W,!1,null,null,null)),et=tt.exports;o["a"].use(L["a"]);var nt=[{path:"/",name:"home",component:Q},{path:"/contact/:id",name:"contact",component:et}],ot=new L["a"]({mode:"history",routes:nt}),at=ot,ct=(n("7db0"),n("c740"),n("a434"),n("4fad"),n("d3b7"),function(t){try{return new Promise((function(e){e(JSON.parse(localStorage.getItem(t)))}))}catch(e){return console.log("Error geting data from localStorage",e),null}}),st=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){console.log("Error saving data in localStorage",n)}},it=function(t,e,n){try{var o=JSON.parse(localStorage.getItem(t));o[e]=n,localStorage.setItem(t,JSON.stringify(o))}catch(a){console.log("Error edit data in localStorage",a)}},lt=function(t,e,n){try{var o=JSON.parse(localStorage.getItem(t));o[e][n.key]=n.value,localStorage.setItem(t,JSON.stringify(o))}catch(a){console.log("Error edit data in localStorage",a)}},rt=function(t,e,n){try{var o=JSON.parse(localStorage.getItem(t));delete o[e][n.key],localStorage.setItem(t,JSON.stringify(o))}catch(a){console.log("Error delete data in localStorage",a)}},ut=function(t,e){try{var n=JSON.parse(localStorage.getItem(t));n.splice(e,1),localStorage.setItem(t,JSON.stringify(n))}catch(o){console.log("Error delete data in localStorage",o)}},dt=0,mt={namespaced:!0,state:{contacts:[]},getters:{getAllContacts:function(t){return t.contacts},getContact:function(t){return function(e){return t.contacts.find((function(t){return t.id==e}))}}},mutations:{setContact:function(t,e){dt++,e.id=dt,t.contacts.push(e),st("contacts",t.contacts)},setContacts:function(t,e){t.contacts=e},setNewField:function(t,e){var n=t.contacts.findIndex((function(t){return t.id===e.id}));o["a"].set(t.contacts[n],e.key,e.value),lt("contacts",n,{key:e.key,value:e.value})},deleteLastAction:function(t,e){var n=t.contacts.findIndex((function(t){return t.id===e.id})),o=Object.entries(t.contacts[n]).splice(-1,1);console.log(o)},deleteField:function(t,e){if(confirm("Are you sure you want to delete the field?")){var n=t.contacts.findIndex((function(t){return t.id===e.id}));o["a"].delete(t.contacts[n],e.key),rt("contacts",n,{key:e.key})}},editContact:function(t,e){var n=t.contacts.findIndex((function(t){return t.id===e.id}));t.contacts[n]=e,it("contacts",n,e)},deleteContact:function(t,e){if(confirm("Are you sure you want to delete the contact?")){var n=t.contacts.findIndex((function(t){return t.id===e}));t.contacts.splice(n,1),ut("contacts",n)}}},actions:{getContacts:function(t){var e=t.commit;ct("contacts").then((function(t){t&&e("setContacts",t)}))}}};o["a"].use(i["a"]);var ft=new i["a"].Store({state:{modal:null,isShowModal:!1},mutations:{showModal:function(t,e){t.isShowModal=!0,t.modal=e},closeModal:function(t){t.isShowModal=!1,t.modal=null}},actions:{},modules:{contacts:mt}});o["a"].config.productionTip=!1,new o["a"]({router:at,store:ft,render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6b1e":function(t,e,n){},"7d37":function(t,e,n){},8781:function(t,e,n){"use strict";n("6b1e")},"9c0c":function(t,e,n){},af35:function(t,e,n){},dcc4:function(t,e,n){},e008:function(t,e,n){},fb36:function(t,e,n){"use strict";n("dcc4")}});
//# sourceMappingURL=app.d9d17d5b.js.map