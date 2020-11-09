(this["webpackJsonpsolidity-approve"]=this["webpackJsonpsolidity-approve"]||[]).push([[0],{204:function(e,t,n){},217:function(e,t){},226:function(e,t){},244:function(e,t){},246:function(e,t){},263:function(e,t){},264:function(e,t){},266:function(e,t){},267:function(e,t){},343:function(e,t){},345:function(e,t){},354:function(e,t){},356:function(e,t){},381:function(e,t){},383:function(e,t){},389:function(e,t){},390:function(e,t){},392:function(e,t){},404:function(e,t){},407:function(e,t){},412:function(e,t){},423:function(e,t){},426:function(e,t){},478:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n(48),r=n.n(s),c=n(195),u=n.n(c),i=(n(204),n(198)),o=n(18),p=n.n(o),d=n(67),l=n(3),f=n(5),y=n(10),b=n(9);function m(e,t){return new e.eth.Contract(JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'),t)}var v=n(196),h=new(n.n(v).a)(window.web3.currentProvider),j=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={erc20Address:"0x0000000000000000000000000000000000000000",spenderAddress:"0x0000000000000000000000000000000000000000",amount:0,account:"",erc20AddressA:"0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",spenderAddressA:"0x0000000000000000000000000000000000000000",allowance:0},e.onApproveClick=Object(d.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(h,e.state.erc20Address);case 2:return n=t.sent,t.next=5,n.methods.approve(e.state.spenderAddress,e.state.amount).send({from:e.state.account});case 5:alert("Approved Successfully!");case 6:case"end":return t.stop()}}),t)}))),e.onCheckAllowanceClick=Object(d.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(h,e.state.erc20AddressA);case 2:return n=t.sent,t.next=5,n.methods.allowance(e.state.account,e.state.spenderAddressA).call();case 5:a=t.sent,e.setState({allowance:a});case 7:case"end":return t.stop()}}),t)}))),e.hanldeState=function(t){e.setState(t)},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.eth.getAccounts();case 2:t=e.sent,n=Object(i.a)(t,1),a=n[0],this.setState({account:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[Object(a.jsx)("h2",{children:"Approve"}),Object(a.jsx)("div",{children:"ERC20 address"}),Object(a.jsx)("input",{type:"text",onChange:function(t){return e.hanldeState({erc20Address:t.target.value})}}),Object(a.jsx)("div",{children:"Spender address"}),Object(a.jsx)("input",{type:"text",onChange:function(t){return e.hanldeState({spenderAddress:t.target.value})}}),Object(a.jsx)("div",{children:"Amount"}),Object(a.jsx)("input",{type:"text",onChange:function(t){return e.hanldeState({amount:t.target.value})}}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return e.onApproveClick()},children:"Approve"})}),Object(a.jsx)("h2",{children:"Allowance"}),Object(a.jsx)("div",{children:"ERC20 address"}),Object(a.jsx)("input",{type:"text",value:this.state.erc20AddressA,onChange:function(t){return e.hanldeState({erc20AddressA:t.target.value})}}),Object(a.jsx)("div",{children:"Spender address"}),Object(a.jsx)("input",{type:"text",onChange:function(t){return e.hanldeState({spenderAddressA:t.target.value})}}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return e.onCheckAllowanceClick()},children:"Check Allowance"})}),Object(a.jsx)("div",{children:"Allowance ".concat(this.state.account," to ").concat(this.state.spenderAddressA," is: ").concat(this.state.allowance)})]})}}]),n}(s.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,480)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),x()}},[[478,1,2]]]);
//# sourceMappingURL=main.54798c40.chunk.js.map