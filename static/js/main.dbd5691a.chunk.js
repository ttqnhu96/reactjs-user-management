(this["webpackJsonpuser-management"]=this["webpackJsonpuser-management"]||[]).push([[0],{30:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r,o,a,i,s,c,l,u,d,b,h,m,p,j,f,g,x,O,v=t(1),C=t(13),N=t.n(C),y=(t(30),t(6)),w=t(7),A=t(10),T=t(9),E=t(2),U=t(11),k=t(4),L="CHANGE_THEME",z="REGISTER",M="DELETE_USER",P="EDIT_USER",R="UPDATE_USER",B=function(e){return{type:z,newUser:e}},F=function(e){return{type:M,userId:e}},S=function(e){return{type:P,user:e}},I=t(3),D=E.b.button(r||(r=Object(I.a)(["\n    font-family: 'Poppins', sans-serif;\n    font-size: 1rem;\n    font-weight: 400;\n    background-color: ",";\n    color: ",";\n    margin-top: 25px;\n    margin-right: 15px;\n    border-radius: 12px;\n    border: 0;\n    box-sizing: border-box;\n    padding: 4px 20px 0;\n    text-align: center;\n    text-vertical-align: center;\n    transition: all .5s;\n    height: calc(1.5em + .75rem + 8px);\n    width: 100px;\n    cursor: pointer;\n    &:hover:enabled {\n        color: ",";\n        background-color:",";\n    };\n    &:disabled {\n        cursor:auto;\n        color: ",";\n    }\n"])),(function(e){return e.theme.btnColor}),(function(e){return e.theme.color}),(function(e){return e.theme.hoverTextColor}),(function(e){return e.theme.hoverBgColor}),(function(e){return e.theme.color})),V=t(15),$=E.b.span(o||(o=Object(I.a)(["\nfont-family: 'Poppins', sans-serif;\ncolor:",";\npadding-top:10px;\npadding-bottom:5px;\nopacity:0.8;\nwidth:auto;\nfloat: left\n"])),(function(e){return e.theme.color})),Z=t(0),_=["label"],H=E.b.select(a||(a=Object(I.a)(["\n    font-family: 'Poppins', sans-serif;\n    width: 100%;\n    height: calc(1.5em + .75rem + 8px);\n    padding: 4px 20px 0;\n    font-size: 1rem;\n    font-weight: 400;\n    color:  ",";\n    background-color: ",";\n    box-sizing: border-box;\n    border: 0;\n    border-radius: 12px;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    /* Adding transition effect */\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;\n    &:hover {\n        color: ",";\n        background-color: ",";\n        border-bottom-color: #DCDCDC;\n    }\n    &:focus {\n        outline: none; \n    }\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.textFieldBg}),(function(e){return e.theme.hoverTextColor}),(function(e){return e.theme.hoverBgColor})),q=function(e){var n=e.label,t=Object(V.a)(e,_);return Object(Z.jsxs)("span",{children:[Object(Z.jsx)($,{children:n}),Object(Z.jsx)("br",{}),Object(Z.jsx)(H,Object(k.a)({},t))]})},G=E.b.form(i||(i=Object(I.a)(["\nmargin: 30px 0 0 0;\nbackground-color: ",";\nbox-sizing: border-box;\npadding: 20px;\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);\n"])),(function(e){return e.theme.bgColor})),J=(E.b.h1(s||(s=Object(I.a)(["\n    padding: 15px;\n    margin-top:0;\n    font-size:4rem;\n    font-weight:300;\n    line-height:1.2;\n    color: ","\n"])),(function(e){return e.theme.headingColor})),E.b.h2(c||(c=Object(I.a)(["\n    padding: 15px;\n    margin-top:0;\n    font-size:3rem;\n    font-weight:300;\n    line-height:1.2;\n    color: ","\n"])),(function(e){return e.theme.headingColor})),E.b.h3(l||(l=Object(I.a)(["\n    font-family: 'Poppins', sans-serif;\n    padding: 15px;\n    margin-top:0;\n    font-size:2rem;\n    font-weight:700;\n    line-height:1.2;\n    color: ","\n"])),(function(e){return e.theme.headingColor}))),K=E.b.h4(u||(u=Object(I.a)(["\n    font-family: 'Poppins', sans-serif;\n    padding: 15px;\n    margin-top:0;\n    font-size:1rem;\n    font-weight:600;\n    line-height:1.2;\n    color: ",";\n    background-color: ","\n    \n"])),(function(e){return e.theme.headingColor}),(function(e){return e.theme.bgColor})),Q=(E.b.h5(d||(d=Object(I.a)(["\n    padding: 15px;\n    margin-top:0;\n    font-size:0.5rem;\n    font-weight:300;\n    line-height:1.2;\n    color: ",";\n    background-color: ","\n\n"])),(function(e){return e.theme.headingColor}),(function(e){return e.theme.bgColor})),["label"]),W=E.b.input(b||(b=Object(I.a)(["\n    font-family: 'Poppins', sans-serif;\n    width: 100%;\n    height: calc(1.5em + .75rem + 8px);\n    padding: 4px 20px 0;\n    font-size: 1rem;\n    font-weight: 400;\n    color:  ",";\n    background-color: "," !important;\n    box-sizing: border-box;\n    border: 0 !important;\n    border-radius: 12px;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    /* Autocomplete styles in Chrome*/\n    &:-webkit-autofill {\n        transition: 5000s ease-in-out 0s;\n    }\n    &:hover {\n        border: 1px solid ",";\n    }\n    &:focus {\n        outline: none; \n        border: 1px solid "," !important;\n    }\n  \n"])),(function(e){return e.theme.color}),(function(e){return e.theme.textFieldBg}),(function(e){return e.theme.color}),(function(e){return e.theme.color})),X=function(e){var n=e.label,t=Object(V.a)(e,Q);return Object(Z.jsxs)("span",{children:[Object(Z.jsx)($,{children:n}),Object(Z.jsx)("br",{}),Object(Z.jsx)(W,Object(k.a)({},t))]})},Y={bgColor:"#15172b",btnColor:"#08d",color:"#eee",headingColor:"#fff",borderButton:"1px solid #fff",hoverTextColor:"#343a40",hoverBgColor:"#fff",borderColor:"#343a40",textFieldBg:"#303245",tableTextColor:"#15172b"},ee=[{id:"1",name:"Admin",theme:Y},{id:"2",name:"Customer",theme:{bgColor:"rgba(254,218,203,.7)",btnColor:"rgb(242,152,144)",color:"#000 !important",headingColor:"#000",borderButton:"1px solid #7952b3",hoverTextColor:"#fff",hoverBgColor:"rgb(162,162,162)",borderColor:"rgba(191,112,107,.8)",textFieldBg:"white !important",tableTextColor:"#15172b"}}],ne=t(5),te=t(18),re=t.n(te),oe=E.b.span(h||(h=Object(I.a)(["\nfont-family: 'Poppins', sans-serif;\ncolor:red;\nfont-size: 12px;\nheight: 50px\n"]))),ae={userAccount:"User Account",fullName:"Full Name",password:"Password",phoneNumber:"Phone Number",email:"Email"},ie=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,se=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*?&.]{5,10}$/,ce=/^[0-9]+$/,le=function(e){Object(A.a)(t,e);var n=Object(T.a)(t);function t(){var e;Object(y.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={values:{id:"",userAccount:"",fullName:"",password:"",phoneNumber:"",email:"",userType:"Admin"},errors:{userAccount:"",fullName:"",password:"",phoneNumber:"",email:""}},e.handleChangeValue=function(n){var t=n.target,r=t.name,o=t.value,a=Object(k.a)(Object(k.a)({},e.state.values),{},Object(U.a)({},r,o)),i=Object(k.a)(Object(k.a)({},e.state.errors),{},Object(U.a)({},r,""));e.setState({values:a,errors:i})},e.handleSubmit=function(n){n.preventDefault();var t=e.state.values,r=Object(k.a)({},e.state.errors),o=!0,a=function(n){"userAccount"===n&&""!==t[n]&&(-1!==e.props.userList.findIndex((function(e){return e.userAccount===t[n]}))&&(r[n]=ae[n]+" already exists!",o=!1));"id"!==n&&""===t[n]&&(r[n]=ae[n]+" is required!",o=!1),"email"===n&&""!==t[n]&&(ie.test(t[n])||(r[n]=ae[n]+" is invalid!",o=!1)),"password"===n&&""!==t[n]&&(se.test(t[n])||(r[n]=ae[n]+" must be 5-10 characters, contain at least one letter and one number!",o=!1)),"phoneNumber"===n&&""!==t[n]&&(ce.test(t[n])||(r[n]=ae[n]+" is invalid!",o=!1))};for(var i in t)a(i);if(!o)return e.setState({errors:r}),void re.a.fire({title:"Registration failed!",icon:"error",confirmButtonText:"OK"});var s={id:"1",userAccount:t.userAccount,fullName:t.fullName,password:t.password,phoneNumber:t.phoneNumber,email:t.email,userType:t.userType};e.props.dispatch(B(s)),re.a.fire({title:"Registration successful!",icon:"success",confirmButtonText:"OK"})},e.renderTheme=function(){return ee.map((function(e,n){return Object(Z.jsx)("option",{value:e.id,children:e.name},n)}))},e}return Object(w.a)(t,[{key:"render",value:function(){var e=this;return Object(Z.jsx)("div",{children:Object(Z.jsxs)(G,{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(Z.jsx)(J,{children:"Registration Form"}),Object(Z.jsxs)("div",{className:"p-1",children:[Object(Z.jsxs)("div",{className:"row m-2",children:[Object(Z.jsxs)("div",{className:"col-6",children:[Object(Z.jsx)(X,{name:"userAccount",label:"User Account",placeholder:"Enter user account",value:this.state.values.userAccount,onChange:this.handleChangeValue}),Object(Z.jsx)(oe,{children:this.state.errors.userAccount})]}),Object(Z.jsxs)("div",{className:"col-6",children:[Object(Z.jsx)(X,{name:"fullName",label:"Full Name",placeholder:"Enter full name",value:this.state.values.fullName,onChange:this.handleChangeValue}),Object(Z.jsx)(oe,{children:this.state.errors.fullName})]})]}),Object(Z.jsxs)("div",{className:"row m-2",children:[Object(Z.jsxs)("div",{className:"col-6",children:[Object(Z.jsx)(X,{name:"password",label:"Password",type:"password",placeholder:"Enter password",value:this.state.values.password,onChange:this.handleChangeValue}),Object(Z.jsx)(oe,{children:this.state.errors.password})]}),Object(Z.jsxs)("div",{className:"col-6",children:[Object(Z.jsx)(X,{name:"phoneNumber",label:"Phone Number",placeholder:"Enter phone number",value:this.state.values.phoneNumber,onChange:this.handleChangeValue}),Object(Z.jsx)(oe,{children:this.state.errors.phoneNumber})]})]}),Object(Z.jsxs)("div",{className:"row m-2",children:[Object(Z.jsxs)("div",{className:"col-6",children:[Object(Z.jsx)(X,{name:"email",label:"Email",placeholder:"Enter email",value:this.state.values.email,onChange:this.handleChangeValue}),Object(Z.jsx)(oe,{children:this.state.errors.email})]}),Object(Z.jsx)("div",{className:"col-6",children:Object(Z.jsx)(q,{value:ee.findIndex((function(n){return n.name===e.state.values.userType}))+1,name:"userType",label:"User Type",onChange:function(n){var t=n.target,r=t.name,o=t.value;e.setState({values:Object(k.a)(Object(k.a)({},e.state.values),{},Object(U.a)({},r,ee.find((function(e){return e.id===o})).name))},(function(){e.props.dispatch({type:L,themeId:o})}))},children:this.renderTheme()})})]}),Object(Z.jsx)("div",{className:"row m-2",children:Object(Z.jsxs)("div",{className:"col-6",children:[this.props.disable?Object(Z.jsx)(D,{className:"btn",disabled:!0,children:"Register"}):Object(Z.jsx)(D,{className:"btn",children:"Register"}),this.props.disable?Object(Z.jsx)(D,{className:"btn",onClick:function(){var n;e.props.dispatch((n=e.state.values,{type:R,user:n}))},type:"button",children:"Update"}):Object(Z.jsx)(D,{className:"btn",type:"button",disabled:!0,children:"Update"})]})})]})]})})}},{key:"componentDidUpdate",value:function(e,n){e.userEdit.id!==this.props.userEdit.id&&this.setState({values:this.props.userEdit})}}]),t}(v.Component),ue=Object(ne.b)((function(e){return{userList:e.UserManagementReducer.userList,userEdit:e.UserManagementReducer.userEdit,disable:e.UserManagementReducer.disable}}))(le),de=E.b.table(m||(m=Object(I.a)(["\n    color: ",";\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 2px;\n    background: rgba(255, 255, 255, .3);\n  \n"])),(function(e){return e.theme.tableTextColor})),be=E.b.thead(p||(p=Object(I.a)(["\n    display: table-header-group;\n    vertical-align: middle;\n    color: ",";\n\n"])),(function(e){return e.theme.bgColor})),he=E.b.tbody(j||(j=Object(I.a)(["\n    display: table-row-group;\n    vertical-align: middle;\n    border-color: inherit;\n"]))),me=E.b.tr(f||(f=Object(I.a)(["\n    display: table-row;\n    vertical-align: inherit;\n    border-top: 1px solid "," !important;\n    border-bottom: 1px solid "," !important;\n\n"])),(function(e){return e.theme.borderColor}),(function(e){return e.theme.borderColor})),pe=E.b.td(g||(g=Object(I.a)(["\n    padding: .75rem;\n    vertical-align: middle;\n    border-top: 1px solid "," !important;\n    border-bottom: 1px solid "," !important;\n"])),(function(e){return e.theme.borderColor}),(function(e){return e.theme.borderColor})),je=E.b.th(x||(x=Object(I.a)(["\n    color: ",";\n    vertical-align: bottom;\n    text-align: inherit;\n    border-top: 2px solid "," !important;\n    border-bottom: 2px solid "," !important;\n    color: ",";\n    background-color: ",";\n    opacity: 0.7;\n    padding: .75rem;\n    vertical-align: top;\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.headingColor}),(function(e){return e.theme.bgColor})),fe=E.b.div(O||(O=Object(I.a)(["\nbackground: transparent;\nborder-radius: 0;\nbox-shadow: 0 4px 8px 0 rgba(123, 0, 0, 0.19), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n"]))),ge=function(e){Object(A.a)(t,e);var n=Object(T.a)(t);function t(){var e;Object(y.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).renderUserList=function(){return e.props.userList.map((function(n,t){return Object(Z.jsxs)(me,{children:[Object(Z.jsx)(pe,{style:{verticalAlign:"middle"},children:n.id}),Object(Z.jsx)(pe,{style:{verticalAlign:"middle"},children:n.userAccount}),Object(Z.jsx)(pe,{style:{verticalAlign:"middle"},children:n.fullName}),Object(Z.jsx)(pe,{style:{verticalAlign:"middle"},children:n.password}),Object(Z.jsx)(pe,{style:{verticalAlign:"middle"},children:n.email}),Object(Z.jsx)(pe,{style:{verticalAlign:"middle"},children:n.phoneNumber}),Object(Z.jsx)(pe,{style:{verticalAlign:"middle"},children:n.userType}),Object(Z.jsxs)(pe,{style:{verticalAlign:"middle"},children:[Object(Z.jsx)("button",{className:"btn btn-dark text-white",onClick:function(){e.props.dispatch(S(n))},children:Object(Z.jsx)("i",{className:"fa fa-edit"})}),Object(Z.jsx)("button",{className:"btn btn-dark text-white ml-2",onClick:function(){e.props.dispatch(F(n.id))},children:Object(Z.jsx)("i",{className:"fa fa-trash"})})]})]},t)}))},e}return Object(w.a)(t,[{key:"render",value:function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("br",{}),Object(Z.jsxs)(fe,{className:"card",children:[Object(Z.jsx)(K,{children:"User List"}),Object(Z.jsx)("div",{className:"card-body",children:Object(Z.jsxs)(de,{className:"table",children:[Object(Z.jsx)(be,{children:Object(Z.jsxs)(me,{children:[Object(Z.jsx)(je,{children:"No"}),Object(Z.jsx)(je,{children:"Account"}),Object(Z.jsx)(je,{children:"Full Name"}),Object(Z.jsx)(je,{children:"Password"}),Object(Z.jsx)(je,{children:"Email"}),Object(Z.jsx)(je,{children:"Phone Number"}),Object(Z.jsx)(je,{children:"User Type"}),Object(Z.jsx)(je,{})]})}),Object(Z.jsx)(he,{children:this.renderUserList()})]})})]})]})}}]),t}(v.Component),xe=Object(ne.b)((function(e){return{userList:e.UserManagementReducer.userList}}))(ge),Oe=function(e){Object(A.a)(t,e);var n=Object(T.a)(t);function t(){var e;Object(y.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={themeUserManagement:Y},e}return Object(w.a)(t,[{key:"render",value:function(){return Object(Z.jsx)("div",{style:{background:"linear-gradient(to top,#fbc2eb 0%,#a18cd1 100%)",padding:"10px 0",height:"100%",minHeight:"100vh"},children:Object(Z.jsx)(E.a,{theme:this.props.themeUserManagement,children:Object(Z.jsxs)("div",{className:"container-fluid w-75",children:[Object(Z.jsx)(ue,{}),Object(Z.jsx)(xe,{})]})})})}}]),t}(v.Component),ve=Object(ne.b)((function(e){return{themeUserManagement:e.UserManagementReducer.themeUserManagement}}))(Oe);var Ce=function(){return Object(Z.jsx)("div",{className:"App",children:Object(Z.jsx)(ve,{})})},Ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),a(e),i(e)}))},ye=t(14),we=t(19),Ae={disable:!1,themeUserManagement:Y,userList:[{id:"1",userAccount:"NhuTTQ3",fullName:"Trinh Thi Quynh Nhu",password:"nhu18tuoi",phoneNumber:"0123456789",email:"qnhu96@gmail.com",userType:"Admin"}],userEdit:{id:"0",userAccount:"",fullName:"",password:"",phoneNumber:"",email:"",userType:""}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case L:var t=ee.find((function(e){return e.id===n.themeId}));return t&&(e.themeUserManagement=Object(k.a)({},t.theme)),Object(k.a)({},e);case z:var r=Object(k.a)(Object(k.a)({},n.newUser),{},{id:e.userList.length+1}),o=Object(we.a)(e.userList);return o.push(r),e.themeUserManagement=Y,e.userList=o,e.userEdit={id:"-1",userAccount:"",fullName:"",password:"",phoneNumber:"",email:"",userType:""},Object(k.a)({},e);case M:return Object(k.a)(Object(k.a)({},e),{},{userList:e.userList.filter((function(e){return e.id!==n.userId}))});case P:var a=ee.find((function(e){return e.name===n.user.userType}));return e.userEdit.id!==n.user.id&&a&&(e.themeUserManagement=Object(k.a)({},a.theme)),Object(k.a)(Object(k.a)({},e),{},{userEdit:n.user,disable:!0});case R:var i=Object(we.a)(e.userList),s=i.findIndex((function(e){return e.id===n.user.id}));return-1!==s&&(i[s]=n.user),e.themeUserManagement=Y,e.userEdit={id:"-1",userAccount:"",fullName:"",password:"",phoneNumber:"",email:"",userType:""},Object(k.a)(Object(k.a)({},e),{},{userList:i,disable:!1});default:return Object(k.a)({},e)}},Ee=Object(ye.a)({UserManagementReducer:Te}),Ue=Object(ye.b)(Ee);N.a.render(Object(Z.jsx)(ne.a,{store:Ue,children:Object(Z.jsx)(Ce,{})}),document.getElementById("root")),Ne()}},[[47,1,2]]]);
//# sourceMappingURL=main.dbd5691a.chunk.js.map