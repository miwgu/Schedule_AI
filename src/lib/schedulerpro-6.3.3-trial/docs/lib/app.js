var Ot=Object.defineProperty;var Bt=(a,s,e)=>s in a?Ot(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var w=(a,s,e)=>Bt(a,typeof s!="symbol"?s+"":s,e);import{Base as ti,AjaxHelper as Rt,ArrayHelper as ge,BrowserHelper as F,Delayable as si,DomHelper as P,EventHelper as He,Events as ii,Mask as ai,ObjectHelper as ri,Rectangle as Dt,Scroller as ni,Splitter as oi,StringHelper as Ie,TextField as li,Toast as Nt,Tooltip as Pt,VersionHelper as ci,Widget as fe}from"./setup.js";import{Base as jt}from"./setup.js";var Me={category:1,classDescription:1,constructor:1,defaultvalue:1,demo:1,description:1,feature:1,lineno:1,longname:1,name:1,path:1,scope:1,typings:1,examples:1,xes:1,externalExamples:1,nonMixin:1,nonFeature:1,noClassType:1,typingsWidget:1,internalWidget:1,hideConfigs:1,hideProperties:1,hideEvents:1,hideFields:1,hideFunctions:1,hideFeatures:1,extendsconfigs:1,extendsConfigs:1,typingswidget:1,widget:1,uninherit:1},R=class extends jt{static diff(s,e){return this.diffs=[],this.compareArrays(s,e),this.diffs}static compareArrays(s=[],e=[],t=""){typeof s[0]=="object"||typeof e[0]=="object"?(s.forEach(i=>{var n;if(i.access)return;t||(this.currentModule=((n=i.name)==null?void 0:n.split(":")[1])||i.name);let r=e.find(l=>l.name===i.name&&this.isSameScope(l.scope,i.scope));r?this.compareObject(i,r,t+"/"+i.name):this.diffs.push({status:"removed",left:i.name,name:i.name,path:t.split(":")[1]||i.name,module:this.currentModule})}),e.filter(i=>!i.access&&!s.find(r=>i.name===r.name)).forEach(i=>{var n;let r=i.scope==="static";t||(this.currentModule=((n=i.name)==null?void 0:n.split(":")[1])||i.name),this.diffs.push({status:"new",right:this.getDisplayValue(i.name),name:i.name+(r?"-static":""),path:t.split(":")[1]||i.name,module:this.currentModule})})):(e=Array.isArray(e)?e:[e],this.compareValues(s.join(", "),e.join(", "),t))}static isSameScope(s,e){return s=s==="static"?s:"instance",e=e==="static"?e:"instance",s===e}static compareObject(s,e,t){var i,r;if(!((i=s.name)!=null&&i.startsWith("is")&&((r=s.description)!=null&&r.startsWith("Identifies an object as an instance of")))){for(let n in s){if(n in Me||s.access)continue;let l=s[n],o=e[n];!(n in e)&&!Array.isArray(l)?this.diffs.push({status:"removed",name:n,left:l,path:t.split(":")[1],module:this.currentModule}):(n==="returns"?(l=l.type,o=o==null?void 0:o.type):n==="parameters"&&t.match(/functions/)&&(l=l.map(c=>`${c.name}:${c.type}`).join(", "),o=o==null?void 0:o.map(c=>`${c.name}:${c.type}`).join(", ")),this.compareValues(l,o,t+"/"+n))}for(let n in e)n in Me||e.access||(!(n in s)&&!Array.isArray(e[n])?n==="deprecated"?this.diffs.push({status:"deprecated",name:n,path:t.split(":")[1],module:this.currentModule}):n!=="isConfig"&&n!=="isProp"&&this.diffs.push({status:"new",name:n,right:this.getDisplayValue(e[n]),path:t.split(":")[1],module:this.currentModule}):n in s||this.compareValues(s[n]||[],e[n],t+"/"+n))}}static compareValues(s,e,t){if(s!==e){if(Array.isArray(s)){this.compareArrays(s,e,t);return}s!==e&&this.diffs.push({status:"changed",name:t.substr(t.lastIndexOf("/")+1),left:this.getDisplayValue(s),right:this.getDisplayValue(e),path:t.split(":")[1]||t.substr(1),module:this.currentModule})}}static getDisplayValue(s){return Array.isArray(s)?typeof s[0]=="object"?s.map(e=>e.name||e.type||e):s.join(", "):typeof s=="string"&&s.includes("#")?s.split(",").map(t=>t.includes("#")?t.includes(":")?t.replace(/:(.*)#/,":"):t.split("#")[1]:t).join(", "):s}};window.ApiDiffHelper=R;R._$name="ApiDiffHelper";import{GridBase as Wt}from"./setup.js";import{GridRowModel as Vt}from"./setup.js";var V=class extends Vt{static iconForGuide(s){let e=s.split("/"),t={Accessibility:"fas b-fa-universal-access","Alternative icon font":"fas b-fa-font",Angular:"fab b-fa-angular","Build for production":"fas b-fa-cog",Calendars:"fas b-fa-calendar-days","Class system":"fas b-fa-sitemap",Columns:"fas b-fa-table-columns","Catching changes":"fas b-fa-pen","Customize context menus":"fas b-fa-bars","Data binding":"fas b-fa-database","Displaying data":"fas b-fa-table","EcmaScript 6 bundle":"fas b-fa-box","Enabling features":"fas b-fa-wand-magic-sparkles",Events:"fas b-fa-bell","Import from sources":"fas b-fa-file-code",Ionic:"b-logo b-ionic","Listening for events":"fas b-fa-bell","JavaScript + npm":"fab b-fa-js",JavaScript:"fab b-fa-js","Keyboard shortcuts":"fas b-fa-keyboard",Localization:"fas b-fa-language","Multiple products":"fas b-fa-puzzle-piece","Node.js":"fab b-fa-node","Npm repository":"fab b-fa-npm","Preventable events":"fas b-fa-bell-slash",React:"fab b-fa-react","Replace context menus":"fas b-fa-bars","Resource histogram":"fas b-fa-chart-simple","Resource utilization":"fas b-fa-chart-bar",Responsive:"fas b-fa-mobile-screen",Salesforce:"fab b-fa-salesforce","Script tag":"fas b-fa-code",SharePoint:"fab b-fa-microsoft","Sizing the component":"fas b-fa-arrows-left-right-to-line",Debugging:"fas b-fa-bug","Source and demos":"fas b-fa-download","Store specification":"fas b-fa-scroll",Styling:"fas b-fa-palette","Time zone support":"fas b-fa-clock",Troubleshooting:"fas b-fa-bug","Upgrade FA icons to Pro":"fab b-fa-font-awesome-flag",Upgrading:"fas b-fa-circle-up","Using a Store":"fas b-fa-database","Using an AjaxStore":"fas b-fa-cloud","Using remote data":"fas b-fa-cloud","Using tree data":"fas b-fa-folder-tree",Vue:"fab b-fa-vuejs","What's new":"fas b-fa-star",Migrating:"fas b-fa-route"},i="b-icon b-fa-book";for(let r of e)t[r]&&(i=t[r]);return i}get isModule(){return!!this.data.filename}get readableName(){return(this.fullName||this.name).replace(/\//g,".")}get guidesRecords(){let s=[],e=[];return this.traverse(t=>{t.isLeaf&&(t.parent===this?e.push(t):s.push(t))}),[...e,...s]}getGuideCategory(s,e=" - "){let t,i=this.parent;for(;i&&i!==s;)t=`${i.name}${t?`${e}${t}`:""}`,i=i.parent;return t}};w(V,"fields",["access","classDescription","description","deprecated","events","extends","filename","fields","folder","fullName","functions","href","type","isGuide","isGuideGroup","mixins","modulePath","private","props","singleton","virtual","isProp","isConfig","isAPI","isWidget","isView","sortAPIIndex","internalWidget"]);V._$name="DocsClass";var W=class extends Wt{static get configurable(){return{rowHeight:50,animateTreeNodeToggle:!1,hideHeaders:!0,readOnly:!0,emptyText:"",features:{cellEdit:!1,cellMenu:!1,columnAutoWidth:!1,columnPicker:!1,columnResize:!1,group:!1,headerMenu:!1,rowCopyPaste:!1,sort:!1,tree:{expandOnCellClick:!0},quickFind:{mode:"grid"}},store:{tree:!0,modelClass:V,sorters:[{field:"name",ascending:!0,fn(s,e){return!s.isAPI||!e.isAPI?0:s.isLeaf===e.isLeaf?s.sortAPIIndex!=null&&e.sortAPIIndex!=null?s.sortAPIIndex<e.sortAPIIndex?1:-1:null:s.isLeaf?1:-1}}]},columns:[{text:"Name",field:"name",width:150,type:"tree",htmlEncode:!1,indentSize:1,renderer({record:s,cellElement:e,row:t}){return s.data.type&&e.classList.add(s.data.type),t.assignCls({private:s.data.access==="private",deprecated:s.data.deprecated}),s.isModule&&e.classList.add("module"),s.isWidget&&e.classList.add("widget"),s.isView&&e.classList.add("view"),s.name}}]}}buildDocsTree(s){var l;let e=this,t=[],i={};Object.entries(e.navigation).forEach(o=>e.buildNavigationItem(t,o));let r=t.find(o=>o.id==="api");if(s.classes){r.children=[];for(let o of s.classes){o.isAPI=!0;let c=e.getParent(i,r.children,o.folder);c==null||c.children.push(o)}}r.children.forEach(o=>o.sortAPIIndex=window.bryntum.products.indexOf(o.id)),e.store.data=t;let n=e.store.find(o=>o.id==="widgets");n&&(n.appendChild(e.store.query(o=>o.isWidget).map(o=>{let c={...o.data};return c.href=`#widgets/${c.href.substring(1)}`,c.id=`widgets/${c.id}`,c})),(l=n.children)==null||l.sort((o,c)=>o.name.localeCompare(c.name))),window.bryntum.router.adjustStoreLinks(e.store)}getParent(s,e,t){if(!t)return null;if(s[t])return s[t];let i=t.split("/"),r="",n=null;return i.forEach((l,o)=>{r+=l;let c=s[r];c||(c=s[r]={id:r,name:l,children:[],isAPI:!0},n&&n.children.push(c),o===0&&e.push(c)),n=c,r+="/"}),n}buildNavigationItem(s,e,t){let[i,r]=e,n=!t,l=typeof r=="object",o=t?`${t.fullName}/`:"",c=l?`${o}${i}`:r,p=c.toLowerCase().replace(/['` ./]/g,"-"),u={fullName:c,name:i,iconCls:n?null:l?"":V.iconForGuide(`${o}${i}`),cls:"guide"+(n?" first-level":"")};l?(u.children=[],u.isGuide=!0,u.isGuideGroup=!0,u.id=p,u.href=`#${p}`,Object.entries(r).forEach(m=>{this.buildNavigationItem(u.children,m,u)})):r==="#engine"?(u.id="engineDocs",u.href="./engine/",u.target="_blank",u.iconCls="b-icon b-fa-external-link-alt"):r.startsWith("#")?(u.id=r.replace("#",""),u.href=r,u.fullName=i):(u.id=r,u.href=`#${r}`,u.isGuide=!0,u.isVersionHistory=r.endsWith("changelog.md")),s.push(u)}};w(W,"type","navigationtree"),w(W,"$name","NavigationTree");W._$name="NavigationTree";import{Container as _t}from"./setup.js";var z=class extends _t{static get configurable(){var s;return{adopt:"tools",settings:null,items:[{tag:"a",id:"upgradesButton",cls:"b-upgrade-guide-button",html:"Upgrades",elementAttributes:{href:"#upgrade-guide"}},{tag:"a",html:"Support",elementAttributes:{href:`${window.bryntum.host}/support/`}},{tag:"a",ref:"examplesLink",html:"Examples",elementAttributes:{href:"../examples",target:"_blank"}},{tag:"a",id:"guidesLink",ref:"guidesLink",html:"Guides",elementAttributes:{href:"#guides"}},{type:"button",id:"menu-button",ref:"showMembersButton",ariaLabel:"Menu",text:"Show",cls:"b-transparent",ripple:null,menu:{ref:"showMembersMenu",width:270,anchor:!0,items:[{ref:"showPublic",name:"showPublic",checked:!0,text:"Show public members"},{ref:"showInternal",name:"showInternal",checked:!1,text:"Show internal members"},{ref:"showPrivate",name:"showPrivate",checked:!1,text:"Show private members"},{ref:"showInherited",name:"showInherited",checked:!0,text:"Show inherited members",separator:!0},{ref:"showAdvanced",name:"showAdvanced",checked:!1,text:"Show advanced APIs",separator:!0},{ref:"groupMembers",name:"groupMembers",checked:!0,text:"Group members",separator:!0}],onToggle:"up.onShowMenuItemToggle",onBeforeShow:"up.onBeforeShowMenuShow"}},{id:"downloadTrial",type:"button",html:"Free Trial",cls:"b-raised b-green",hidden:!((s=window.bryntum.router)!=null&&s.isOnline),href:`${window.location.origin}/download/`}]}}onShowMenuItemToggle({source:s}){if(s.isVisible){let e={};s.owner.items.forEach(t=>{e[t.name]=t.checked}),this.trigger("settingsChange",{settings:e})}}onBeforeShowMenuShow(){let{settings:s}=this,e=this.widgetMap.showMembersButton.menu.widgetMap;e.showPublic.checked=s.showPublic,e.showInternal.checked=s.showInternal,e.showPrivate.checked=s.showPrivate,e.showAdvanced.checked=s.showAdvanced,e.showInherited.checked=s.showInherited,e.groupMembers.checked=s.groupMembers}};w(z,"$name","Tools");z._$name="Tools";import{Container as Ut,Store as je,TemplateHelper as Pe,DomSync as Re,VersionHelper as $e,StringHelper as Jt}from"./setup.js";import{Widget as qt}from"./setup.js";var Q=class extends qt{compose(){return{class:"search-placeholder",tabindex:0,children:[{children:[{tag:"i",class:"b-icon b-fa b-fa-search"},{tag:"span",html:"Quick search..."}]},{tag:"span",class:"search-shortcut",html:"/"}],listeners:{click:"showSearch",keydown:s=>{s.key==="Enter"&&this.showSearch()}}}}showSearch(){this.parent.showSearch()}};w(Q,"$name","SearchPlaceholder");Q._$name="SearchPlaceholder";import{StringHelper as Gt}from"./setup.js";var ye=(a,s)=>a.every(e=>s.includes(e)),be=(a,s,e)=>e(a)&&!e(s)?-1:!e(a)&&e(s)?1:0,De=(a,s,e)=>{let t;if((t=be(a.type,s.type,i=>i==="class"))!==0)return t;if(e=e.toLowerCase().trim(),e!==""){let i=a.title.toLowerCase(),r=s.title.toLowerCase();if((t=be(i,r,n=>n===e))!==0)return t;if(e.includes(" ")){let n=e.split(" ");if((t=be(i,r,l=>ye(n,l)))!==0)return t}}return a.fullName<s.fullName?-1:1},_=({description:a})=>{var s,e;if(a)return a.startsWith("<h2>Summary</h2>")?a.substring(16,280).replaceAll(/<.*?>/g,""):((e=(s=a.replaceAll(`
`," ").match(/<p>(.*?)<\/p>/))==null?void 0:s[1])==null?void 0:e.replaceAll(/<.*?>/g,""))||a.substring(0,160).replaceAll(/<.*?>/g,"")},Ne=(a,s,e)=>{var i,r,n,l,o,c;let t=[];for(let p of a.classes)if(p.access==="private"&&e.showPrivate||p.access==="internal"&&e.showInternal||(p.access==="public"||!p.access)&&e.showPublic){let u=p.fullName.replace(/\./g,"/");t.push({type:"class",cls:p.type,data:p,title:p.name,clsFullName:u,fullName:u,hash:p.fullName,deprecated:p.deprecated,description:_(p),isWidget:p.isWidget,isView:p.isView}),(i=p.functions)==null||i.forEach(m=>{m.hide||t.push({type:"function",data:p,title:m.name,clsFullName:u,fullName:u+"."+m.name,scope:m.scope,hash:p.fullName+"#function-"+m.name+(m.scope==="static"?"-static":""),deprecated:m.deprecated,description:_(m)})}),(r=p.configs)==null||r.forEach(m=>{m.hide||t.push({type:"config",data:p,title:m.name,clsFullName:u,fullName:u+"."+m.name,hash:p.fullName+"#config-"+m.name,deprecated:m.deprecated,description:_(m)})}),(n=p.fields)==null||n.forEach(m=>{m.hide||t.push({type:"field",data:p,title:m.name,clsFullName:u,fullName:u+"."+m.name,hash:p.fullName+"#field-"+m.name,deprecated:m.deprecated,description:_(m)})}),(l=p.properties)==null||l.forEach(m=>{m.hide||t.push({type:"property",data:p,title:m.name,clsFullName:u,fullName:u+"."+m.name,scope:m.scope,hash:p.fullName+"#property-"+m.name+(m.scope==="static"?"-static":""),deprecated:m.deprecated,description:_(m)})}),(o=p.events)==null||o.forEach(m=>{let{name:h}=m;if(!m.hide){t.push({type:"event",data:p,title:h,clsFullName:u,fullName:u+"."+h,hash:p.fullName+"#event-"+h,deprecated:m.deprecated,description:_(m)});let d="on"+Gt.capitalize(h);t.push({type:"function",data:p,title:d,clsFullName:u,fullName:u+"."+d,hash:p.fullName+"#eventhandler-"+d,deprecated:m.deprecated,description:_(m)})}}),(c=p.typedefs)==null||c.forEach(m=>{m.hide||t.push({type:"typedef",data:p,title:m.name,clsFullName:u,fullName:u+"."+m.name,hash:p.fullName+"#typedef-"+m.name,deprecated:m.deprecated,description:_(m)})})}return t.push.apply(t,s.map((p,u)=>{var f,g,y;let m=(f=p.parent)==null?void 0:f.name,h=(y=(g=p.parent)==null?void 0:g.parent)==null?void 0:y.name,d;return!m&&!h?d=p.name:!h&&m?d=`${m}: ${p.name} `:h&&m&&(d=`${h}: ${m} - ${p.name} `),{type:"guide",data:p,iconCls:"b-fa b-fa-book",title:d,fullName:p.name,hash:p.data.id}})),t};var q=new je,zt=new Q,{liteClient:Qt}=window["algoliasearch/lite"],Oe=Qt(window.bryntum.algoliaAppId,window.bryntum.algoliaSearchApiKey),pe=`${window.VersionHelper.getVersion(window.product)}_index`,Be=a=>({results:a.map(()=>({hits:[],nbHits:0,nbPages:0,page:0,processingTimeMS:0,hitsPerPage:0,exhaustiveNbHits:!1,query:"",params:""}))}),Kt={...Oe,search(a){return a.every(({params:s})=>!s.query)?($e.isTestEnv&&(window.bryntum.algoliaEmptySearchBlocked=!0),Promise.resolve(Be(a))):Oe.search(a).catch(s=>{if(s.message&&!/^Index.*does not exist$/i.test(s.message))return console.warn("Failed to fetch results, switching to offline results. Check if you have the latest version of Bryntum documentation and are connected to the internet to access online results.",s),Promise.resolve(Be(a))})}},O=instantsearch({indexName:pe,searchClient:Kt,insights:!1,future:{preserveSharedStateOnUnmount:!0}}),ve={api:"API Docs",guide:"Guides",example:"Examples",offline:"Offline Results"},Yt=a=>a.map(s=>({id:s,label:ve[s]})),we=(a,s)=>{try{return new URL(a,s)}catch(e){return{}}},G=class extends Ut{construct(s){super.construct(...arguments);let e=this,{widgetMap:t}=e,{searchField:i,globalSearch:r,searchCategories:n,searchLoadingIndicator:l,searchPreSearch:o}=t,c=window.bryntum.docVersion||"1.0.0";localStorage.getItem("bryntumDocVersion")!==c&&(localStorage.removeItem("recentRecords"),localStorage.removeItem("recentSearchQueries"),localStorage.setItem("bryntumDocVersion",c)),o.on({paint(){e.router.adjustDomLinks()}}),q.on({filter(){q.sort({fn(u,m){return De(m,u,i.value)},ascending:!1})}}),e.initializeOnlineSearch(),r.on("show",()=>i.focus()),i.on({thisObj:e,input:{fn:({value:u})=>{e.onSearchInput(u)},throttle:200},clear:()=>e.onSearchInput("")}),n.on("beforeItem",u=>e.onCategoryClick(u)),O.on("render",()=>{O.status==="loading"||O.status==="stalled"?l.show():l.hide()}),e.searchInstance=O,window.addEventListener("hashchange",()=>e.exitMemberFilterMode())}isOnline(){return $e.isTestEnv&&window.bryntum.algoliaOfflineMode===!0?!1:navigator.onLine}onSearchInput(s){let{offlineSearchHits:e,onlineSearchHits:t}=this.widgetMap;!navigator.onLine&&!e.isVisible&&(e.show(),t.hide()),this.onlineSearch(s),this.offlineSearch(s),this.showHideWidgets(s)}onCategoryClick({record:s}){let{offlineSearchHits:e,onlineSearchHits:t,searchCategories:i}=this.widgetMap,r=i.selected.includes(s.id);return s.id==="offline"&&!e.isVisible?(t.hide(),e.show()):s.id==="offline"&&e.isVisible?(e.hide(),t.show(),i.deselectAll()):s.id!=="offline"&&(e.hide(),t.show(),this.onlineCategoryClickFunction(s.id)),i.deselectAll(),r||i.select(s.id),!1}initializeOnlineSearch(){let s=this,{widgetMap:e,settings:t}=s,{searchCategories:i,onlineSearchHits:r,offlineSearchHits:n}=e,{connectSearchBox:l,connectMenu:o,connectRefinementList:c,connectInfiniteHits:p}=instantsearch.connectors,u=l((f,g)=>{g&&(s.onlineSearch=f.refine)}),m=o((f,g)=>{let{items:y,refine:b}=f;g&&(s.onlineCategoryClickFunction=T=>{i.deselectAll(),b(T)}),s.updateCategories(y)}),h=c(f=>{let{items:g,refine:y}=f;["public","private","internal"].forEach(b=>{let T=t["show"+b.charAt(0).toUpperCase()+b.slice(1)],E=g.find(S=>S.value===b);E&&E.isRefined!==T&&y(b)})}),d=p((f,g)=>{let{hits:y,isLastPage:b,showMore:T,instantSearchInstance:E}=f,S=E.renderState[pe].searchBox.query,$=[...y];if(g&&(s.showMoreFunction=()=>{s.onlineSearchHitsNumOfItems=r.items.length-1,T()}),!i.selected.includes("offline")&&!r.isVisible&&(r.show(),n.hide()),$.length===0&&O.status==="idle"&&S.length>0&&($.push({recordType:"noResults"}),r.hide(),n.show()),!b&&$.length>=20&&$.push({recordType:"showMore"}),r.items=$,s.onlineSearchHitsNumOfItems&&y.length>s.onlineSearchHitsNumOfItems){let v=r.getItem(s.onlineSearchHitsNumOfItems);r.navigator.changeActiveItem(v),v.focus(),s.onlineSearchHitsNumOfItems=null}s.router.adjustDomLinks()});O.addWidgets([instantsearch.widgets.configure({filters:`product:${window.productName.toLowerCase()}`}),u(),m({attribute:"category"}),d(),h({attribute:"access"})]),O.start()}showSearch(){let s=this,{widgetMap:e,memberFilterMode:t,owner:i}=s,{globalSearch:r,searchField:n,searchCategories:l}=e;s.currentHistoryIndex=-1,t&&(n.value=i.memberFilter.value),l.deselectAll(),r.show(),this.showHideWidgets("")}async hideSearch(s=!0){let{isOnline:e,widgetMap:t,memberFilterMode:i,onlineSearchInitialized:r}=this,{globalSearch:n,searchField:l}=t;s&&!i&&(l.value="",this.showHideWidgets(""),e()&&r&&O.setUiState({[pe]:{query:""}})),n.hide()}showHideWidgets(s){let{globalSearch:e,searchCategories:t,onlineSearchHits:i,offlineSearchHits:r,searchPreSearch:n}=this.widgetMap;s.length<1?(t.hide(),i.hide(),r.hide(),this.memberFilterMode||n.show(),e.contentElement.style.overflowY="scroll"):(t.show(),t.selected.includes("offline")?(r.show(),i.hide()):(r.hide(),i.show()),n.hide(),e.contentElement.style.overflowY="")}updateSearchQuery(s){let{widgetMap:e}=this,{searchField:t}=e;t.value=s,O.setUiState({[pe]:{query:s}}),this.showHideWidgets(s)}prevQuery(){let s=this,e=JSON.parse(localStorage.getItem("recentSearchQueries"))||[];s.currentHistoryIndex<e.length-1&&(s.currentHistoryIndex++,s.updateSearchQuery(e[s.currentHistoryIndex]))}nextQuery(){let s=this,e=JSON.parse(localStorage.getItem("recentSearchQueries"))||[];s.currentHistoryIndex>0?(s.currentHistoryIndex--,s.updateSearchQuery(e[s.currentHistoryIndex])):s.currentHistoryIndex===0&&(s.currentHistoryIndex--,s.updateSearchQuery(""))}offlineSearch(s){let{offlineSearchHits:e}=this.widgetMap;q.filter({id:"offlineFilter",filterBy:t=>{let i=s.toLowerCase().trim();return i.length<1?!1:i.length<3?t.title.toLowerCase()===i:ye(i.split(" "),t.fullName.toLowerCase())}}),q.count===0?e.items=[{recordType:"noResults"}]:e.items=q.records}updateCategories(s){let e=["api","guide","example"],t=[],i=[],{searchCategories:r}=this.widgetMap,n=new Map(s.map(l=>[l.value,l]));e.forEach(l=>{let o=n.get(l)||{count:0,isRefined:!1};o.count>0&&(t.push({id:l,label:ve[l],count:o.count}),o.isRefined&&i.push(l))}),t.push({id:"offline",label:`${ve.offline}`,count:q.count}),r.items=t,r.selected=i}preSearchTemplate(s,e,t){if(s.isGroupHeader)return t.constructor.prototype.itemWrapperTpl.call(t,...arguments);if(s.data.recordType==="Suggested"){let{data:i}=s,r=i.hash||i.path,n=r?`${r.startsWith("#")?"":"#"}${r}`:i.href,l=we(n,location),o=l.origin!==location.origin||l.pathname!==location.pathname,c=`class="${t.getItemClasses(s,e)} suggested-item"`,p=o?`href="${n||"#"}" target="_blank rel="noopener"`:`href="${n}"`,u=`${c} role="option" ${p} aria-selected="${t.selected.includes(s)}" data-index="${e}" data-id="${s.id}"`,{icon:m,title:h,description:d}=i;return`
                <a ${u}>
                    <div class="icon">
                        <i class="b-fa ${m}"></i>
                    </div>
                    <div class="inner">
                        <div class="header">
                            <span class="title">${h}</span>
                        </div>
                        <div class="description">${d}</div>
                    </div>
                </a>
            `}else return this.hitItemTemplate(...arguments)}hitItemTemplate(s,e,t=this.widgetMap.onlineSearchHits){let{data:i}=s,r=i.hash||i.path,n=r?r.startsWith("#")||r.startsWith("../")||r.startsWith("./")||r.startsWith("/")?r:"#"+r:i.href,l=we(n,location),o=l.origin!==location.origin||l.pathname!==location.pathname,c=`${t.getItemClasses(s,e)}`,p=o?`href="${n||"#"}" target="_blank rel="noopener"`:`href="${n}"`,u=i.recordType==="noResults"||i.recordType==="showMore",m=`role="option" ${u?"":p} aria-selected="${t.selected.includes(s)}" data-index="${e}" data-id="${s.id}"`,h=C=>{let L=C!=null?C:"";return Jt.encodeHtml(L.replace(/&quot;/g,'"'))},d=C=>{let{title:L,clsFullName:j,type:N}=C;return Pe.docsTpl`
                <a ${m} class="${c} recentSearch hit" data-noselect="true">
                    <div class="hit-header">
                        <div class="left">
                            <span class="hit-title">${L}</span>
                            <span class="hit-path">${j}</span>
                        </div>
                        <span class="hit-badge ${N}">${N[0].toUpperCase()+N.slice(1)}</span>
                    </div>
                </a>`};if(i.recordType==="noResults")return`<a ${m} class="${c} hit no-results">No results found</a>`;let{recordType:f,category:g,path:y,title:b,access:T,type:E,description:S,isRecentSearch:$,image:v,parentName:H}=i;if(f==="showMore")return`
                <a ${m} class="${c} showMoreButton">Show More</a>
            `;if(g==="api"){if($)return d(i);let C=y.replace(/#.*?-(.*)/,"/$1");return`
                <a ${m} class="${c} hit">
                    <div class="hit-header">
                        <div class="left">
                            <span class="hit-title">${b}</span>
                            <span class="hit-path">${C}</span>
                        </div>
                        ${T!=="public"?`<span class="hit-badge">${T[0].toUpperCase()+T.slice(1)}</span>`:""}
                        <span class="hit-badge ${E}">${E[0].toUpperCase()+E.slice(1)}</span>
                    </div>
                    <div class="hit-description">${h(S)}</div>
                </a>`}else if(g==="example"){let C=[],L=b.toLowerCase();["react","vite","vue","angular"].forEach(N=>{L.includes(N)&&C.push(`data/Core/images/logo/${N}.svg`)}),C.length||C.push("data/Core/images/logo/js.svg");let j=C.map(N=>`<img class="framework-badge" src="${N}"/>`).join(" ");return $?`
                    <a ${m} class="${c} hit recentSearch">
                        <div class="hit-header">
                            <span class="hit-title">${b}</span>
                            ${j}
                            <span class="hit-badge example">Example</span>
                        </div>
                    </a>`:`
                    <a ${m} class="${c} hit with-image">
                        <div class="hit-image-container">
                            ${$e.isTestEnv?"":`<img src="${v}"/>`}
                        </div>
                        <div class="hit-content">
                            <div class="hit-header">
                                <span class="hit-title">${b}</span>
                                ${j}
                                <span class="hit-badge example">Example</span>
                            </div>
                            <div class="hit-description">${h(S)}</div>
                        </div>
                    </a>`}else if(g==="guide"){if($)return d(i);let C=H===b||!b,L=C?H:`${H} > ${b}`;return`
                <a ${m} class="${c} hit">
                    <div class="hit-header">
                        <span class="hit-title">${L}</span>
                        <span class="hit-badge guide">Guide</span>
                    </div>
                    <div class="hit-description">${h(S)}</div>
                </a>`}else{if($)return d(i);let{title:C,clsFullName:L,type:j,description:N}=i;return Pe.docsTpl`
                <a ${m} class="${c} hit" data-noselect="true" data-is-offline-record="true">
                    <div class="hit-header">
                        <div class="left">
                            <span class="hit-title">${C}</span>
                            <span class="hit-path">${L}</span>
                        </div>
                        <span class="hit-badge ${j}">${j[0].toUpperCase()+j.slice(1)}</span>
                    </div>
                    <div class="hit-description">${h(N)}</div>
                </a>`}}handleSearchFieldFocusOnArrowUp(s){return s.key==="ArrowUp"&&s.target.closest("a:nth-of-type(1)")?(this.widgetMap.searchField.focus(),!1):s}onHitEnterKey(s,{owner:e},t){t.click()}onHitClick({record:s,event:e}){var r;let t=this,i=we((r=e.target.closest("a"))==null?void 0:r.href);if(s.data.recordType!=="noResults"){if(s.data.recordType==="showMore"){t.showMoreFunction();return}if(i){let{hash:n}=i,l=window.location.hash===n;s.data.recordType!=="Suggested"&&(t.updateRecentHits(s),t.updateSearchHistory(s)),l&&window.dispatchEvent(new Event("hashchange")),t.widgetMap.searchField.clear(),t.hideSearch()}}}updateSearchHistory(s){let{searchField:e}=this.widgetMap,t=s.originalData,i=e.value;if(t.isRecentSearch||i.length<1)return;let r=JSON.parse(localStorage.getItem("recentSearchQueries"))||[],n=r.findIndex(l=>l===i);n!==-1&&r.splice(n,1),r.unshift(i),r=r.slice(0,10),localStorage.setItem("recentSearchQueries",JSON.stringify(r))}updateRecentHits(s){var h;let{path:e,hash:t,title:i,parentName:r,type:n,category:l,description:o,access:c}=s.originalData,p={recordType:"Recent Searches",path:e||t,hash:e||t,type:n||l,category:l||null,title:i||r,description:o,access:c||null,isRecentSearch:!0},u=((h=JSON.parse(localStorage.getItem("recentRecords")))==null?void 0:h[window.productName])||[],m=u.findIndex(d=>d.hash===p.hash||d.path===p.path);m!==-1&&u.splice(m,1),u.unshift(p),u=u.slice(0,5),localStorage.setItem("recentRecords",JSON.stringify({...JSON.parse(localStorage.getItem("recentRecords")),[window.productName]:u}))}async toggleMemberFilterMode(){let s=this,{widgetMap:e,owner:t,memberFilterMode:i}=s,{searchCategories:r,onlineSearchHits:n,searchPreSearch:l,globalSearch:o,searchField:c}=e;t.currentRecord.isAPI&&(i?(await s.exitMemberFilterMode(),await s.hideSearch(!1),s.showSearch(),c.focus()):(r.hide(),n.hide(),l.hide(),Re.addCls("transparent",o.modalMask),s.memberFilterMode=!0,c.label=document.title.split("|")[0].trim(),s.memberListener=c.addListener({thisObj:s,prio:1e3,input:{fn({value:p}){return t.memberFilter.value=p,!1}}})),s.updateShortcuts())}updateShortcuts(){var e,t;let s;this.memberFilterMode?s=`
            <span>
                <kbd>${navigator.platform.includes("Mac")?"\u2318":"Ctrl"}</kbd>+<kbd>/</kbd> to exit filtering 
            </span>
        `:(s=`
                <span>
                    <kbd>Enter</kbd> to select 
                </span>
                <span>
                    <kbd><i class="icon b-fa b-fa-arrow-up"></i></kbd>/<kbd><i class="icon b-fa b-fa-arrow-down"></i></kbd> to navigate 
                </span>
                <span>
                    <kbd>${navigator.platform.includes("Mac")?"\u2318":"Ctrl"}</kbd>+<kbd><i class="icon b-fa b-fa-arrow-up"></i></kbd>/<kbd><i class="icon b-fa b-fa-arrow-down"></i></kbd> for previous/next query
                </span>
            `,(t=(e=this.owner)==null?void 0:e.currentRecord)!=null&&t.isAPI&&(s+=`
                <span>
                    <kbd>${navigator.platform.includes("Mac")?"\u2318":"Ctrl"}</kbd>+<kbd>/</kbd> to filter
                </span>
            `)),this.widgetMap.searchShortcuts.html=s}generateSearchItems(s,e,t){q.data=Ne(s,e,t)}exitMemberFilterMode(){let s=this,{widgetMap:e}=s,{globalSearch:t,searchField:i}=e;s.showHideWidgets(""),t.bbar.show(),t.isVisible&&Re.removeCls("transparent",t.modalMask),i.label=!1,s.memberFilterMode=!1,s.memberListener&&(s.memberListener(),s.memberListener=null)}};w(G,"$name","Search"),w(G,"configurable",{adopt:"search",offlineSearchStore:q,searchInstance:null,onlineSearch:null,onlineCategoryClickFunction:null,currentHistoryIndex:-1,memberFilterMode:!1,memberListener:null,items:[zt,{type:"popup",ref:"globalSearch",autoShow:!1,focusable:!1,floating:!1,centered:!1,cls:"global-search",contentElementCls:"global-search__inner",showMoreFunction:null,onlineSearchHitsNumOfItems:null,layout:"vbox",modal:{closeOnMaskTap:!0},keyMap:{"Ctrl+ArrowUp":"up.prevQuery","Ctrl+ArrowDown":"up.nextQuery","Ctrl+/":"up.toggleMemberFilterMode",Escape:"up.hideSearch"},listeners:{beforeShow:({source:s})=>{s.owner.updateShortcuts()},beforeClose:"up.hideSearch"},tbar:{contentElementCls:"global-search__top-bar",items:[{cls:"b-fa b-fa-search",tag:"i",type:"widget"},{cls:"global-search__input",ref:"searchField",type:"textfield",placeholder:"Search documentation...",keyMap:{ArrowDown(){let s=this.up("popup").query(t=>t.isList&&!t.isChipView&&t.isVisible),e=s.store.find(t=>!t.isGroupHeader);s.navigator.activeItem=e}}},{type:"widget",ref:"searchLoadingIndicator",cls:"loading-indicator b-fa b-fa-spinner b-fa-spin",tag:"i",hidden:!0},{type:"widget",ref:"searchOfflineStatus",cls:"offline-status",html:"Offline",hidden:!0,tooltip:"You're offline, search results are limited"},{ref:"closeShortcut",cls:"esc-shortcut",html:"<kbd>Esc</kbd>",type:"button",onClick:"up.hideSearch"}]},items:{searchCategories:{type:"chipview",cls:"global-search__categories",closable:!1,valueField:"id",displayField:"label",hidden:!0,items:Yt(["api","guide","example","offline"]),itemTpl:s=>`${s.label} <span class="global-search__categories__count">${s.data.count}</span>`},onlineSearchHits:{type:"list",cls:"global-search__list",itemWrapperTpl:"up.hitItemTemplate",displayField:"title",valueField:"path",onItem:"up.onHitClick",tag:"div",hidden:!0,virtualize:200,itemsTabbable:!0,navigator:{itemSelector:"a.b-list-item",processEvent:"up.handleSearchFieldFocusOnArrowUp",keys:{Enter:"up.onHitEnterKey"}}},offlineSearchHits:{type:"list",cls:"global-search__list",itemWrapperTpl:"up.hitItemTemplate",displayField:"title",valueField:"path",onItem:"up.onHitClick",tag:"div",hidden:!0,virtualize:200,itemsTabbable:!0,navigator:{itemSelector:"a.b-list-item",processEvent:"up.handleSearchFieldFocusOnArrowUp",keys:{Enter:"up.onHitEnterKey"}}},searchPreSearch:{type:"list",cls:"global-search__list preSearch",onItem:"up.onHitClick",tag:"div",itemWrapperTpl:"up.preSearchTemplate",allowGroupSelect:!1,itemsTabbable:!0,navigator:{itemSelector:"a.b-list-item",processEvent:"up.handleSearchFieldFocusOnArrowUp",keys:{Enter:"up.onHitEnterKey"}},onPaint({source:s}){var e;s.store=new je({field:"recordType",groupers:[{field:"recordType",ascending:!0}],data:[...((e=JSON.parse(localStorage.getItem("recentRecords")))==null?void 0:e[window.productName])||[],{recordType:"Suggested",title:"Examples",description:"Discover sample use cases and applications",icon:"b-fa-laptop-code",href:"../examples"},{recordType:"Suggested",title:"Guides",description:"Start your journey with our easy-to-follow guides",icon:"b-fa-book",href:"#guides"},{recordType:"Suggested",title:"Videos",description:"Watch our tutorials for step-by-step instructions",icon:"b-fa-youtube",href:"https://www.youtube.com/@Bryntum"}]})}}},bbar:{contentElementCls:"global-search__bottom-bar",items:[{ref:"searchShortcuts",type:"widget",tag:"p"}]}}],testConfig:{showAnimation:!1,hideAnimation:!1}});G._$name="Search";import{AjaxHelper as We,DomHelper as ss,Fullscreen as ue,GridBase as is,StringHelper as _e,Toast as as,VersionHelper as qe}from"./setup.js";import{Combo as Zt}from"./setup.js";var ae=class extends Zt{static get configurable(){return{type:"combo",editable:!1,valueField:"name",displayField:"name",width:100,pickerWidth:200}}};w(ae,"$name","ReleaseCombo"),w(ae,"type","releasecombo");ae.initClass();import{Column as Xt,ColumnStore as es,StringHelper as Ve}from"./setup.js";var Z=class extends Xt{static get defaults(){return{flex:1,htmlEncode:!1,renderer({value:s,record:e,isExport:t}){if(!e.isSpecialRow)return String(s)==="[object Object]"&&(s.type?s=s.type:s.name?s=s.name:s=Ve.safeJsonStringify(s)),s===void 0?"":t?s:`<div class="valuewrap">${Ve.encodeHtml(s)}</div>`}}}};w(Z,"type","value");es.registerColumnType(Z,!0);Z._$name="ValueColumn";import{AjaxStore as ts}from"./setup.js";var X=class extends ts{static get configurable(){return{fields:[{name:"id",dataSource:"name"},"name",{name:"date",type:"date"}],currentVersion:null,sorters:[{field:"date",ascending:!1}],readUrl:"https://bryntum.com/dist/docs/api/releases/",fetchOptions:{credentials:"omit"}}}get currentRelease(){return this._currentRelease||(this._currentRelease=this.findRecord("name",this.currentVersion)),this._currentRelease}set currentRelease(s){this._currentRelease=this.findRecord("name",s)}get previousRelease(){let s=this.indexOf(this.currentRelease);return this.getAt(s+1)}};X._$name="ReleaseStore";var x=new X,U=class extends is{static get configurable(){return{rowHeight:50,autoHeight:!0,disableAutoHeightWarning:!0,readOnly:!0,enableTextSelection:!0,version:null,docsJsonRoot:qe.isTestEnv?"../tests/docs/docsJsonData":"https://bryntum.com/dist/docs/api",emptyText:"No differences found",errorMaskCloseDelay:4e3,features:{group:{field:"module",groupRenderer:({groupRowFor:s,isFirstColumn:e})=>e&&s},sort:"symbolName",excelExporter:!0,cellTooltip:{hoverDelay:300,textContent:!0,maxWidth:700,tooltipRenderer:({record:s,column:e})=>_e.encodeHtml(String(s[e.field]||s.name))}},tbar:[{type:"releasecombo",ref:"leftCombo",store:x},{type:"widget",style:"margin:0 1em 0 .5em",html:"vs."},{type:"releasecombo",ref:"rightCombo",store:x},{text:"Compare",cls:"b-green",onAction:"up.onCompareClick"},"->",{type:"buttongroup",ref:"statusFilter",items:[{type:"button",text:"Removed",pressed:!0,toggleable:!0,onToggle:"up.onFilterButtonToggle"},{type:"button",text:"Changed",pressed:!0,toggleable:!0,onToggle:"up.onFilterButtonToggle"},{type:"button",text:"New",pressed:!1,toggleable:!0,onToggle:"up.onFilterButtonToggle"}]},{type:"button",tooltip:"Export to Excel",ariaLabel:"Export to Excel",icon:"b-icon b-fa-file-excel",onAction:"up.onExport"},{type:"button",tooltip:"Toggle fullscreen",ariaLabel:"Toggle fullscreen",icon:"b-icon b-fa-expand",onAction:"up.onToggleFullscreen"}],columns:[{id:"status",text:"Status",cellCls:"status",field:"status",htmlEncode:!1,width:110,renderer({value:s,isExport:e}){let t;switch(s){case"new":t="star";break;case"removed":t="trash";break;case"changed":t="pen";break;case"deprecated":t="exclamation-triangle";break}return e?s:`<i class="b-icon b-fa-fw b-fa-${t}"></i>`+_e.encodeHtml(s)}},{text:"Name",field:"symbolName",flex:1,renderer:({record:s,cellElement:e,isExport:t})=>{if(s.isSpecialRow)return;s.memberCategory&&(e==null||e.classList.add(s.memberCategory));let i;return s.status==="deprecated"?s.symbolName:(s.symbolName?i=`${s.symbolName}${s.symbolAttributeName?`->${s.symbolAttributeName}`:""} [${s.name}]`:s.name.endsWith("-static")?i=s.name.replace("-static"," (static)"):i=s.name,i+(t?` [${s.memberCategory}]`:""))}},{type:"value",id:"left",field:"left"},{type:"value",id:"right",field:"right"}],store:{fields:["name","left","right","path","module","symbolName","symbolAttributeName","memberCategory"]},testConfig:{errorMaskCloseDelay:100}}}async construct(){super.construct(...arguments),x.currentVersion=this.version,x.on({load:"onReleasesLoaded",thisObj:this}),x.load({id:this.productId}).then(()=>{})}async compareToPrevious(s){var e,t;x.count>0?(x.currentRelease=s,await this.compare((e=x.currentRelease)==null?void 0:e.name,(t=x.previousRelease)==null?void 0:t.name)):this.diffVersion=s}async onReleasesLoaded(){var s,e;if(this.diffVersion&&(x.currentRelease=this.diffVersion,this.diffVersion=null),window.bryntum.isOnline)x.filter(t=>!t.name.match(/-(alpha|beta|rc)/));else{let t=await We.fetch(`data/docs_${this.productId}.js`),i=await t.text();qe.isTestEnv||(x.insert(0,{name:"latest",date:new Date}),x.currentRelease="latest",x.currentRelease.docs=this.prepareDocsJson(JSON.parse(i.substr(16))),x.sort())}x.count<2?(this.store.removeAll(),this.tbar.eachWidget(t=>t.disable())):(this.tbar.eachWidget(t=>t.enable()),await this.compare((s=x.currentRelease)==null?void 0:s.name,(e=x.previousRelease)==null?void 0:e.name))}async compare(s,e){let t=this;if(t.store.removeAll(),!s||!e)return;t.mask("Loading");let{leftCombo:i,rightCombo:r}=t.widgetMap,n=t.loadDocs(s),l=t.loadDocs(e),[o,c]=await Promise.all([n,l]);if(i.value=s,r.value=e,!o){t.mask({text:s+" could not be loaded",icon:"b-icon b-icon-warning",autoClose:t.errorMaskCloseDelay});return}if(!c){t.mask({text:e+" could not be loaded",icon:"b-icon b-icon-warning",autoClose:t.errorMaskCloseDelay});return}let p=s<e?o:c,u=s>e?o:c,m=R.diff(p.classes,u.classes);t.unmask();let h=t.columns.getById("left"),d=t.columns.getById("right");h.text=s,d.text=e,s<e?(h.field="left",d.field="right"):(h.field="right",d.field="left"),t.data=t.processDiff(m),t.applyFilters()}prepareDocsJson(s){var t;let e=i=>{i.modulePath&&(i.name="module:"+i.modulePath)};return(t=s==null?void 0:s.classes)==null||t.forEach(e),s}async loadDocs(s){let e=x.getById(s);if(!e.docs){let t=await We.fetch(`${this.docsJsonRoot}/${this.productId}/${s}.json`,{parseJson:!0,credentials:"omit"}).catch(i=>{});e.docs=this.prepareDocsJson(t==null?void 0:t.parsedJson)}return e.docs}processDiff(s){return s.map(e=>{var n;let t=/\/properties|\/events|\/configs|\/functions|\/typedefs|\/fields/,i=e.path||"",r=i.split(t);if(e.memberCategory=(n=i.match(t))==null?void 0:n[0].substr(1),r[1]){let l=r[r.length-1].substr(1),o=l.split("/");e.symbolCategory=o.length>1?o.pop():"",e.symbolName=o.join(".")}return e})}async onCompareClick(){let{leftCombo:s,rightCombo:e}=this.widgetMap;s.value===e.value?as.show("Choose two different versions"):await this.compare(s.value,e.value)}onFilterButtonToggle({pressed:s,source:e}){let t=e.text.toLowerCase();s?this.store.removeFilter(t):this.store.filter({id:t,property:"status",operator:"!=",value:e.text.toLowerCase()})}async onExport(){let{leftCombo:s,rightCombo:e}=this.widgetMap;window.zipcelx||await ss.loadScript(window.bryntum.host+"/products/grid/examples/exporttoexcel/zipcelx.js"),this.features.excelExporter.export({filename:`${s.value}-vs-${e.value}`})}async onToggleFullscreen(){this.autoHeight=ue.isFullscreen,ue.isFullscreen?await ue.exit():await ue.request(this.element)}applyFilters(){this.store.filter(this.widgetMap.statusFilter.items.filter(s=>!s.pressed).map(s=>{let e=s.text.toLowerCase();return{id:e,property:"status",operator:"!=",value:e}}))}};w(U,"$name","DiffGrid");window.DiffGrid=U;U._$name="DiffGrid";import{BrowserHelper as Ge}from"./setup.js";var rs="457b99e11a8e92da82ed6e1743dfae4fac71ea3d",ee=class{constructor(s){let e=window.bryntum.isBryntumOnline,t=(()=>{try{let i=window.top.location.href}catch(i){return!0}return!1})();if(super.constructor(...arguments),Object.assign(this,s),e||t||Ge.queryString.RC!=null){let i=document.createElement("script");i.async=!0,i.crossOrigin="anonymous",i.src="https://app.therootcause.io/rootcause-full.js",i.addEventListener("load",this.start.bind(this)),document.head.appendChild(i)}}start(){if(!window.RC){console.log("ERROR: RootCause not initialized");return}this.rootCause=window.logger=new window.RC.Logger({captureScreenshot:!0,recordUserActions:!1,applicationId:rs,autoStart:!0,treatFailedAjaxAsError:!0,treatResourceLoadFailureAsError:!0,version:this.apiVersion,recordSessionVideo:Ge.queryString.video==="1",ignoreErrorMessageRe:/Script error|Unexpected token var|ResizeObserver/i,ignoreFileRe:/^((?!bryntum).)*$/,onBeforeLog(s){if(s.isJsError&&(!s.file||!s.file.includes(".js")||s.file.includes("chrome-extension")))return!1},recorderConfig:{shouldIgnoreDomElementId:s=>/^(b_|b-)/.test(s),ignoreCssClasses:["b-sch-event-hover","b-contains-focus","b-hover","b-dirty","b-focused"]}})}stop(){let{recorder:s}=this.rootCause;s!=null&&s.active&&s.stop()}};ee._$name="ErrorMonitor";import{BrowserHelper as ns,DomHelper as Ce,Fullscreen as Ue,Panel as os,StringHelper as ls,Toast as cs,VersionHelper as Je}from"./setup.js";var M=class extends os{construct(s){s.hideChrome&&(s.tools=s.title=null),super.construct(...arguments),this.update=this.buffer("runCode",this.changeTimeout),s.alignLeft&&this.element.classList.add("alignLeft")}createWidget(){let s=super.createWidget(...arguments);return s.ref==="result"&&(this.resultElement=s.contentElement),s}async onPaint({firstPaint:s}){let e=this;s&&e.url&&(await e.loadDemoCode(e.url,e.sourceUrl,e.autoRun),!e.isDestroyed&&e.codeVisible&&await e.showCode())}onCopyClick(){let s=this.widgetMap.codeEditor.text;ns.copyToClipboard(s)&&cs.show({html:"Code copied to clipboard",rootElement:this.rootElement})}async loadDemoCode(s,e,t=!0){let i=this,{element:r}=i;i.mask({text:"Loading example...",mode:"bright"}),r.dataset.url=s;try{let n=await i.loadResource(i.url),l=await n.text(),o=e?await i.loadResource(e):null,c=i.preloadedSource=o?await o.text():l,{_codeEditor:p}=i;if(i.isDestroyed||!document.body.contains(r))return;if(p){let u=await p.loadText(c);i.readOnly||u.onDidChangeContent(()=>{i.preloadedSource=null,i.codeModified=!0,i.update()}),p.height=`calc(${Math.min(u.getLineCount()+2,25)}em + 120px)`}if(t&&(await i.runCode(l),i.isDestroyed))return;r.classList.add("ready")}catch(n){if(n.name!=="AbortError")throw n}i.unmask()}onCodeChanged(){this.runCode()}async runCode(s=this.preloadedSource||(e=>(e=this.codeEditor)==null?void 0:e.text)()){var n;let t=this,{_codeEditor:i,resultElement:r}=t;if(i){let l=(n=i.monaco)==null?void 0:n.editor.getModelMarkers({});if(l!=null&&l.some(o=>o.severity>1)){i.status="\u26A0 Syntax errors";return}i.status=""}t.element.classList.add("code-executed"),t.destroyWidgets();try{let l=URL.createObjectURL(new Blob([`
                let
                    targetElement=document.getElementById('${r.id}'),
                    fiddle=bryntum.get('${t.id}');
                if (targetElement) { ${s} }
            `],{type:"text/javascript"}));await import(l),t.isDestroyed||(URL.revokeObjectURL(l),t.claimWidgets(),"error"in r.dataset&&t.setTimeout(()=>delete r.dataset.error,300))}catch(l){if(t.codeModified)r.dataset.error=`\u26A0 ${l.message}`;else throw l}}onCodeButtonClick(){this.toggleCodeVisibility()}async toggleCodeVisibility(s=!this._codeEditor||this.codeWrap.classList.contains("hide-code")){var i,r;let e=this.getConfig("codeEditor"),{codeWrap:t}=this;try{await this.codeToggleReady}catch(n){}this.widgetMap.copyCode[s?"show":"hide"](),await(e==null?void 0:e.editorReady),t.classList.toggle("hide-code",!s),s?t.removeAttribute("inert"):t.setAttribute("inert","inert"),await new Promise(n=>requestAnimationFrame(n));try{await(this.codeToggleReady=(i=t.getAnimations()[0])==null?void 0:i.finished)}catch(n){}s&&((r=e.editor)==null||r.focus())}changeCodeEditor(s){return this.createWidget(s)}updateCodeEditor(s){let e=this;e.insert(s,0),e.url&&e.loadDemoCode(e.url,e.sourceUrl,!1)}showCode(){return this.toggleCodeVisibility(!0)}get codeWrap(){return this.widgetMap.codeEditor.element}onFullscreenButtonClick(){Ue.isFullscreen?this.exitFullscreen():this.requestFullscreen()}loadResource(s){return fetch(s+"?version="+this.apiVersion)}async openInCodePen(){let s=this,{productId:e,widgetMap:t,element:i}=s,r=`${window.bryntum.host}/products/${e}`,{codeEditor:n}=t,l;if(n?l=n.text:(await s.loadDemoCode(s.url,s.sourceUrl,!1),l=s.preloadedSource),Je.isTestEnv){t.testCode.element.textContent=l;return}let o=Ce.createElement({tag:"form",style:"display:none",action:"https://codepen.io/pen/define?editors=101",target:"_blank",parent:i,method:"post",children:[{tag:"input",type:"hidden",name:"data",value:ls.safeJsonStringify({title:`${document.getElementById("title").innerText.replace(`
`," ")} Live Demo`,html:['<html lang="en">',"<head>",`  <link rel="stylesheet" href="${r}/build/${e}.material.css" data-bryntum-theme>`,"</head>","<body>","</body>","</html>"].join(`
`),css_external:`${r}/build/${e}.material.css`,js:[`import * as Module from '${r}/build/${e}.module.js';`,"Object.assign(window, Module);",`// The code above imports module bundle and places all Bryntum classes on window to simplify coding at CodePen
`,l.replace(/targetElement/g,"document.body").replace(/(url : +)'(data\/.*?')/gm,`$1'${r}/docs/$2, credentials : 'omit'`).replace(/'data\//gm,`'${r}/docs/data/`)].join(`
`)})}]});o.submit(),o.remove()}claimWidgets(){Ce.children(this.resultElement,"> .b-widget").forEach(s=>{window.Widget.getById(s.id).owner=this})}destroyWidgets(){Ce.children(this.resultElement,"> .b-widget").forEach(s=>{window.Widget.getById(s.id).destroy()}),this.resultElement.innerHTML=""}doDestroy(){this.destroyWidgets(),Ue.unFullscreenChange(this.onFullScreenChange),super.doDestroy()}};w(M,"$name","FiddlePanel"),w(M,"type","fiddlepanel"),w(M,"configurable",{ui:"plain",focusable:!1,codeVisible:!1,url:null,language:"javascript",changeTimeout:400,readOnly:!1,autoRun:!0,hideChrome:!1,title:"LIVE DEMO",tools:{copyCode:{cls:"b-fa b-fa-copy",tooltip:"Copy to clipboard",handler:"up.onCopyClick",hidden:!0},codePen:{tooltip:"Open in CodePen",ariaLabel:"Open in CodePen",cls:"codepen-icon",handler:"up.openInCodePen"},fullScreen:{cls:"b-icon b-fa-expand",tooltip:"Fullscreen",ariaLabel:"Fullscreen",handler:"up.onFullscreenButtonClick"},editCode:{cls:"b-icon b-icon-code",tooltip:"Show code editor",ariaLabel:"Show code editor",handler:"up.onCodeButtonClick"}},items:{result:{type:"widget",cls:"fiddlePanelResult"},...Je.isTestEnv?{testCode:{tag:"div",hidden:!0}}:{}},codeEditor:{$config:"lazy",value:{ref:"codeEditor",height:"20em",codePath:window.bryntum.editorPath,type:"codeeditor",language:"javascript",cls:"codeContainer hide-code",header:!1,theme:"vs-dark",editor:{minimap:{enabled:!1},lineNumbers:!1,fontFamily:"monospace",fontSize:16},bbar:null}}});M.initClass();window.FiddlePanel=M;M._$name="FiddlePanel";import{Tooltip as us}from"./setup.js";import{TemplateHelper as ps}from"./setup.js";import{TemplateHelper as ds}from"./setup.js";var I=a=>ds.docsTpl`
        ${a.access?`<div class="badge access ${a.access}">${a.access}</div>`:""}
        ${a.async?'<div class="badge async">ASYNC</div>':""}
        ${a.calculated?'<div class="badge calculated">CALCULATED</div>':""}
        ${a.deprecated?'<div class="badge deprecated">DEPRECATED</div>':""}
        ${a.preventable?'<div class="badge preventable" data-btip="Preventable: You can return false to prevent the operation">PREVENTABLE</div>':""}
        ${a.propagating?'<div class="badge propagating">PROPAGATING</div>':""}
        ${a.readonly?'<div class="badge access readonly">READONLY</div>':""}
        ${a.onOwner?'<div class="badge on-owner"  data-btip="On-owner: Event fires or method executes on owning component">ON-OWNER</div>':""}
        ${a.onQueue?'<div class="badge on-queue" data-btip="On-queue: Method adds promise to a project queue. Do not await for this method in queue executor">ON-QUEUE</div>':""}
        ${a.fromFeature?`<div class="badge from-feature" data-btip="From-feature: Event, method or config added by feature ${a.fromFeatureName}">FROM-FEATURE</div>`:""}
        ${a.scope==="static"?`<div class="badge scope ${a.scope}">${a.scope}</div>`:""}
        ${a.immutable?'<div class="badge access immutable">IMMUTABLE</div>':""}
        ${a.advanced?'<div class="badge advanced" data-btip="Advanced API, for example for extending / implementing own classes but normally not needed in most applications">ADVANCED</div>':""}
        ${a.generator?'<div class="badge generator">GENERATOR</div>':""}
        ${a.nonLazyLoad?'<div class="badge" title="This is not to be used when the store is configured with `lazyLoad = true` as it may not work as expected">NON-LAZY-LOAD</div>':""}
    `;var ze=a=>ps.docsTpl`
<div class="summary-items ${a.title}">
    ${a.data.map(s=>`
         <a class="summary-item" href="#${a.recordData.fullName}#${a.prefix}-${s.name}${s.scope==="static"?"-static":""}">
             <label class="name">${s.name}</label>
            ${I(s)}
        </a>
    `)}
</div>`;var ms={configs:"config",properties:"property",functions:"function",events:"event",fields:"field",typedefs:"typedef"},K=class extends us{static get configurable(){return{textContent:!1,forElement:document.getElementById("content"),forSelector:".summary > .summary-icon:not(.none)",allowOver:!0,cls:"summary-tooltip",scrollable:{overflowY:!0},header:{dock:"top",cls:"summary-title",titleAlign:"center"},scrollAction:"realign"}}onBeforeShow(){let s=this.activeTarget,e=this.store.getById(window.bryntum.router.id),t=s.id.substring(8);this.populate(e,t)}populate(s,e){let t=this,i=s.data,r={recordData:i,data:i[e].sort((l,o)=>l.name<o.name?-1:1),type:e,prefix:ms[e],title:e.substring(0,1).toUpperCase()+e.substring(1)},{headerElement:n}=t;n.classList.remove(t.contentType),n.classList.add(r.type),t.contentType=r.type,t.title=r.title,t.html=window.bryntum.router.adjustHtmlLinks(ze(r))}};w(K,"$name","SummaryTooltip");K._$name="SummaryTooltip";import{BrowserHelper as Se}from"./setup.js";var te=class{constructor(){let s=this,{queryString:e}=Se;window.bryntum.isBryntumOnline=s.isBryntumOnline=Se.isBryntumOnline("online"),window.bryntum.host=s.isBryntumOnline?window.location.origin:"https://bryntum.com",s.isPrerender=e.prerender!=null,window.bryntum.isOnline=s.isOnline=s.isBryntumOnline||e.online!=null||!!s.headBase,window.onpopstate=()=>{window.bryntum.isOnline&&window.onhashchange()}}get navLocation(){var r,n;let s={},{hash:e}=window.location,t=e&&e!=="#"&&decodeURIComponent(e.replace("#","")),{pathname:i}=window.location;if(i=i.endsWith("/")?i.slice(0,-1):i,i.includes("/api/"))s.id=i.split("/api/")[1],s.anchor=t;else if(i.includes("/guide/")){let l=i.split("/guide/")[1];if(l==="upgrade-guide")s.id=l;else{let o=/(.*?\/)(.*)/.exec(l);o!=null&&o[2]?l.startsWith("engine/")?s.id=`../${o[1]}${o[2]}.md`:["licenses","overview","changelog"].includes(o[2])?s.id=`${o[1]}${o[2]}.md`:s.id=`${o[1]}guides/${o[2]}.md`:s.id=l}s.anchor=t}else if(e){let l=t.split("#");s.id=l[0],s.anchor=l[1],(r=s.id)!=null&&r.startsWith("guides/")&&(s.id=`${window.productName}/${s.id}`)}return s.id&&((n=window.linkAliases)!=null&&n[s.id])&&(s.id=window.linkAliases[s.id]),s}get id(){return this.navLocation.id}get anchor(){return this.navLocation.anchor}isRouteLink(s){return!!["api/","guide/"].find(e=>s.startsWith(e))}get headBase(){var s;return(s=document.head.querySelector("base"))==null?void 0:s.getAttribute("href")}get baseUrl(){let s=this.headBase;return s&&!s.startsWith("http")&&(s=`${window.location.protocol}//${window.location.host}${s}`),s}routeTo(s){if(!this.isOnline||!this.baseUrl||!s||/^(http|\.+\/|\/)/.test(s))return;let e=new URL(`${this.baseUrl}${s}`);return["online","prerender"].forEach(t=>{Se.queryString[t]!=null&&e.searchParams.set(t,"true")}),window.history.pushState({},s,e.toString()),window.onhashchange(),!0}routeToHash(s){this.routeTo(this.getRoute(s))}getRoute(s){var e;if(s!=null&&s.includes("#")){if(["#","#guides","#download-npm","#what-s-new","#integration"].includes(s))return s;if(s.includes("guides/")){let t=/#(.*?)\/guides\/(.*)?/.exec(s);if(t)return`guide/${t[1]}/${t[2].replace(".md","")}`}if(/#\S+\.md/.test(s))return s.replace(/#[./]+/,"#").replace(/#(\S+)\.md/,"guide/$1");if(s.startsWith("#"))return s.replace("#","api/")}return s&&(s==="../examples"&&this.isOnline&&((e=this.headBase)!=null&&e.includes("-next")?s=`/products/${window.product}-next/examples/`:s=`/products/${window.product}/examples/`),s.includes("examples/")&&!s.includes("#")&&!s.includes("?")&&!s.endsWith("/")&&(s=`${s}/`)),s}adjustDomLinks(){this.isOnline&&document.querySelectorAll("a").forEach(s=>{let e=this.getRoute(s.getAttribute("href"));e&&s.setAttribute("href",e)})}adjustHtmlLinks(s){return this.isOnline?s.replace(/(href|src)="(\S*?)"/gm,(e,t,i)=>`${t}="${this.getRoute(i)}"`):s}adjustStoreLinks(s){this.isOnline&&s.allRecords.forEach(e=>{let t=this.getRoute(e.href);t&&(e.href=t)})}};te._$name="Router";import{EventHelper as fs,Tooltip as hs}from"./setup.js";var J=class extends hs{construct(){super.construct(...arguments),fs.on({element:this.element,click:"hide",thisObj:this})}onBeforeShow(){let s=this.activeTarget;this.html=s.dataset.tooltip}};w(J,"$name","SectionTooltip"),w(J,"configurable",{forElement:document.getElementById("content"),forSelector:".sectionHeader i"});J._$name="SectionTooltip";import{Tooltip as gs}from"./setup.js";var Y=class extends gs{static get configurable(){return{forElement:document.getElementById("content"),forSelector:".type-differs a, .type-differs i",textContent:!0,scrollAction:"realign",cls:"type-tooltip"}}onBeforeShow(){let s=this.activeTarget.parentElement,{name:e}=s.dataset,t=s.parentElement.matches(".field"),i=this.app.currentRecord.data[t?"fields":"properties"].find(n=>n.name===e),r=t?["Load type","Return type"]:["Set type","Get type"];i&&(this.html=`
                <div class="label">${r[0]}</div><div class="accepts">${i.accepts.join(" / ")}</div>
                <div class="label">${r[1]}</div><div class="output">${i.type.join(" / ")}</div>
            `)}};w(Y,"$name","TypeTooltip");Y._$name="TypeTooltip";import{TemplateHelper as Ds}from"./setup.js";import{TemplateHelper as Ze}from"./setup.js";var D=a=>{if(!a.inheritedFrom)return"";let s=a.inheritedFrom.split("/"),e=s[s.length-1];return`<a href="#${a.inheritedFrom}" class="inherited" title="Defined in ${a.inheritedFrom}">${e}</a>`};import{StringHelper as Ls,TemplateHelper as xe}from"./setup.js";import{ArrayHelper as bs,StringHelper as ys,TemplateHelper as ws}from"./setup.js";var Ke='<span class="separator">/</span>',$s="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/",vs="https://developer.mozilla.org/en-US/docs/Web/API/",Cs="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/",Ss=["Array","Boolean","Date","Error","Function","Map","Number","Object","Promise","Set","Storage","String","Symbol","null","undefined"],Qe={Class:"Classes",TemplateStringsArray:"Template_literals"},xs={GridColumnConfig:{cls:"Grid.column.Column",tip:"An object with a <code>type</code> property used to determine what kind of column to use + configs for that column.",snippet:"{ type : 'date', format : 'YYMMDD' }"},InputFieldConfig:{cls:"Core.widget.Field",tip:"An object with a <code>type</code> property used to determine what kind of field to use + configs for that field.",snippet:"{ type : 'textfield', label : 'Name' }"},ModelFieldConfig:{cls:"Core.data.field.DataField",tip:"An object with a <code>type</code> property used to determine what kind of data field to use + configs for that field.",snippet:"{ type : 'number', precision : 1 }"},ContainerLayoutConfig:{cls:"Core.widget.layout.Layout",tip:"An object with a <code>type</code> property used to determine what kind of layout to use.",snippet:"{ type : 'card' }"},ContainerItemConfig:{cls:"Core.widget.Widget",tip:"An object with a <code>type</code> property used to determine what kind of widget to create + configs for that widget.",snippet:"{ type : 'button', text : 'Click'}"}},Ts=/^(\w+(?:\.\w+)+)#(\w+)(\[])?$/,Es=/^Array\.<([^>]+)>$/,re=a=>"#"+a.replace(/\./g,"/"),As=a=>window.docsClasses.find(s=>s.name===a),ks=a=>window.docsJson.typeDefs[a],Ye=a=>{var e;let s=a.split(".")[0];return(e=window.bryntum.docsOnline)!=null&&e.includes(s)?s:void 0},me=(a,s)=>{let e=Ye(a);return e?`${window.bryntum.host}/${e.toLowerCase()}/docs${s}`:s},B=(a,s,e,t)=>{var m,h;let i='target="_blank"',r="",n=a.toLowerCase();if(a instanceof Object)return(m=a.names)==null?void 0:m.map(B).join(Ke);if(a==="void")return a;if(a==="any")return"*";if(a.includes("'")||n==="null"||n==="false"||n==="true")return`<span class="type str">${a}</span>`;let l=Es.exec(a);if(l&&(a=l[1]),a.startsWith("{")){let d=a.match(/{(.*)}/)[1].split(", "),f=d.map(b=>{let[T]=b.split(": ");return`<span class="property">${T}</span>`}).join(", "),g=d.map(b=>{let[T,E]=b.split(": "),S=B(E,s,!1,t);return`<span class="property">${T}: ${S}</span>`});return`<span class="type" data-btip="${ys.encodeHtml(["Returns an object with the following properties:",...g].join("<br>"))}" data-btip-hide-delay="2000" data-btip-max-width="30em">{ ${f} }</span>`}if(a.startsWith("Object.<")){let d=a.match(/Object\.<(.*)>/)[1].split(","),f=d[0],g=d[1];return g=g.trim(),g.startsWith("(")&&(g=g.substring(1,g.length-1)),g=g.split("|").map(y=>B(y,s,!1,t)).join(" | "),`<span class="type">Object<${B(f,s,!1,t)}, ${g}></span>`}if(a.startsWith("Class.<")){let d=a.match(/Class\.<(.*)>/)[1];return`<span class="type">class ${B(d,s,!1,t)}</span>`}if(a.includes("|")){let d=a.endsWith("[]")?"[]":"";return`<span class="type">(${a.replace("[]","").match(/^\((.*)\)$/)[1].split("|").map(y=>B(y,s,!1,t)).join("|")})${d}</span>`}if(a.match(/function\(.+\)/)){let d=a.match(/function\((.*)\)/)[1].split(","),f=d.map(b=>B(b,s,!1,t)).join(","),g=(h=a.match(/:(.*)/)[1])==null?void 0:h.trim(),y=g&&B(g,s,!1,t);return`<span class="type">Function(${f})${g?` : ${y}`:""}</span>`}a=a.trim().replace(/\(\)/g,"");let o=a.split("[")[0],c=xs[o],p=o.split(".").pop();if(c){let{cls:d,tip:f,snippet:g}=c,y=me(d,re(d))+"#configs",b=`${d.split(".").pop()}Config${a.endsWith("[]")?"[]":""}`;return`<a href="${y}" class="type" data-btip="${f}<br><br>For example:<br><code>${g}</code>">${b}</a>`}let u=ks(p);if(u)i="",r=re(u.link);else if(p.endsWith("Config")&&p!=="Config"&&!p.includes("#")){if(Ye(a))r=me(a,re(a.replace("Config","")));else{let d=p.replace("Config",""),f=As(d);if(!f)throw new Error(`Invalid class config reference: ${a}`);r=f.href}r=r+"#configs",a=p,i=""}else if(a.includes(".")){let d=Ts.exec(a);i="",d?(a=d[2]+(d[3]||""),r=`${re(d[1])}#typedef-${d[2]}`):r=window.DocsBrowserInstance.fixClassLink(re(a)),r=me(a,r),r=me(a,r),r=`${s||""}${r}`,a=a.split(".").pop()}else a!=="*"?(a!=="null"&&a!=="undefined"&&(a=a[0].toUpperCase()+a.substr(1)),Qe[a]?r=`${Cs}${Qe[a]}`:r=(Ss.indexOf(a.replace("[]",""))>=0?$s:vs)+a):i="";return r=r.replace("[]",""),e&&(a="..."+a),ws.docsTpl`<a ${i} class="type ${t?"output":""}" ${r?`href="${r}"`:""}>${a}${l?"[]":""}</a>`},k=(a,s=!0,e=!1,t=!1)=>{var c;let{type:i}=a;if(!i||i.length===0)return"";let r=bs.asArray(a.accepts||i),n=r.slice(0,5),l=r.slice(n.length),o=!!((c=a.accepts)!=null&&c.length);return o&&r.sort((p,u)=>i.includes(u)-i.includes(p)),(s?": ":"")+n.map(p=>{let u=o&&!a.isConfig&&i.includes(p);return B(p,void 0,t,u)}).join(Ke)+(l.length?`<span class="more-types" data-btip="${l.join(" / ")}" data-btip-cls="more-types-tip">+ ${l.length} more</span>`:"")+(o&&!a.isConfig?'<i class="b-fa b-fa-info-circle"></i>':"")+(e?'<div class="suffix">:</div>':"")};var A=(a,s="Parameters",e=!1)=>!(a!=null&&a.length)||e&&!a.some(t=>t.isSubParam)?"":xe.docsTpl`
    ${s?`<h3>${s}</h3>`:""}
    <ul class="parameters">
        ${a.map(t=>{var n;let i=t.name.split(".").pop(),r=(n=t.description)!=null?n:Ls.separate(i);return xe.docsTpl`
        ${e&&!t.isSubParam?"":xe.docsTpl`
        <li class="parameter ${t.isSubParam?"subparameter-"+(t.name.split(".").length-1):""}">
            <span class="name">${i}
                ${t.type?k(t,!0,!1,t.isRestParam):""}
            </span>
            ${"default"in t?`<span class="default">${t.default}</span>`:""}
            ${"optional"in t?'<span class="optional"></span>':""}
            <div class="description">${r}</div>
        </li>
       `}
       `})}
    </ul>
    `;var Xe=a=>{var t;if(!((t=a.configs)!=null&&t.length))return"";let s=(i,r,n="config")=>(r?`#${r.fullName}#`:"")+`${n}-${encodeURIComponent(i.name)}`,e=i=>{var r;return(r=a.properties)==null?void 0:r.some(n=>n.name===i&&n.scope!=="static")};return Ze.docsTpl`
    <section class="configs">
        <div class="sectionHeader">
            <h2>Configs</h2>
            <span class="section-description">Configs are options you supply in a configuration object when creating an instance of this class</span>
        </div>
        <ul>
        ${a.configs.map(i=>{var r;return Ze.docsTpl`
            ${a.isNewCategory(i)?`<h3 class="categoryHeader">${i.category}</h3>`:""}
            <li 
                name="${i.name.toLowerCase()}"
                id="${s(i)}"
                class="member config ${i.expandable?"expandable":""} ${i.access} ${i.deprecated?"deprecated":""}"
            >
                <div class="name">
                    <a href="${s(i,a)}">${i.name}</a>
                    ${i.type?k(i):""}
                    ${i.defaultValue!=null?`<span class="default">${i.defaultValue}</span>`:""}
                    <div class="filler"></div>
                    ${I(i)}
                    ${i.scope&&i.scope!=="inner"?`<div class="scope ${i.scope}"></div>`:""}
                    ${D(i)}
                </div>
                <div class="description">
                    ${i.deprecated?`<div class="deprecated-info"><span>Deprecated:</span> ${i.deprecated}</div>`:""}
                    ${i.description}
                    ${i.includeTypeDef?A(i.includeTypeDef.properties,"Properties"):""}
                    ${((r=i.parameters)==null?void 0:r.length)>0||i.returns||i.properties?`<div class="config-body">
                        ${A(i.parameters)}
                        ${i.returns?`
                        <h3>Returns</h3>
                        <div class="returns">
                            ${k(i.returns,!1,!!i.returns.description)}
                            ${i.returns.description?`<div class="description">${i.returns.description}</div>`:""}
                        </div>
                        `:""}
                        ${A(i.properties,"")}
                    </div>`:""}
                    ${e(i.name)?`<p class="prp-note">Has a corresponding runtime <a href="${s(i,a,"property")}">${i.name}</a> property.</p>`:""}
                </div>
            </li>
        `})}
        </ul>
    </section>
    `};import{StringHelper as et,TemplateHelper as Te}from"./setup.js";var tt=a=>{var e;if(!((e=a.events)!=null&&e.length))return"";let s=(t,i,r)=>(i?`#${i.fullName}#`:"")+`${r?"eventhandler":"event"}-${encodeURIComponent(r?`on${et.capitalize(t.name)}`:t.name)}`;return Te.docsTpl`
    <section class="events">
        <div class="sectionHeader">
            <h2>Events</h2>
            <span class="section-description">Events are triggered for certain actions in this class and can be listened for to react to those actions in your code</span>
        </div>
        <ul>
        ${a.events.map(t=>Te.docsTpl`
            <li 
                name="${t.name.toLowerCase()}"
                id="${s(t)}"
                class="member event ${t.expandable?"expandable":""} ${t.access} ${t.deprecated?"deprecated":""}"
            >
                <div class="name">
                    <a href="${s(t,a)}">${t.name}</a>
                    <div class="filler"></div>
                    ${I(t)}
                    ${D(t)}
                </div>
                <div class="description">
                ${t.deprecated?`<div class="deprecated-info"><span>Deprecated:</span> ${t.deprecated}</div>`:""}
                ${t.description}
                ${t.onOwner?"<p>Note that this event is triggered on the owning widget:</p>":""}
            </li>
        `).join("")}
        </ul>
    </section>
    <section class="eventhandlers">
        <div class="sectionHeader">
            <h2>Event handlers</h2>
            <span class="section-description">Event handlers are callbacks called as a result of certain actions in this class</span>
        </div>
        <ul>
        ${a.events.map(t=>{let i=`on${et.capitalize(t.name)}`,r=t.description.replace(/Triggered|Fired/g,"Called").replace(/triggered|fired/g,"called").replace(/event fires/g,"handler is called").replace(/Fires/g,"Called");return Te.docsTpl`
            <li 
                name="${i}"
                id="${s(t,null,!0)}"
                class="member eventhandler ${t.expandable?"expandable":""} ${t.access} ${t.deprecated?"deprecated":""}"
            >
                <div class="name">
                    <a href="${s(t,a,"eventhandler")}">${i}</a>
                    <div class="filler"></div>
                    ${I(t)}
                    ${D(t)}
                </div>
                <div class="description">
                ${t.deprecated?`<div class="deprecated-info"><span>Deprecated:</span> ${t.deprecated}</div>`:""}
                ${r}
                ${t.onOwner?"<p>Note that this handler is called on the owning widget:</p>":""}
            </li>
        `}).join("")}
        </ul>
    </section>
    `};import{TemplateHelper as st}from"./setup.js";var it=a=>{var s;return(s=a.externalExamples)!=null&&s.length?st.docsTpl`
    <section class="external-examples">
        ${a.externalExamples.map(e=>st.docsTpl`
        <div class="external-example" data-file="${e}">
        </div>
        `)}
    </section>
    `:""};window.updateIframeHeight=()=>{let a=document.querySelector(".external-example iframe");a&&(document.querySelector(".external-example").classList.remove("loading"),a.style.height=a.contentWindow.document.body.scrollHeight+"px")};import{TemplateHelper as at}from"./setup.js";var rt=a=>{var e;if(!((e=a.fields)!=null&&e.length))return"";let s=(t,i)=>(i?`#${i.fullName}#`:"")+`field-${encodeURIComponent(t.name)}`;return at.docsTpl`
    <section class="fields">
        <div class="sectionHeader">
            <h2>Fields</h2>
            <span class="section-description">Fields belong to a Model class and define the Model data structure</span>
        </div>
        <ul>
        ${a.fields.map(t=>{var i;return at.docsTpl`
            ${a.isNewCategory(t)?`<h3 class="categoryHeader">${t.category}</h3>`:""}
            <li 
                name="${t.name.toLowerCase()}"
                id="${s(t)}"
                class="member field ${t.expandable?"expandable":""} ${t.access} ${t.deprecated?"deprecated":""}"
            >
                <div class="name ${(i=t.accepts)!=null&&i.length?"type-differs":""}" data-name="${t.name}">
                    <a href="${s(t,a)}">${t.name}</a>
                    ${t.type?k(t):""}
                    ${t.defaultValue!=null?`<span class="default">${t.defaultValue}</span>`:""}
                    <div class="filler"></div>
                    <div class="scope ${t.scope}"></div>
                    ${I(t)}
                    ${D(t)}
                </div>
                <div class="description">
                    ${t.deprecated?`<div class="deprecated-info"><span>Deprecated:</span> ${t.deprecated}</div>`:""}                    
                    ${t.description}
                </div>
            </li>
        `})}
        </ul>
    </section>
    `};import{TemplateHelper as Ee}from"./setup.js";import{TemplateHelper as Hs}from"./setup.js";var nt=(a,s)=>{let{fires:e}=a;if(!(e!=null&&e.length))return"";let t=n=>n.includes("#")?n.split("#event-").pop():n,i=n=>n.includes("#")?`#${n.replace(/\./g,"/")}`:`#${s.fullName}#event-${encodeURIComponent(n)}`,r;return r=["private","internal"].includes(a.access)?e.map(n=>`<span class="type">${t(n)}</span>`):e.map(n=>`<a class="type" href="${i(n)}">${t(n)}</a>`),Hs.docsTpl`<br><p class="fires">Triggers: ${r.join(", ")}</p>`};var ot=(a,s)=>{let e=(t,i)=>(i?`#${i.fullName}#`:"")+`function-${encodeURIComponent(t.name)}${t.scope==="static"?"-static":""}`;return a.async&&!a.returns&&(a.returns={type:"Promise",description:"A pending `Promise` which either be fulfilled on successful operation or rejected with an error on fail"}),Ee.docsTpl`
    ${s.isNewCategory(a)?`<h3 class="categoryHeader">${a.category}</h3>`:""}
        <li name="${a.name.toLowerCase()}" id="${e(a)}" class="member function ${a.expandable?"expandable":""} ${a.access}  ${a.deprecated?"deprecated":""}">
            <div class="name">
                <a href="${e(a,s)}">${a.name}</a>(
                <span class="function-name-parameters">
                    ${(a.parameters||[]).filter(t=>!t.isSubParam).map(t=>Ee.docsTpl`
                        ${t.isRestParam?"...":""}${"optional"in t?`<span class="optional">${t.name}</span>`:t.name}${"default"in t?`<span class="default">${t.default}</span>`:""}
                    `).join(", ")}
                    </span>
                )
                ${a.returns?`<div class="returns">${k(a.returns)}</div>`:""}
                <div class="filler"></div>
                ${I(a)}
                ${D(a)}
            </div>
            <div class="description">
                ${a.deprecated?`<div class="deprecated-info"><span>Deprecated:</span> ${a.deprecated}</div>`:""}
                ${a.description}
                ${nt(a,s)}       
            </div>
       </li>
`},lt=a=>{var i;if(!((i=a.functions)!=null&&i.length))return"";let s=[],e=[],{functions:t}=a;return t.staticFunctions=s,t.instanceFunctions=e,t.forEach(r=>{r.scope==="static"?s.push(r):e.push(r)}),Ee.docsTpl`
    <section class="functions">
        <div class="sectionHeader">
            <h2>Functions</h2>
            <span class="section-description">Functions are methods available for calling on the class</span>
        </div>
        <ul class="functions static-header${s.length?"":" hidden"}">
            ${s.map(r=>ot(r,a))}
        </ul>
        <ul class="functions instance-header${!e.length||!s.length?" hidden":""}">
            ${e.map(r=>ot(r,a))}
        </ul>
    </section>
`};import{TemplateHelper as dt}from"./setup.js";var ct=(a,s)=>{var i;let e=(r,n,l=r.scope,o="property")=>(n?`#${n.fullName}#`:"")+`${o}-${encodeURIComponent(r.name)}${l==="static"?"-static":""}`,t=r=>{var n;return(n=a.configs)==null?void 0:n.some(l=>l.name===r)};return dt.docsTpl`
    ${a.isNewCategory(s)?`
    <h3 class="categoryHeader">${s.category}</h3>`:""}
    <li name="${s.name.toLowerCase()}" id="${e(s)}" class="member property ${s.expandable?"expandable":""} ${s.access} ${s.deprecated?"deprecated":""}">
        <div class="name ${(i=s.accepts)!=null&&i.length?"type-differs":""}" data-name="${s.name}">
            <a href="${e(s,a)}">${s.name}</a>
            ${s.type?k(s):""}
            ${s.defaultValue!=null?`<span class="default">${s.defaultValue}</span>`:""}
            <div class="filler"></div>
            ${I(s)}
            ${D(s)}
        </div>
        <div class="description">
            ${s.deprecated?`<div class="deprecated-info"><span>Deprecated:</span> ${s.deprecated}</div>`:""}
            ${s.description}
            ${s.includeTypeDef?A(s.includeTypeDef.properties,"Properties"):""}
            ${A(s.properties,"",!1)}
            ${t(s.name)?`<p class="prp-note">Has a corresponding <a href="${e(s,a,null,"config")}">${s.name}</a> config.</p>`:""}
        </div>
    </li>
    `},pt=a=>{var t;if(!((t=a.properties)!=null&&t.length))return"";let s=a.properties.filter(i=>i.scope!=="static"),e=a.properties.filter(i=>i.scope==="static");return dt.docsTpl`
    <section class="properties">
        <div class="sectionHeader">
            <h2>Properties</h2>
            <span class="section-description">Properties are getters/setters or publicly accessible variables on this class</span>
        </div>
        <ul class="properties static-header${e.length?"":" hidden"}">
            ${e.map(i=>ct(a,i))}
        </ul>
        <ul class="properties instance-header${!s.length||!e.length?" hidden":""}">
            ${s.map(i=>ct(a,i))}
        </ul>
    </section>`};import{TemplateHelper as ut}from"./setup.js";var mt=a=>{var s;return(s=a.examples)!=null&&s.length?ut.docsTpl`
    <section class="snippets">
        <h2 class="examples-heading">Snippet${a.examples.length>1?"s":""}</h2>
        ${a.examples.map(e=>ut.docsTpl`
        <pre><code class="javascript">${e}</code></pre>
        `)}
    </section>
    `:""};import{TemplateHelper as Ae}from"./setup.js";var Is=(a,s)=>{let e=(t,i)=>(i?`#${i.fullName}#`:"")+`typedef-${encodeURIComponent(t.name)}`;return Ae.docsTpl`
    <li name="${a.name.toLowerCase()}" id="${e(a)}" class="member typedef expandable ${a.access}">
        <div class="name">
            <a href="${e(a,s)}">${a.name}</a>
            ${a.type?k(a):""}
            <div class="filler"></div>
            ${a.access?`<div class="badge access ${a.access}">${a.access}</div>`:""}
        </div>
        <div class="description">
            ${a.deprecated?`<div class="deprecated-info"><span>Deprecated:</span> ${a.deprecated}</div>`:""}
            ${a.description}
            ${Ae.docsTpl`
            <div class="typedef-body">
                ${A(a.properties,"Properties")}
                ${A(a.parameters,"Parameters")}
            </div>`}
        </div>
    </li>
    `},ft=a=>{var s;return(s=a.typedefs)!=null&&s.length?Ae.docsTpl`
    <section class="fields">
        <h2 class="sectionHeader">Type Definitions</h2>
        <ul>
            ${a.typedefs.map(e=>Is(e,a))}
        </ul>
    </section>
    `:""};import{TemplateHelper as ke}from"./setup.js";var ne,oe,Le=[],ht=(a,s)=>{var e;for(Le.length=0,ne={},oe={};a;)(a.mixins||[]).forEach(t=>ne[t.fullName]=1),(a.features||[]).forEach(t=>oe[t.fullName]=1),Le.push(a),a=((e=a.extends)==null?void 0:e.length)>0&&s.getById(a.extends[0]);return Le.reverse()},Fs=location.href.split("docs/")[0],Ms=a=>bryntum.isLicensed?`href="${Fs}lib/${a.fullName.replace(/\./g,"/")}.js"`:"",gt=(a,s)=>ke.docsTpl`
    ${a.classType?`<div class="badge classType ${a.feature?"featureId":""}" data-btip="Used when defining container items by type">${a.feature?"id":"type"}: ${a.classType}</div>`:""}
    <h3>Source path</h3>
    <a target="_blank" ${Ms(a)} class="path">${a.fullName.replace(/\./g,"/")}.js</a>
    <div class="collapsible-ul">
        <input type="checkbox" id="toggle-inheritance">
        <label for="toggle-inheritance"><h3>Inheritance tree<span class="count">${ht(a,s).length}</span></h3></label>
        <ul class="class-hierarchy">
            ${ht(a,s).map((e,t)=>`<li style="margin-left:${t}em"><a href="#${e.fullName}">${e.name}</a></li>`)}
        </ul>
    </div>
    ${Object.keys(ne).length>0?ke.docsTpl`
    <div class="collapsible-ul">
        <input type="checkbox" id="toggle-mixins">
        <label for="toggle-mixins"><h3>Mixins<span class="count">${Object.keys(ne).length}</span></h3></label>
        <ul class="inherited-mixins">
            ${Object.keys(ne).sort().map(e=>`<li><a href="#${e}">${e.match(/([^/|.]+$)/)[0]}</a></li>`)}
        </ul>
    </div>
    `:""}
    ${Object.keys(oe).length>0?ke.docsTpl`
    <div class="collapsible-ul">
        <input type="checkbox" id="toggle-features">
        <label for="toggle-features"><h3>Features<span class="count">${Object.keys(oe).length}</span></h3></label>
        <ul class="inherited-mixins">
            ${Object.keys(oe).sort().map(e=>`<li><a href="#${e}">${e.match(/([^/|.]+$)/)[0]}</a></li>`)}
        </ul>
    </div>
    `:""}
`;var{bryntum:bt}=window,yt=(a,s)=>Ds.docsTpl`
<header class="content-header">
    <div class="column">
        <h1 class="title ${a.mixin?"mixin":""} ${a.plugin?"plugin":""} ${a.feature?"feature":""} ${a.singleton?"singleton":""} ${a.isWidget?"widget":""}">
            <span class="title-text">${a.name}</span>
            ${a.access==="private"?`<div class="badge access private">${a.access}</div>`:""}
            ${a.access==="internal"?`<div class="badge access internal">${a.access}</div>`:""}
            ${a.typingsClass?'<div class="badge access typescript">TypeScript</div>':""}
            ${a.virtual?'<div class="badge access virtual">ABSTRACT</div>':""}
            ${a.deprecated?'<div class="badge deprecated">DEPRECATED</div>':""}
        </h1>
    </div>
    <div class="summary">
        ${a.demo?`<a id="demo-link" href="${bt.isOnline||a.demo.product!==bt.product?`${window.bryntum.host}/products/${a.demo.product}/examples`:"../examples"}/${a.demo.demo}" target="_blank"></a>`:""}
        ${a.props?`<a id="summary-props" class="summary-icon summary-props ${!a.props||a.props.length===0?"none":""}"></a>`:`<a href="#${a.fullName}#fields" aria-label="Fields" id="summary-fields" class="summary-icon summary-field ${!a.fields||a.fields.length===0?"none":""}"></a>
     <a href="#${a.fullName}#configs" aria-label="Configs" id="summary-configs" class="summary-icon summary-config ${!a.configs||a.configs.length===0?"none":""}"></a>
     <a href="#${a.fullName}#properties" aria-label="Properties" id="summary-properties" class="summary-icon summary-property ${!a.properties||a.properties.length===0?"none":""}"></a>
     <a href="#${a.fullName}#functions" aria-label="Functions" id="summary-functions" class="summary-icon summary-function ${!a.functions||a.functions.length===0?"none":""}"></a>
     <a href="#${a.fullName}#events" aria-label="Events" id="summary-events" class="summary-icon summary-event ${!a.events||a.events.length===0?"none":""}"></a>
     <a href="#${a.fullName}#typedefs" aria-label="Typedefs" id="summary-typedefs" class="summary-icon summary-typedefs ${!a.typedefs||a.typedefs.length===0?"none":""}"></a>`}
    </div>
</header>
<div class="content-body">
    <div class="content-body-inner">
        <div class="left-pane">
            <section class="description" id="class-description">
                ${a.description}
                ${a.internalWidget?'<p class="note">This widget is not intended to be used directly</p>':""}
                ${a.singleton?"<p>Note: Class is a singleton and all members listed below can be accessed as static ones.</p>":""}
            </section>
            ${it(a)}
            ${mt(a)}
            <div class="no-results">No results</div>
            ${rt(a)}
            ${a.singleton?"":Xe(a)}
            ${pt(a)}
            ${lt(a)}
            ${tt(a)}
            ${ft(a)}
        </div>
        <div class="right-pane">
            ${gt(a,s)}
            <div class="class-contents-container">
                <h3 class="class-contents-heading">Contents</h3>
                <ul class="class-contents contents-list"></ul>
            </div>              
        </div>
    </div>
</div>
`;import{TemplateHelper as Ns}from"./setup.js";var Ps=new window.showdown.Converter({tables:!0,noHeaderId:!0,openLinksInNewWindow:!0}),wt=a=>{let{isVersionHistory:s,data:e}=a;return Ns.docsTpl`
        <div class="left-pane ${s?"b-no-counter":""}">${Ps.makeHtml(e.content)}</div>
        ${s?"":` 
        <div class="right-pane">
            <h3>Contents</h3>
            <ol class="toc contents-list"></ol>
        </div>`}
    `};import{StringHelper as Rs,TemplateHelper as Os}from"./setup.js";var $t=(a,{name:s})=>{var n;let e=(n=a.parameters||[{name:"source",type:[s]}])==null?void 0:n.filter(l=>!l.name.includes(".")),t=l=>l.map(o=>{let c=o.split(".");return" : "+c[c.length-1]}).join("|"),i=a.onOwner?window.product:Rs.uncapitalize(s),r=l=>`${i}.on('${a.name}', ({ ${e.map(({name:o,type:c})=>o+(l?t(c):"")).join(", ")} }) => { 

});`;return Os.docsTpl`
    <div class="event-body">
    <pre><code class="language-javascript">// Adding a listener using the "on" method
${r()}
// TypeScript
${r(!0)}
</code></pre>
        ${A([{name:"event",type:"Object",description:"The Bryntum event object"}])}
        ${A(a.parameters,"",!1)}
    </div>`};import{StringHelper as vt,TemplateHelper as Bs}from"./setup.js";var js=(a,s,e)=>`<pre class="prettyprint source lang-javascript"><code>new ${a}({
    ${s}({ ${e.map(({name:t,type:i})=>`${t} : ${i[0].split(".").pop()}`).join(", ")} }) {
    }
});</code></pre>`,Vs=(a,s,e)=>`<pre class="prettyprint source lang-javascript"><code>new ${a}({
    ${s}({ ${e} }) {
    }
});</code></pre>`,Ws=(a,s,e)=>`<pre class="prettyprint source lang-javascript"><code>const handler = useCallback(({ ${e} }) => {
});

return (
    &lt;Bryntum${a}
        ${s}={handler}
        // other properties
    />
);</code></pre>
`,_s=(a,s,e,t)=>`<pre class="prettyprint source lang-html"><code>&lt;template>
    &lt;div>
        &lt;bryntum-${a.toLowerCase()}
            @${s.substring(2).toLowerCase()}="${s}"
        />
    &lt;/div>
&lt;/template>
</code></pre>
<pre class="prettyprint source lang-javascript"><code>import { Bryntum${a} } from "@bryntum/${t}-vue3";
export default {
    name: "My App",
    components: { Bryntum${a} },
    methods : {
        ${s}() {
            // Do something
        }
    }
}</code></pre>
`,qs=(a,s,e)=>`<pre class="prettyprint source lang-html"><code>&lt;bryntum-${a.toLowerCase()}
    #${a.toLowerCase()}
    (${s}) = "${s}($event)"
>&lt;/bryntum-grid></code></pre>
<pre class="prettyprint source lang-typescript"><code>export class AppComponent {
    ${s}({ ${e.map(({name:t,type:i})=>`${t} : ${i[0].split(".").pop()}`).join(", ")} }) : void {
        console.log('${s}', e);
    }
}</code></pre>  
`,Ct=(a,s,e)=>{var n;let t=(n=s.parameters||[{name:"source",type:[a]}])==null?void 0:n.filter(l=>!l.name.includes(".")),i=t.map(l=>l.name).join(", "),r=`on${vt.capitalize(s.name)}`;return{tsContent:js(a,r,t),jsContent:Vs(a,r,i),reactContent:Ws(a,r,i),vueContent:_s(a,r,i,e),angularContent:qs(a,r,t)}};var St=(a,s)=>{var r;let e=(r=a.parameters||[{name:"source",type:[s.name]}])==null?void 0:r.filter(n=>!n.name.includes(".")),t=a.onOwner?window.productName:s.name,i=()=>`<pre><code class="language-javascript">new ${t}({
    on${vt.capitalize(a.name)}({ ${e.map(n=>n.name).join(", ")} }) {
    }
});
</code></pre>`;return Bs.docsTpl`
    <div class="event-body">
        ${s.isWidget?"":i()} 
        ${A([{name:"event",type:"Object",description:"The Bryntum event object"}])}
        ${A(a.parameters,"",!1)}
    </div>`};import{TemplateHelper as xt}from"./setup.js";var Tt=a=>xt.docsTpl`
        <div class="function-body">
            ${a.examples?a.examples.map(s=>xt.docsTpl`
            <div class="example">
                <pre><code class="javascript">${s}</code></pre>
            </div>
            `):""}
            ${A(a.parameters)}
            ${a.returns?`
            <h3>Returns</h3>
            <div class="returns">
                ${k(a.returns,!1,!!a.returns.description)}
                ${a.returns.description?`<div class="description">${a.returns.description}</div>`:""}
            </div>
            `:""}
        </div>
`;import{TemplateHelper as Us}from"./setup.js";import{TemplateHelper as Gs}from"./setup.js";var Et=a=>Gs.docsTpl`
    ${a.isLeaf?`<li class="b-tree-leaf-cell module ${a.type} ${a.isWidget?"widget":""} ${a.isView?"view":""}"><i class="b-tree-icon b-icon b-icon-tree-leaf" role="presentation"></i><a href="#${a.fullName}" >${a.name}</a></li>`:`<li class="namespace"><span>${a.name}</span><ul>${a.children.map(Et).join("")}</ul></li>`}
`,At=Et;var Js=a=>{let s=[];return a.traverse(e=>{!e.isLeaf&&e.childLevel===2&&s.push(e)}),s},kt=a=>Us.docsTpl`
<h1>API Overview</h1>
<div class="content-body">
    ${a.children.map(s=>`
    <div class="rootnamespace">
        <h2>${s.name}</h2>
        <div class="namespace-child-wrap">${Js(s).map(e=>`<section>${At(e)}</section>`).join("")}
        </div>
    </div>`).join("")}
</div>
`;import{TemplateHelper as zs}from"./setup.js";var Qs=a=>a.replaceAll(/[A-Z][a-z]+/g,s=>`${s}&ZeroWidthSpace;`),Lt=(a,s)=>zs.docsTpl`
<h1>${a}</h1>
<div class="content-body">
    ${s.children.map(e=>`
    <a href="${e.href}" class="b-card wide">
        <i class="${e.iconCls}"></i>
        <p>${Qs(e.name)}</p>
    </a>
    `)}
</div>
`;import{TemplateHelper as Ks}from"./setup.js";var Ht,It=a=>Ks.docsTpl`
<h1>${a.name}</h1>
<div class="content-body">
    ${a.guidesRecords.map(s=>{let e=s.getGuideCategory(a),t=e&&e!==Ht?`<h2>${e}</h2>`:"";return Ht=e,`${t}
    <a href="${s.href}" class="b-card">
        <i class="${s.iconCls}"></i>
        <p>${s.name}</p>
    </a>`}).join("")}
</div>
`;import{TemplateHelper as Ys}from"./setup.js";var Ft=a=>Ys.docsTpl`
<h1 class="path-not-found b-fa b-fa-frown">
    Oops, we could not find this resource
</h1>
<div class="path-not-found-description">
    <p><strong>${a.path}</strong> could not be found.</p>
    <p><a href="#">Click here to go back to the docs</a></p>
</div>
`;import{TemplateHelper as Zs}from"./setup.js";var Xs=new window.showdown.Converter({tables:!0,noHeaderId:!0}),ei=a=>`<h2>API Version diff</h2>
        <p><a href="?v=${a}#apidiff">Click here</a> to see a full version diff of this version compared to the version before</p>`,Mt=a=>Zs.docsTpl`
    <div class="left-pane">
        ${Xs.makeHtml(a.data.content).replace("</h1>","</h1>"+ei(a.name))}
    </div>
    <div class="right-pane">
        <h3>Contents</h3>
        <ol class="toc contents-list"></ol>
    </div>
`;globalThis.DocsAjaxHelper=Rt;var di={PRIVATE:"This member should not be used outside of the class it is defined in",INTERNAL:"This member should not be used by non-framework code",READONLY:"This member cannot be set",ABSTRACT:"This class cannot be instantiated, it serves as a base for concrete classes",CALCULATED:"This member is calculated and should not be set manually",PROPAGATING:"This method triggers a change propagation process for dependent tasks",IMMUTABLE:"This member's object value cannot be modified"},he="highlight-hit",pi=/\n\n/g,ui=/<br><br>/ig,mi=/(href="|src="|]\()\.\.\/examples\//gm,le=document.createElement("div"),se=(a,s)=>{if(!a.description){if(!a.access&&!a.hide){let e=s===a?s.name:`${s.name}#${a.name}`;console.error(e+" missing description")}a.description=""}},fi=a=>{var s,e,t;return[(s=a.parent)==null?void 0:s.name,(t=(e=a.parent)==null?void 0:e.parent)==null?void 0:t.name].includes("Upgrading")};window.VersionHelper.isTestEnv&&(window.ApiDiffHelper=R);hljs.configure({ignoreUnescapedHTML:!0});var ie=(a,s)=>{if(s&&a){let e=a.filter(t=>s.includes(t.fullName)||s.includes(t.name));ge.remove(a,...e)}},ce=(a,s)=>{if(s!=null&&s.length){let e=a.filter(t=>t.inheritedFrom&&!s.includes(t.name));ge.remove(a,...e)}},hi=(a,s=[])=>{let e=encodeURIComponent(a.replace(/\s|"/g,"-").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]/()*\\\n\t\b\v\u00A0]/g,"").replace(/[-.]+/g,"-").toLowerCase()),t=e,i=1;for(;s.includes(t);)t=`${e}-${i++}`;return s.push(t),t},gi={Button:"b-fa b-fa-stop",ButtonGroup:"b-fa b-fa-stop",CalendarPanel:"b-fa b-fa-calendar-days",Checkbox:"b-fa b-fa-square-check",ChipView:"b-fa b-fa-tags",Container:"b-fa b-fa-square",DateField:"b-fa b-fa-calendar-days",DatePicker:"b-fa b-fa-calendar-days",DateTimeField:"b-fa b-fa-calendar-days",FileField:"b-fa b-fa-file",FilePicker:"b-fa b-fa-file",FieldFilterPicker:"b-fa b-fa-filter",FieldFilterPickerGroup:"b-fa b-fa-filter",FilterField:"b-fa b-fa-filter",NumberField:"b-fa b-fa-9",Grid:"b-fa b-fa-table",GridBase:"b-fa b-fa-table",GridFieldFilterPicker:"b-fa b-fa-filter",GridFieldFilterPickerGroup:"b-fa b-fa-filter",List:"b-fa b-fa-list",Mask:"b-fa b-fa-square-full",Menu:"b-fa b-fa-bars",MenuItem:"b-fa b-fa-minus",MessageDialog:"b-fa b-fa-comment-dots",Panel:"b-fa b-fa-square",Popup:"b-fa b-fa-message",Radio:"b-fa b-fa-circle-dot",RadioGroup:"b-fa b-fa-circle-dot",Splitter:"b-fa b-fa-table",TextField:"b-fa b-fa-font",TimeField:"b-fa b-fa-clock",TimePicker:"b-fa b-fa-clock",Toast:"b-fa b-fa-bread-slice",Tool:"b-fa b-fa-tools",Toolbar:"b-fa b-fa-square",Tooltip:"b-fa b-fa-message",TreeCombo:"b-fa b-fa-folder-tree",TreeGrid:"b-fa b-fa-folder-tree",SlideToggle:"b-fa b-fa-toggle-on"},Fe=class extends ni{getDeltaTo(s,e){let{element:t}=this,{scrollTop:i,scrollLeft:r}=t,n;if(s.nodeType===Node.ELEMENT_NODE)s.scrollIntoView(e),n={xDelta:t.scrollLeft-r,yDelta:t.scrollTop-i},t.scrollTop=i,t.scrollLeft=r;else return super.getDeltaTo(...arguments);return n}},de=class extends ti.mixin(si,ii){constructor(){var n,l;super();w(this,"activeTabs",{});let e=this;(n=globalThis.gtag)==null||n.call(globalThis,"config","G-JBJTL8W716",{send_page_view:!1}),document.body.classList.add("b-theme-material");let t=F.queryString.page;if(t&&(document.location.hash=t),e.router=window.bryntum.router,e.categorySorter=e.categorySorter.bind(e),e.stickyHeaderHeight=0,e.contentEl=document.getElementById("content"),e.scroller=new Fe,e.animateScroll=!0,e.animateExpandCollapse=!0,document.getElementById("app").classList.add("ready"),e.contentEl.addEventListener("mousedown",e.onContentAreaMouseDown.bind(e)),e.contentEl.addEventListener("click",e.onContentAreaClick.bind(e)),window.onhashchange=e.onHashChange.bind(e),e.filterMembersByAccess=e.filterMembersByAccess.bind(e),window.bryntum.product=e.product=window.product,e.stateKey=`b-${e.product}-docs-state`,e.tabsStateKey=`b-${e.product}-docs-tab-state`,e.startId=`${window.productName}/overview.md`,e.apiVersion=window.VersionHelper.getVersion(window.product),e.defaultSettings={showPublic:!0,showInternal:!1,showPrivate:!1,showInherited:!0,showAdvanced:!1,groupMembers:!0},(!window.VersionHelper.isTestEnv||F.queryString.settings!=null)&&(e.settings=localStorage.getItem("bryntum-docs-settings")),Object.assign(e.activeTabs,Ie.safeJsonParse((l=F.getLocalStorageItem(e.tabsStateKey))!=null?l:"{}")),e.settings)try{e.settings=JSON.parse(e.settings)}catch(o){e.settings={...e.defaultSettings}}else e.settings={...e.defaultSettings};["tree","search","tools"].forEach(o=>{let c=document.getElementById(o);c&&(c.innerHTML="")}),P.removeEachSelector(document.body,"#splitter");let i=e.navigationTree=new W({id:"tree",adopt:"tree",navigation:window.navigation,product:e.product});new oi({id:"splitter",insertBefore:document.getElementById("content"),onEnd(){e.updateExpandable()}});let r=e.createOnFrame(()=>e.updateExpandable());He.on({element:window,resize(){r()}}),e.tools=new z({owner:e,settings:e.settings,listeners:{settingschange:e.onSettingsChange,thisObj:e}}),e.search=new G({owner:e,settings:e.settings,router:e.router}),window.addEventListener("keydown",function(o){o.key==="/"&&!o.target.closest(".b-fiddlepanel")&&(o.preventDefault(),e.search.showSearch())}),e.badgeTooltip=new Pt({textContent:!0,scrollAction:"realign",forElement:e.contentEl,forSelector:".badge",getHtml({tip:o}){return di[o.activeTarget.innerText]}}),e.codeTooltip=new Pt({forElement:e.contentEl,forSelector:"i.b-icon-code:not(.pressed)",html:"Show code"}),e.memberTooltip=new K({store:i.store}),e.sectionTooltip=new J({textContent:!0,scrollAction:"realign"}),e.typeTooltip=new Y({app:e}),e.memberFilter=new li({id:"memberFilter",placeholder:"Filter",clearable:!0,keyStrokeChangeDelay:100,triggers:{filter:{align:"start",cls:"b-fa b-fa-filter"}},listeners:{change:e.onMemberFilterChange,clear:e.onMemberFilterChange,thisObj:e}}),e.onDocsDataLoaded(),e.navigationTree.animateTreeNodeToggle=!ci.isTestEnv,document.getElementById("versionId").innerHTML=e.apiVersion,e.errorMonitor=new ee({apiVersion:e.apiVersion}),fe.tooltip.hideDelay=100,fe.tooltip.hoverDelay=300,document.body.addEventListener("click",e.onRouteClick.bind(e),{capture:!0}),e.preparePrerender(),e.saveState=()=>F.setLocalStorageItem(e.stateKey,JSON.stringify({width:e.navigationTree.width})),(!window.VersionHelper.isTestEnv||F.queryString.saveState!=null)&&window.addEventListener("unload",e.saveState)}set animateExpandCollapse(e){e=!!e,this._animateExpandCollapse!==e&&(this._animateExpandCollapse=e,document.body.classList[e?"remove":"add"]("prevent-animations"))}get animateExpandCollapse(){return this._animateExpandCollapse}loadResource(e,t=!0,i=!1){return Rt.get(`data/${e}${t?"?version="+this.apiVersion:""}`,{parseJson:i})}filterMembersByAccess(e){let{settings:t}=this,{access:i}=e;return(t.showPublic&&(i&&i==="public"||!i)||t.showInternal&&i==="internal"||t.showPrivate&&i==="private")&&(t.showAdvanced||!e.advanced)&&!e.hide}loadState(){let e=this,t=F.queryString,i;if(t.loadState!=null&&t.loadState!==""&&F.setLocalStorageItem(e.stateKey,t.loadState),!window.VersionHelper.isTestEnv||t.loadState!=null)try{i=JSON.parse(F.getLocalStorageItem(e.stateKey))}catch(r){}if(i!=null&&i.width&&(e.navigationTree.width=i.width),!window.location.href.includes("#")){let r=this.navigationTree.store.getById("integration");r&&this.navigationTree.expand(r)}}async onDocsDataLoaded(e=!0){var n;if(F.queryString.empty!=null)return;let t=this,i={classes:[]};t.processLoadedSymbols(window.docsJson,i),t.navigationTree.buildDocsTree(i),window.docsClasses=i.classes;let r=t.navigationTree.store.query(l=>l.isGuide);(n=t.search)==null||n.generateSearchItems(i,r,t.settings),t.loadState(),await t.onHashChange(e),t.trigger("load")}processLoadedSymbols(e,t){let i=this;function r(o){return(o?o instanceof Array?o:o.split("/"):[]).map(p=>{for(let u=1;p.indexOf("Array.<")===0;u++)p=p.substring(7,p.lastIndexOf(">"))+"[]".repeat(u);return p})}function n(o){o&&(Array.isArray(o)?o.forEach(n):o.type&&o.type.names&&o.type.names[0]&&(o.type=o.type.names[0]))}function l(o,c){var p;if(o.includeTypeDef){let u=Array.isArray(o.type)?o.type[0]:o.type,m=u.split("#").pop();o.includeTypeDef=(p=c.typedefs)==null?void 0:p.find(h=>h.name===m)}}e.classes&&(t.classes.push.apply(t.classes,e.classes.map(o=>{var u;let c={...o};o.path=o.path.replace(/\\/gm,"/");let p=o.access==="public"||!o.access;if(p||o.access==="private"&&i.settings.showPrivate||o.access==="internal"&&i.settings.showInternal){let m=o.path.match(/lib\/(.*)/);c.folder=m&&m[1],p&&!o.classDescription&&se(o,o),o.classDescription&&(o.description&&(c.constructor.description=o.description),c.description=o.classDescription),c.description=(c.description||"").replace(pi,"<br/><br/>"),c.id=c.fullName=c.folder+"/"+c.name,c.href=`#${c.id}`,o.constructor&&(c.functions=[],o.constructor.description&&c.functions.push(o.constructor)),o.functions&&(c.functions=o.functions.filter(i.filterMembersByAccess),c.functions.sort(i.functionSorter.bind(i)),c.functions.forEach(d=>{se(d,o),d.expandable=d.description.split("</p>").length>2,d.parameters&&d.parameters.length&&(d.expandable=!0,d.parameters.forEach(f=>{f.type=r(f.type)})),d.returns&&d.returns.type&&(d.expandable=!0,d.returns.type=r(d.returns.type))})),o.properties&&(c.properties=o.properties.filter(i.filterMembersByAccess),c.properties.sort(i.categorySorter),c.properties.forEach(d=>{se(d,o),d.expandable=d.description.split("</p>").length>2,d.description.includes("<pre")&&(d.expandable=!0),l(d,o),n(d),n(d.properties),d.properties&&d.properties.length>1&&(d.expandable=!0),n(d.returns),d.type&&(d.type=r(d.type))})),o.configs&&(c.configs=o.configs.filter(i.filterMembersByAccess),c.configs.sort(i.categorySorter),c.configs.forEach(d=>{se(d,o),d.expandable=d.description.split("</p>").length>2,d.description.includes("<pre")&&(d.expandable=!0),l(d,o),n(d.type),n(d.properties),d.parameters&&d.parameters.length&&(d.expandable=!0,d.parameters.forEach(f=>{f.type=r(f.type)})),d.returns&&d.returns.type&&(d.returns.type=r(d.returns.type)),d.type&&(d.type=r(d.type))})),o.fields&&(c.fields=o.fields.filter(i.filterMembersByAccess),c.fields.sort(i.categorySorter),c.fields.forEach(d=>{se(d,o),d.expandable=d.description.split("</p>").length>2,n(d.type),n(d.properties),n(d.returns),d.type&&(d.type=r(d.type))})),o.events&&(c.events=o.events.filter(i.filterMembersByAccess),c.events.sort(i.sorter("name")),c.events.forEach(d=>{se(d,o),d.expandable=d.description.split("</p>").length>2,d.parameters&&(d.expandable=!0,d.parameters.forEach(f=>{f.type=r(f.type)}))})),["mixes","features"].forEach(d=>{var g;let f=d==="mixes"?"mixins":d;c[f]=(g=c[d])==null?void 0:g.map(y=>{let b=y.split("/");return{fullName:y,name:b[b.length-1]}})});let h=(d,f)=>{var S;let g=$=>e.classes.find(v=>v.modulePath===$),y=$=>{var v;return(v=$[f])==null?void 0:v.filter(H=>H.onOwner).map(H=>({...H,onOwner:!1,...$.feature?{description:`${H.description}<p>Added by the <a href="#${d}">${d.substring(d.lastIndexOf("/")+1)}</a> feature, only available when that feature is enabled.</p>`,fromFeature:!0,fromFeatureName:d}:{}}))},b=g(d),T=$=>{var v;return((v=b[$])!=null?v:[]).map(g).flatMap(y)},E=[T("mixes"),T("extends"),y(b)].flat().filter($=>$);if((E==null?void 0:E.length)>0){c[f]=(S=c[f])!=null?S:[];for(let $ of E)c[f].find(v=>v.name===$.name)||c[f].push($)}};for(let d of["features","plugins"])(u=o[d])==null||u.forEach(f=>{h(f,"events"),h(f,"functions"),h(f,"configs")});(o.path.endsWith("/widget")||o.widget)&&!o.virtual&&(c.isWidget=!0,c.iconCls=gi[o.name]||"b-fa b-fa-circle-info"),o.path.endsWith("/view")&&!o.virtual&&(c.isView=!0)}return c.type=["mixin","feature","plugin","singleton"].find(m=>c[m])||"",c})),t.classes.sort(i.sorter("fullName")))}sorter(e){return(t,i)=>{let r=t[e],n=i[e];return r==null&&n!=null?-1:n==null&&r!=null?1:r<n?-1:r>n?1:0}}categorySorter(e,t){if(this.settings.groupMembers){if(e.category==="Common"&&t.category!=="Common")return-1;if(t.category==="Common"&&e.category!=="Common")return 1;let i=this.sorter("category")(e,t);if(i!==0)return i}return this.sorter("name")(e,t)}functionSorter(e,t){return e.name==="constructor"?-1:t.name==="constructor"?1:this.categorySorter(e,t)}buildInheritedJson(e,t=e,i=!1){if(!e.extends&&!e.mixes)return e;let r=this,n=i||e.singleton,l=e.extends||[],o=e.mixes||[],c=l.concat(o),p=e.extendsConfigs||[],u=[];return t.uninherit&&t.uninherit.forEach(m=>{ge.remove(c,m)}),u.push(...c.map(m=>({id:m}))),u.push(...p.map(m=>({scope:"configs",id:m}))),u.forEach(({scope:m,id:h})=>{let d=o.includes(h),f=r.navigationTree.store.getById(h);if(!f)return;let{data:g}=f;function y(b,T){var E;if((E=g[b])!=null&&E.length){t[b]||(t[b]=[]);let S=t[b];g[b].forEach($=>{let v=S.find(H=>H.name===$.name);if(v!=null&&v.hide)ge.remove(S,v);else if(!v||v.inheritedFrom&&d){let H=S.findIndex(L=>L.name===$.name);H>=0&&S.splice(H,1);let C=ri.clone($);if(C.inheritedFrom=h,!C.category){let L=h.split("/");C.category=L[L.length-1]}S.push(C)}}),S.sort(T)}}m?y(m,r.categorySorter):(n||y("configs",r.categorySorter),y("properties",r.categorySorter),y("events",r.sorter("name")),y("fields",r.categorySorter),y("functions",r.functionSorter.bind(r)),y("features")),r.buildInheritedJson(g,t,n)}),ie(t.configs,e.hideConfigs),ie(t.properties,e.hideProperties),ie(t.functions,e.hideFunctions),ie(t.fields,e.hideFields),ie(t.events,e.hideEvents),ie(t.features,e.hideFeatures),ce(t.configs,e.inheritConfigs),ce(t.properties,e.inheritProperties),ce(t.functions,e.inheritFunctions),ce(t.fields,e.inheritFields),ce(t.events,e.inheritEvents),t}preparePrerender(){let e=this;e.router.isPrerender&&(e.router.adjustStoreLinks(e.navigationTree.store),document.body.classList.add("prerender"))}async onSettingsChange({settings:e}){Object.assign(this.settings,e),localStorage.setItem("bryntum-docs-settings",JSON.stringify(this.settings)),window.docsJson&&await this.onDocsDataLoaded(!1)}async resetSettings(){await this.onSettingsChange({settings:this.defaultSettings})}async loadGuide(e){var r;let t=this;if(e.fullName===((r=t.currentRecord)==null?void 0:r.fullName))return;if(e.data.content){t.updateContent(e);return}t.isContentPrerendered=document.querySelector(`#content[data-id="${e.fullName}"]`);let i=t.isContentPrerendered?null:new ai({text:e.isGuide?"Loading guide...":"Laoding quick start",mode:"bright",target:t.contentEl,listeners:{show(){t.isMaskShown=!0}}});try{t._loadPromise&&t._loadPromise._record===e&&t._loadPromise.abort();let n=e.id.startsWith("guides/")||e.id.startsWith("quickStart/")?`${window.productName}/${e.id}`:e.id;t._loadPromise=t.loadResource(n),t._loadPromise._record=e;let l=await t._loadPromise;l.ok?(e.data.content=await l.text(),e.data.content=e.data.content.replace(/{{YEAR}}/g,new Date().getFullYear()),t.updateContent(e)):t.onPathNotFound(e.fullName)}catch(n){if(n.name!=="AbortError")throw n}finally{t._loadPromise=null,i==null||i.destroy()}}openUpgradeGuide(){var i;let e=this,t=e.navigationTree.store.allRecords.find(r=>{if(r.id.startsWith(`${window.productName}/guides/upgrades/`))return r});t&&((i=e.router)!=null&&i.isOnline?e.router.routeToHash(`#${t.id}`):window.location.hash=t.id)}showApiDiffGrid(){let e=this;e.contentEl.innerHTML='<div class="left-pane"></div>';let t=document.createElement("h1"),i=e.contentEl.firstElementChild;t.className="diff-header",t.innerHTML="API Diff Table",i.appendChild(t),e._apiDiffGrid||(e._apiDiffGrid=new U({appendTo:i,productId:e.product,version:e.apiVersion})),i.appendChild(e._apiDiffGrid.element);let r=F.queryString.v||e.apiVersion;e._apiDiffGrid.compareToPrevious(r)}hideApiDiffGrid(){this._apiDiffGrid&&this._apiDiffGrid.element.remove()}async scrollToAnchor(){let e=this,{router:t}=window.bryntum,{anchor:i}=t,r=i&&document.getElementById(encodeURIComponent(i));r&&(r.matches(".expandable, .overflowing, .collapsible-heading")?await e.toggleNodeExpanded(r,!0,!e.scroller.viewport.contains(Dt.from(r))):e.scrollMemberIntoView(r))}async onHashChange(e=!0){var o,c,p;let t=this,{router:i}=window.bryntum,r=i.id||t.startId,n=t.navigationTree.store.getById(r),l;if(await t.memberTooltip.hide(!1),(n!==t.currentRecord||i.anchor&&t.memberFilter.value&&(l=document.querySelector("#"+i.anchor))&&!P.isVisible(l))&&(t.memberFilter.clear(),(o=t.search)==null||o.hideSearch(),t.clearDelayables(),t.preventHighlight=!1),(c=globalThis.gtag)==null||c.call(globalThis,"set","page_path",location.pathname),(p=globalThis.gtag)==null||p.call(globalThis,"event","page_view"),r==="upgrade-guide"){t.openUpgradeGuide();return}if(!n){if(!r.includes("guides")){t.onPathNotFound(r);return}n=new t.navigationTree.store.modelClass({id:r,isLeaf:!0,fullName:r,url:r,isGuide:!0,virtual:!0})}if(n.virtual||(await t.navigationTree.features.tree.expandTo(r),e&&t.navigationTree.focusCell({field:"name",id:n.id}),t.navigationTree.selectCell({column:"id",id:n.id},!1,!1,!0)),n.isLeaf){if(n.isGuide)await t.loadGuide(n);else if(n!==t.currentRecord){let u=n.data;t.settings.groupMembers?u.isNewCategory=h=>h.category&&h.category!==u.currentCategory?(u.currentCategory=h.category,!0):!1:u.isNewCategory=()=>!1;let m=t.settings.showInherited?t.buildInheritedJson(u):u;Object.assign(n.data,m),t.updateContent(n)}document.head.querySelector("meta[name=Description]").setAttribute("content",t.contentEl.innerText.substring(0,150)+"..."),await t.scrollToAnchor()}else t.updateContent(n),await t.scrollToAnchor()}async scrollMemberIntoView(e){if(e){let t=this;window.getComputedStyle(e).position==="sticky"&&(e.style.position="unset"),await t.scroller.scrollIntoView(e,{animate:t.animateScroll,block:"start"}),e.style.position="",t.preventHighlight||(P.removeClsGlobally(t.contentEl,he),e.classList.add(he))}}onPathNotFound(e){let{contentEl:t}=this;t.className="path-not-found",t.innerHTML=Ft({path:e}),this.currentRecord=null,this.router.adjustDomLinks(),this.trigger("contentUpdated",null)}updateContent(e){var m,h,d;let t=this,{memberFilter:i}=t,r=i.element,n=t.contentEl,l=e.id!=="apidiff";if(e===t.currentRecord)return;let o,c;if(n.style.display="none",t.hideApiDiffGrid(),t.adjustExampleLinks(e),i.clear(),r.remove(),t.removeExternalExamples(),e.id==="apidiff"?(t.showApiDiffGrid(),c="api-diff"):e.id==="api"?(o=kt(e),c="apioverview"):e.id==="widgets"?(o=Lt("Widgets",e),c="guideoverview"):e.isGuideGroup?(o=It(e),c="guideoverview"):e.isGuide?(fi(e)?o=Mt(e):o=wt(e),c="guide"):(o=yt(e.data,t.navigationTree.store),c="api"),n.className=c,l&&(n.innerHTML=t.processContent(o,e),t.noProcess==null)){c==="api"&&t.postProcessClassDocs(),(c==="api"||c==="guide")&&(t.createAnchors(e),t.generateContentsList(e)),c==="guideoverview"&&t.createAnchors({fullName:"guides"},".content-body"),t.initFiddles(),t.initFrameworkTabs(),t.initYoutubeVideos(),t.highlightInlineCodeBlocks();for(let f of document.querySelectorAll(".note, .warning"))f.firstChild.data&&(f.firstChild.data=f.firstChild.data.trimStart())}t.currentRecord=e,(m=t.scrollDetacher)==null||m.call(t),t.initTabs(),n.dataset.id=e.id,n.style.display="",n.scrollTop=0,t.scroller.element=t.contentEl.childNodes[1],t.updateExpandable(),e.isGuide&&!e.name&&(e.name="Guide");let p=(e.isGuide?(h=n.querySelector("h1"))==null?void 0:h.innerText:e.name)||e.name;document.title=`${p} | Bryntum ${window.productName}`,(c==="api"||c==="guide")&&(t.scrollDetacher=He.on({element:n.querySelector(".content-body")||n,throttled:100,scroll:"onScroll",thisObj:t}));let{logger:u}=window;return(d=u==null?void 0:u.recorder)!=null&&d.active&&document.querySelectorAll("*").length>3e3&&u.recorder.stop(),t.router.adjustDomLinks(),t.trigger("contentUpdated",e),new Promise(function f(g){if(!n.querySelector(".b-fiddlepanel .b-mask"))return g();setTimeout(()=>f(g),100)})}initTabs(){var e;for(let t of document.querySelectorAll(".docs-tabs")){let{name:i}=t.dataset,r=(e=this.activeTabs[i])!=null?e:0;t.firstElementChild.children[r]||(r=0),t.firstElementChild.children[r].classList.add("active"),t.children[r+1].classList.add("active"),t.classList.toggle("first-active",r===0)}}onScroll(e){var n,l;let t=this,i=e.target.getBoundingClientRect(),r=document.elementFromPoint(i.left+i.width/2,i.top+15);if((r==null?void 0:r.tagName)==="H2"){let o=document.getElementById(`contents-link-${r.dataset.refId}`);(n=t.activeContentsEntry)==null||n.classList.remove("active"),t.activeContentsEntry=o,o==null||o.classList.add("active")}else(l=t.activeContentsEntry)==null||l.classList.remove("active"),t.activeContentsEntry=null}highlightInlineCodeBlocks(e=this.contentEl){let t=e===this.contentEl?"section.description > pre:not(.codeContainer) code:not(.hljs):not(:empty),section.description .framework-tabs pre code:not(.hljs),section.collapsible.expanded pre:not(.codeContainer) code:not(.hljs),.guide pre code:not(:empty):not(.hljs),li.member.expanded pre code:not(.hljs)":"pre code:not(.hljs)";Array.from(e.querySelectorAll(t)).forEach(i=>{let r=document.createElement("i");r.className="b-fa b-fa-copy copy-to-clipboard",r.dataset.btip="Copy to clipboard",i.parentElement.appendChild(r),i.innerHTML=i.innerHTML.replace(ui,`

`),hljs.highlightElement(i),i.innerHTML=i.innerHTML.split(`
`).map(n=>n.startsWith("+ ")?"<span class='hljs-highlight'>"+n.substring(1)+"</span>":"<span>"+n+"</span>").join(`
`)})}adjustExampleLinks(e){var t;for(let i of window.bryntum.products){let r=i.toLowerCase();if(r!==this.product&&((t=e.fullName)!=null&&t.startsWith(`${i}/`)))for(let n of["content","data","description"])e.data[n]&&(e.data[n]=e.data[n].replace(mi,`$1${window.bryntum.host}/products/${r}/examples/`))}}postProcessClassDocs(){let e=this,t=e.memberFilter.element,i=e.contentEl,r=i.querySelector(".content-body");if(i.querySelector(".content-header").appendChild(t),e.badgeTooltip.clippedTo=r,e.sectionTooltip.clippedTo=r,!e.settings.showAdvanced)for(let n of document.querySelectorAll("div.advanced-section"))n.innerHTML='<i>Advanced content hidden, use the "Show" button to reveal it.</i>'}processContent(e,t){le.innerHTML=e;for(let r of le.querySelectorAll('a[href^="#"]'))r.setAttribute("href",this.fixClassLink(r.getAttribute("href")));for(let r of le.querySelectorAll('a[href^="##"]'))r.href=r.href.replace("##",`#${t.fullName}#`);return Object.entries({img:"images",source:"videos"}).forEach(([r,n])=>{Array.from(le.querySelectorAll(r)).forEach(l=>{let o=l.attributes.src.value;o.endsWith(".mp4")&&/HeadlessChrome\//.test(navigator.userAgent)?l.remove():/(?!engine)^[A-Z]/.test(o)&&(l.src=o.replace(/(\w+)\//,`data/$1/${n}/`))})}),le.innerHTML}generateContentsList(e){let t=Array.from(this.contentEl.querySelectorAll("h2")),i=this.contentEl.querySelector(".contents-list");i&&(i.innerHTML=t.map(r=>{let{textContent:n,id:l}=r;return`<li id="contents-link-${l}"><a href="#${e.fullName}#${l}">${n.replace(/^\d\.\s/,"")}</a></li>`}).join(""))}createAnchors(e,t=".left-pane"){let i=Array.from(this.contentEl.querySelectorAll((e.isVersionHistory?["h2"]:["h2","h3","h4","section > h2","section > .sectionHeader h2","section > h3","section > h4"]).map(n=>`${t} > ${n}`).join(","))),r=[];i.forEach(n=>{let l=hi(n.textContent,r);n.id=n.dataset.refId=l,P.createElement({class:"b-fa b-fa-link anchor-link",tag:"a",href:`#${e.fullName}#${l}`,parent:n,dataset:{btip:"Copy link to clipboard"}})})}updateExpandable(){let e=this.contentEl,t=[];Array.from(e.querySelectorAll(".overflowing")).forEach(i=>{i.classList.remove("overflowing")}),Array.from(e.querySelectorAll(".member:not(.expandable) > .description")).forEach(i=>{i.scrollHeight>i.offsetHeight+5&&t.push(i)}),t.forEach(i=>i.parentElement.classList.add("overflowing"))}async onContentAreaMouseDown(e){let t=this,i=e.target;i.tagName.toLowerCase()==="a"&&i.closest(".contents-list,.member .description")&&i.getAttribute("href")===location.hash&&await t.onHashChange(),t.lastMouseDownEvent=e}async onContentAreaClick(e){let t=this,{target:i}=e;if(!i.closest("code")){if(i.closest(".docs-tabs > div:first-child > a")){let r=i.closest("a"),n=r.parentElement,l=Array.from(n.children).indexOf(r),{name:o}=n.parentElement.dataset,c=`.docs-tabs[data-name=${o}]`;for(let p of document.querySelectorAll(`${c} .active`))p.classList.remove("active");for(let p of document.querySelectorAll(`${c} > :first-child > :nth-child(${l+1}),${c} > :nth-child(${l+2})`))p.classList.add("active");for(let p of document.querySelectorAll(c))p.classList.toggle("first-active",l===0);t.activeTabs[o]=l,F.setLocalStorageItem(t.tabsStateKey,Ie.safeJsonStringify(t.activeTabs))}else if(i.classList.contains("anchor-link"))F.copyToClipboard(i.href)&&Nt.show("Link copied to clipboard"),e.preventDefault();else if(i.classList.contains("copy-to-clipboard")&&!i.closest(".codeContainer")){let r=i.parentElement.querySelector("code"),n=r.innerText;if(r.classList.contains("shell")){let l=n.split(`
`).filter(o=>o==null?void 0:o.length);l.some(o=>o.startsWith("$"))&&(l=l.filter(o=>o.startsWith("$")).map(o=>o.replace("$","").trim())),n=l.join(`
`)}n.length&&F.copyToClipboard(n)&&(Nt.show("Code copied to clipboard"),window.VersionHelper.isTestEnv&&console.log(`Copied: ${n}`))}else if(t.lastMouseDownEvent&&He.getDistanceBetween(e,t.lastMouseDownEvent)<=10){let r=(i.tagName.toLowerCase()!=="a"||i.closest(".name"))&&i.closest(".member");t.preventHighlight=!0,(i.matches(".collapsible-heading")||r&&(i.closest(".name")===r.querySelector(".name")&&!i.closest(".returns")||!r.matches(".expanded")))&&t.toggleNodeExpanded(r||e.target),t.setTimeout(()=>{t.preventHighlight=!1},200)}}}async onRouteClick(e){var t,i;(i=this.router)!=null&&i.routeTo(e.target.getAttribute("href")||((t=e.target.parentNode)==null?void 0:t.getAttribute("href")))&&e.preventDefault()}async toggleNodeExpanded(e,t,i=!0){let r=this,n=e.classList.contains("member"),l=n&&e.querySelector(".name a"),o,c;if(n){let{classList:p}=e;if(c=e,p.contains("expandable")||p.contains("overflowing")){let u=p.contains("eventhandler");o=e.querySelector(".description"),p.contains("event")||u?r.fillEventDetails(e,u):p.contains("function")&&r.fillFunctionDetails(e),r.highlightInlineCodeBlocks(e)}else o=null}else e.matches("h2.collapsible-heading")&&(o=e.nextElementSibling,c=o,r.highlightInlineCodeBlocks(o),e.classList.toggle("expanded",t),o.querySelectorAll(".b-fiddlepanel:not(.code-executed)").forEach(p=>fe.fromElement(p).runCode()));if(o){let p=r.animateExpandCollapse,u=r.preventHighlight?()=>l&&P.highlight(l):()=>{P.removeClsGlobally(this.contentEl,he),e.classList.add(he)};if(r.animateExpandCollapse=i,c.classList.toggle("expanded",t),r.clearTimeout("unsetMaxHeight"),t||!o.style.maxHeight)if(o.style.maxHeight=o.scrollHeight+"px",r.setTimeout({fn(){o.style.maxHeight="unset"},delay:300,name:"unsetMaxHeight"}),document.activeElement!==l&&!r.scroller.viewport.contains(Dt.from(o))){let m=t?"start":"nearest";t&&e.matches("h2.collapsible-heading")&&(e=e.nextElementSibling),r.animateExpandCollapse?r.setTimeout(()=>{r.scroller.scrollIntoView(e,{animate:r.animateScroll,block:m}).then(u)},300):r.scroller.scrollIntoView(e,{animate:r.animateScroll,block:m}).then(u)}else u();else o.style.maxHeight="";r.animateExpandCollapse=p}}fillEventDetails(e,t){let i=this,{currentRecord:r}=i,n=r.name,l=e.id.replace(/event-|eventhandler-on/g,"");l=Ie.uncapitalize(l);let o=r.events.find(c=>c.name===l);if(!e.filledDetails&&o.parameters){let c=t?St(o,r):$t(o,r),p=document.createElement("div"),u=e.querySelector(".description");p.innerHTML=c,u.appendChild(p.firstElementChild),e.filledDetails=!0,t&&r.isWidget&&(i.createFrameworkTabs({...Ct(n,o,i.product),parent:u,insertBefore:e.querySelector(".event-body")}),i.initTabs(),i.highlightInlineCodeBlocks(u))}}fillFunctionDetails(e){let t=e.id.replace("function-",""),i=t.endsWith("-static");t=t.replace("-static","");let r=this.currentRecord.functions[i?"staticFunctions":"instanceFunctions"].find(n=>n.name===t);if(!e.filledDetails){let n=Tt(r),l=document.createElement("div");l.innerHTML=n,e.querySelector(".description").appendChild(l.firstElementChild),e.filledDetails=!0}}onMemberFilterChange({value:e}){let t=this,{contentEl:i}=t;if(e&&(e=e.trim().toLowerCase().replace(/[^a-zA-Z]+/g,"")),P.forEachSelector(i,".filter-hit",r=>r.classList.remove("filter-hit")),e){let r=i.querySelectorAll(`.member[name*=${e}]`);i.classList.add("filtered"),Array.from(r).forEach(n=>{for(n.classList.add("filter-hit"),n.parentElement.parentElement.classList.add("filter-hit");n=n.previousElementSibling;)if(n.matches(".categoryHeader")){n.classList.add("filter-hit");break}}),r.length?t.scrollMemberIntoView(r[0]):(document.querySelector(".no-results").classList.add("filter-hit"),i.querySelector(".content-body").scrollTop=0)}else i.classList.remove("filtered")}removeExternalExamples(){fe.queryAll("fiddlepanel").forEach(e=>e.destroy())}initFrameworkTabs(e=this.contentEl){var i,r,n,l,o;let t=e.querySelectorAll(".framework-tabs");for(let c of t){let p=(i=c.querySelector("[data-name=js]"))==null?void 0:i.innerHTML,u=(r=c.querySelector("[data-name=ts]"))==null?void 0:r.innerHTML,m=(n=c.querySelector("[data-name=react]"))==null?void 0:n.innerHTML,h=(l=c.querySelector("[data-name=vue]"))==null?void 0:l.innerHTML,d=(o=c.querySelector("[data-name=angular]"))==null?void 0:o.innerHTML;this.createFrameworkTabs({jsContent:p,tsContent:u,reactContent:m,vueContent:h,angularContent:d,parent:c.parentElement,insertBefore:c}),c.remove()}}createFrameworkTabs({parent:e,insertBefore:t,tsContent:i,jsContent:r,reactContent:n,vueContent:l,angularContent:o}){P.createElement({parent:e,nextSibling:t,className:"docs-tabs framework-tabs",dataset:{name:"framework"},children:[{children:[i&&{tag:"a",className:"ts",children:[{tag:"img",src:"data/Core/images/logo/ts.svg",draggable:!1,alt:"TS"}]},r&&{tag:"a",className:"js",children:[{tag:"img",src:"data/Core/images/logo/js.svg",draggable:!1,alt:"JS"}]},n&&{tag:"a",className:"react",children:[{tag:"img",src:"data/Core/images/logo/react.svg",draggable:!1,alt:"React"}]},l&&{tag:"a",className:"vue",children:[{tag:"img",src:"data/Core/images/logo/vue.svg",draggable:!1,alt:"Vue"}]},o&&{tag:"a",className:"angular",children:[{tag:"img",src:"data/Core/images/logo/angular.svg",draggable:!1,alt:"Angular"}]}]},i&&{className:"ts",html:i},r&&{className:"js",html:r},n&&{className:"react",html:n},l&&{className:"vue",html:l},o&&{className:"angular",html:o}]})}initFiddles(){let e=this;Array.from(e.contentEl.querySelectorAll("div.external-example")).forEach(i=>{let r=`${i.dataset.file.replace(/^(\w+)\//,"data/$1/examples/")}`,n,l=i.className.replace("external-example","");window.isRootDocsBrowser&&(r="../../../Grid/docs/data/"+r),i.dataset.source&&(n=`${i.dataset.source.replace(/^(\w+)\//,"data/$1/examples/")}`),new M({adopt:i,apiVersion:e.apiVersion,productId:e.product,hideChrome:l.includes("hideChrome"),alignLeft:l.includes("alignLeft"),codeVisible:l.includes("codeVisible"),autoRun:!i.closest("section.collapsible:not(.expanded)"),url:r,sourceUrl:n,items:{result:{cls:"fiddlePanelResult "+l}}})})}fixClassLink(e){let t=e.split("/").pop(),i=e.replace("#",""),r=i.substring(0,i.lastIndexOf("/")),n=this.navigationTree.store.getById(r);return n&&!n.children?`#${r}.${t}`:e}initYoutubeVideos(){for(let t of[...document.querySelectorAll("a")])t.textContent==="@youtube"&&P.createElement({tag:"iframe",class:"b-youtube",src:t.getAttribute("href"),title:"Bryntum video",allow:"fullscreen",replaceElement:t});let e=/\[@youtube]\((.*)\)/;for(let t of[...document.querySelectorAll(".docs-tabs div")]){let i=t.textContent;e.test(i)&&(t.textContent="",P.createElement({tag:"iframe",class:"b-youtube",src:i.match(e)[1],title:"Bryntum video",allow:"fullscreen",parent:t}))}}};w(de,"$name","DocsBrowser");window.bryntum.products=["Core","Grid","Scheduler","SchedulerPro","Gantt","Calendar","TaskBoard"];window.bryntum.router=new te;window.__applyTestConfigs=!0;window.DocsBrowserInstance=new de;window.DocsBrowser=de;
