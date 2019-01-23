(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){e.exports=t.p+"static/media/coding.2a051dd6.svg"},30:function(e,n,t){e.exports=t(64)},64:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(5),i=t.n(o),l=t(2),s=t(3);t(36);function c(){var e=Object(l.a)(["\n    * {\n        padding: 0; margin: 0;\n        box-sizing: border-box;\n        outline: 0;\n    }\n\n    body {\n        text-rendering: optimizeLegibility !important;\n        -webkit-font-smoothing: antialiased !important;\n        background: rgb(233, 236, 240);\n        font-family: Arial, Helvetica, sans-serif;\n    }\n\n"]);return c=function(){return e},e}var u=Object(s.a)(c()),p=t(4),d=t.n(p),m=t(12),g=t(10),f=t(22),b=t(23),h=t(27),x=t(24),E=t(28),v=t(25),y=t.n(v).a.create({baseURL:"https://api.github.com"}),w=t(26),k=t.n(w);function S(){var e=Object(l.a)(["\n  margin-top: 20px;\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  padding: 0 10px 0 10px;\n\n  input {\n    flex: 1;\n    height: 45px;\n    padding: 0 20px;\n    font-size: 18px;\n    color: #444;\n    border-radius: 3px;\n    border: ",";\n    background: 0;\n  }\n  button {\n    padding: 0 20px;\n    border: 0;\n    background: dodgerblue;\n    border-radius: 3px;\n    margin-left: 5px;\n    color: white;\n    font-weight: 700;\n    cursor: pointer;\n  }\n"]);return S=function(){return e},e}function j(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  span {\n    margin-top: 10px;\n  }\n"]);return j=function(){return e},e}var O=s.b.div(j()),R=s.b.form(S(),function(e){return e.withError?"2px red solid":"0.5px solid dodgerblue"}),N=t(11),_=t.n(N);function I(){var e=Object(l.a)(["\n  width: 250px;\n  background: white;\n  padding: 10px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: 10px;\n  position: relative;\n\n  small {\n    color: #666;\n  }\n\n  header {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  img {\n    width: 70px;\n    margin-bottom: 5px;\n  }\n\n  ul {\n    list-style: none;\n\n    li {\n      margin-bottom: 5px;\n      padding: 10px;\n\n      &:last-child {\n        margin: 0;\n      }\n\n      &:nth-child(odd) {\n        background: rgb(240, 243, 247);\n      }\n    }\n  }\n\n  button,\n  a {\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    color: white;\n    border: 0;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .update {\n    right: 3px;\n    top: 3px;\n    background: rgb(105, 192, 34);\n  }\n\n  .delete {\n    right: 3px;\n    top: 36px;\n    background: rgb(236, 54, 8);\n  }\n\n  .link {\n    right: 3px;\n    top: 69px;\n    background: dodgerblue;\n  }\n"]);return I=function(){return e},e}function A(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 50px;\n  flex-wrap: wrap;\n  max-width: 80%;\n"]);return A=function(){return e},e}var J=s.b.div(A()),z=s.b.div(I());_.a.locale("pt-br");var C=function(e){var n=e.repositories,t=e.refreshRepository,r=e.removeRepository;return a.a.createElement(J,null,n.map(function(e){return a.a.createElement(z,{key:e.id},a.a.createElement("header",null,a.a.createElement("img",{src:e.owner.avatar_url,alt:e.name}),a.a.createElement("strong",null,e.name),a.a.createElement("small",null,e.full_name)),a.a.createElement("ul",null,a.a.createElement("li",null,e.stargazers_count," ",a.a.createElement("small",null,"stars")),a.a.createElement("li",null,e.forks," ",a.a.createElement("small",null,"forks")),a.a.createElement("li",null,e.open_issues_count," ",a.a.createElement("small",null,"issues")),a.a.createElement("li",null,_()(e.updated_at).fromNow()," ",a.a.createElement("small",null,"last commit")),a.a.createElement("li",null,e.language," ",a.a.createElement("small",null,"language"))),a.a.createElement("button",{title:"Atualizar",onClick:function(){return t(e.full_name)},className:"update"},a.a.createElement("i",{className:"fa fa-hammer"})),a.a.createElement("button",{title:"Apagar",onClick:function(){return r(e.id)},className:"delete"},a.a.createElement("i",{className:"fa fa-bug"})),a.a.createElement("a",{title:"Acessar",href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"link"},a.a.createElement("i",{className:"fas fa-anchor"})))}))};function D(){var e=Object(l.a)(["\n  details {\n    width: 100%;\n    height: 30px;\n    color: white;\n    text-align: center;\n    color: black;\n\n    a {\n      color: dodgerblue;\n      text-decoration: none;\n    }\n\n    p{\n      margin: 5px 0;\n    }\n  }\n"]);return D=function(){return e},e}var F=Object(s.a)(D()),L=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(F,null),a.a.createElement("details",null,a.a.createElement("summary",null,a.a.createElement("small",null,"Developed by:"," ",a.a.createElement("a",{href:"https://www.adenilson-santos.github.io/",target:"_blank",rel:"noopener noreferrer"},"@adenilson-santos"))),a.a.createElement("p",null,"Este \xe9 um projeto de c\xf3digo aberto, veja seu reposit\xf3rio no"," ",a.a.createElement("a",{href:"https://www.adenilson-santos.github.io/",target:"_blank",rel:"noopener noreferrer"},"Github"," ",a.a.createElement("i",{className:"fab fa-github"})))))},B=function(e){function n(){var e,t;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(a)))).state={repositoryInput:"",repositories:[],error:null,loading:!1},t.storage=function(){return JSON.parse(localStorage.getItem("@repositories"))||[]},t.handleAddRepository=function(){var e=Object(g.a)(d.a.mark(function e(n){var r,a,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t.setState({error:null,loading:!0}),r=t.state,a=r.repositories,o=r.repositoryInput,y.get("/repos/".concat(o)).then(function(e){if(a.find(function(n){return n.id===e.data.id}))return t.setState({error:"Reposit\xf3rio duplicado.",loading:!1});t.setState({repositories:[].concat(Object(m.a)(a),[e.data]),repositoryInput:"",loading:!1}),localStorage.setItem("@repositories",JSON.stringify([].concat(Object(m.a)(a),[e.data])))}).catch(function(e){if(e.response&&404===e.response.status)return t.setState({error:"Reposit\xf3rio n\xe3o encontrado.",loading:!1});t.setState({error:"Erro na conex\xe3o, tente novamente",loading:!1})});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),t.handleRemoveRepository=function(e){t.setState({loading:!0});var n=t.state.repositories.filter(function(n){return n.id!==e});t.setState({repositories:n,loading:!1}),localStorage.setItem("@repositories",JSON.stringify(n)),console.log(t.state.repositories)},t.handleRefreshRepository=function(){var e=Object(g.a)(d.a.mark(function e(n){var r,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),r=t.state.repositories,e.prev=2,e.next=5,y.get("/repos/".concat(n));case 5:return a=e.sent,t.setState({repositories:r.map(function(e){return e.full_name===n?a.data:e})}),console.log(r),e.next=10,localStorage.setItem("@repositories",JSON.stringify(r));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),t.setState({loading:!1,error:e.t0.message});case 15:return e.prev=15,t.setState({loading:!1}),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[2,12,15,18]])}));return function(n){return e.apply(this,arguments)}}(),t}return Object(E.a)(n,e),Object(b.a)(n,[{key:"componentDidMount",value:function(){this.setState({repositories:this.storage()})}},{key:"render",value:function(){var e=this,n=this.state,t=n.error,o=n.loading,i=n.repositoryInput,l=n.repositories;return a.a.createElement(r.Fragment,null,a.a.createElement(O,null,a.a.createElement("img",{src:k.a,alt:"Logo",height:"120"}),a.a.createElement(R,{withError:t,onSubmit:this.handleAddRepository},a.a.createElement("input",{type:"text",value:i,onChange:function(n){return e.setState({repositoryInput:n.target.value})},placeholder:"usu\xe1rio/reposit\xf3rio"}),a.a.createElement("button",{type:"submit",disabled:o},o?a.a.createElement("i",{className:"fa fa-spinner fa-pulse"}):a.a.createElement("i",{className:"fa fa-angle-double-right"}))),t?a.a.createElement("span",null,t):null,a.a.createElement(C,{repositories:l,refreshRepository:this.handleRefreshRepository,removeRepository:this.handleRemoveRepository,loading:o})),a.a.createElement(L,null))}}]),n}(a.a.Component),G=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(u,null),a.a.createElement(B,null))};i.a.render(a.a.createElement(G,null),document.getElementById("root"))}},[[30,2,1]]]);
//# sourceMappingURL=main.36e3e00e.chunk.js.map