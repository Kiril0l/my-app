"use strict";(self.webpackChunkmmy_app=self.webpackChunkmmy_app||[]).push([[9],{5009:function(t,s,e){e.r(s),e.d(s,{default:function(){return M}});var a=e(1413),r=e(5671),o=e(3144),n=e(136),u=e(3668),i=e(2791),l=e(8687),p={},c=e(6792),d={messageImg:"ProfileInfo_messageImg__W1E7m",textStyle:"ProfileInfo_textStyle__yt+FD",photo:"ProfileInfo_photo__hMaYU"},h=e(885),f=e(184),m=function(t){var s=(0,i.useState)(!1),e=(0,h.Z)(s,2),a=e[0],r=e[1],o=(0,i.useState)(t.status),n=(0,h.Z)(o,2),u=n[0],l=n[1];(0,i.useEffect)((function(){l(t.status)}),[t.status]);return(0,f.jsx)("div",{children:a?(0,f.jsx)("div",{children:(0,f.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(u)},onChange:function(t){l(t.currentTarget.value)},value:u})}):(0,f.jsx)("span",{onDoubleClick:t.profile.userId===t.authId?function(){r(!0)}:"",children:t.status||"\u0423 \u043c\u0435\u043d\u044f \u043d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"})})},x=function(t){return t.profile?(0,f.jsxs)("div",{className:d.content,children:[(0,f.jsx)("div",{className:d.messageImg,children:(0,f.jsx)("img",{src:"https://st2.depositphotos.com/1184927/6310/i/600/depositphotos_63105155-stock-photo-purple-starry-background-for-facebook.jpg",alt:"fone"})}),(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:"https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",className:d.photo,alt:"pofile page"})}),(0,f.jsxs)("div",{className:d.textStyle,children:[(0,f.jsx)("p",{children:t.profile.fullName}),(0,f.jsx)("p",{children:(0,f.jsx)(m,{status:t.status,updateStatus:t.updateStatus,profile:t.profile,authId:t.authId})})]})]}):(0,f.jsx)(c.Z,{})},j=e(6508),v=e(2982),g="MyPosts_content__ytfjS",_="MyPosts_item__LwIpL",P="Post_content__RCWkG",k="Post_item__P7NC+",N="Post_messageImg__LfFNV",I="Post_messageText__dlB3U",y="Post_messageAuthor__w42-y",w="Post_messageLikes__T4DmL",C=function(t){return(0,f.jsx)("div",{className:P,children:(0,f.jsxs)("div",{className:k,children:[(0,f.jsx)("div",{className:N,children:(0,f.jsx)("img",{src:"https://www.blexar.com/avatar.png",alt:"ava"})}),(0,f.jsx)("div",{className:I,children:t.message}),(0,f.jsx)("div",{className:y,children:t.author}),(0,f.jsxs)("div",{className:w,children:["Likes ",t.like]})]})})},S=function(t){var s=(0,v.Z)(t.posts).reverse().map((function(t){return(0,f.jsx)(C,{message:t.message,author:t.author,like:t.like},t.id)}));return(0,f.jsx)("div",{className:g,children:(0,f.jsxs)("div",{className:_,children:["My Posts",(0,f.jsxs)("div",{children:[(0,f.jsx)("textarea",{name:"post",id:"",cols:"30",rows:"1",onChange:function(s){var e=s.target.value;t.updateNewPostText(e)},value:t.newPostText}),(0,f.jsx)("button",{onClick:function(){t.addNewPost()},children:"Add post"}),s]})]})})},T=(0,l.$j)((function(t){return{newPostText:t.profilePage.newPostText,posts:t.profilePage.posts}}),(function(t){return{addNewPost:function(){t((0,j.t2)())},updateNewPostText:function(s){t((0,j.PM)(s))}}}))(S),Z=function(t){return(0,f.jsx)("div",{className:p.content,children:(0,f.jsxs)("div",{children:[(0,f.jsx)(x,{profile:t.profile,status:t.status,updateStatus:t.updateStatus,authId:t.authId}),(0,f.jsx)(T,{})]})})},U=e(6871),b=e(1867),A=e(7781),L=function(t){(0,n.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,o.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userid;t||(t=this.props.authId),this.props.getUserProfileThunkCreator(t),this.props.getUserStatusThunkCreator(t)}},{key:"render",value:function(){return(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)(Z,(0,a.Z)((0,a.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatusThunkCreator,authId:this.props.authId}))})})}}]),e}(i.Component);var M=(0,A.qC)((0,l.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfileThunkCreator:j.om,getUserStatusThunkCreator:j.fG,updateUserStatusThunkCreator:j.X8}),(function(t){return function(s){var e=(0,U.TH)(),r=(0,U.s0)(),o=(0,U.UO)();return(0,f.jsx)(t,(0,a.Z)((0,a.Z)({},s),{},{router:{location:e,navigate:r,params:o}}))}}),b.V)(L)},1867:function(t,s,e){e.d(s,{V:function(){return i}});var a=e(1413),r=e(8687),o=e(6871),n=e(184),u=function(t){return{isAuth:t.auth.isAuth}},i=function(t){return(0,r.$j)(u)((function(s){return s.isAuth?(0,n.jsx)(t,(0,a.Z)({},s)):(0,n.jsx)(o.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=9.39ac6e04.chunk.js.map