(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{11:function(t,e,s){"use strict";s.r(e);var n=s(1),r=s(4),a=s.n(r),c=(s(9),s(2),s(0));var i=t=>Object(c.jsxs)("div",{children:[Object(c.jsxs)("button",{className:"btn btn-outline-success",children:[" ","Boutton 1 ",t.name]}),Object(c.jsx)("button",{className:"btn btn-outline-success",children:" Boutton 2 "}),Object(c.jsx)("button",{className:"btn btn-outline-warning",children:" Boutton 3 "})]});var b=t=>Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[" ",t.autre," Paragraphe 1 "]}),Object(c.jsx)("p",{children:" Paragraphe 2 "}),Object(c.jsx)("p",{children:" Paragraphe 3 "})]});class j extends n.Component{constructor(){super(...arguments),this.state={name:"Boutton depuis state",autre:"Autre state"}}render(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"titre__part",children:" D\xe9but de la partie 1 "}),Object(c.jsx)(i,{name:this.state.name}),Object(c.jsx)(b,{autre:this.state.autre})]})}}var l=j;class o extends n.Component{render(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"titre__part",children:" Titre de la partie About"}),Object(c.jsx)("h1",{children:" La partie About n'est pas encore developp\xe9 "}),";"]})}}var h=o;class d extends n.Component{render(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"titre__part",children:" Titre partie 2"}),Object(c.jsx)("p",{children:" Part 2 pas encore elabor\xe9 "})]})}}var u=d;class p extends n.Component{constructor(){super(...arguments),this.state={page:"Part1"},this.pagefinal=()=>"Part1"===this.state.page?Object(c.jsx)(l,{children:"jdje"}):"Part2"===this.state.page?Object(c.jsx)(u,{children:"dj"}):Object(c.jsx)(h,{children:"kedke"}),this.Event1=()=>{this.setState({page:"Part1"})},this.Event2=()=>{this.setState({page:"Part2"})},this.EventAbout=()=>{this.setState({page:"About"})}}render(){return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsxs)("h1",{className:"titre__render",onClick:this.Event1,children:[" ","Titre"," "]}),Object(c.jsxs)("line",{className:"btn-group justify-content-between","aria-label":"Toolbar with button groups",children:[Object(c.jsxs)("button",{className:"btn btn-dark",onClick:this.Event1,children:[" ","Part 1"," "]}),Object(c.jsxs)("button",{className:"btn btn-dark",onClick:this.Event2,children:[" ","Part 2"," "]}),Object(c.jsxs)("button",{className:"btn btn-dark",onClick:this.EventAbout,children:[" ","About"," "]})]}),this.pagefinal()]})}}var x=p;const O=document.getElementById("root");a.a.render(Object(c.jsx)(n.StrictMode,{children:Object(c.jsx)(x,{})}),O)},2:function(t,e,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.c83a8fa9.chunk.js.map