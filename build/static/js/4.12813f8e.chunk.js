(this.webpackJsonp007=this.webpackJsonp007||[]).push([[4],{291:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a(83);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],s=!0,o=!1,n=void 0;try{for(var c,r=e[Symbol.iterator]();!(s=(c=r.next()).done)&&(a.push(c.value),!t||a.length!==t);s=!0);}catch(i){o=!0,n=i}finally{try{s||null==r.return||r.return()}finally{if(o)throw n}}return a}}(e,t)||Object(s.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},295:function(e,t,a){e.exports={profile:"profile_profile__1yuDf",background:"profile_background__2GGr7",mainInfo:"profile_mainInfo__39iVJ",avatar:"profile_avatar__e_zeX",name:"profile_name__1-QsJ",status:"profile_status__3LF-b",status__text:"profile_status__text__1dk7D",posts:"profile_posts__srZcT",title:"profile_title__UBF9K",list:"profile_list__3r8H-",formTitle:"profile_formTitle__1KnpP"}},296:function(e,t,a){e.exports={item:"post_item__30qqH",header:"post_header__1pNHT",logo:"post_logo__o3Th4",name:"post_name__e0s9w",time:"post_time__1vCKC",content:"post_content__uQYHD",shadow:"post_shadow__3xDWX",footer:"post_footer__1Zx73",comments:"post_comments__168r0",shared:"post_shared__3WJjO",delete:"post_delete__2_hYa",info:"post_info__3PSyj"}},297:function(e,t,a){e.exports={form:"createPost_form__3lc4D",button:"createPost_button__irWrR"}},306:function(e,t,a){"use strict";a.r(t);var s,o=a(17),n=a(10),c=a(9),r=a(291),i=a(0),l=a(295),u=a.n(l),d=a(296),m=a.n(d),f=a(1),p=function(e){return Object(f.jsxs)("div",{className:m.a.item,children:[Object(f.jsxs)("div",{className:m.a.header,children:[Object(f.jsx)("div",{className:m.a.logo}),Object(f.jsx)("div",{className:m.a.name,children:"Tyler"}),Object(f.jsx)("div",{className:m.a.time,children:"ago"})]}),Object(f.jsxs)("div",{className:m.a.content,children:[Object(f.jsx)("div",{className:m.a.shadow}),Object(f.jsx)("p",{children:e.content})]}),Object(f.jsxs)("div",{className:m.a.footer,children:[e.isMyProfile&&Object(f.jsx)("p",{className:m.a.delete,onClick:function(){e.deletePost(e.postId)},children:"delete"}),Object(f.jsxs)("div",{className:m.a.info,children:[Object(f.jsxs)("div",{className:m.a.comments,children:[e.commentsCount," comments"]}),Object(f.jsxs)("div",{className:m.a.shared,children:[e.sharedCount," shared"]})]})]})]})},j=a(117),_=a(118),b=a(297),h=a.n(b),x=a(105),O=(s=100,function(e){return e&&e.length>s?"max length is ".concat(s):void 0}),v=Object(x.a)("input"),N=Object(_.a)({form:"createPost"})((function(e){return Object(f.jsxs)("form",{className:h.a.form,onSubmit:e.handleSubmit,children:[Object(f.jsx)(j.a,{placeholder:"What is up?",name:"content",component:v,className:h.a.input,validate:O}),Object(f.jsx)("button",{className:h.a.button,children:"Add post"})]})})),g=function(e){var t=Object(i.useState)(!1),a=Object(r.a)(t,2),s=a[0],o=a[1],n=Object(i.useState)(""),c=Object(r.a)(n,2),l=c[0],d=c[1],m=Object(i.useState)(!1),j=Object(r.a)(m,2),_=j[0],b=j[1];Object(i.useEffect)((function(){var t;e.match.params.userId?(b(_=!1),console.log(_)):(b(_=!0),console.log(_)),t=function(){e.getStatus(e.userId)},e.match.params.userId?e.getInf(e.match.params.userId):(e.getInf(e.userId),t())}),[]);return Object(f.jsxs)("div",{className:u.a.profile,children:[Object(f.jsx)("div",{className:u.a.background}),Object(f.jsxs)("div",{className:u.a.mainInfo,children:[Object(f.jsx)("img",{className:u.a.avatar,src:null!=e.largePhoto?e.largePhoto:"https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"}),Object(f.jsx)("p",{className:u.a.name,children:null!=e.fullName?e.fullName:"Name not found"}),Object(f.jsxs)("div",{className:u.a.status,children:[_&&!s&&Object(f.jsx)("p",{className:u.a.status__text,onDoubleClick:function(){o(s=!0),d(l=e.aboutMe)},children:e.aboutMe||"status not found"}),s&&Object(f.jsx)("input",{type:"text",placeholder:"type new status...",value:l,onChange:function(e){d(e.currentTarget.value)},onBlur:function(){e.updateStatus(l),o(s=!1)}}),!_&&Object(f.jsx)("p",{children:e.aboutMe||"status not found"})]}),Object(f.jsx)("div",{className:u.a.otherInfo})]}),Object(f.jsxs)("div",{className:u.a.posts,children:[_&&Object(f.jsxs)("div",{className:u.a.createPost,children:[Object(f.jsx)("div",{className:u.a.formTitle,children:"Create new post"}),Object(f.jsx)(N,{onSubmit:function(t){e.createPost(t)}})]}),_&&Object(f.jsx)("h1",{className:u.a.title,style:{marginTop:"60px"},children:"Posts"}),!_&&Object(f.jsx)("h1",{className:u.a.title,children:"Posts"}),Object(f.jsx)("div",{className:u.a.list,children:e.postsData.map((function(t){return Object(f.jsx)(p,{content:t.content,sharedCount:t.sharedCount,commentsCount:t.commentsCount,postId:t.postId,deletePost:e.deletePost,isMyProfile:_},t.postId)}))})]})]})},P=a(120);t.default=Object(c.d)(n.g,Object(o.b)((function(e){return{postsData:e.profilePage.postsData,aboutMe:e.profilePage.profile.aboutMe,fullName:e.profilePage.profile.fullName,largePhoto:e.profilePage.profile.photos.large,userId:e.auth.id}}),{getInf:P.d,getStatus:P.e,updateStatus:P.f,createPost:P.a,deletePost:P.c}))(g)}}]);
//# sourceMappingURL=4.12813f8e.chunk.js.map