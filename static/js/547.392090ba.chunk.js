"use strict";(self.webpackChunkmmy_app=self.webpackChunkmmy_app||[]).push([[547],{7547:function(n,r,e){e.r(r),e.d(r,{default:function(){return z}});var o=e(5671),s=e(3144),t=e(136),a=e(3668),i=e(8687),u=e(946),l=e(2791),g=e(2977),p=e(2275),c=e(184),h=function(n){for(var r=Math.ceil(n.totalUsersCount/n.pageSize),e=[],o=1;o<=r;o++)e.push(o);var s=Math.ceil(r/n.portionPage);return(0,c.jsx)("div",{children:(0,c.jsx)(g.Z,{children:(0,c.jsx)(p.Z,{siblingCount:2,count:s,page:n.currentPage,onChange:function(r,e){return n.onPageChanged(e)}})})})},d="Users_photo__kdpU0",f=e(3504),C=function(n){var r=n.user;return(0,c.jsxs)("div",{children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("div",{children:(0,c.jsx)(f.OL,{to:"/profile/"+r.id,children:(0,c.jsx)("img",{src:null!=r.photos.small?r.photos.small:"https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",className:d})})}),(0,c.jsx)("div",{children:r.followed?(0,c.jsx)("button",{disabled:n.followingInProgress.some((function(n){return n===r.id})),onClick:function(){n.unFollowThunkCreator(r.id)},children:"Unfollow"}):(0,c.jsx)("button",{disabled:n.followingInProgress.some((function(n){return n===r.id})),onClick:function(){n.followThunkCreator(r.id)},children:"Follow"})})]}),(0,c.jsxs)("span",{children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("div",{children:r.name}),(0,c.jsxs)("div",{children:[r.status," "]})]}),(0,c.jsxs)("span",{children:[(0,c.jsxs)("div",{children:["u.location.country"," "]}),(0,c.jsxs)("div",{children:["u.location.city"," "]})]})]})]})},P=function(n){return(0,c.jsxs)("div",{children:[(0,c.jsx)(h,{totalUsersCount:n.totalUsersCount,pageSize:n.pageSize,onPageChanged:n.onPageChanged,portionPage:n.portionPage,currentPage:n.currentPage}),n.users.map((function(r){return(0,c.jsx)(C,{user:r,unFollowThunkCreator:n.unFollowThunkCreator,followThunkCreator:n.followThunkCreator,followingInProgress:n.followingInProgress},r.id)}))]})},k=e(6792),j=(0,e(6916).P1)((function(n){return n.usersPage.users}),(function(n){return n})),w=function(n){return n.usersPage.totalUsersCount},x=function(n){return n.usersPage.pageSize},v=function(n){return n.usersPage.currentPage},T=function(n){return n.usersPage.isLoading},m=function(n){return n.usersPage.followingInProgress},U=function(n){return n.usersPage.portionPage},y=function(n){(0,t.Z)(e,n);var r=(0,a.Z)(e);function e(){var n;(0,o.Z)(this,e);for(var s=arguments.length,t=new Array(s),a=0;a<s;a++)t[a]=arguments[a];return(n=r.call.apply(r,[this].concat(t))).onPageChanged=function(r){n.props.changeCurrentPageThunkCreator(r,n.props.pageSize)},n}return(0,s.Z)(e,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{children:this.props.isLoading?(0,c.jsx)(k.Z,{}):null}),(0,c.jsx)(P,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,portionPage:this.props.portionPage,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,unFollowThunkCreator:this.props.unFollowThunkCreator,followThunkCreator:this.props.followThunkCreator})]})}}]),e}(l.Component),z=(0,i.$j)((function(n){return{users:j(n),totalUsersCount:w(n),pageSize:x(n),currentPage:v(n),isLoading:T(n),followingInProgress:m(n),portionPage:U(n)}}),{unFollowThunkCreator:u.UD,followThunkCreator:u.AC,getUsersThunkCreator:u.Uk,changeCurrentPageThunkCreator:u.$f})(y)}}]);
//# sourceMappingURL=547.392090ba.chunk.js.map