(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{202:function(e,t,a){e.exports=a(384)},368:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),c=a(19),l=a.n(c),u=a(38),i=a(64),m=a(88),p=a(52),d=a(391),f=a(55),b=a(389),E=a(89),g=a(87),v=function(e){var t=e.todoName,a=e.completeToDo,n=e.changeImportance,o=e.important,s=d.a.Text;return r.a.createElement(f.a,{span:6},r.a.createElement(b.a,{title:r.a.createElement(s,{type:o?"danger":null},t)},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E.a,{gutter:16},r.a.createElement(f.a,{span:12},r.a.createElement(g.a,{type:"primary",onClick:a},"Done!")),r.a.createElement(f.a,{span:12},r.a.createElement(g.a,{type:"default",onClick:n,danger:!0},o?"Regular":"Important!"))))))},h=a(134),w=a(66),y=a.n(w),O="http://localhost:3001/todos",j=null,x={getAll:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(O);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addTodo:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:j}},e.next=3,y.a.post(O,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteTodo:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:j}},e.next=3,y.a.delete("".concat(O,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateTodo:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.patch("".concat(O,"/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),setToken:function(e){j="bearer ".concat(e)}},k=function(e,t){return{type:"INIT",data:{todos:e,userId:t}}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":console.log("user id",t.data.userId),console.log("Passed todos",t.data.todos);var a=t.data.todos.filter((function(e){return e.user===t.data.userId}));return a;case"ADD":return Object(h.a)(e).concat(t.data);case"COMPLETE":return Object(h.a)(e).filter((function(e){return e.id!==t.data.id}));case"CHANGE_IMPORTANCE":var n=t.data.id;console.log(n);var r=e.find((function(e){return e.id===n}));console.log(r);var o=Object(m.a)(Object(m.a)({},r),{},{important:!r.important});return e.map((function(e){return e.id!==t.data.id?e:o}));case"RESET":return t.data;default:return e}},T=a(60),C=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e}));console.log(t);var a=function(a){var n=t.find((function(e){return e.id===a})),r=Object(m.a)(Object(m.a)({},n),{},{important:!n.important});e(function(e,t){return function(){var a=Object(u.a)(l.a.mark((function a(n){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x.updateTodo(e,t);case 2:a.sent,n({type:"CHANGE_IMPORTANCE",data:{id:e}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a,r))},n=t.map((function(t,n){return r.a.createElement(v,{todoName:t.todo,key:n,important:t.important,id:t.id,i:n,changeImportance:function(){return a(t.id)},completeToDo:function(){return e((a=t.id,function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.deleteTodo(a);case 2:e.sent,t({type:"COMPLETE",data:{id:a}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var a}})}));return r.a.createElement("div",null,r.a.createElement(E.a,{gutter:[8,16]},n))},P=a(390),A=a(392),R=a(114),S=function(){var e=Object(R.useForm)(),t=Object(i.a)(e,1)[0],a=Object(p.b)();return r.a.createElement("div",{style:{margin:10}},r.a.createElement(P.a,{form:t,onFinish:function(e){console.log(e);var n,r=e.todo;a((n={todo:r,done:!1},function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.addTodo(n);case 2:a=e.sent,t({type:"ADD",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t.resetFields()}},r.a.createElement(P.a.Item,{name:"todo"},r.a.createElement(A.a,{placeholder:"Enter todo"})),r.a.createElement(P.a.Item,null,r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Add Todo"))))},N=(a(367),a(388)),F=(a(368),a(200)),q={login:function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("http://localhost:3001/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("http://localhost:3001/users",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=a(35),U=function(){var e=Object(D.g)(),t={border:"1px solid black",width:"50%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",paddingTop:"2em",borderRadius:"15px",animation:T.animations.fadeIn},a=Object(R.useForm)(),n=Object(i.a)(a,1)[0],o=function(){var t=Object(u.a)(l.a.mark((function t(a){var r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.password===a.passwordCheck){t.next=3;break}return F.b.error("Passwords do not match!"),t.abrupt("return",console.error("Passwords do not match"));case 3:return r={username:a.username,name:a.name,email:a.email,password:a.password},t.prev=4,t.next=7,q.register(r);case 7:o=t.sent,console.log(o),n.resetFields(),e.push("/success"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0.message),"Request failed with status code 400"===t.t0.message?F.b.error("Following username is already taken"):F.b.error("Following email is already taken");case 17:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{style:t},r.a.createElement(P.a,Object.assign({onFinish:o,form:n},{labelCol:{span:6},wrapperCol:{span:14}}),r.a.createElement(P.a.Item,{label:"Username",name:"username",rules:[{required:!0}]},r.a.createElement(A.a,null)),r.a.createElement(P.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email"}]},r.a.createElement(A.a,null)),r.a.createElement(P.a.Item,{label:"Full name",name:"name",rules:[{required:!0}]},r.a.createElement(A.a,null)),r.a.createElement(P.a.Item,{label:"Password",name:"password",rules:[{required:!0,min:6,message:"Please enter your password"}]},r.a.createElement(A.a.Password,null)),r.a.createElement(P.a.Item,{label:"Confirm password",name:"passwordCheck",rules:[{required:!0,min:6,message:"Please confirm your password!"}]},r.a.createElement(A.a.Password,null)),r.a.createElement(P.a.Item,Object.assign({name:"button"},{wrapperCol:{offset:6,span:14}}),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Register !"))))},L=a(71),M=a(387),J=a(393),z=function(e){var t=e.btnText,a=e.title,n=e.subtitle,o=e.handleClick;return r.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(J.a,{status:"success",title:a,subTitle:n,extra:r.a.createElement(g.a,{type:"primary",onClick:o},t)}))},G=a(394),H=function(e){var t=e.setUser,a=Object(p.b)(),n=function(){var e=Object(u.a)(l.a.mark((function e(n){var r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={username:n.username,password:n.password},e.prev=1,e.next=4,q.login(r);case 4:o=e.sent,t(o),x.setToken(o.token),function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getAll();case 2:n=e.sent,a(k(n,t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(o.id),window.localStorage.setItem("loggedInUser",JSON.stringify(o)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),"Request failed with status code 401"===e.t0.message&&F.b.error("Incorrect username or password");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),o={wrapperCol:{offset:6,span:14}},s={border:"1px solid black",width:"50%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",paddingTop:"2em",borderRadius:"15px",animation:T.animations.fadeIn};return r.a.createElement("div",{style:s},r.a.createElement(P.a,Object.assign({name:"login",initialValues:{remember:!0},onFinish:n},{labelCol:{span:6},wrapperCol:{span:14}}),r.a.createElement(P.a.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Please enter your username!"}]},r.a.createElement(A.a,null)),r.a.createElement(P.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please enter your password!"}]},r.a.createElement(A.a.Password,null)),r.a.createElement(P.a.Item,Object.assign({name:"remember",valuePropName:"checked"},o),r.a.createElement(G.a,null,"Remember me")),r.a.createElement(P.a.Item,o,r.a.createElement(g.a,{htmlType:"submit",type:"primary"},"Login"))))},W=function(e){var t=e.setUser,a=Object(D.g)(),o=Object(n.useState)(!0),s=Object(i.a)(o,2),c=s[0],l=s[1];Object(n.useEffect)((function(){l(!0)}),[]);var u=d.a.Title;window.addEventListener("popstate",(function(e){l(!0)}));var m={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",border:"1px solid black",textAlign:"center",padding:"4em",display:c?"":"none",animation:T.animations.fadeIn,easing:T.easings.easeInSine,duration:1500};return r.a.createElement("div",null,r.a.createElement("div",{style:m},r.a.createElement(u,null,"ToDo"),r.a.createElement(u,{level:4,type:"secondary"},"Minimalistic. Simple. Effective"),r.a.createElement(u,{level:5,type:"secondary"},"Register or login to begin"),r.a.createElement(M.a,null),r.a.createElement("div",{style:{padding:"auto"}},r.a.createElement(E.a,{gutter:16},r.a.createElement(f.a,{span:12},r.a.createElement(L.b,{to:"/registration"},r.a.createElement(g.a,{type:"primary",onClick:function(){return l(!c)}},"Register"))),r.a.createElement(f.a,{span:12},r.a.createElement(L.b,{to:"/login"},r.a.createElement(g.a,{type:"primary",onClick:function(){return l(!c)}},"Login")))))),r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/registration"},r.a.createElement(U,null)),r.a.createElement(D.b,{path:"/login"},r.a.createElement(H,{setUser:t})),r.a.createElement(D.b,{path:"/success"},r.a.createElement(z,{title:"Registration complete",subtitle:"Click the button to proceed to login form",btnText:"Login",handleClick:function(){return a.push("/login")}}))))},_=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],o=t[1],s=Object(D.g)(),c=Object(p.b)();Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedInUser");if(e){console.log(e);var t=JSON.parse(e);o(t),console.log(t.id),console.log(t.todos),x.setToken(t.token),function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getAll();case 2:a=e.sent,c(k(a,t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(t.id),s.push("/todos")}else s.push("/")}),[s,c]);return r.a.createElement("div",null,r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/todos"},a?r.a.createElement("div",null,r.a.createElement(N.a,{title:"Todo List",subTitle:"Welcome ".concat(a.name),extra:[r.a.createElement(g.a,{type:"primary",onClick:function(){window.localStorage.removeItem("loggedInUser"),o(null),c({type:"RESET",data:[]}),s.push("/")}},"Log out")]}),r.a.createElement(S,null),r.a.createElement(C,null)):r.a.createElement(D.a,{to:"/"})),r.a.createElement(D.b,{path:"/"},a?r.a.createElement(D.a,{to:"todos"}):r.a.createElement(W,{setUser:o}))))},B=a(80),V=a(196),K=a(197),Q=Object(B.createStore)(I,Object(K.composeWithDevTools)(Object(B.applyMiddleware)(V.a)));s.a.render(r.a.createElement(p.a,{store:Q},r.a.createElement(L.a,null,r.a.createElement(_,null))),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.7f06dda7.chunk.js.map