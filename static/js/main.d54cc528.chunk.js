(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,,,function(e,a,n){e.exports=n(15)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(5),o=n.n(r),l=(n(11),n(3)),i=n(1),u=(n(12),n(13),n(14),function(e){return c.a.createElement("button",{className:"square",onClick:function(){""!==e.value||e.winner||e.onClickCallback(e.id)}},e.value," ")}),s=function(e){var a=function(e,a,n){return e.map((function(e){return e.map((function(e){return c.a.createElement(u,{key:e.id,value:e.value,id:e.id,onClickCallback:a,winner:n})}))}))}(e.squares,e.onClickCallback,e.winner);return console.log(a),c.a.createElement("div",{className:"grid"},a)},v=function(){for(var e=[],a=0,n=0;n<3;n+=1){e.push([]);for(var t=0;t<3;t+=1)e[n].push({id:a,value:""}),a+=1}return e},f=function(){var e=Object(t.useState)(v()),a=Object(i.a)(e,2),n=a[0],r=a[1],o=Object(t.useState)(!0),u=Object(i.a)(o,2),f=u[0],m=u[1],d=Object(t.useState)(void 0),h=Object(i.a)(d,2),p=h[0],b=h[1],k=function(){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=n.flat(),t=0;t<e.length;t++){var c=Object(i.a)(e[t],3),r=c[0],o=c[1],u=c[2];if(a[r].value&&a[r].value===a[o].value&&a[r].value===a[u].value)return void b("The winner is ".concat(a[r].value.toUpperCase()))}var s,v=0,f=Object(l.a)(a);try{for(f.s();!(s=f.n()).done;){""===s.value.value&&v++}}catch(m){f.e(m)}finally{f.f()}0===v&&b("No winner!")};return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"React Tic Tac Toe"),c.a.createElement("h2",null,p," "),c.a.createElement("button",{onClick:function(){b(void 0),m(!0);var e=v();r(e)}}," Reset Game ")),c.a.createElement("main",null,c.a.createElement(s,{squares:n,onClickCallback:function(e){var a,t=[],c=Object(l.a)(n);try{for(c.s();!(a=c.n()).done;){var o,i=a.value,u=[],s=Object(l.a)(i);try{for(s.s();!(o=s.n()).done;){var v=o.value;if(v.id===e){var d=v;d.value=f?"X":"O",u.push(d)}else u.push(v)}}catch(h){s.e(h)}finally{s.f()}t.push(u)}}catch(h){c.e(h)}finally{c.f()}r(t),m(!f),k()},winner:p})," "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.d54cc528.chunk.js.map