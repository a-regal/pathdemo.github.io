webpackJsonp([1],{"/S+c":function(e,t,n){function r(){function e(e){return h.visit(e)}function t(e,t,n,r){"function"!=typeof r&&(r=a);var i=[];return p.x=e,p.y=t,p.half=n,h.query(p,i,f,r),i}function n(e){d(e),f=e,h=l(e);for(var t=0;t<e.length;t+=2)h.insert(t,f)}function r(e,t){function n(t,n){h.insert(n,e,0),s&&s(n,e.length)}function r(){"function"==typeof i&&i(v)}d(e);var i=t&&t.done,s=t&&t.progress;h=l(e),f=e,u(e,n,r,{step:2})}function d(e){if(!e)throw new Error("Points array is required for quadtree to work");if("number"!=typeof e.length)throw new Error("Points should be array-like object");if(e.length%2!=0)throw new Error("Points array should consist of series of x,y coordinates and be multiple of 2")}function c(){return h?h.bounds:o}function l(e){if(0===e.length){var t=new i;return new s(t)}for(var n=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY,u=0;u<e.length;u+=2){var d=e[u],c=e[u+1];d<n&&(n=d),d>o&&(o=d),c<r&&(r=c),c>a&&(a=c)}var l=Math.max(o-n,a-r);l+=2,n-=1,r-=1;var h=l/2,f=new i(n+h,r+h,h);return new s(f)}var h,f,p=new i,v={init:n,initAsync:r,bounds:c,pointsAround:t,visit:e};return v}var i=n("uIdY"),s=n("L7cz"),o=new i,a=n("MGIa"),u=n("wmlL");e.exports=r},"0csq":function(e,t,n){"use strict";function r(e){(e.fromId!==B.pointId||e.toId!==q.pointId)&&(b(),a())}function i(){m(),G.set("finder",U.pathFinderSettings.selected),a()}function s(e,t){var n=t.getTransform(),r=n.scale/t.getPixelRatio();return B.intersects(e.sceneX,e.sceneY,r)?B:q.intersects(e.sceneX,e.sceneY,r)?q:void 0}function o(){return O}function a(){if(!B.visible||!q.visible)return void(W.pathInfo.svgPath="");var e=B.pointId,t=q.pointId;u();var n=window.performance.now(),r=w(e,t),i=window.performance.now()-n;W.pathInfo.noPath=0===r.length,W.pathInfo.svgPath=y(r),z.lastSearchTook=Math.round(100*i)/100+"ms",z.pathLength=d(r),z.visible=!0}function u(){j&&(clearTimeout(j),j=0),j=setTimeout(function(){if(j=0,B.visible&&q.visible){var e=B.pointId,t=q.pointId;G.get("fromId")!=e&&G.set("fromId",e),G.get("toId")!==t&&G.set("toId",t)}},400)}function d(e){for(var t=0,n=1;n<e.length;++n)t+=T(e[n-1],e[n]);return I(Math.round(t))}function c(){B.clear(),q.clear(),G.set({fromId:-1,toId:-1})}function l(e){B.visible?q.visible||h(e,q):h(e,B)}function h(e,t){if(D){var n=N(e.sceneX,e.sceneY);if(!n)throw new Error("Point should be defined at this moment");t.setFrom(n)}}function f(){var e=G.get("graph");D=null,R=null,z.visible=!1,W.progress.reset(),M(e,W.progress).then(p).catch(function(e){W.progress.setError("Could not load the graph",e)})}function p(e){R=e.graph,O=e.graphBBox,X=null,v(e.points),g(),z.graphNodeCount=I(R.getNodesCount()),z.graphLinksCount=I(R.getLinksCount()),V.fire("graph-loaded"),setTimeout(function(){a()},0)}function v(e){D=C(),D.initAsync(e,{progress:function(e,t){e%500==0&&(W.progress.message="Initializing tree for point & click",W.progress.completed=Math.round(100*e/t)+"%")},done:function(){W.progress.treeReady=!0}})}function g(){H={"a-greedy-star":P.aGreedy(R,{distance:E,heuristic:E}),nba:P.nba(R,{distance:E,heuristic:E}),"astar-uni":P.aStar(R,{distance:E,heuristic:E}),dijkstra:P.aStar(R,{distance:E})},m(),b()}function m(){var e=U.pathFinderSettings.selected;if(!(X=H[e]))throw new Error("Cannot find pathfinder "+e)}function b(){if(R){var e=G.get("fromId"),t=G.get("toId"),n=R.getNode(e),r=R.getNode(t);n&&B.setFrom(n),r&&q.setFrom(r)}}function _(){G.set({graph:U.graphSettings.selected,fromId:-1,toId:-1}),f(),c()}function I(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function w(e,t){return X.find(e,t).map(function(e){return e.data})}function y(e){return e.length<1?"":e.map(function(e,t){return(0===t?"M":"")+x(e)}).join(" ")}function x(e){return e.x+","+e.y}function S(){return R}function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;if(D){var r=D.pointsAround(e,t,n).map(function(e){return R.getNode(e/2)}).sort(function(n,r){return k(n.data,e,t)-k(r.data,e,t)});return r.length>0?r[0]:N(e,t,2*n)}}function k(e,t,n){var r=e.x-t,i=e.y-n;return Math.sqrt(r*r+i*i)}function E(e,t){return T(e.data,t.data)}function T(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}var C=n("/S+c"),P=n("r0CE"),M=n("S4H+"),Y=n("pNOi"),F=n("LnN7"),L=n("F5sT"),A=n("3zJd"),V=n("14gb"),G=A({graph:"amsterdam-roads"});G.onChange(r);var R=void 0,O=void 0,D=void 0,X=void 0,H=void 0,j=0,B=new F(a,N),q=new F(a,N),z={visible:!1,lastSearchTook:0,pathLength:0,graphNodeCount:"",graphLinksCount:""},U=L(G),W={loadPositions:f,updateSearchAlgorithm:i,updateSelectedGraph:_,getGraph:S,getGraphBBox:o,progress:new Y,stats:z,routeStart:B,routeEnd:q,pathInfo:{svgPath:"",noPath:!1},handleSceneClick:l,getRouteHandleUnderCursor:s,clearRoute:c,pathFinderSettings:U.pathFinderSettings,graphSettings:U.graphSettings};e.exports=W},"14gb":function(e,t,n){"use strict";var r=n("puH/"),i=r({});e.exports=i},"31dX":function(e,t){function n(e,t){if(!(this instanceof n))return new n(e,t);if(Array.isArray(e)||(t=e,e=[]),t=t||{},this.data=e||[],this.length=this.data.length,this.compare=t.compare||i,this.setNodeId=t.setNodeId||r,this.length>0)for(var s=this.length>>1;s>=0;s--)this._down(s);if(t.setNodeId)for(var s=0;s<this.length;++s)this.setNodeId(this.data[s],s)}function r(){}function i(e,t){return e-t}e.exports=n,n.prototype={push:function(e){this.data.push(e),this.setNodeId(e,this.length),this.length++,this._up(this.length-1)},pop:function(){if(0!==this.length){var e=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this.setNodeId(this.data[0],0),this._down(0)),this.data.pop(),e}},peek:function(){return this.data[0]},updateItem:function(e){this._down(e),this._up(e)},_up:function(e){for(var t=this.data,n=this.compare,r=this.setNodeId,i=t[e];e>0;){var s=e-1>>1,o=t[s];if(n(i,o)>=0)break;t[e]=o,r(o,e),e=s}t[e]=i,r(i,e)},_down:function(e){for(var t=this.data,n=this.compare,r=this.length>>1,i=t[e],s=this.setNodeId;e<r;){var o=1+(e<<1),a=o+1,u=t[o];if(a<this.length&&n(t[a],u)<0&&(o=a,u=t[a]),n(u,i)>=0)break;t[e]=u,s(u,e),e=o}t[e]=i,s(i,e)}}},"3Zuw":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n("Zrlr"),s=r(i),o=n("wxAW"),a=r(o),u=function(){function e(){(0,s.default)(this,e),this.minX=Number.POSITIVE_INFINITY,this.minY=Number.POSITIVE_INFINITY,this.maxX=Number.NEGATIVE_INFINITY,this.maxY=Number.NEGATIVE_INFINITY}return(0,a.default)(e,[{key:"growBy",value:function(e){this.minX-=e,this.minY-=e,this.maxX+=e,this.maxY+=e}},{key:"addPoint",value:function(e,t){if(void 0===e)throw new Error("Point is not defined");var n=e,r=t;void 0===r&&(n=e.x,r=e.y),n<this.minX&&(this.minX=n),n>this.maxX&&(this.maxX=n),r<this.minY&&(this.minY=r),r>this.maxY&&(this.maxY=r)}},{key:"addRect",value:function(e){if(!e)throw new Error("rect is not defined");this.addPoint(e.left,e.top),this.addPoint(e.right,e.top),this.addPoint(e.left,e.bottom),this.addPoint(e.right,e.bottom)}},{key:"merge",value:function(e){e.minX<this.minX&&(this.minX=e.minX),e.minY<this.minY&&(this.minY=e.minY),e.maxX>this.maxX&&(this.maxX=e.maxX),e.maxY>this.maxY&&(this.maxY=e.maxY)}},{key:"left",get:function(){return this.minX}},{key:"top",get:function(){return this.minY}},{key:"right",get:function(){return this.maxX}},{key:"bottom",get:function(){return this.maxY}},{key:"width",get:function(){return this.maxX-this.minX}},{key:"height",get:function(){return this.maxY-this.minY}},{key:"cx",get:function(){return(this.minX+this.maxX)/2}},{key:"cy",get:function(){return(this.minY+this.maxY)/2}}]),e}();e.exports=u},"5jmk":function(e,t){},"8a79":function(e,t){function n(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function r(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.abs(n)+Math.abs(r)}e.exports={l2:n,l1:r}},CnY6:function(e,t,n){function r(e,t){function n(t,n){function s(e,t){return v(e,t,C)}function f(e,t){if(T===u){if(t.fromId===C.node.id)return v(e,t,C)}else if(T===d&&t.toId===C.node.id)return v(e,t,C)}function p(e){var t=e.open;return!(!t||t===T)}function v(e,t,n){var r=_.get(e.id);if(r||(r=h.createNewState(e),_.set(e.id,r)),!r.closed){if(p(r,n)){var i=r.distanceToSource+n.distanceToSource;return void(i<k&&(S=r,N=n,k=i))}var s=n.distanceToSource+l(r.node,n.node,t);if(!(s>=r.distanceToSource)){var a=T===u?m:g,d=s+o(r.node,a);d>=k||(r.fScore=d,0===r.open&&(E.push(r),E.updateItem(r.heapIndex),r.open=T),r.parent=n,r.distanceToSource=s)}}}var g=e.getNode(t);if(!g)throw new Error("fromId is not defined in this graph: "+t);var m=e.getNode(n);if(!m)throw new Error("toId is not defined in this graph: "+n);if(g===m)return[g];h.reset();var b=r?f:s,_=new Map,I=new i({compare:a.compareFScore,setNodeId:a.setHeapIndex}),w=new i({compare:a.compareFScore,setNodeId:a.setHeapIndex}),y=h.createNewState(g);_.set(t,y),y.fScore=o(g,m),y.distanceToSource=0,I.push(y),y.open=u;var x=h.createNewState(m);x.fScore=o(m,g),x.distanceToSource=0,w.push(x),x.open=d;for(var S,N,k=Number.POSITIVE_INFINITY,E=I,T=u;I.length>0&&w.length>0;){I.length<w.length?(T=u,E=I):(T=d,E=w);var C=E.pop();if(C.closed=!0,!(C.distanceToSource>k)&&(e.forEachLinkedNode(C.node.id,b),S&&N))return function(e,t){for(var n=[],r=e;r;)n.push(r.node),r=r.parent;for(var i=t;i;)n.unshift(i.node),i=i.parent;return n}(S,N)}return c}t=t||{};var r=t.oriented,o=t.heuristic;o||(o=a.heuristic);var l=t.distance;l||(l=a.distance);var h=s();return{find:n}}e.exports=r;var i=n("31dX"),s=n("GKTj"),o=n("8a79"),a=n("kSRG"),u=1,d=2,c=a.NO_PATH;e.exports.l2=o.l2,e.exports.l1=o.l1},DkjH:function(e,t){function n(e){this.node=e,this.p1=null,this.p2=null,this.closed=!1,this.g1=Number.POSITIVE_INFINITY,this.g2=Number.POSITIVE_INFINITY,this.f1=Number.POSITIVE_INFINITY,this.f2=Number.POSITIVE_INFINITY,this.h1=-1,this.h2=-1}function r(){function e(){r=0}function t(e){var t=i[r];return t?(t.node=e,t.p1=null,t.p2=null,t.closed=!1,t.g1=Number.POSITIVE_INFINITY,t.g2=Number.POSITIVE_INFINITY,t.f1=Number.POSITIVE_INFINITY,t.f2=Number.POSITIVE_INFINITY,t.h1=-1,t.h2=-1):(t=new n(e),i[r]=t),r++,t}var r=0,i=[];return{createNewState:t,reset:e}}e.exports=r},F5sT:function(e,t,n){"use strict";function r(e){return{graphSettings:i(e),pathFinderSettings:s(e)}}function i(e){var t=[{value:"amsterdam-roads",name:"Amsterdam (76K edges, 1.1 MB)"},{value:"seattle-roads",name:"Seattle (173K edges, 2.4 MB)"},{value:"rome-roads",name:"Rome (258K edges, 3.8 MB)"},{value:"delhi-roads",name:"Delhi (280K edges, 3.9 MB)"},{value:"moscow-roads",name:"Moscow (451K edges, 6.5 MB)"},{value:"USA-road-d.NY",name:"New York (730K edges, 7.6 MB)"}];return{selected:e.get("graph"),graphs:t}}function s(e){return{selected:e.get("finder")||"nba",algorithms:[{value:"a-greedy-star",name:"Greedy A* (suboptimal)"},{value:"nba",name:"NBA*"},{value:"astar-uni",name:"Unidirectional A*"},{value:"dijkstra",name:"Dijkstra"}]}}e.exports=r},GKTj:function(e,t){function n(e){this.node=e,this.parent=null,this.closed=!1,this.open=0,this.distanceToSource=Number.POSITIVE_INFINITY,this.fScore=Number.POSITIVE_INFINITY,this.heapIndex=-1}function r(){function e(){r=0}function t(e){var t=i[r];return t?(t.node=e,t.parent=null,t.closed=!1,t.open=0,t.distanceToSource=Number.POSITIVE_INFINITY,t.fScore=Number.POSITIVE_INFINITY,t.heapIndex=-1):(t=new n(e),i[r]=t),r++,t}var r=0,i=[];return{createNewState:t,reset:e}}e.exports=r},JGX7:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("div",{staticClass:"background absolute",on:{click:function(t){t.preventDefault(),e.close(t)}}}),e._v(" "),n("div",{staticClass:"content"},[n("h3",[e._v("ngraph.path "),n("a",{staticClass:"close bold",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.close(t)}}},[e._v("close")])]),e._v(" "),e._m(0),n("p",[e._v("\n      Don't use this website for actual navigation :).\n    ")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("a",{staticClass:"large-close bold",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.close(t)}}},[e._v("\n      close\n    ")])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n      This website is a demo for the "),n("a",{staticClass:"highlighted",attrs:{href:"https://github.com/anvaka/ngraph.path"}},[e._v("ngraph.path")]),e._v("\n      library. The library implements pathfinding algorithms for generic graphs (not limited to grids).\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("My goal was to build a very fast library, that could help many developers\n      find their paths. In my tests, the library showed great performance with median\n      path finding speed "),n("span",{staticClass:"bold"},[e._v("34ms")]),e._v(" on "),n("span",{staticClass:"bold"},[e._v("733,844")]),e._v(" edges graph.\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("I built the roads graph for this demo using amazing "),n("a",{staticClass:"highlighted",attrs:{href:"http://www.openstreetmap.org/",target:"_blank"}},[e._v("OpenStreetMap")]),e._v(".\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{staticClass:"highlighted",attrs:{href:"https://github.com/anvaka/ngraph.path"}},[e._v("Learn more ")]),e._v(" about this project on GitHub\n      ")]),n("li",[e._v("\n      Stay tuned for updates on "),n("a",{staticClass:"highlighted",attrs:{href:"https://twitter.com/anvaka"}},[e._v("Twitter.")])]),n("li",[n("a",{staticClass:"highlighted",attrs:{href:"https://www.youtube.com/watch?v=hGeZuIEV6KU"}},[e._v(" Watch a video")]),e._v(" demo.\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("With passion,"),n("br"),e._v(" Anvaka")])}],s={render:r,staticRenderFns:i};t.a=s},L7cz:function(e,t,n){function r(e){this.bounds=e,this.nw=null,this.ne=null,this.sw=null,this.se=null,this.items=null}function i(e,t){return 0===t?e.nw:1===t?e.ne:2===t?e.sw:3===t?e.se:void 0}var s=n("uIdY");e.exports=r,r.prototype.subdivide=function(){var e=this.bounds,t=e.half/2;this.nw=new r(new s(e.x-t,e.y-t,t)),this.ne=new r(new s(e.x+t,e.y-t,t)),this.sw=new r(new s(e.x-t,e.y+t,t)),this.se=new r(new s(e.x+t,e.y+t,t))},r.prototype.insert=function(e,t,n){if(n||(n=0),!(n>24)){if(null===this.nw){if(null===this.items?this.items=[e]:this.items.push(e),this.bounds.half>.1&&this.items.length>=4){this.subdivide();for(var r=0;r<this.items.length;++r)this.insert(this.items[r],t,n+1);this.items=null}}else{var s=t[e],o=t[e+1],a=this.bounds,u=0;s>a.x&&(u+=1),o>a.y&&(u+=2);i(this,u).insert(e,t,n+1)}}},r.prototype.visit=function(e){e(this)&&this.nw&&(this.nw.visit(e),this.ne.visit(e),this.sw.visit(e),this.se.visit(e))},r.prototype.query=function(e,t,n,r){if(r(this.bounds,e)){var i=this.items;if(i)for(var s=0;s<i.length;++s){var o=i[s],a=n[o],u=n[o+1];e.contains(a,u)&&t.push(o)}this.nw&&(this.nw.query(e,t,n,r),this.ne.query(e,t,n,r),this.sw.query(e,t,n,r),this.se.query(e,t,n,r))}}},LnN7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n("Zrlr"),s=r(i),o=n("wxAW"),a=r(o),u=function(){function e(t,n){(0,s.default)(this,e),this.visible=!1,this.beingDragged=!1,this.pointId=-1,this.x=0,this.y=0,this.r=18,this.pointChanged=t,this.findNearestPoint=n}return(0,a.default)(e,[{key:"startDragging",value:function(e){function t(t){t.stopPropagation(),t.preventDefault();var n=void 0,r=void 0;if(t.touches){for(var o=void 0,a=0;a<t.touches.length;++a)if(t.touches[a].identifier===i){o=t.touches[a];break}if(!o)return;n=o.clientX,r=o.clientY}else n=t.clientX,r=t.clientY;var u=e.getSceneCoordinate(n,r);s.x=u.x,s.y=u.y;var d=s.findNearestPoint(u.x,u.y);s.pointId=d.id,s.pointChanged(s)}function n(e){if(e.touches&&e.touches.length>0)for(var t=0;t<e.touches.length;++t){var n=e.touches[t];if(n.identifier===i)return}r()}function r(){s.beingDragged=!1,document.removeEventListener("mousemove",t,!0),document.removeEventListener("mouseup",n,!0),document.removeEventListener("touchmove",t,!0),document.removeEventListener("touchend",n,!0),document.removeEventListener("touchcancel",n,!0)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,s=this;this.beingDragged=!0,document.addEventListener("mousemove",t,!0),document.addEventListener("touchmove",t,{capture:!0,passive:!1}),document.addEventListener("touchend",n,!0),document.addEventListener("touchcancel",n,!0),document.addEventListener("mouseup",n,!0)}},{key:"setFrom",value:function(e){this.visible=!0,this.pointId=e.id,this.x=e.data.x,this.y=e.data.y,this.pointChanged(this)}},{key:"clear",value:function(){this.visible=!1,this.pointId=-1,this.x=0,this.y=0,this.pointChanged(this)}},{key:"intersects",value:function(e,t,n){if(!this.visible||this.beingDragged)return!1;var r=this.r/n,i=e-this.x,s=t-this.y;return i*i+s*s<=r*r}}]),e}();e.exports=u},M93x:function(e,t,n){"use strict";function r(e){n("5jmk")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("xJD8"),s=n.n(i),o=n("R0YH"),a=n("VU/8"),u=r,d=a(s.a,o.a,u,null,null);t.default=d.exports},MGIa:function(e,t){function n(e,t){return e.x-e.half<t.x+t.half&&e.x+e.half>t.x-t.half&&e.y-e.half<t.y+t.half&&e.y+e.half>t.y-t.half}e.exports=n},N1rF:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",{attrs:{transform:e.screenScale}},[n("circle",{attrs:{r:e.r,fill:"red",stroke:"white","stroke-width":e.strokeWidth}}),e._v(" "),n("text",{staticClass:"no-pointer",attrs:{"font-size":e.fontSize,fill:"white","text-anchor":"middle",y:e.textY}},[e._v(e._s(e.symbol))])])},i=[],s={render:r,staticRenderFns:i};t.a=s},NHnr:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n("7+uW"),s=r(i),o=n("M93x"),a=r(o);s.default.config.productionTip=!1,new s.default({el:"#app",template:"<App/>",components:{App:a.default}})},R0YH:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("canvas",{ref:"canvas",staticClass:"absolute"}),e._v(" "),e.webGLEnabled?e._e():n("div",[e._m(0)]),e._v(" "),e.webGLEnabled?n("div",[n("svg",{ref:"svg",staticClass:"svg-overlay absolute"},[n("g",{staticClass:"scene"},[n("path",{ref:"foundPath",attrs:{d:e.pathInfo.svgPath,"stroke-width":"6x",stroke:"red",fill:"transparent"}}),e._v(" "),e.routeStart.visible?n("route-point",{attrs:{point:e.routeStart,scale:e.scale,r:e.routeStart.r,symbol:"A",fontSize:28}}):e._e(),e._v(" "),e.routeEnd.visible?n("route-point",{attrs:{point:e.routeEnd,scale:e.scale,r:e.routeEnd.r,symbol:"B",fontSize:28}}):e._e()],1)]),e._v(" "),e.progress.visible?n("div",{staticClass:"progress center absolute"},[e.progress.errorMessage?e._e():n("div",[e._v("\n        "+e._s(e.progress.message)+" "+e._s(e.progress.completed)+"\n      ")]),e._v(" "),e.progress.errorMessage?n("div",{staticClass:"error"},[n("div",[e._v(e._s(e.progress.errorMessage))]),e._v(" "),n("div",{staticClass:"error-details"},[e._v(e._s(e.progress.errorDetails))])]):e._e()]):e._e(),e._v(" "),e.loaded&&!e.progress.visible?n("div",{staticClass:"controls absolute"},[e.helpVisible?n("div",{staticClass:"help"},[e._v("\n        "+e._s(e.getHelpText())+"\n      ")]):e._e(),e._v(" "),e.helpVisible?e._e():n("div",{staticClass:"route-info-container"},[n("svg",{staticClass:"route-info",attrs:{viewBox:"0 0 400 40"},on:{click:function(t){t.preventDefault(),e.detailsVisible=!e.detailsVisible}}},[n("g",[n("path",{attrs:{d:"M20,20 L80,20 M290,20 L350,20","stroke-width":"4",stroke:"red",fill:"transparent"}}),e._v(" "),n("route-point",{attrs:{point:{x:20,y:20},scale:1,r:12,symbol:"A",fontSize:12,strokeWidth:1,textY:4}}),e._v(" "),n("route-point",{attrs:{point:{x:350,y:20},scale:1,r:12,symbol:"B",fontSize:12,strokeWidth:1,textY:4}}),e._v(" "),n("text",{attrs:{x:"185.5",y:"25",fill:"white","text-anchor":"middle","font-size":"18px"}},[e._v(e._s(e.pathText))])],1),e._v(" "),n("g",[e.detailsVisible?e._e():n("path",{attrs:{d:"M372,15 L388,15 380.5,28z","stroke-width":"0",stroke:"white",fill:"hsl(215, 34%, 64%)"}}),e._v(" "),e.detailsVisible?n("path",{attrs:{d:"M372,28 L388,28 380.5,15z","stroke-width":"0",stroke:"white",fill:"hsl(215, 34%, 64%)"}}):e._e()])]),e._v(" "),n("a",{staticClass:"reset",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.clearRoute(t)}}},[e._v("clear")])]),e._v(" "),e.detailsVisible&&!e.helpVisible?n("div",{staticClass:"details"},[n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[e._v("Path length:")]),e._v(" "),n("div",{staticClass:"col"},[e._v(e._s(e.stats.pathLength))])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[e._v("Path finder:")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.pathFinder.selected,expression:"pathFinder.selected"}],staticClass:"col",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.pathFinder.selected=t.target.multiple?n:n[0]},e.updateSearchAlgorithm]}},e._l(e.pathFinder.algorithms,function(t){return n("option",{domProps:{value:t.value}},[e._v(e._s(t.name))])}))])]):e._e()]):e._e(),e._v(" "),e.progress.visible?e._e():n("div",{staticClass:"graph-name",attrs:{title:e.graphNameTitle}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.graphSettings.selected,expression:"graphSettings.selected"}],staticClass:"col",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.graphSettings.selected=t.target.multiple?n:n[0]},e.updateGraph]}},e._l(e.graphSettings.graphs,function(t){return n("option",{domProps:{value:t.value}},[e._v(e._s(t.name))])}))])]):e._e(),e._v(" "),n("div",{staticClass:"about-line"},[n("a",{staticClass:"about-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.aboutVisible=!0}}},[e._v("about...")]),e._v(" "),n("a",{staticClass:"bold",attrs:{href:"http://github.com/anvaka/ngraph.path"}},[e._v("source code")])]),e._v(" "),e.progress.visible||"USA-road-d.NY"===e.graphSettings.selected?e._e():n("div",{staticClass:"osm-note"},[e._v("\n    Graph was extracted from "),n("a",{attrs:{href:"https://www.openstreetmap.org",target:"_blank"}},[e._v("www.openstreetmap.org")]),e._v(".\n    It is made available under "),n("a",{attrs:{href:"https://opendatacommons.org/licenses/odbl/summary/",target:"_blank"}},[e._v("ODbL")])]),e._v(" "),e.aboutVisible?n("about",{on:{close:function(t){e.aboutVisible=!1}}}):e._e()],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute no-webgl"},[n("h4",[e._v("WebGL is not enabled :(")]),e._v(" "),n("div",[e._v("While "),n("a",{staticClass:"highlighted",attrs:{href:"https://github.com/anvaka/ngraph.path"}},[e._v("ngraph.path")]),e._v(" does not require any webgl, this demo needs it.")]),e._v(" "),n("iframe",{staticClass:"video-demo",attrs:{src:"https://www.youtube.com/embed/hGeZuIEV6KU",frameborder:"0",allowfullscreen:""}})])}],s={render:r,staticRenderFns:i};t.a=s},"S4H+":function(e,t,n){"use strict";function r(e,t){function n(e){return g=new Int32Array(e),console.log("Downloaded nodes: "+g.length/2),r(g)}function r(e){return console.time("add nodes to graph"),t.message="Adding nodes to graph",new s.default(function(n){c(e,i,function(){t.pointsReady=!0,console.timeEnd("add nodes to graph"),n()},{step:2}),t.pointsReady=!0})}function i(e,n,r){var i=Math.floor(n/2),s=r[n+1];v.addNode(i,{x:e,y:s}),b.addPoint(e,s),n%500==0&&(t.completed=Math.round(100*n/r.length)+"%")}function l(){return o(a+"/"+e+".gr.bin",{responseType:"arraybuffer",progress:p("Loading roads graph")}).then(h)}function h(e){return m=new Int32Array(e),t.message="Adding edges to graph",console.time("add edges to graph"),new s.default(function(e){c(m,f,function(){console.timeEnd("add edges to graph"),t.linksReady=!0,console.log(v.getLinksCount()+" edges; "+v.getNodesCount()+" nodes."),e()},{step:2})})}function f(e,n,r){var i=e-1,s=r[n+1]-1;v.addLink(i,s),n%500==0&&(t.completed=Math.round(100*n/r.length)+"%")}function p(e){return function(n){t.message=e,t.completed=Math.round(100*n.percent)+"%"}}var v=u(),g=void 0,m=void 0,b=new d;return o(a+"/"+e+".co.bin",{responseType:"arraybuffer",progress:p("Loading intersection coordinates")}).then(n).then(l).then(function(){return{graph:v,points:g,links:m,graphBBox:b}})}var i=n("//Fk"),s=function(e){return e&&e.__esModule?e:{default:e}}(i),o=n("vccH"),a="static/",u=n("T/ob"),d=n("3Zuw"),c=n("4gmu");e.exports=r},SRj4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return e.scale==t.scale&&e.dx===t.dx&&e.dy===t.dy}function s(){}var o=n("Zx67"),a=r(o),u=n("Zrlr"),d=r(u),c=n("wxAW"),l=r(c),h=n("zwoO"),f=r(h),p=n("Pf15"),v=r(p),g=n("vkLu"),m=function(e){function t(e,n){(0,d.default)(this,t);var r=(0,f.default)(this,(t.__proto__||(0,a.default)(t)).call(this));return r.g=e,r.dx=0,r.dy=0,r.scale=0,r.drawCallback=n||s,r}return(0,v.default)(t,e),(0,l.default)(t,[{key:"draw",value:function(){var e=this.worldTransform;if(!i(this.worldTransform,this)){var t=this.scene.getPixelRatio(),n=e.scale/t,r=e.dx/t,s=e.dy/t;this.g.setAttributeNS(null,"transform","matrix("+n+", 0, 0, "+n+", "+r+", "+s+")"),this.scale=e.scale,this.dx=e.dx,this.dy=e.dy,this.drawCallback(this)}}}]),t}(g.Element);e.exports=m},U0jl:function(e,t,n){function r(e,t){function n(t,n){function a(e,t){var n=v.get(e.id);if(n||(n=h.createNewState(e),v.set(e.id,n)),!n.closed){0===n.open&&(g.push(n),n.open=1);var r=b.distanceToSource+l(e,b.node,t);r>=n.distanceToSource||(n.parent=b,n.distanceToSource=r,n.fScore=r+u(n.node,p),g.updateItem(n.heapIndex))}}var f=e.getNode(t);if(!f)throw new Error("fromId is not defined in this graph: "+t);var p=e.getNode(n);if(!p)throw new Error("toId is not defined in this graph: "+n);h.reset();var v=new Map,g=new o({compare:d.compareFScore,setNodeId:d.setHeapIndex}),m=h.createNewState(f);v.set(t,m),m.fScore=u(f,p),m.distanceToSource=0,g.push(m),m.open=1;for(var b;g.length>0;){if(b=g.pop(),i(b,p))return s(b);b.closed=!0,e.forEachLinkedNode(b.node.id,a,r)}return c}t=t||{};var r=t.oriented,u=t.heuristic;u||(u=d.heuristic);var l=t.distance;l||(l=d.distance);var h=a();return{find:n}}function i(e,t){return e.node===t}function s(e){for(var t=[e.node],n=e.parent;n;)t.push(n.node),n=n.parent;return t}e.exports=r;var o=n("31dX"),a=n("GKTj"),u=n("8a79"),d=n("kSRG"),c=d.NO_PATH;e.exports.l2=u.l2,e.exports.l1=u.l1},Zs8U:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){var e=this;this.closeHandler=function(t){27===t.keyCode&&(t.preventDefault(),e.close())},document.addEventListener("keyup",this.closeHandler)},beforeDestroy:function(){document.removeEventListener("keyup",this.closeHandler)},methods:{close:function(){this.$emit("close")}}}},c27y:function(e,t,n){"use strict";function r(e){n("e0RS")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("Zs8U"),s=n.n(i),o=n("JGX7"),a=n("VU/8"),u=r,d=a(s.a,o.a,u,null,null);t.default=d.exports},e0RS:function(e,t){},kSRG:function(e,t){function n(){return 0}function r(){return 1}function i(e,t){return e.fScore-t.fScore}function s(e,t){e.heapIndex=t}function o(e,t){return e.f1-t.f1}function a(e,t){return e.f2-t.f2}function u(e,t){e.h1=t}function d(e,t){e.h2=t}var c=[];"function"==typeof Object.freeze&&Object.freeze(c),e.exports={heuristic:n,distance:r,compareFScore:i,NO_PATH:c,setHeapIndex:s,setH1:u,setH2:d,compareF1Score:o,compareF2Score:a}},nEty:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"RoutePoint",props:{point:Object,scale:Number,symbol:String,r:Number,strokeWidth:{type:Number,default:2},fontSize:{type:Number,default:28},textY:{type:Number,default:10}},computed:{screenScale:function(){var e=1/this.scale;return"matrix("+e+", 0, 0, "+e+", "+this.point.x+", "+this.point.y+")"}}}},pNOi:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n("Zrlr"),s=r(i),o=n("wxAW"),a=r(o),u=function(){function e(){(0,s.default)(this,e),this.reset()}return(0,a.default)(e,[{key:"setError",value:function(e,t){this.errorMessage=e,this.errorDetails=t}},{key:"reset",value:function(){this.errorMessage=null,this.errorDetails=null,this.message="",this.completed="",this.pointsReady=!1,this.linksReady=!1,this.treeReady=!1}},{key:"visible",get:function(){return!(this.pointsReady&&this.linksReady&&this.treeReady)}}]),e}();e.exports=u},qEFR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("nEty"),i=n.n(r),s=n("N1rF"),o=n("VU/8"),a=o(i.a,s.a,null,null,null);t.default=a.exports},r0CE:function(e,t,n){e.exports={aStar:n("U0jl"),aGreedy:n("CnY6"),nba:n("sA0F")}},sA0F:function(e,t,n){function r(e,t){function n(t,n){function u(e,t){var n=I.get(e.id);if(n||(n=l.createNewState(e),I.set(e.id,n)),!n.closed){var r=T.g1+c(T.node,e,t);r<n.g1&&(n.g1=r,n.f1=r+d(n.node,g),n.p1=T,n.h1<0?w.push(n):w.updateItem(n.h1));var i=n.g1+n.g2;i<x&&(x=i,m=n)}}function h(e,t){var n=I.get(e.id);if(n||(n=l.createNewState(e),I.set(e.id,n)),!n.closed){var r=T.g2+c(T.node,e,t);r<n.g2&&(n.g2=r,n.f2=r+d(v,n.node),n.p2=T,n.h2<0?y.push(n):y.updateItem(n.h2));var i=n.g1+n.g2;i<x&&(x=i,m=n)}}function f(e,t){if(t.toId===T.node.id)return h(e,t)}function p(e,t){if(t.fromId===T.node.id)return u(e,t)}var v=e.getNode(t);if(!v)throw new Error("fromId is not defined in this graph: "+t);var g=e.getNode(n);if(!g)throw new Error("toId is not defined in this graph: "+n);l.reset();var m,b=r?p:u,_=r?f:h,I=new Map,w=new s({compare:a.compareF1Score,setNodeId:a.setH1}),y=new s({compare:a.compareF2Score,setNodeId:a.setH2}),x=Number.POSITIVE_INFINITY,S=l.createNewState(v);I.set(t,S),S.g1=0;var N=d(v,g);S.f1=N,w.push(S);var k=l.createNewState(g);I.set(n,k),k.g2=0;var E=N;k.f2=E,y.push(k);for(var T;y.length&&w.length&&(w.length<y.length?function(){T=w.pop(),T.closed||(T.closed=!0,T.f1<x&&T.g1+E-d(v,T.node)<x&&e.forEachLinkedNode(T.node.id,b),w.length>0&&(N=w.peek().f1))}():function(){T=y.pop(),T.closed||(T.closed=!0,T.f2<x&&T.g2+N-d(T.node,g)<x&&e.forEachLinkedNode(T.node.id,_),y.length>0&&(E=y.peek().f2))}(),!o||!m););return i(m)}t=t||{};var r=t.oriented,o=t.quitFast,d=t.heuristic;d||(d=a.heuristic);var c=t.distance;c||(c=a.distance);var l=u();return{find:n}}function i(e){if(!e)return d;for(var t=[e.node],n=e.p1;n;)t.push(n.node),n=n.p1;for(var r=e.p2;r;)t.unshift(r.node),r=r.p2;return t}e.exports=r;var s=n("31dX"),o=n("8a79"),a=n("kSRG"),u=n("DkjH"),d=a.NO_PATH;e.exports.l2=o.l2,e.exports.l1=o.l1},uIdY:function(e,t){function n(e,t,n){this.x="number"==typeof e?e:0,this.y="number"==typeof t?t:0,this.half="number"==typeof n?n:0}e.exports=n,n.prototype.left=function(){return this.x-this.half},n.prototype.top=function(){return this.y-this.half},n.prototype.width=function(){return 2*this.half},n.prototype.height=function(){return 2*this.half},n.prototype.centerX=function(){return this.x},n.prototype.centerY=function(){return this.y},n.prototype.contains=function(e,t){var n=this.half;return this.x-n<=e&&e<this.x+n&&this.y-n<=t&&t<this.y+n}},vccH:function(e,t,n){"use strict";function r(e,t){function n(n,r){function i(e){e.lengthComputable&&t.progress({loaded:e.loaded,total:e.total,percent:e.loaded/e.total})}function s(){if(200!==u.status)return void r("Unexpected status code "+u.status+" when calling "+e);var i=u.response;"json"===t.responseType&&"string"==typeof i&&(i=JSON.parse(i)),n(i)}function o(){r("Failed to download "+e)}function a(){r("Cancelled download of "+e)}var u=new XMLHttpRequest;"function"==typeof t.progress&&u.addEventListener("progress",i,!1),u.addEventListener("load",s,!1),u.addEventListener("error",o,!1),u.addEventListener("abort",a,!1),u.open("GET",e),t.responseType&&(u.responseType=t.responseType),u.send(null)}return t||(t={}),new s.default(n)}var i=n("//Fk"),s=function(e){return e&&e.__esModule?e:{default:e}}(i);e.exports=r},wmlL:function(e,t){function n(e,t,n,r){function i(){var r=Math.min(e.length,s+d),c=s,l=new Date;for(c=s;c<r;c+=a)t(e[c],c,e);c<e.length?(o+=new Date-l,s=c,d=Math.round(s*u/o),setTimeout(i,0)):n(e)}var s=0,o=0;r=r||{};var a=r.step||1,u=r.maxTimeMS||8,d=r.probeElements||5e3;setTimeout(i,0)}e.exports=n},xJD8:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n("0csq"),s=r(i),o=n("SRj4"),a=r(o),u=n("qEFR"),d=r(u),c=n("c27y"),l=r(c),h=n("14gb"),f=n("vkLu");t.default={name:"app",components:{RoutePoint:d.default,About:l.default},mounted:function(){this.webGLEnabled=f.isWebGLEnabled(this.$refs.canvas),this.webGLEnabled&&(s.default.loadPositions(),h.on("graph-loaded",this.createScene,this))},beforeDestroy:function(){h.off("graph-loaded",this.createScene),this.ensurePreviousSceneDestroyed()},data:function(){return{webGLEnabled:!0,loaded:!1,detailsVisible:!1,progress:s.default.progress,routeStart:s.default.routeStart,routeEnd:s.default.routeEnd,stats:s.default.stats,scale:1,pathInfo:s.default.pathInfo,pathFinder:s.default.pathFinderSettings,graphSettings:s.default.graphSettings,aboutVisible:!1}},computed:{graphNameTitle:function(){var e=this.stats;return e?e.graphNodeCount+" nodes; "+e.graphLinksCount+" edges":""},helpVisible:function(){return!(this.routeStart.visible&&this.routeEnd.visible)},pathText:function(){return this.pathInfo.noPath?"No path ("+this.stats.lastSearchTook+")":"Found in: "+this.stats.lastSearchTook}},methods:{clearRoute:function(){s.default.clearRoute()},getHelpText:function(){return this.routeStart.visible?this.routeEnd.visible?void 0:"Click anywhere to select destination":"Click anywhere to select starting point"},ensurePreviousSceneDestroyed:function(){this.scene&&(this.scene.dispose(),this.scene=null),this.unsubscribeMoveEvents&&(this.unsubscribeMoveEvents(),this.unsubscribeMoveEvents=null)},createScene:function(){this.ensurePreviousSceneDestroyed();var e=this.$refs.canvas;this.loaded=!0,this.scene=f.scene(e);var t=this.scene,n=new a.default(this.$refs.svg.querySelector(".scene"),this.updateSVGElements.bind(this));this.scene.appendChild(n),t.setClearColor(12/255,41/255,82/255,1);var r=s.default.getGraphBBox(),i=r.width/8;t.setViewBox({left:-i,top:-i,right:i,bottom:i});var o=s.default.getGraph(),u=o.getLinksCount(),d=new f.WireCollection(u);d.color={r:.8,g:.8,b:.8,a:.7},o.forEachLink(function(e){var t=o.getNode(e.fromId).data,n=o.getNode(e.toId).data;d.add({from:t,to:n})}),t.appendChild(d),t.on("mousemove",this.onMouseMoveOverScene,this),t.on("click",this.onSceneClick,this);var c=this.handleMouseDown.bind(this);document.body.addEventListener("mousedown",c,!0),document.body.addEventListener("touchstart",c,!0),this.unsubscribeMoveEvents=function(){document.body.removeEventListener("mousedown",c,!0),document.body.removeEventListener("touchstart",c,!0)}},updateSVGElements:function(e){var t=6/e.scale;this.$refs.foundPath.setAttributeNS(null,"stroke-width",t+"px"),this.scale=e.scale/this.scene.getPixelRatio()},handleMouseDown:function(e){var t,n=void 0;if(e.touches){var r=(e.changedTouches||e.touches)[0];t=this.scene.getSceneCoordinate(r.clientX,r.clientY),n=r.identifier}else t=this.scene.getSceneCoordinate(e.clientX,e.clientY);var i=s.default.getRouteHandleUnderCursor({sceneX:t.x,sceneY:t.y},this.scene);if(i)return e.stopPropagation(),e.preventDefault(),void i.startDragging(this.scene,n)},updateGraph:function(){this.ensurePreviousSceneDestroyed(),setTimeout(function(){s.default.updateSelectedGraph()},0)},updateSearchAlgorithm:function(){s.default.updateSearchAlgorithm()},onSceneClick:function(e){s.default.handleSceneClick(e)},onMouseMoveOverScene:function(e){var t=(new Date,s.default.getRouteHandleUnderCursor(e,this.scene));t!==this.prevHandle&&(this.$refs.canvas.style.cursor=t?"pointer":"",this.prevHandle=t)}}}}},["NHnr"]);
//# sourceMappingURL=app.0909d77a9f567b9c9812.js.map