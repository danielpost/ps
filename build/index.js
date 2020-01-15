!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},function(t){t.exports=JSON.parse('{"name":"sortabrilliant/postscript","category":"layout","attributes":{"text":{"type":"string"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"customBackgroundColor":{"type":"string"},"customTextColor":{"type":"string"},"borderRadius":{"type":"number"}}}')},function(t,e){!function(){t.exports=this.wp.compose}()},function(t,e,o){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var l=typeof r;if("string"===l||"number"===l)t.push(r);else if(Array.isArray(r)&&r.length){var c=n.apply(null,r);c&&t.push(c)}else if("object"===l)for(var a in r)o.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(r=function(){return n}.apply(e,[]))||(t.exports=r)}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e,o){"use strict";o.r(e);var r=o(0),n=o(5),l=o(2),c=o(1);function a(t){var e=t.borderRadius,o=void 0===e?"":e,n=t.setAttributes,c=Object(r.useCallback)((function(t){n({borderRadius:t})}),[n]);return Object(r.createElement)(l.PanelBody,{title:"Border Settings",initialOpen:!1},Object(r.createElement)(l.RangeControl,{value:o,label:"Border Radius",min:0,max:50,initialPosition:5,allowReset:!0,onChange:c}))}var i=Object(n.compose)([Object(c.withColors)("backgroundColor",{textColor:"color"})])((function(t){var e=t.attributes,o=t.setAttributes,n=t.backgroundColor,i=t.textColor,u=t.setBackgroundColor,s=t.setTextColor,p=e.text,b=e.borderRadius,d=Object(r.useCallback)((function(t){o({text:t})}),[o]);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(c.InspectorControls,null,Object(r.createElement)(l.PanelBody,{title:"Button Settings"},Object(r.createElement)(l.TextControl,{label:"Button Label",value:p||"",onChange:d})),Object(r.createElement)(c.PanelColorSettings,{title:"Color Settings",initialOpen:!1,colorSettings:[{value:n.color,onChange:u,label:"Background Color"},{value:i.color,onChange:s,label:"Text Color"}]}),Object(r.createElement)(a,{borderRadius:b,setAttributes:o})),Object(r.createElement)("div",{className:"wp-block-post-script"},Object(r.createElement)("div",{className:"wp-block-post-script__content"},Object(r.createElement)(c.InnerBlocks,{renderAppender:function(){return Object(r.createElement)(c.InnerBlocks.ButtonBlockAppender,null)}}))))})),u=o(3),s=o.n(u),p=o(6),b=o.n(p),d=function(t){var e,o=t.attributes,n=o.backgroundColor,l=o.customBackgroundColor,a=o.customTextColor,i=o.text,u=o.textColor,p=o.borderRadius,d=Object(c.getColorClassName)("color",u),f=Object(c.getColorClassName)("background-color",n),m=b()("wp-block-post-script__button",(e={"wp-block-button__link":!0,"has-text-color":u||a},s()(e,d,d),s()(e,"has-background",n||l),s()(e,f,f),e)),g={backgroundColor:f?void 0:l,color:d?void 0:a,borderRadius:p?p+"px":void 0};return Object(r.createElement)("div",{className:"wp-block-post-script"},Object(r.createElement)(c.RichText.Content,{tagName:"button",className:m,style:g,value:i}),Object(r.createElement)("div",{className:"wp-block-post-script__content"},Object(r.createElement)(c.InnerBlocks.Content,null)))},f=Object(r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Object(r.createElement)(l.Path,{d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),m=o(4),g=o(7),v=m.name,O=m.category,j=m.attributes;Object(g.registerBlockType)(v,{title:"P.S.",description:"Add important information to the bottom of every page.",icon:f,keywords:["pop up","popover","PS","postscript","popper"],category:O,attributes:j,supports:{multiple:!1},edit:i,save:d})}]);