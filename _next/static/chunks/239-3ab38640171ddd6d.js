(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{5585:function(t,n,r){"use strict";r.d(n,{R:function(){return U}});var e=r(5944),i=r(8298),o=r(4776),a=r(2293),c=r(6574),l=r(155),u=r(6886),d=r(5861),h=r(7357),s=r(1664),Z=r.n(s),f=r(6868),v=r(7294),m=r(8462),b=r(891),g=r(7720),p=r(3946),y=r(7107),x=r(7594),I=r(9334),_=r(326),k=r(6638),w=r(5449),L=r(5084),M=r(4020),O=r(8005),P=r(802),S=r(4871),H=r(9317),C=r(7957),B=r(449),A=r(1523),X=r(9661),j=function(t){var n=t.author_name,r=t.author_description,i=t.avatar_image_url;return(0,e.BX)(h.Z,{width:"100%",children:[(0,e.BX)(u.ZP,{container:!0,children:[(0,e.tZ)(u.ZP,{item:!0,xs:4.8}),(0,e.tZ)(u.ZP,{item:!0,xs:2.2,children:(0,e.tZ)(Z(),{href:"/profile",passHref:!0,children:(0,e.tZ)(p.Z,{children:(0,e.tZ)(X.Z,{alt:n,src:"".concat(i),sx:{width:32,height:32}})})})}),(0,e.tZ)(u.ZP,{item:!0,xs:5})]}),(0,e.tZ)(d.Z,{variant:"h5",sx:{m:0,p:0,textAlign:"center"},children:n}),(0,e.tZ)(d.Z,{variant:"body2",sx:{m:0,p:0,textAlign:"center"},children:r})]})},F=r(7038);function T(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function E(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function D(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,i,o=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(e=r.next()).done)&&(o.push(e.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return T(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W="left",N=function(t){var n,r=t.config,i=r.issues_page_url,o=r.author_name,a=r.author_introduction,c=r.sns,l=D(v.useState({top:!1,left:!1,bottom:!1,right:!1}),2),u=l[0],d=l[1],s=function(t,n){return function(r){(!r||"keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&d(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),e.forEach((function(n){E(t,n,r[n])}))}return t}({},u,E({},t,n)))}};return(0,e.tZ)("div",{children:(0,e.BX)(v.Fragment,{children:[(0,e.tZ)(p.Z,{onClick:s(W,!0),sx:{margin:0,padding:0},"aria-label":"Open Sidebar",children:(0,e.tZ)(_.Z,{})}),(0,e.tZ)(y.Z,{anchor:W,open:u.left,onClose:s(W,!1),onOpen:s(W,!0),children:(n=W,(0,e.BX)(h.Z,{sx:{width:"top"===n||"bottom"===n?"auto":250},role:"presentation",onClick:s(n,!1),onKeyDown:s(n,!1),children:[(0,e.BX)(m.Z,{children:[(0,e.tZ)(b.ZP,{children:(0,e.tZ)(j,{author_name:o,author_description:a,avatar_image_url:"".concat(F.sM,"/").concat(r.avatar_image_url.path)})}),(0,e.tZ)(g.Z,{}),(0,e.tZ)(R,{text:"Home",href:"/",children:(0,e.tZ)(k.Z,{})}),(0,e.tZ)(R,{text:"Articles",href:"/articles",children:(0,e.tZ)(A.Z,{})}),(0,e.tZ)(R,{text:"Tags",href:"/articles/tags",children:(0,e.tZ)(B.Z,{})}),(0,e.tZ)(R,{text:"Edit page",href:i,children:(0,e.tZ)(C.Z,{})})]}),(0,e.tZ)(g.Z,{}),(0,e.tZ)(z,{sns_list:c})]}))})]},W)})},R=function(t){var n=t.children,r=t.text,i=t.href;return""===i||""===r?(0,e.tZ)("div",{}):(null===i||void 0===i?void 0:i.startsWith("#"))||(null===i||void 0===i?void 0:i.startsWith("/"))||(null===i||void 0===i?void 0:i.includes("://".concat(F.FI)))?(0,e.tZ)(Z(),{href:i,passHref:!0,children:(0,e.BX)(b.ZP,{button:!0,children:[(0,e.tZ)(x.Z,{children:n}),(0,e.tZ)(I.Z,{primary:r})]})}):(0,e.BX)(b.ZP,{button:!0,component:"a",href:i,target:"_blank",rel:"noopener",children:[(0,e.tZ)(x.Z,{children:n}),(0,e.tZ)(I.Z,{primary:r})]},r)},z=function(t){var n=t.sns_list;return(0,e.tZ)(m.Z,{children:n.map((function(t){return(0,e.tZ)(R,{text:t.name,href:t.url,children:(n=t.name,"GitHub"===n?(0,e.tZ)(w.Z,{}):"Twitter"===n?(0,e.tZ)(L.Z,{}):"Facebook"===n?(0,e.tZ)(P.Z,{}):"LinkedIn"===n?(0,e.tZ)(O.Z,{}):"Instagram"===n?(0,e.tZ)(M.Z,{}):"YouTube"===n?(0,e.tZ)(S.Z,{}):(0,e.tZ)(H.Z,{}))},t.name);var n}))})},G=function(t){var n=t.children,r=(0,i.Z)({target:void 0});return(0,e.tZ)(o.Z,{appear:!1,direction:"down",in:!r,children:n})},K=function(t){var n=t.children;return(0,e.tZ)("div",{children:(0,e.tZ)(G,{children:(0,e.tZ)(a.Z,{color:"inherit",sx:{backgroundColor:f.Z.palette.background.default},elevation:0,children:(0,e.tZ)(c.Z,{maxWidth:"md",children:n})})})})},U=function(t){var n=t.config;return(0,e.BX)("div",{children:[(0,e.tZ)(K,{children:(0,e.tZ)(l.Z,{children:(0,e.BX)(u.ZP,{container:!0,children:[(0,e.tZ)(u.ZP,{item:!0,xs:2,children:(0,e.tZ)(N,{config:n})}),(0,e.tZ)(u.ZP,{item:!0,xs:10,children:(0,e.tZ)(Z(),{href:"/",passHref:!0,children:(0,e.tZ)(d.Z,{variant:"h3",component:"a",display:"inline",color:"inherit",sx:{textDecoration:"none",boxShadow:"none"},children:n.blog_title})})})]})})}),(0,e.tZ)(h.Z,{sx:{m:"4rem"}})]})}},5739:function(t,n,r){"use strict";r.d(n,{L:function(){return h}});var e=r(5944),i=r(3321),o=r(7357),a=r(1664),c=r.n(a),l=r(9741),u=r(6868),d=function(t){var n=t.tag,r=function(t,n){var r,e,i,o,a,c,u=(0,l.OF)(t);return"light"===n?(r=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:30})),e=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:98})),i=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:30})),o=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:30})),a=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:93})),c=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:30}))):"dark"===n&&(r=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:75})),e=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:11})),i=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:35})),o=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:75})),a=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:17})),c=(0,l.y6)((0,l.IL)(u,{h:void 0,s:void 0,l:35}))),{fg:r,bg:e,ol:i,fgHover:o,bgHover:a,olHover:c}}(n.color,u.Z.palette.mode);return(0,e.tZ)(c(),{href:"/articles?tag=".concat(n.name),passHref:!0,children:(0,e.tZ)(i.Z,{variant:"outlined",size:"small",sx:{textTransform:"none",borderRadius:2,pt:0,pb:0,mt:0,mb:.7,color:"#".concat(r.fg),borderColor:"#".concat(r.ol),backgroundColor:"#".concat(r.bg),"&:hover":{color:"#".concat(r.fgHover),borderColor:"#".concat(r.olHover),backgroundColor:"#".concat(r.bgHover)}},children:n.name})})},h=function(t){var n=t.tags;return void 0===n?(0,e.tZ)("div",{}):(0,e.tZ)(o.Z,{children:n.map((function(t){return(0,e.tZ)(o.Z,{sx:{mr:.5,display:"inline"},children:(0,e.tZ)(d,{tag:t})},t.name)}))})}},9741:function(t,n,r){"use strict";r.d(n,{IL:function(){return o},OF:function(){return e},y6:function(){return i}});var e=function(t){return function(t){var n,r=t.r,e=t.g,i=t.b,o=360,a=Math.max(r,e,i),c=Math.min(r,e,i);return(n=a==c?0:r==a?(e-i)/(a-c)*60:e==a?(i-r)/(a-c)*60+120:(r-e)/(a-c)*60+240)<0&&(n+=o),{h:n,s:(a+c)/2<127.5?a+c<=0?0:(a-c)/(a+c)*100:(a-c)/(510-a-c)*100,l:(a+c)/255/2*100}}(function(t){return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}(t))},i=function(t){return function(t){var n=t.r,r=t.g,e=t.b,i=("00"+Math.round(n).toString(16)).slice(-2),o=("00"+Math.round(r).toString(16)).slice(-2),a=("00"+Math.round(e).toString(16)).slice(-2);return"".concat(i,o,a)}(function(t){var n,r,e,i,o,a=t.h,c=t.s,l=t.l;c/=100,(l/=100)<.5?(i=l+l*c,o=l-l*c):(i=l+(1-l)*c,o=l-(1-l)*c);var u=60,d=(a%=360)/u;return d<=1?(n=i,r=a/u*(i-o)+o,e=o):d<=2?(n=(120-a)/u*(i-o)+o,r=i,e=o):d<=3?(n=o,r=i,e=(a-120)/u*(i-o)+o):d<=4?(n=o,r=(240-a)/u*(i-o)+o,e=i):d<=5?(n=(a-240)/u*(i-o)+o,r=o,e=i):(n=i,r=o,e=(360-a)/u*(i-o)+o),{r:n*=255,g:r*=255,b:e*=255}}({h:t.h,s:t.s,l:t.l}))},o=function(t,n){var r={h:t.h,s:t.s,l:t.l};return void 0!=n.h&&(r.h=Math.max(Math.min(n.h,360),0)),void 0!=n.s&&(r.s=Math.max(Math.min(n.s,100),0)),void 0!=n.l&&(r.l=Math.max(Math.min(n.l,100),0)),r}},7038:function(t,n){n.sM="https://ribboncms.github.io/FunctionalBlogTemplate-DEMO",n.FI="ribboncms.github.io"}}]);