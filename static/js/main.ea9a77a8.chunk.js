(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(32)},2:function(e,t,a){},20:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),s=a.n(l),d=(a(20),a(14)),o=a(3),r=a(4),c=a(6),h=a(5),u=function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,e.title))};u.defaultProps={title:"My Notes"};var p=u,m=function(e){return i.a.createElement("li",{onClick:function(t){e.handleRead(e.note.id)}},e.note.title)},f=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,this.props.list.map((function(t){return i.a.createElement(m,{key:t.id,note:t,handleDelete:e.props.handleDelete,handleUpdate:e.props.handleUpdate,handleRead:e.props.handleRead})})))}}]),a}(i.a.Component),E=(a(2),a(1)),y=a.n(E),v=function(e){return i.a.createElement(y.a,{isOpen:e.display,contentLabel:"Add Note",onRequestClose:e.hide,className:"modal"},i.a.createElement("h2",null,"Add Notes"),i.a.createElement("input",{type:"text",value:e.title,name:"title",onChange:e.handleChange,placeholder:"Notes Title",autoComplete:"off"}),i.a.createElement("textarea",{type:"text",value:e.description,name:"description",onChange:e.handleChange,placeholder:"add your description here...",autoComplete:"off"}),i.a.createElement("button",{onClick:e.handleSumit},"Add Note"))};y.a.setAppElement("#root");var C=function(e){return i.a.createElement(y.a,{isOpen:e.display,contentLabel:"Update Note",onRequestClose:e.update,className:"modal"},i.a.createElement("h2",null,"Update Note"),i.a.createElement("input",{type:"text",value:e.title,name:"title",onChange:e.handleChange}),i.a.createElement("textarea",{type:"text",value:e.description,name:"description",onChange:e.handleChange}),i.a.createElement("button",{onClick:e.update},"update"))},g=function(e){return i.a.createElement(y.a,{isOpen:e.display,contentLabel:"Add Note",onRequestClose:e.close,className:"modal"},i.a.createElement("h2",null,e.title," "),i.a.createElement("p",{className:"desc"},e.description),i.a.createElement("div",{className:"btn-container"},i.a.createElement("button",{onClick:e.close},"close"),i.a.createElement("button",{onClick:function(t){e.handleUpdate(e.id)}},"update"),i.a.createElement("button",{onClick:function(t){e.handleDelete(e.id)}},"delete")))},b=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.showModal=function(){n.setState((function(){return{display:!0}}))},n.hideModal=function(){n.setState((function(){return{display:!1,title:"",description:"",id:""}}))},n.handleSumit=function(e){e.preventDefault();var t=n.state.title.trim(),a=n.state.description.trim();if(0!==t.length&&!n.state.list.some((function(e){return e.title===t}))){var i=Object.assign({},{title:t,description:a,id:Date.now()});n.handleAddNote(i),n.setState((function(){return{title:"",description:"",display:!1}}))}},n.handleAddNote=function(e){n.setState((function(t){return{list:t.list.concat(e)}}))},n.handleDelete=function(e){n.setState((function(t){return{list:t.list.filter((function(t){return e!==t.id})),read:!1,display:!1}}))},n.handleUpdate=function(e){var t=n.state.list.filter((function(t){return t.id===e}));n.setState({edit:!0,title:t[0].title,description:t[0].description,id:t[0].id,display:!0,read:!1})},n.update=function(e){e.preventDefault(),n.setState((function(e){return{list:n.state.list.map((function(e){return e.id===n.state.id?(e.title=n.state.title,e.description=n.state.description,e):e})),display:!1}})),n.setState({edit:!1,id:"",description:"",title:""})},n.close=function(){n.setState({read:!1,display:!1,title:"",description:"",id:""})},n.handleRead=function(e){var t=n.state.list.filter((function(t){return t.id===e}));n.setState((function(){return{read:!0,id:t[0].id,display:!0,title:t[0].title,description:t[0].description}}))},n.state={list:[],title:"",description:"",id:"",edit:!1,read:!1,display:!1},n}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"container"},this.state.read&&i.a.createElement(g,{title:this.state.title,description:this.state.description,display:this.state.display,close:this.close,handleUpdate:this.handleUpdate,id:this.state.id,handleDelete:this.handleDelete}),!1===this.state.read&&i.a.createElement(p,{showModal:this.showModal,title:"My Notes"}),this.state.edit&&i.a.createElement(C,{title:this.state.title,handleChange:this.handleChange,description:this.state.description,update:this.update,display:this.state.display,hide:this.hideModal}),i.a.createElement("ul",null,this.state.list.length>0&&!1===this.state.edit&&!1===this.state.read,!1===this.state.edit&&!1===this.state.read&&i.a.createElement(f,{list:this.state.list,handleDelete:this.handleDelete,handleUpdate:this.handleUpdate,handleRead:this.handleRead}))),!1===this.state.read&&!1===this.state.edit&&i.a.createElement(v,{display:this.state.display,hide:this.hideModal,handleChange:this.handleChange,handleSumit:this.handleSumit,handleAddNote:this.handleAddNote,title:this.state.title,description:this.state.description}),i.a.createElement("i",{onClick:this.showModal,className:"fas fa-plus"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ea9a77a8.chunk.js.map