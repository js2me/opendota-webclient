webpackJsonp([3],{316:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"Map",function(){return i});var n=o(1),a=(o.n(n),o(442)),r=(o.n(a),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}()),i=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.componentWillMount=function(){document.body.classList.add("map-showed")},e.prototype.componentWillUnmount=function(){document.body.classList.remove("map-showed")},e.prototype.componentDidMount=function(){},e.prototype.render=function(){return n.createElement("div",{className:"page map"},n.createElement("iframe",{src:"https://devilesk.com/dota2/apps/interactivemap",className:"drawable-map"}),n.createElement("span",{className:"thanks"},"Карта создана ",n.createElement("a",{href:"https://github.com/devilesk",className:"github-user"},"devilesk")," и является его разработкой"))},e}(n.Component)},442:function(t,e,o){var n=o(443);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0};a.transform=void 0;o(310)(n,a);n.locals&&(t.exports=n.locals)},443:function(t,e,o){e=t.exports=o(309)(!1),e.push([t.i,".page.map{padding:0;width:100%;left:0;top:0;margin:0;height:100%;overflow:hidden;z-index:0}.drawable-map{width:100%;height:100%;background:#323b40}.drawable-map body{color:red!important}.thanks{position:absolute;left:0;bottom:0;color:#da3f06;padding:0 5px;background:hsla(0,0%,96%,.86);font-size:19px}.thanks a{color:#30549a}",""])}});