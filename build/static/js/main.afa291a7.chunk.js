(this.webpackJsonpcomp2156=this.webpackJsonpcomp2156||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),m=a.n(r);a(12),a(13);var u=e=>{let{addStudent:t}=e;const[a,r]=Object(n.useState)({name:"",age:"",major:""}),m=e=>{const{name:t,value:n}=e.target;r({...a,[t]:n})};return l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),a.name&&a.age&&a.major&&(t(a),r({name:"",age:"",major:""}))}},l.a.createElement("div",null,l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:a.name,onChange:m})),l.a.createElement("div",null,l.a.createElement("label",null,"Age:"),l.a.createElement("input",{type:"number",name:"age",value:a.age,onChange:m})),l.a.createElement("div",null,l.a.createElement("label",null,"Major:"),l.a.createElement("input",{type:"text",name:"major",value:a.major,onChange:m})),l.a.createElement("button",{type:"submit"},"Add Student"))};var c=e=>{let{student:t}=e;return l.a.createElement("div",{className:"student-card"},l.a.createElement("h3",null,t.name),l.a.createElement("p",null,"Age: ",t.age),l.a.createElement("p",null,"Major: ",t.major))};var o=e=>{let{students:t}=e;return l.a.createElement("div",null,l.a.createElement("h2",null,"Student List"),t.length>0?t.map((e,t)=>l.a.createElement(c,{key:t,student:e})):l.a.createElement("p",null,"No students added yet"))};var d=()=>{const[e,t]=Object(n.useState)([]);return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Studen ID: 101464863"),l.a.createElement("h1",null,"Studen Name: SUJAN BK"),l.a.createElement("h1",null,"Student Information System"),l.a.createElement("h5",null,"Powered By: moxDroid Labs Inc. || DevOps"),l.a.createElement(u,{addStudent:a=>{t([...e,a])}}),"Developerd By: SUJAN BK",l.a.createElement(o,{students:e}))};var s=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:m}=t;a(e),n(e),l(e),r(e),m(e)})};m.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null))),s()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.afa291a7.chunk.js.map