/*! For license information please see 587.39cd2eb7.chunk.js.LICENSE.txt */
(self.webpackChunkipb_job_fair=self.webpackChunkipb_job_fair||[]).push([[587],{574:function(e,t,r){"use strict";r.d(t,{bG:function(){return a},$0:function(){return d},VY:function(){return v}});var n=r(2791),o=(0,n.createContext)({selected:"",refs:{},meta:{},scrollTo:function(){},registerRef:function(){return null}}),i=(o.Consumer,o.Provider),l=r(1454),c={},u={};"undefined"!==typeof window&&r.n(l)().polyfill();var a=function(e){var t=e.debounceDelay,r=void 0===t?50:t,o=e.scrollBehavior,l=void 0===o?"smooth":o,a=e.offset,f=void 0===a?0:a,s=e.children,d=(0,n.useState)(""),v=d[0],p=d[1];(0,n.useEffect)((function(){return document.addEventListener("scroll",y,!0),h(),function(){document.removeEventListener("scroll",y,!0)}}),[]);var h=function(){var e=Object.keys(c).reduce((function(e,t){var r=c[t]&&c[t].current;if(!r)return{id:t,differenceFromTop:0};var n=r.getBoundingClientRect().top,o=Math.abs(n);return o>=e.differenceFromTop?e:{differenceFromTop:o,id:t}}),{differenceFromTop:9999,id:""});v!==e.id&&p(e.id)},y=function(e,t){var r=null;return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];null!==r&&(clearTimeout(r),r=null),r=setTimeout((function(){return e.apply(void 0,n)}),t)}}(h,r),b=function(e){var t=e.id,r=e.meta,o=(0,n.createRef)();return c[t]=o,u[t]=r,o},g=function(e){var t=c[e]&&c[e].current;if(!t)return console.warn("Section ID not recognized!");p(e),window.scrollTo({top:t.offsetTop+f,behavior:l})},m=(0,n.useMemo)((function(){return{registerRef:b,scrollTo:g,refs:c,meta:u,selected:v}}),[v,c]);return n.createElement(i,{value:m},s)},f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},d=function(e){var t=e.id,r=e.children,i=e.meta,l=s(e,["id","children","meta"]),c=(0,n.useContext)(o).registerRef,u=(0,n.useMemo)((function(){return c({id:t,meta:i})}),[t]);return n.createElement("section",f({},l,{ref:u,id:t}),r)},v=function(){var e=(0,n.useContext)(o),t=e.scrollTo,r=e.selected,i=e.refs,l=e.meta;return Object.keys(i).map((function(e){return{id:e,meta:l[e],onClick:function(){return t(e)},selected:r===e}}))}},1454:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var r,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||c,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(u(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==u(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,"undefined"===typeof e?this.scrollLeft:~~e,"undefined"===typeof t?this.scrollTop:~~t)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==u(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==u(arguments[0])){var r=d(this),n=r.getBoundingClientRect(),i=this.getBoundingClientRect();r!==t.body?(p.call(this,r,r.scrollLeft+i.left-n.left,r.scrollTop+i.top-n.top),"fixed"!==e.getComputedStyle(r).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function u(e){if(null===e||"object"!==typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"===typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function f(t,r){var n=e.getComputedStyle(t,null)["overflow"+r];return"auto"===n||"scroll"===n}function s(e){var t=a(e,"Y")&&f(e,"Y"),r=a(e,"X")&&f(e,"X");return t||r}function d(e){for(;e!==t.body&&!1===s(e);)e=e.parentNode||e.host;return e}function v(t){var r,n,o,l,c=(i()-t.startTime)/468;l=c=c>1?1:c,r=.5*(1-Math.cos(Math.PI*l)),n=t.startX+(t.x-t.startX)*r,o=t.startY+(t.y-t.startY)*r,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(v.bind(e,t))}function p(r,n,l){var u,a,f,s,d=i();r===t.body?(u=e,a=e.scrollX||e.pageXOffset,f=e.scrollY||e.pageYOffset,s=o.scroll):(u=r,a=r.scrollLeft,f=r.scrollTop,s=c),v({scrollable:u,method:s,startTime:d,startX:a,startY:f,x:n,y:l})}}}}()},2419:function(e,t,r){"use strict";r.d(t,{ZP:function(){return Z}});var n=r(2791);function o(e,t,r,n){return new(r||(r=Promise))((function(o,i){function l(e){try{u(n.next(e))}catch(t){i(t)}}function c(e){try{u(n.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,c)}u((n=n.apply(e,t||[])).next())}))}function i(e,t){var r,n,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,n=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var l,c=function(){},u=c(),a=Object,f=function(e){return e===u},s=function(e){return"function"==typeof e},d=function(e,t){return a.assign({},e,t)},v="undefined",p=function(){return typeof window!=v},h=new WeakMap,y=0,b=function e(t){var r,n,o=typeof t,i=t&&t.constructor,l=i==Date;if(a(t)!==t||l||i==RegExp)r=l?t.toJSON():"symbol"==o?t.toString():"string"==o?JSON.stringify(t):""+t;else{if(r=h.get(t))return r;if(r=++y+"~",h.set(t,r),i==Array){for(r="@",n=0;n<t.length;n++)r+=e(t[n])+",";h.set(t,r)}if(i==a){r="#";for(var c=a.keys(t).sort();!f(n=c.pop());)f(t[n])||(r+=n+":"+e(t[n])+",");h.set(t,r)}}return r},g=!0,m=p(),w=typeof document!=v,O=m&&window.addEventListener?window.addEventListener.bind(window):c,T=w?document.addEventListener.bind(document):c,E=m&&window.removeEventListener?window.removeEventListener.bind(window):c,R=w?document.removeEventListener.bind(document):c,S={isOnline:function(){return g},isVisible:function(){var e=w&&document.visibilityState;return f(e)||"hidden"!==e}},k={initFocus:function(e){return T("visibilitychange",e),O("focus",e),function(){R("visibilitychange",e),E("focus",e)}},initReconnect:function(e){var t=function(){g=!0,e()},r=function(){g=!1};return O("online",t),O("offline",r),function(){E("online",t),E("offline",r)}}},C=!p()||"Deno"in window,x=function(e){return p()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},V=C?n.useEffect:n.useLayoutEffect,L="undefined"!==typeof navigator&&navigator.connection,I=!C&&L&&(["slow-2g","2g"].includes(L.effectiveType)||L.saveData),j=function(e){if(s(e))try{e=e()}catch(r){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"",t,e?"$swr$"+e:""]},P=new WeakMap,Y=function(e,t,r,n,o,i,l){void 0===l&&(l=!0);var c=P.get(e),u=c[0],a=c[1],f=c[3],s=u[t],d=a[t];if(l&&d)for(var v=0;v<d.length;++v)d[v](r,n,o);return i&&(delete f[t],s&&s[0])?s[0](2).then((function(){return e.get(t)})):e.get(t)},X=0,B=function(){return++X},D=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(void 0,void 0,void 0,(function(){var t,r,n,o,l,c,a,v,p,h,y,b,g,m,w,O,T,E,R,S,k;return i(this,(function(i){switch(i.label){case 0:if(t=e[0],r=e[1],n=e[2],o=e[3],c=!!f((l="boolean"===typeof o?{revalidate:o}:o||{}).populateCache)||l.populateCache,a=!1!==l.revalidate,v=!1!==l.rollbackOnError,p=l.optimisticData,h=j(r),y=h[0],b=h[2],!y)return[2];if(g=P.get(t),m=g[2],e.length<3)return[2,Y(t,y,t.get(y),u,u,a,!0)];if(w=n,T=B(),m[y]=[T,0],E=!f(p),R=t.get(y),E&&(S=s(p)?p(R):p,t.set(y,S),Y(t,y,S)),s(w))try{w=w(t.get(y))}catch(C){O=C}return w&&s(w.then)?[4,w.catch((function(e){O=e}))]:[3,2];case 1:if(w=i.sent(),T!==m[y][0]){if(O)throw O;return[2,w]}O&&E&&v&&(c=!0,w=R,t.set(y,R)),i.label=2;case 2:return c&&(O||(s(c)&&(w=c(w,R)),t.set(y,w)),t.set(b,d(t.get(b),{error:O}))),m[y][1]=B(),[4,Y(t,y,w,O,u,a,!!c)];case 3:if(k=i.sent(),O)throw O;return[2,c?k:w]}}))}))},M=function(e,t){for(var r in e)e[r][0]&&e[r][0](t)},F=function(e,t){if(!P.has(e)){var r=d(k,t),n={},o=D.bind(u,e),i=c;if(P.set(e,[n,{},{},{},o]),!C){var l=r.initFocus(setTimeout.bind(u,M.bind(u,n,0))),a=r.initReconnect(setTimeout.bind(u,M.bind(u,n,1)));i=function(){l&&l(),a&&a(),P.delete(e)}}return[e,o,i]}return[e,P.get(e)[4]]},_=F(new Map),A=_[0],W=_[1],H=d({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:function(e,t,r,n,o){var i=r.errorRetryCount,l=o.retryCount,c=~~((Math.random()+.5)*(1<<(l<8?l:8)))*r.errorRetryInterval;!f(i)&&l>i||setTimeout(n,c,o)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:I?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:I?5e3:3e3,compare:function(e,t){return b(e)==b(t)},isPaused:function(){return!1},cache:A,mutate:W,fallback:{}},S),q=function(e,t){var r=d(e,t);if(t){var n=e.use,o=e.fallback,i=t.use,l=t.fallback;n&&i&&(r.use=n.concat(i)),o&&l&&(r.fallback=d(o,l))}return r},N=(0,n.createContext)({}),$=function(e){return s(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},G=function(){return d(H,(0,n.useContext)(N))},J=function(e,t,r){var n=t[e]||(t[e]=[]);return n.push(r),function(){var e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},z={dedupe:!0},Z=(a.defineProperty((function(e){var t=e.value,r=q((0,n.useContext)(N),t),o=t&&t.provider,i=(0,n.useState)((function(){return o?F(o(r.cache||A),t):u}))[0];return i&&(r.cache=i[0],r.mutate=i[1]),V((function(){return i?i[2]:u}),[]),(0,n.createElement)(N.Provider,d(e,{value:r}))}),"default",{value:H}),l=function(e,t,r){var l=r.cache,c=r.compare,a=r.fallbackData,v=r.suspense,p=r.revalidateOnMount,h=r.refreshInterval,y=r.refreshWhenHidden,b=r.refreshWhenOffline,g=P.get(l),m=g[0],w=g[1],O=g[2],T=g[3],E=j(e),R=E[0],S=E[1],k=E[2],L=(0,n.useRef)(!1),I=(0,n.useRef)(!1),X=(0,n.useRef)(R),M=(0,n.useRef)(t),F=(0,n.useRef)(r),_=function(){return F.current},A=function(){return _().isVisible()&&_().isOnline()},W=function(e){return l.set(k,d(l.get(k),e))},H=l.get(R),q=f(a)?r.fallback[R]:a,N=f(H)?q:H,$=l.get(k)||{},G=$.error,Z=!L.current,K=function(){return Z&&!f(p)?p:!_().isPaused()&&(v?!f(N)&&r.revalidateIfStale:f(N)||r.revalidateIfStale)},Q=!(!R||!t)&&(!!$.isValidating||Z&&K()),U=function(e,t){var r=(0,n.useState)({})[1],o=(0,n.useRef)(e),i=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),l=(0,n.useCallback)((function(e){var n=!1,l=o.current;for(var c in e){var u=c;l[u]!==e[u]&&(l[u]=e[u],i.current[u]&&(n=!0))}n&&!t.current&&r({})}),[]);return V((function(){o.current=e})),[o,i.current,l]}({data:N,error:G,isValidating:Q},I),ee=U[0],te=U[1],re=U[2],ne=(0,n.useCallback)((function(e){return o(void 0,void 0,void 0,(function(){var t,n,o,a,d,v,p,h,y,b,g,m,w;return i(this,(function(i){switch(i.label){case 0:if(t=M.current,!R||!t||I.current||_().isPaused())return[2,!1];a=!0,d=e||{},v=!T[R]||!d.dedupe,p=function(){return!I.current&&R===X.current&&L.current},h=function(){var e=T[R];e&&e[1]===o&&delete T[R]},y={isValidating:!1},b=function(){W({isValidating:!1}),p()&&re(y)},W({isValidating:!0}),re({isValidating:!0}),i.label=1;case 1:return i.trys.push([1,3,,4]),v&&(Y(l,R,ee.current.data,ee.current.error,!0),r.loadingTimeout&&!l.get(R)&&setTimeout((function(){a&&p()&&_().onLoadingSlow(R,r)}),r.loadingTimeout),T[R]=[t.apply(void 0,S),B()]),w=T[R],n=w[0],o=w[1],[4,n];case 2:return n=i.sent(),v&&setTimeout(h,r.dedupingInterval),T[R]&&T[R][1]===o?(W({error:u}),y.error=u,g=O[R],!f(g)&&(o<=g[0]||o<=g[1]||0===g[1])?(b(),v&&p()&&_().onDiscarded(R),[2,!1]):(c(ee.current.data,n)?y.data=ee.current.data:y.data=n,c(l.get(R),n)||l.set(R,n),v&&p()&&_().onSuccess(n,R,r),[3,4])):(v&&p()&&_().onDiscarded(R),[2,!1]);case 3:return m=i.sent(),h(),_().isPaused()||(W({error:m}),y.error=m,v&&p()&&(_().onError(m,R,r),("boolean"===typeof r.shouldRetryOnError&&r.shouldRetryOnError||s(r.shouldRetryOnError)&&r.shouldRetryOnError(m))&&A()&&_().onErrorRetry(m,R,r,ne,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return a=!1,b(),p()&&v&&Y(l,R,y.data,y.error,!1),[2,!0]}}))}))}),[R]),oe=(0,n.useCallback)(D.bind(u,l,(function(){return X.current})),[]);if(V((function(){M.current=t,F.current=r})),V((function(){if(R){var e=R!==X.current,t=ne.bind(u,z),r=0,n=J(R,w,(function(e,t,r){re(d({error:t,isValidating:r},c(ee.current.data,e)?u:{data:e}))})),o=J(R,m,(function(e){if(0==e){var n=Date.now();_().revalidateOnFocus&&n>r&&A()&&(r=n+_().focusThrottleInterval,t())}else if(1==e)_().revalidateOnReconnect&&A()&&t();else if(2==e)return ne()}));return I.current=!1,X.current=R,L.current=!0,e&&re({data:N,error:G,isValidating:Q}),K()&&(f(N)||C?t():x(t)),function(){I.current=!0,n(),o()}}}),[R,ne]),V((function(){var e;function t(){var t=s(h)?h(N):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){ee.current.error||!y&&!_().isVisible()||!b&&!_().isOnline()?t():ne(z).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[h,y,b,ne]),(0,n.useDebugValue)(N),v&&f(N)&&R)throw M.current=t,F.current=r,I.current=!1,f(G)?ne(z):G;return{mutate:oe,get data(){return te.data=!0,N},get error(){return te.error=!0,G},get isValidating(){return te.isValidating=!0,Q}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=G(),n=$(e),o=n[0],i=n[1],c=n[2],u=q(r,c),a=l,f=u.use;if(f)for(var s=f.length;s-- >0;)a=f[s](a);return a(o,i||u.fetcher,u)})}}]);
//# sourceMappingURL=587.39cd2eb7.chunk.js.map