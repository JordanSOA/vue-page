(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1075:function(e,t,a){"use strict";a("da00")},"1ad8":function(e,t,a){"use strict";a("9f18")},"2a8f":function(e,t,a){"use strict";a("b088")},"3e34":function(e,t,a){"use strict";a("d17b")},4325:function(e,t,a){},"49f8":function(e,t,a){var n={"./en.json":"edd4","./fr.json":"f693"};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="49f8"},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app"}},[a("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}],attrs:{app:"",color:"surface lighten-1","elevate-on-scroll":""}},[e._l(e.mainSocials,(function(t){return a("v-chip",{key:t.icon,staticClass:"ma-2",class:{rubberBand:e.isOnTop},attrs:{color:"primary","text-color":"white"},on:{click:function(a){return e.openLink(t.icon)}}},[a("v-icon",[e._v("mdi-"+e._s(t.icon))])],1)})),a("v-spacer"),a("v-checkbox",{staticClass:"pt-3",attrs:{"off-icon":"mdi-moon-waning-crescent","on-icon":"mdi-white-balance-sunny"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}}),a("v-divider",{staticClass:"me-3",attrs:{vertical:"",color:e.dividerColor}}),e._l(e.langs,(function(t){return a("v-tooltip",{key:t.name,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var i=n.on,r=n.attrs;return[a("v-btn",e._g(e._b({ref:t.name,refInFor:!0,staticClass:"langBtn",attrs:{color:"primary",outlined:"",icon:""},on:{click:function(a){return e.changeLang(t.i18n)}}},"v-btn",r,!1),i),[a("flag",{attrs:{iso:t.name,squared:!1}})],1)]}}],null,!0)},["fr"===t.name?a("span",[e._v(" "+e._s(e.$t("lang_FR")))]):a("span",[e._v(" "+e._s(e.$t("lang_GB")))])])}))],2),a("v-main",[a("Home")],1),a("Footer")],1)},r=[],s=(a("4de4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{align:"center"}},[a("alert-warning")],1)],1),a("v-row",[a("v-col",{attrs:{align:"center",cols:"12",md:"4"}},[a("picture-card")],1),a("v-col",{attrs:{align:"center",cols:"12",md:"8"}},[a("info-tabs")],1)],1)],1)}),o=[],l=a("ade3"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-alert",{staticClass:"error--text",attrs:{dismissible:"",prominent:"",outlined:"",color:"primary",dense:"",elevation:"5",icon:"mdi-tools"}},[a("h2",{attrs:{id:"greetings"}},[e._v(e._s(e.$t("greetings")))]),a("p",{attrs:{id:"first_sent"}},[e._v(e._s(e.$t("warning_sentence1")))]),a("p",{attrs:{id:"second_sent"}},[e._v(" "+e._s(e.$t("warning_sentence2"))+" , "),a("a",{attrs:{id:"reach"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.copyToClipboard(t)}}},[e._v(e._s(e.$t("reach_txt")))]),e._v(". ")])]),a("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[a("v-btn",e._b({attrs:{color:"yellow accent-2",text:"",timeout:"3000"},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[e._v(" "+e._s(e.$t("close_txt"))+" ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.$t("copy_cliboard"))+" ")])],1)},u=[],d={name:"AlertWarning",data:function(){return{snackbar:!1}},methods:{copyToClipboard:function(){var e=document.createElement("textarea");e.value="jordaan.soares@gmail.com",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.snackbar=!0}}},m=d,p=(a("2a8f"),a("2877")),v=a("6544"),f=a.n(v),h=a("0798"),b=a("8336"),_=a("2db4"),k=Object(p["a"])(m,c,u,!1,null,"22a5a541",null),g=k.exports;f()(k,{VAlert:h["a"],VBtn:b["a"],VSnackbar:_["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabs"},[a("v-card",[a("v-tabs",{attrs:{"center-active":"","show-arrows":"",right:"",vertical:e.$vuetify.breakpoint.smAndUp}},[a("v-tab",[e._v(" "+e._s(e.$t("abt_me_title"))+" ")]),a("v-tab",[e._v(" "+e._s(e.$t("skills_title"))+" ")]),a("v-tab",[e._v(" "+e._s(e.$t("socials_title"))+" ")]),a("v-tab-item",[a("about-me-tab")],1),a("v-tab-item",[a("skills-tab")],1),a("v-tab-item",[a("socials-tab")],1)],1)],1)],1)},w=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aboutMeTab"},[a("v-container",{attrs:{fluid:""}},[a("v-row",e._l(6,(function(t){return a("v-col",{key:t,staticClass:"pa-0 pa-sm-auto",attrs:{cols:"12",sm:"6",lg:"4","no-gutters":""}},[a("div",{staticClass:"personalChip "},[e._v(" "+e._s(e.$t("details_"+t))+" ")])])})),1)],1)],1)},x=[],V={},S=V,T=(a("1075"),a("62ad")),E=a("a523"),j=a("0fd9b"),$=Object(p["a"])(S,C,x,!1,null,"09646e57",null),O=$.exports;f()($,{VCol:T["a"],VContainer:E["a"],VRow:j["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"skillsTab"},[a("v-tabs",{attrs:{right:""}},[a("v-tab",[e._v(" Tech ")]),a("v-tab",[e._v(" SOFT ")]),a("v-tab",[e._v(" "+e._s(e.$t("others"))+" ")]),a("v-tab-item",[a("skills-display",{attrs:{skills:e.techSkills.skills,name:e.techSkills.name}})],1),a("v-tab-item",[a("skills-display",{attrs:{skills:e.softSkills.skills,name:e.softSkills.name}})],1),a("v-tab-item",[a("skills-display",{attrs:{skills:e.otherSkills.skills,name:e.otherSkills.name}})],1)],1)],1)},F=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"tech"===e.name?a("v-container",{attrs:{fluid:""}},[a("v-toolbar",{staticClass:"mb-2",class:e.$vuetify.theme.dark?"black--text":"white--text",attrs:{dense:"",color:e.dividerColor}},[a("v-toolbar-title",["0"===e.selectedTechs?a("span",[e._v(" "+e._s(e.$t("tools"))+" ")]):"1"===e.selectedTechs?a("span",[e._v(" Back ")]):"2"===e.selectedTechs?a("span",[e._v(" Front ")]):a("span",[e._v(" "+e._s(e.$t("all"))+" ")])]),a("v-spacer"),a("v-btn-toggle",{model:{value:e.selectedTechs,callback:function(t){e.selectedTechs=t},expression:"selectedTechs"}},[a("v-btn",{attrs:{color:"primary darken-1",value:"2",small:""}},[e._v(" Front ")]),a("v-btn",{attrs:{color:"primary darken-5",value:"1",small:""}},[e._v(" Back ")]),a("v-btn",{attrs:{color:"primary darken-3",value:"0",small:""}},[e._v(" "+e._s(e.$t("tools"))+" ")])],1)],1),a("v-row",e._l(e.filteredSkills,(function(t,n){return a("v-col",{key:n,staticClass:"text-left text-sm-center",attrs:{cols:"12",sm:"6",lg:"4"}},[a("v-icon",[e._v(" mdi-"+e._s(t.icon)+" ")]),e._v(" "+e._s(t.name)+" "),a("v-progress-linear",{attrs:{"background-color":"secondary darken-5",color:"primary lighten-1",value:t.humbleEstimation}})],1)})),1)],1):a("v-container",{attrs:{fluid:""}},[a("v-row",e._l(e.skills,(function(t,n){return a("v-col",{key:n,staticClass:"text-left text-sm-center",attrs:{cols:"12",sm:"6",lg:"4"}},[e._v(" "+e._s(e.$t(t.name))+" "),a("v-progress-linear",{attrs:{"background-color":"secondary darken-5",color:"primary lighten-1",value:t.humbleEstimation}})],1)})),1)],1)},M=[],D={data:function(){return{selectedTechs:void 0}},props:{skills:{type:Array},name:{type:String}},methods:{colorChange:function(e){return 0===e?"primary darken-3":1===e?"primary darken-5":"primary darken-1"}},computed:{filteredSkills:function(){var e=this;return void 0===this.selectedTechs?this.skills:this.skills.filter((function(t){return e.selectedTechs==t.type}))},dividerColor:function(){return this.$vuetify.theme.dark?"grey":this.$vuetify.theme.themes.dark.surface}}},R=D,B=a("a609"),I=a("132d"),J=a("8e36"),N=a("2fa4"),L=a("71d9"),U=a("2a7f"),q=Object(p["a"])(R,P,M,!1,null,null,null),G=q.exports;f()(q,{VBtn:b["a"],VBtnToggle:B["a"],VCol:T["a"],VContainer:E["a"],VIcon:I["a"],VProgressLinear:J["a"],VRow:j["a"],VSpacer:N["a"],VToolbar:L["a"],VToolbarTitle:U["a"]});var H={components:{SkillsDisplay:G},data:function(){return{techSkills:{name:"tech",skills:[{name:"Java",icon:"language-java",type:1,humbleEstimation:75},{name:"Javascript",icon:"language-javascript",type:2,humbleEstimation:80},{name:"Typescript",icon:"language-typescript",type:2,humbleEstimation:55},{name:"SQL",icon:"database",type:1,humbleEstimation:75},{name:"Angular",icon:"angular",type:2,humbleEstimation:65},{name:"Vue",icon:"vuejs",type:2,humbleEstimation:70},{name:"NodeJS",icon:"nodejs",type:1,humbleEstimation:50},{name:"Github",icon:"github",type:0,humbleEstimation:70},{name:"Vuetify",icon:"vuetify",type:2,humbleEstimation:80},{name:"Material Design",icon:"material-design",type:2,humbleEstimation:70},{name:"Jira",icon:"jira",type:0,humbleEstimation:70},{name:"HTML",icon:"language-html5",type:2,humbleEstimation:90},{name:"CSS",icon:"language-css3",type:2,humbleEstimation:90}]},softSkills:{name:"soft",skills:[{name:"soft_skill1",humbleEstimation:80},{name:"soft_skill4",humbleEstimation:85},{name:"soft_skill2",humbleEstimation:90},{name:"soft_skill5",humbleEstimation:90},{name:"soft_skill3",humbleEstimation:80}]},otherSkills:{name:"others",skills:[{name:"other_skill4",humbleEstimation:90},{name:"other_skill1",humbleEstimation:65},{name:"other_skill2",humbleEstimation:85},{name:"other_skill6",humbleEstimation:80},{name:"other_skill3",humbleEstimation:65},{name:"other_skill5",humbleEstimation:40}]}}}},W=H,z=a("71a3"),X=a("c671"),Y=a("fe57"),Q=Object(p["a"])(W,A,F,!1,null,null,null),Z=Q.exports;f()(Q,{VTab:z["a"],VTabItem:X["a"],VTabs:Y["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"socialsTab "},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{color:"surface darken-5"}},e._l(e.socials,(function(t,n){return a("v-col",{key:n,staticClass:"d-flex justify-space-around  align-baseline d-sm-block ",style:{cursor:"pointer"},attrs:{cols:"12",sm:"6"},on:{click:function(a){return e.openLink(t.url)}}},[a("v-icon",{attrs:{"x-large":"",color:"primary"}},[e._v("mdi-"+e._s(t.icon))]),a("p",[e._v(e._s(t.label))])],1)})),1)],1)],1)},ee=[],te=(a("caad"),a("2532"),{data:function(){return{socials:[{icon:"linkedin",url:"https://linkedin.com/in/jordan-soares-dev-web",label:"jordan-soares-dev-web"},{icon:"gmail",url:"mailto:jordaan.soares@gmail.com",label:"jordaan.soares@gmail.com"},{icon:"github",url:"https://github.com/JordanSOA",label:"JordanSOA"},{icon:"stack-overflow",url:"https://stackoverflow.com/users/14590766/jordan-soares",label:"jordan-soares"}]}},methods:{openLink:function(e){if(e.includes("mailto")){var t=document.createElement("a");t.href=e,t.click()}else window.open(e)}}}),ae=te,ne=Object(p["a"])(ae,K,ee,!1,null,"047ef9ac",null),ie=ne.exports;f()(ne,{VCol:T["a"],VContainer:E["a"],VIcon:I["a"],VRow:j["a"]});var re={components:{AboutMeTab:O,SocialsTab:ie,SkillsTab:Z}},se=re,oe=a("b0af"),le=Object(p["a"])(se,y,w,!1,null,null,null),ce=le.exports;f()(le,{VCard:oe["a"],VTab:z["a"],VTabItem:X["a"],VTabs:Y["a"]});var ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"PictureCard"}},[a("v-card",{attrs:{"max-width":"400",color:"surface lighten-3",elevation:"3"}},[a("v-img",{staticClass:"picture d-flex black--text ",attrs:{src:e.picturePath}},[a("v-container",[a("v-row",{staticClass:"d-flex flex-column"},[a("v-col",{attrs:{align:"end"}},[a("v-icon",{attrs:{"x-large":"",color:"primary"}},[e._v("mdi-language-javascript")]),a("v-icon",{attrs:{"x-large":"",color:"primary"}},[e._v("mdi-language-java")]),a("h3",{staticClass:"ma-1"},[e._v(" +2 "+e._s(e.$t("years"))+" ")]),a("h3",{staticClass:"ma-1"},[e._v(" FullStack ")])],1),a("v-col",{staticClass:"mb-12"}),a("v-col",{staticClass:"mt-12",attrs:{align:"end"}},[a("v-btn",{attrs:{color:"primary",outlined:"",icon:""},on:{click:function(t){e.show=!e.show}}},[a("v-icon",{attrs:{"x-large":""}},[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)],1)],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[a("v-card-title",{staticClass:"myName"},[e._v(" "+e._s(e.myName)+" ")]),a("v-divider",{attrs:{color:e.dividerColor}}),a("v-card-title",{staticClass:"shortDesc text-left"},[e._v(" "+e._s(e.$t("short_description2")))])],1)])],1)],1)},de=[],me={name:"PictureCard",data:function(){return{myName:"Jordan Soares",show:!1,picturePath:a("b5a1")}},computed:{dividerColor:function(){return this.$vuetify.theme.dark?this.$vuetify.theme.themes.dark.primary:this.$vuetify.theme.themes.light.primary}}},pe=me,ve=(a("facb"),a("99d9")),fe=a("ce7e"),he=a("0789"),be=a("adda"),_e=Object(p["a"])(pe,ue,de,!1,null,"d739352e",null),ke=_e.exports;f()(_e,{VBtn:b["a"],VCard:oe["a"],VCardTitle:ve["a"],VCol:T["a"],VContainer:E["a"],VDivider:fe["a"],VExpandTransition:he["a"],VIcon:I["a"],VImg:be["a"],VRow:j["a"]});var ge={components:Object(l["a"])({PictureCard:ke,AlertWarning:g,InfoTabs:ce},"InfoTabs",ce),name:"Home"},ye=ge,we=Object(p["a"])(ye,s,o,!1,null,"5f6da58f",null),Ce=we.exports;f()(we,{VCol:T["a"],VContainer:E["a"],VRow:j["a"]});a("159b"),a("d3b7"),a("ddb0"),a("ac1f"),a("466d");var xe=a("a925");function Ve(){var e=a("49f8"),t={};return e.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var i=n[1];t[i]=e(a)}})),t}n["a"].use(xe["a"]);var Se=new xe["a"]({locale:"en",fallbackLocale:"en",messages:Ve()}),Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("v-footer",{staticClass:"foot",attrs:{padless:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("p",{staticClass:"footerDate"},[e._v(e._s(e.footerDate)+" - "),a("span",{staticClass:"myName"},[e._v(e._s(e.myName))])])])],1)],1)},Ee=[],je={name:"Footer",data:function(){return{myName:"Jordan Soares"}},computed:{footerDate:function(){var e=new Date;return e.getMonth()+1+"/"+e.getFullYear()}}},$e=je,Oe=(a("3e34"),a("553a")),Ae=Object(p["a"])($e,Te,Ee,!1,null,"9a639abc",null),Fe=Ae.exports;f()(Ae,{VCol:T["a"],VFooter:Oe["a"]});var Pe={name:"App",components:{Home:Ce,Footer:Fe},data:function(){return{langs:[{name:"gb",i18n:"en"},{name:"fr",i18n:"fr"}],isOnTop:!0,mainSocials:[{icon:"linkedin",url:"https://linkedin.com/in/jordan-soares-dev-web"},{icon:"github",url:"https://github.com/JordanSOA/vue-page"}]}},methods:{changeLang:function(e){Se.locale=e},onScroll:function(e){this.isOnTop=!e.target.defaultView.scrollY},openLink:function(e){var t=this.mainSocials.filter((function(t){return t.icon==e}))[0];window.open(t.url)}},created:function(){this.darkMode=this.$vuetify.theme.dark},computed:{dividerColor:function(){return this.$vuetify.theme.dark?this.$vuetify.theme.themes.dark.primary:this.$vuetify.theme.themes.light.primary}}},Me=Pe,De=(a("1ad8"),a("7496")),Re=a("40dc"),Be=a("ac7c"),Ie=a("cc20"),Je=a("f6c4"),Ne=a("3a2f"),Le=a("269a"),Ue=a.n(Le),qe=a("f977"),Ge=Object(p["a"])(Me,i,r,!1,null,"3cd2266c",null),He=Ge.exports;f()(Ge,{VApp:De["a"],VAppBar:Re["a"],VBtn:b["a"],VCheckbox:Be["a"],VChip:Ie["a"],VDivider:fe["a"],VIcon:I["a"],VMain:Je["a"],VSpacer:N["a"],VTooltip:Ne["a"]}),Ue()(Ge,{Scroll:qe["b"]});var We=a("f309");n["a"].use(We["a"]);var ze=window.matchMedia("(prefers-color-scheme: dark)"),Xe=new We["a"]({theme:{options:{customProperties:!0},dark:ze.matches,themes:{light:{primary:"#542583",secondary:"#FDB827",surface:"#FFFFFF",error:"#f44336",info:"#03a9f4",success:"#4caf50"},dark:{primary:"#FDB827",secondary:"#542583",surface:"#000000",error:"#f44336",info:"#03a9f4",success:"#4caf50"}}}}),Ye=a("d61f");n["a"].use(Ye["a"]),n["a"].config.productionTip=!1,new n["a"]({vuetify:Xe,i18n:Se,render:function(e){return e(He)}}).$mount("#app")},"9f18":function(e,t,a){},b088:function(e,t,a){},b5a1:function(e,t,a){e.exports=a.p+"img/persoPic.5180032d.jpg"},d17b:function(e,t,a){},da00:function(e,t,a){},edd4:function(e){e.exports=JSON.parse('{"greetings":"Greetings dear visitor","lang_FR":"in French","lang_GB":"in English","years":"years","short_description1":"Web Developer, qualified  in \\"Agile Methodologies\\" with 2 years of experience in Front and Back End programming","short_description2":"Results-oriented web developer with the ability to work on the design, development and deployment of web applications from start to finish","warning_sentence1":"Please do not be alarmed by the look of this page. This application will be constantly evolving","warning_sentence2":"Any bug report is welcome","reach_txt":"reach me","what_project":"Halfway between a portfolio and a CV, the prime purpose of this project is to expose information about my background, abilities, hobbies as well as achievements.","copy_cliboard":"Email address copied to clipboard","close_txt":"Close","details_1":"Parisian Region","details_2":"Job Seeking","details_3":"2 years XP","details_4":"Diploma Advanced Technician","details_5":"Agile/SCRUM","details_6":"English C2","abt_me_title":"More details","skills_title":"Skills","socials_title":"Socials","soft_skill1":"Flexibility","soft_skill2":"Accountability","soft_skill3":"Result oriented","soft_skill4":"Patience","soft_skill5":"Communication","other_skill1":"Oriented Object Programming","other_skill2":"Model-View-Controller architecture","other_skill3":"Unit Testing","other_skill4":"Agile-SCRUM","other_skill5":"CI/CD","other_skill6":"RestAPI","others":"others","tools":"Tools","all":"All"}')},f693:function(e){e.exports=JSON.parse('{"greetings":"Salutations chers visiteurs","lang_FR":"en Français","lang_GB":"en Anglais","years":"années","short_description1":"Développeur Web, certifié en \\"Agilité\\" avec 2 ans d\'expérience dans la programmation Front et Back End","short_description2":"Développeur web axé sur les résultats, apte à concevoir, développer et déployer des applications web du début à la fin","warning_sentence1":"Je tiens à rappeler que cette page me sert de terrain d\'exploration. Cette application sera en constante évolution","warning_sentence2":"Tout signalement de bogue est fortement apprécié","reach_txt":"contactez-moi","what_project":"À mi-chemin entre un portfolio et un CV, le principal objectif de ce projet est de présenter des éléments d\'information sur mon parcours, mes capacités, mes loisirs ainsi que mes réalisations.","copy_cliboard":"Adresse électronique copiée dans le presse-papiers","close_txt":"Fermer","details_1":"Ile de France","details_2":"En Recherche","details_3":"2 ans XP ","details_4":"Titre Pro Niv3","details_5":"Agile/SCRUM","details_6":"Anglais C2","abt_me_title":"Plus d’infos","skills_title":"Compétences","socials_title":"Réseaux Sociaux","soft_skill1":"Adaptabilité","soft_skill2":"Responsabilité","soft_skill3":"Orienté résultat","soft_skill4":"Patience","soft_skill5":"Communication","other_skill1":"Programmation Orientée Objet","other_skill2":"Architecture Modèle-Vue-Contrôleur","other_skill3":"Test Unitaire","other_skill4":"Agile-SCRUM","other_skill5":"CI/CD","other_skill6":"RestAPI","others":"autres","tools":"Outils","all":"Tout"}')},facb:function(e,t,a){"use strict";a("4325")}});
//# sourceMappingURL=app.0ac9a2d7.js.map