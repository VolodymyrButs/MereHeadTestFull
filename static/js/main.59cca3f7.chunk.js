(this.webpackJsonpmerehead=this.webpackJsonpmerehead||[]).push([[0],{23:function(e,n,t){e.exports=t(43)},43:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),u=t.n(a),c=t(8),o=t.n(c),i=t(4),l=t(17),s=t.n(l),p=t(7),m=t(18),d=function(){try{var e=localStorage.getItem("users");return null===e?{users:[]}:JSON.parse(e)}catch(n){return console.error(n),{}}}(),f=Object(p.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"add":return{users:n.data};default:return e}}),Object(p.a)(m.a));f.subscribe(s()((function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem("users",n)}catch(t){console.log(t)}}({users:f.getState().users})}),500));var b=t(2),h=t(3);function g(){var e=Object(r.a)(["\n    display: flex;\n    justify-content: center;\n    div {\n        display: flex;\n        width: 100px;\n        justify-content: space-around;\n        align-items: center;\n    }\n    button {\n        height: 30px;\n        border-radius: 100%;\n        line-height: 14px;\n    }\n"]);return g=function(){return e},e}var E=b.b.div(g()),v=function(e){var n=e.currentPage,t=e.setCurrentPage,r=e.PageCount;return u.a.createElement(u.a.Fragment,null,r>1&&u.a.createElement(E,null,u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){t(1===n?r:n-1)}}," \u2190"),u.a.createElement("span",null,n,"/",r),u.a.createElement("button",{onClick:function(){return t(n===r?1:n+1)}}," \u2192"))))},j=function(e){if(!e.ok)throw new Error("".concat(e.status,": ").concat(e.statusText));return e.json()},O=function(e){console.error(e)},y=function(e){return function(n){fetch("https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/users").then(j).then((function(e){return n({type:"add",data:e})})).catch(O).finally(e(!1))}};function x(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 0;\n    justify-content: center;\n    border: 1px solid black;\n    border-radius: 15px;\n    margin: 10px;\n    padding: 10px;\n    background-color: lightgray;\n    input,\n    button {\n        margin: 10px;\n        padding: 5px 10px;\n        font-weight: bold;\n        border-radius: 10px;\n        outline: none;\n    }\n    @media (min-width: 860px) {\n        flex-direction: row;\n    }\n"]);return x=function(){return e},e}var C=b.b.form(x()),k=function(e){var n=e.setLoading,t=Object(i.b)(),r=Object(a.useState)(""),c=Object(h.a)(r,2),o=c[0],l=c[1],s=Object(a.useState)(""),p=Object(h.a)(s,2),m=p[0],d=p[1],f=Object(a.useState)(""),b=Object(h.a)(f,2),g=b[0],E=b[1],v={name:o,surname:m,desc:g};return u.a.createElement(C,{onSubmit:function(e){e.preventDefault(),l(""),d(""),E(""),t(function(e,n){return function(t){return n(!0),fetch("https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(j).then((function(){t(y(n))})).catch(O)}}(v,n))}},u.a.createElement("h3",null,"Create user"),u.a.createElement("input",{type:"text",name:"name",placeholder:"input name",value:o,onChange:function(e){l(e.currentTarget.value)},required:!0}),u.a.createElement("input",{type:"text",name:"surname",placeholder:"input surname",value:m,onChange:function(e){d(e.currentTarget.value)},required:!0}),u.a.createElement("input",{type:"text",name:"desc",placeholder:"input description",value:g,onChange:function(e){E(e.currentTarget.value)},required:!0}),u.a.createElement("button",{type:"submit"},"Create user"))},S=t(22);function w(){var e=Object(r.a)(["\n    width: 100vw;\n    min-height: 100vh;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.85);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return w=function(){return e},e}var T=b.b.div(w()),P=function(e){var n=e.children,t=Object(S.a)(e,["children"]);return u.a.createElement(T,t,n)};function q(){var e=Object(r.a)(["\n    span {\n        font-size: 32px;\n        color: white;\n    }\n"]);return q=function(){return e},e}var D=Object(b.b)(P)(q()),J=function(e){var n=e.user,t=e.setLoading,r=Object(i.b)(),c=Object(a.useState)(""),o=Object(h.a)(c,2),l=o[0],s=o[1],p=Object(a.useState)(""),m=Object(h.a)(p,2),d=m[0],f=m[1],b=Object(a.useState)(""),g=Object(h.a)(b,2),E=g[0],v=g[1],x=Object(a.useState)(!1),k=Object(h.a)(x,2),S=k[0],w=k[1],T=Object(a.useState)(!1),q=Object(h.a)(T,2),J=q[0],L=q[1],N={name:l,surname:d,desc:E},F=function(){return r(function(e,n){return function(t){return n(!0),fetch("https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/user/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(j).then((function(){t(y(n))})).catch(O)}}(n.id,t))};return u.a.createElement(u.a.Fragment,null,J&&u.a.createElement(D,null,u.a.createElement("span",null,"Delete?"),u.a.createElement("button",{onClick:function(){F(),L(!1)}},"Ok"),u.a.createElement("button",{onClick:function(){L(!1)}},"No")),!S&&u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{onClick:function(){return L(!0)}},"Delete user"),u.a.createElement("button",{onClick:function(){s(n.name),f(n.surname),v(n.desc),w(!0)}},"Edit user")),S&&u.a.createElement(P,null,u.a.createElement(C,{onSubmit:function(e){e.preventDefault(),r(function(e,n,t,r){return function(a){return t(!1),r(!0),fetch("https://cors-anywhere.herokuapp.com/http://77.120.241.80:8911/api/user/".concat(e),{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(j).then((function(){a(y(r))})).catch(O)}}(n.id,N,w,t))}},u.a.createElement("h3",null,"Edit user"),u.a.createElement("input",{type:"text",name:"name",placeholder:"input name",defaultValue:l,onChange:function(e){s(e.currentTarget.value)},required:!0}),u.a.createElement("input",{type:"text",name:"surname",placeholder:"input surname",defaultValue:d,onChange:function(e){f(e.currentTarget.value)},required:!0}),u.a.createElement("input",{type:"text",name:"desc",placeholder:"input desc",defaultValue:E,onChange:function(e){v(e.currentTarget.value)},required:!0}),u.a.createElement("button",{type:"submit"},"Edit user"),u.a.createElement("button",{type:"button",onClick:function(){s(""),f(""),v(""),w(!1)}},"Cancel edit"))))};function L(){var e=Object(r.a)(["\n    border: 1px solid black;\n    border-radius: 15px;\n    margin: 10px;\n    padding: 10px;\n    button,\n    p,\n    > span {\n        margin: 10px;\n        padding: 5px 10px;\n        border-radius: 10px;\n        outline: none;\n    }\n"]);return L=function(){return e},e}function N(){var e=Object(r.a)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n"]);return N=function(){return e},e}var F=b.b.div(N()),I=b.b.div(L()),V=function(){var e=Object(i.b)(),n=Object(a.useState)(!1),t=Object(h.a)(n,2),r=t[0],c=t[1];Object(a.useEffect)((function(){e(y(c))}),[]);var o=Object(i.c)((function(e){return e.users})),l=Object(a.useState)(1),s=Object(h.a)(l,2),p=s[0],m=s[1],d=o.slice(5*(p-1),5*p),f=Math.max(Math.ceil(o.length/5),1);return f<p&&m(f),u.a.createElement(u.a.Fragment,null,r&&u.a.createElement(P,null,u.a.createElement("span",null,"Loading...")),u.a.createElement(k,{setLoading:c}),u.a.createElement(v,{currentPage:p,setCurrentPage:m,usersPerPage:5,PageCount:f}),u.a.createElement(F,null,d&&d.map((function(e,n){return u.a.createElement(I,{key:n},u.a.createElement("p",null,"Name: ",e.name),u.a.createElement("p",null,"Surname: ",e.surname),u.a.createElement("p",null,"Description: ",e.desc),u.a.createElement(J,{setLoading:c,user:e}))}))))};function M(){var e=Object(r.a)(["\n  html,body {\n    margin:0;\n    position: relative;\n  }\n  button{\n      :hover{\n          background-color: lightblue;\n          cursor: pointer;\n          }\n        :focus{\n            border-color: lightcoral;\n            outline:none;\n        }\n  }\n"]);return M=function(){return e},e}var z=Object(b.a)(M());o.a.render(u.a.createElement(u.a.Fragment,null,u.a.createElement(z,null),u.a.createElement(i.a,{store:f},u.a.createElement(V,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.59cca3f7.chunk.js.map