(this["webpackJsonpreact-12-challenge"]=this["webpackJsonpreact-12-challenge"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),l=(n(13),n(1)),i=n(2),s=n(3),u=n(5),h=n(4),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"TabSelector"},c.a.createElement("button",{id:"home",onClick:this.props.handleChangeTab,className:"home"===this.props.activeId?"active":""},"Home"),c.a.createElement("button",{id:"about",onClick:this.props.handleChangeTab,className:"about"===this.props.activeId?"active":""},"About"),c.a.createElement("button",{id:"contact",onClick:this.props.handleChangeTab,className:"contact"===this.props.activeId?"active":""},"Contact"))}}]),n}(a.Component),d=(n(14),function(){return c.a.createElement("p",null,"This is the Home component!")}),b=function(){return c.a.createElement("p",null,"This challenge is about tabs!")},p=function(){return c.a.createElement("p",null,"Feel free to contact us!")},v=function(){return c.a.createElement("p",null,"Something went ",c.a.createElement("strong",null,"wrong"),"!")},g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={activeId:"home"},a.handleChangeTab=a.handleChangeTab.bind(Object(s.a)(a)),a}return Object(i.a)(n,[{key:"getTabContent",value:function(){switch(this.state.activeId){case"home":return c.a.createElement(d,null);case"about":return c.a.createElement(b,null);case"contact":return c.a.createElement(p,null);default:return c.a.createElement(v,null)}}},{key:"handleChangeTab",value:function(e){var t=e.target.id;this.setState({activeId:t})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,{activeId:this.state.activeId,handleChangeTab:this.handleChangeTab}),c.a.createElement("div",{className:"App-content"},this.getTabContent()))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.623bd691.chunk.js.map