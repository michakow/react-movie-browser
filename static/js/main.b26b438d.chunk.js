(this["webpackJsonpreact-movie-browser"]=this["webpackJsonpreact-movie-browser"]||[]).push([[0],{45:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,d,l,p,x,u,b,j,g,h,m,O,f,v,y,w,S,k,C,A,I,N,z,E,P,T,R,D,Q,J,B,Y,U,q,F,L,K,H,W,G,V,_,X,M,Z,$,nn,en,tn,rn,on,cn,an,sn,dn,ln,pn,xn,un,bn,jn,gn,hn,mn,On,fn,vn,yn,wn,Sn,kn,Cn,An,In,Nn,zn,En,Pn,Tn,Rn,Dn,Qn,Jn,Bn,Yn,Un,qn,Fn,Ln,Kn,Hn,Wn,Gn,Vn,_n=t(4),Xn=t.n(_n),Mn=t(23),Zn=t.n(Mn),$n=t(11),ne=t(6),ee=t(2),te=t(3),re=Object(ee.b)(r||(r=Object(te.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html{\n    font-family: sans-serif;\n  }\n"]))),oe={colors:{bgPrimary:"#141418",bgSecondary:"#f3f4f8",textPrimary:"#b6b6b6",textPrimaryHover:"#ececec",textSecondary:"#23232e"}},ce=t(5),ie=t(17),ae=ee.d.header(o||(o=Object(te.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 8px 50px;\n  background-color: ",";\n\n  @media screen and (max-width: 1280px){\n    justify-content: space-between;\n  }\n"])),(function(n){return n.theme.colors.bgPrimary})),se=ee.d.div(c||(c=Object(te.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 5px 10px;\n  font-size: 14px;\n  transform: translateY(100%);\n"]))),de=ee.d.span(i||(i=Object(te.a)(["\n  margin-right: 12px;\n  font-weight: bold;\n"]))),le=ee.d.span(a||(a=Object(te.a)(["\n  padding: 0 2px;\n  color: #b6b6b6;\n  cursor: pointer;\n  text-transform: uppercase;\n\n  &:hover{\n    color: black;\n  }\n"]))),pe=Object(ee.d)(ie.b)(s||(s=Object(te.a)(["\n  color: ",";\n  font-size: 40px;\n"])),(function(n){return n.theme.colors.textPrimary})),xe=ee.d.div(d||(d=Object(te.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 2px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),ue=ee.d.h1(l||(l=Object(te.a)(["\n  font-size: 30px;\n\n  @media screen and (max-width: 500px){\n    font-size: 20px;\n  }\n"]))),be=Object(ee.d)(ie.a)(p||(p=Object(te.a)(["\n  font-size: 45px;\n  margin-right: 10px;\n\n  @media screen and (max-width: 720px){\n    display: none;\n  }\n"]))),je=t(1),ge=function(){return Object(je.jsxs)(xe,{children:[Object(je.jsx)(be,{}),Object(je.jsx)(ue,{children:"Movie Browser"})]})},he=ee.d.nav(x||(x=Object(te.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 45px;\n\n  @media screen and (max-width: 1280px){\n    position: absolute;\n    top: 50px;\n    right: 0;\n    background-color: ",";\n    z-index: 2;\n  }\n\n  @media screen and (max-width: 305px){\n    top: 60px;\n  }\n"])),(function(n){return n.theme.colors.bgPrimary})),me=ee.d.ul(u||(u=Object(te.a)(["\n  display: flex;\n  list-style: none;\n\n  @media screen and (max-width: 1280px){\n    flex-direction: column;\n  }\n"]))),Oe=ee.d.li(b||(b=Object(te.a)(["\n  padding: 20px;\n\n  ","  \n"])),(function(n){return!1===n.active&&Object(ee.c)(j||(j=Object(te.a)(["\n    display: none\n  "])))})),fe=Object(ee.d)($n.b)(g||(g=Object(te.a)(["\n  display: block;\n  padding: 2px;\n  font-size: 18px;\n  color: ",";\n  text-decoration: none;\n  letter-spacing: 1px;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n\n  @media screen and (max-width: 1280px){\n    text-align: center;\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.textPrimaryHover})),ve=function(n){var e=n.item;return Object(je.jsx)(Oe,{active:e.active,children:Object(je.jsx)(fe,{to:e.pathName,children:e.name.toUpperCase()})})},ye=function(){var n=[{id:1,name:"movies",pathName:"/movies",active:!0},{id:2,name:"top10",pathName:"/trending",active:!0},{id:3,name:"opinions",pathName:"/opinions",active:!0},{id:4,name:"login",pathName:"/login",active:!sessionStorage.getItem("account")||!JSON.parse(sessionStorage.getItem("account")).logged},{id:5,name:"admin",pathName:"/admin",active:!1}];return Object(je.jsx)(he,{children:Object(je.jsx)(me,{children:n.map((function(n){return Object(je.jsx)(ve,{item:n},n.id)}))})})},we=ee.d.form(h||(h=Object(te.a)(["\n  flex-grow: 1;\n  text-align: right;\n"]))),Se=ee.d.input(m||(m=Object(te.a)(["\n  max-width: 300px;\n  padding: 10px 15px;\n  font-size: 16px;\n  border: none;\n  border-radius: 20px;\n"]))),ke=function(){var n=Object(_n.useState)(""),e=Object(ce.a)(n,2),t=e[0],r=e[1],o=Object(ne.h)().search,c=Object(ne.g)();return Object(je.jsx)(we,{onSubmit:function(n){n.preventDefault();var e=new URLSearchParams(o);t.trim()?e.set("search",t.trim()):e.delete("search"),c.push("/movies?".concat(e.toString())),r("")},children:Object(je.jsx)(Se,{type:"text",placeholder:"search..",value:t,onChange:function(n){return r(n.target.value)}})})},Ce=function(){var n=Object(_n.useState)((function(){return window.innerWidth<=1280})),e=Object(ce.a)(n,2),t=e[0],r=e[1],o=Object(_n.useState)(!1),c=Object(ce.a)(o,2),i=c[0],a=c[1];return window.addEventListener("resize",(function(){window.innerWidth<=1280?r(!0):r(!1)})),Object(je.jsxs)(ae,{children:[Object(je.jsx)(ge,{}),t?Object(je.jsx)(pe,{onClick:function(){return a(!i)}}):Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(ye,{}),Object(je.jsx)(ke,{})]}),i?Object(je.jsx)(ye,{}):null,sessionStorage.getItem("account")&&JSON.parse(sessionStorage.getItem("account")).logged?Object(je.jsxs)(se,{children:["Logged as: ",Object(je.jsx)(de,{children:JSON.parse(sessionStorage.getItem("account")).name}),"[",Object(je.jsx)(le,{onClick:function(){sessionStorage.setItem("account",JSON.stringify({logged:!1})),setTimeout((function(){window.location.reload(!0)}),700)},children:"log out"}),"]"]}):null]})},Ae=Object(ee.d)($n.b)(O||(O=Object(te.a)(["\n  display: block;\n  margin: 0 30px;\n  padding: 2px;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.textPrimaryHover})),Ie=function(){return Object(je.jsx)(Ae,{to:"/contact",children:"Contact"})},Ne=ee.d.p(f||(f=Object(te.a)(["\n  flex-grow: 1;\n  text-align: right;\n  color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),ze=function(){return Object(je.jsx)(Ne,{children:"Copyright"})},Ee=ee.d.footer(v||(v=Object(te.a)(["\n  display: flex;\n  min-height: 50px;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 5px 50px;\n  background-color: #141418;\n\n  @media screen and (max-width: 360px){\n    flex-direction: column;\n  }\n"]))),Pe=ee.d.a(y||(y=Object(te.a)(["\n  display: block;\n  padding: 2px;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.textPrimaryHover})),Te=function(){return Object(je.jsx)(Pe,{href:"https://github.com/michakow/react-movie-browser",target:"_blank",children:"GitHub"})},Re=function(){return Object(je.jsxs)(Ee,{children:[Object(je.jsx)(Te,{}),Object(je.jsx)(Ie,{}),Object(je.jsx)(ze,{})]})},De=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],Qe=t(28),Je=t(29),Be=ee.d.div(w||(w=Object(te.a)(["\n  position: relative;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: #eeefef; //#eaeaea;\n  /* border: 1px solid #8c8c8c; */\n  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n  border-radius: 5px;\n\n  &:hover{\n    transform: scale(1.03);\n  }\n"]))),Ye=ee.d.img(S||(S=Object(te.a)(["\n  display: block;\n  width: 100%;\n"]))),Ue=ee.d.p(k||(k=Object(te.a)(["\n  margin: 10px 0;\n  padding: 2px;\n  font-size: 17px;\n  color: ",";\n\n  ","  \n\n  ","\n\n  ","\n\n  "," \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.movieName&&Object(ee.c)(C||(C=Object(te.a)(["\n    font-size: 19px;\n    font-weight: bold;\n  "])))}),(function(n){return n.movieYear&&Object(ee.c)(A||(A=Object(te.a)(["\n    margin-top: 0;\n    color: #585874;\n  "])))}),(function(n){return n.movieTag&&Object(ee.c)(I||(I=Object(te.a)(["\n    margin: 0 8px 8px 0;\n    padding: 5px 10px;\n    font-size: 15px;\n    background-color: #d3d3d3;\n    /* border: 1px solid #585874; */\n    border-radius: 5px;\n  "])))}),(function(n){return n.movieRating&&Object(ee.c)(N||(N=Object(te.a)(["\n    flex-grow: 1;\n    display: flex;\n    margin-bottom: 5px;\n    align-items: center;\n    font-size: 16px;\n    font-weight: bold;\n  "])))})),qe=ee.d.div(z||(z=Object(te.a)(["\n  width: 100%;\n  margin: 10px 0 15px;\n  display: flex;\n  flex-wrap: wrap;\n"]))),Fe=ee.d.div(E||(E=Object(te.a)(["\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-end;\n"]))),Le=Object(ee.d)(Qe.a)(P||(P=Object(te.a)(["\n  margin-right: 5px;\n  align-self: flex-start;\n  font-size: 25px;\n  color: #fbd400;\n"]))),Ke=ee.d.span(T||(T=Object(te.a)(["\n  font-size: 25px;\n"]))),He=ee.d.span(R||(R=Object(te.a)(["\n  margin-left: 15px;\n  font-style: italic;\n  font-weight: normal;\n  color: #585874;\n"]))),We=ee.d.div(D||(D=Object(te.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  background-color: rgba(0,0,0,0.85);\n  transition: 0.4s;\n  overflow: hidden;\n\n  "," \n"])),(function(n){return n.showDetails&&Object(ee.c)(Q||(Q=Object(te.a)(["\n    height: 100%;\n  "])))})),Ge=Object(ee.d)(Je.a)(J||(J=Object(te.a)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  font-size: 25px;\n  color: ",";\n  cursor: pointer;\n\n  "," \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.showDetails&&Object(ee.c)(B||(B=Object(te.a)(["\n    display: none;\n  "])))})),Ve=ee.d.h3(Y||(Y=Object(te.a)(["\n  padding: 15px;\n  font-size: 20px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.textPrimaryHover})),_e=ee.d.p(U||(U=Object(te.a)(["\n  padding: 15px;\n  font-size: 18px;\n  text-align: justify;\n  color: ",";\n"])),(function(n){return n.theme.colors.textPrimaryHover})),Xe=function(n){var e=n.movie,t=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACpCAYAAAD3JGmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARSSURBVHgB7dvrShtBAIbh2XjCc0RRvIv+D4K9Er2T6pVU70SQ/PcqREUhns+m+007hQb9YczSmY/3gW00LSp5M7vjzrQKfxweHm5WVfWj3+9/qx/bAbk7qDvtdzqdPX1S6Y9ut6uAOwHFqWPu1DF3qzridh3xZ0Cx6n7fW/UfWwFF0yWxVT9uBpTuWyvAQZuQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGliPBRmeno6zMzMhImJidBqDfc+fH19DU9PT+Hu7i48Pj4GB8WEnJqaCsvLy2F8/PeP/Pb2Fo9h6E2grzc/Px9Dnp+fx7glKyLk7OxsjKhwl5eX4fb2Nry8vISvmJycjCH1tdfW1sLp6WnRMbO/Ro6NjcWICndychJDfjWi6NR6cXERD41yxRz2VJ2D7H/ydrsdH/WCjyLgII1uvTkUU6OzVFmH1AjRi6vrWJOTkuvr63ja1iTqPbqeLi0txVGba+ysr5G6jolml01SxOfn5xgs0ZtIny8sLPzzvD6em5uL19ScZB2yqqr4OOzs9DN02lYkzWg1MjURUkx97/v7+3B1dRXPChqZ+jv925x+dck65P+YfKyvr8fHNENOp91EkyTRNZWQGVOcXq9X3I0CQg5oanbcNO61miCkCUKaIKQJQpogpAlCmiCkCUKaIOSA1dXVsLi4GBe0S8ItugG6Ua+QOrTofHNzU8R9V0IOOD4+jjv1tOaoRWQduveqlRCtgmgJS3KLm3XItGSkBWaNjiZpWSrtzNP30qHnNDLTDr5kVPuGRinrkFq11wubdgo0RdfD9xaKFUurIaJRqp/j4eEhy1Nt9pMdLeymPahNSRu8dD38iHYJaCTmer0sIqRGhk5xTWx8Sl9XgZo+fTcp+8mOTq3aCb6yshKvU9pPo5GjuNpQ/Nn9PJqV6kj/9UCjPe1xLVkRs1a90GdnZ39HjyKMwkf7ckpUzK8faeKhF16jSBOPYTdnKZreHLrulR4wKe73SAXVUfL1rAncojNBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENKGQvYDiKeRRQOkOWv1+fzegaFVV7bc2NjYOiFkutet0OntVeqLb7W7XT27VH24GZK3u1KtH4ZEiaiDquV93YYRcLj5kHgAAAABJRU5ErkJggg==",r=Object(_n.useState)(!1),o=Object(ce.a)(r,2),c=o[0],i=o[1];return Object(je.jsxs)(Be,{onMouseLeave:function(){return i(!1)},children:[Object(je.jsx)(Ye,{src:t,alt:"movie poster"}),Object(je.jsx)(Ue,{movieName:!0,children:e.title}),Object(je.jsx)(Ue,{movieYear:!0,children:e.release_date?e.release_date.substr(0,4):null}),Object(je.jsx)(qe,{children:e.genre_ids.map((function(n){return Object(je.jsx)(Ue,{movieTag:!0,children:De.find((function(e){return e.id===n})).name},n)}))}),Object(je.jsx)(Fe,{children:Object(je.jsxs)(Ue,{movieRating:!0,children:[Object(je.jsx)(Le,{}),e.vote_average,Object(je.jsx)(Ke,{children:"/"}),"10",Object(je.jsxs)(He,{children:[e.vote_count," votes"]})]})}),Object(je.jsx)(Ge,{showDetails:c,onClick:function(){return i(!0)}}),Object(je.jsxs)(We,{showDetails:c,onClick:function(){return i(!1)},children:[Object(je.jsx)(Ve,{children:e.title}),Object(je.jsx)(_e,{children:e.overview}),Object(je.jsx)(_e,{children:e.release_date?e.release_date:null})]})]})},Me=t(13),Ze=t.n(Me),$e=t(18),nt="8dee42bf8098403b600d854f802f0af0",et=ee.d.main(q||(q=Object(te.a)(["\n  flex-grow: 1;\n  padding: 30px 200px;\n  background-color: ",";\n\n  @media screen and (max-width: 1280px){\n    padding: 30px 100px;\n  }\n\n  @media screen and (max-width: 1380px){\n    padding: 30px 50px;\n  }\n"])),(function(n){return n.theme.colors.bgSecondary})),tt=ee.d.h2(F||(F=Object(te.a)(["\n  margin-bottom: 30px;\n  font-size: 26px;\n  color: ",";\n\n  @media screen and (max-width: 720px){\n    text-align: center;\n  }\n"])),(function(n){return n.theme.colors.textSecondary})),rt=ee.d.section(L||(L=Object(te.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 300px);\n  justify-content: center;\n  grid-gap: 40px;\n"]))),ot=ee.d.div(K||(K=Object(te.a)(["\n  display: flex;\n  margin-top: 50px;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n"]))),ct=ee.d.p(H||(H=Object(te.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: #585874;\n"]))),it=ee.d.button(W||(W=Object(te.a)(["\n  margin: 0 10px;\n  padding: 10px;\n  font-size: 15px;\n  background-color: #d3d3d3;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n\n  "," \n"])),(function(n){return n.disabled&&Object(ee.c)(G||(G=Object(te.a)(["\n    background-color: #d1d8dd;\n    cursor: not-allowed;\n  "])))})),at=ee.d.span(V||(V=Object(te.a)(["\n  margin: 0 5px;\n  font-weight: bold;\n"]))),st=function(n){var e=n.trend,t=Object(_n.useState)(1),r=Object(ce.a)(t,2),o=r[0],c=r[1],i=Object(ne.h)().search,a=new URLSearchParams(i).get("search"),s=function(n,e,t){var r=Object(_n.useState)({state:"loading"}),o=Object(ce.a)(r,2),c=o[0],i=o[1];return Object(_n.useEffect)((function(){i({state:"loading"}),setTimeout(function(){var r=Object($e.a)(Ze.a.mark((function r(){var o,c,a,s,d,l;return Ze.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=t?"https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(nt):n?"https://api.themoviedb.org/3/search/movie?api_key=".concat(nt,"&query=").concat(n,"&page=").concat(e):"https://api.themoviedb.org/3/movie/popular?api_key=".concat(nt,"&language=en-US&page=").concat(e),r.next=4,fetch(o);case 4:if((c=r.sent).ok){r.next=7;break}throw new Error(c.statusText);case 7:return r.next=9,c.json();case 9:a=r.sent,s=a.results,d=a.total_pages,l=a.total_results,i({state:"success",moviesData:s,pages:d,results:l}),r.next=20;break;case 16:r.prev=16,r.t0=r.catch(0),i({state:"error"}),console.error("Oops, something bad happend");case 20:case"end":return r.stop()}}),r,null,[[0,16]])})));return function(){return r.apply(this,arguments)}}(),1e3)}),[e,n,t]),c}(a,o,e);return Object(_n.useEffect)((function(){c(1)}),[a,e]),Object(je.jsxs)(et,{children:[Object(je.jsx)(tt,{children:"loading"===s.state?"Loading..":"error"===s.state?"Something bad happend, please try again later :(":a?'Search for "'.concat(a,'" (').concat(s.results,")"):e?"TOP10 watching movies this week":"Popular movies"}),"loading"===s.state||"error"===s.state?null:Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(rt,{children:(e?s.moviesData.slice(0,10):s.moviesData).map((function(n){return Object(je.jsx)(Xe,{movie:n},n.id)}))}),e?null:Object(je.jsx)(ot,{children:Object(je.jsxs)(ct,{children:[Object(je.jsx)(it,{disabled:1===o,onClick:function(){return c(1)},children:"First"}),Object(je.jsx)(it,{disabled:1===o,onClick:function(){return c(o-1)},children:"Previous"}),"Page ",Object(je.jsx)(at,{children:o})," of ",Object(je.jsx)(at,{children:s.pages||1}),Object(je.jsx)(it,{disabled:o===s.pages||0===s.pages,onClick:function(){return c(o+1)},children:"Next"}),Object(je.jsx)(it,{disabled:o===s.pages||0===s.pages,onClick:function(){return c(s.pages)},children:"Last"})]})})]})]})},dt=ee.d.div(_||(_=Object(te.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),lt=function(n){var e=n.trend;return Object(je.jsxs)(dt,{children:[Object(je.jsx)(Ce,{}),Object(je.jsx)(st,{trend:e}),Object(je.jsx)(Re,{})]})},pt=ee.d.div(X||(X=Object(te.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),xt="https://react-movie-browser-backend.herokuapp.com",ut=ee.d.form(M||(M=Object(te.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 30px;\n  background-color: #e6e6e6;\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 15px;\n"]))),bt=ee.d.label(Z||(Z=Object(te.a)(["\n  ","\n"])),(function(n){return n.author&&Object(ee.c)($||($=Object(te.a)(["\n    margin: 5px 0;\n  "])))})),jt=ee.d.textarea(nn||(nn=Object(te.a)(["\n  padding: 10px 15px;\n  width: 100%;\n  height: 100px;\n  font-size: 14px;\n  resize: vertical;\n"]))),gt=ee.d.input(en||(en=Object(te.a)(["\n  margin-top: 15px;\n  padding: 10px;\n  color: #b6b6b6;\n  font-weight: bold;\n  font-size: 15px;\n  letter-spacing: .5px;\n  background-color: #23232e;\n  border: none;\n  border-radius: 15px;\n\n  &:active{\n    color: #ececec;\n    background-color: ","\n  }\n"])),(function(n){return n.theme.colors.bgPrimary})),ht=ee.d.p(tn||(tn=Object(te.a)(["\n  position: absolute;\n  width: 60%;\n  top: -22px;\n  left: 50%;\n  padding: 8px 12px;\n  color: ",";\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #f54a4a;\n  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 5px;\n  transform: translateX(-50%);\n\n  "," \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.sendState&&Object(ee.c)(rn||(rn=Object(te.a)(["\n    background-color: #afedc4;\n  "])))})),mt=function(n){var e=n.serverState,t=Object(_n.useState)(!1),r=Object(ce.a)(t,2),o=r[0],c=r[1],i=Object(_n.useState)(0),a=Object(ce.a)(i,2),s=a[0],d=a[1],l=Object(_n.useState)(""),p=Object(ce.a)(l,2),x=p[0],u=p[1];return Object(je.jsxs)(ut,{onSubmit:function(n){n.preventDefault();var e,t=(new Date).toISOString().split("T")[0];e={text:x,date:t,author:JSON.parse(sessionStorage.getItem("account")).name},fetch("".concat(xt,"/opinions"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json",Authorization:JSON.parse(sessionStorage.getItem("account")).token}}).then((function(n){return n.json()})).then((function(n){n.code?(c(!0),d(1),setTimeout((function(){window.location.reload(!0)}),2e3)):(c(!0),d(0),setTimeout((function(){c(!1)}),2e3))})),u("")},children:[o?Object(je.jsx)(ht,{sendState:"success"===e&&1===s,children:"success"===e&&1===s?"Opinion has been sent":"Opinion has not been sent (server or authorization problem)"}):null,Object(je.jsx)(bt,{opinion:!0,children:Object(je.jsx)(jt,{placeholder:"your opinion..",required:!0,value:x,onChange:function(n){return u(n.target.value)}})}),Object(je.jsx)(gt,{type:"submit",value:"Send opinion"})]})},Ot=t(30),ft=ee.d.div(on||(on=Object(te.a)(["\n  position: relative;\n  width: 99%;\n  margin-bottom: 15px;\n  padding: 10px 15px;\n  background-color: #eeefef;\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 5px;\n"]))),vt=ee.d.p(cn||(cn=Object(te.a)(["\n  font-size: 14px;\n  color: ",";\n\n  ","  \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.author&&Object(ee.c)(an||(an=Object(te.a)(["\n    display: flex;\n    margin-top: 18px;\n    align-items: center;\n    font-weight: bold;\n  "])))})),yt=ee.d.span(sn||(sn=Object(te.a)(["\n  margin-left: 15px;\n  font-size: 12px;\n  font-weight: normal;\n  color: #585874;\n"]))),wt=Object(ee.d)(Ot.a)(dn||(dn=Object(te.a)(["\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  color: #b60000;\n  cursor: pointer;\n"]))),St=function(n){var e=n.opinion,t=n.onDeleteOpinion,r=sessionStorage.getItem("account")?JSON.parse(sessionStorage.getItem("account")).name:"";return Object(je.jsxs)(ft,{children:[Object(je.jsx)(vt,{onDoubleClick:function(){console.log(e)},children:e.text}),Object(je.jsxs)(vt,{author:!0,children:[e.author,Object(je.jsx)(yt,{children:e.date})]}),"admin"===r?Object(je.jsx)(wt,{onClick:function(){return t(e._id,e.text,e.author)}}):null]})},kt=ee.d.main(ln||(ln=Object(te.a)(["\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  padding: 30px 200px;\n  background-color: ",";\n\n  @media screen and (max-width: 1280px){\n    padding: 30px 100px;\n  }\n\n  @media screen and (max-width: 1024px){\n    padding: 30px 50px;\n  }\n"])),(function(n){return n.theme.colors.bgSecondary})),Ct=ee.d.h2(pn||(pn=Object(te.a)(["\n  /* margin-top: 25px; */\n  font-size: 26px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textSecondary})),At=ee.d.section(xn||(xn=Object(te.a)(["\n  display: flex;\n  padding: 10px 0;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  max-height: 70vh;\n  overflow-y: scroll;\n"]))),It=ee.d.div(un||(un=Object(te.a)(["\n  width: 100%;\n  height: 1px;\n  margin: 25px auto 15px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),Nt=function(){var n=function(){var n=Object(_n.useState)({state:"loading"}),e=Object(ce.a)(n,2),t=e[0],r=e[1];return Object(_n.useEffect)((function(){r({state:"loading"}),setTimeout(function(){var n=Object($e.a)(Ze.a.mark((function n(){var e,t,o;return Ze.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(xt,"/opinions"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:t=n.sent,o=t.opinions,r({state:"success",opinions:o}),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),r({state:"error"}),console.error("Oops, something bad happend");case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}(),1e3)}),[]),t}();console.log(n);var e=function(n,e,t){fetch("".concat(xt,"/opinions/").concat(n),{method:"DELETE"});var r="".concat(t,"'s opinion has been deleted.\nOpinion: ").concat(e);console.log(r),setTimeout((function(){window.location.reload(!0)}),2e3)};return Object(je.jsxs)(kt,{children:[sessionStorage.getItem("account")&&JSON.parse(sessionStorage.getItem("account")).logged?Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(mt,{serverState:n.state}),Object(je.jsx)(It,{})]}):null,"loading"===n.state?Object(je.jsx)(Ct,{children:"Loading.."}):"error"===n.state?Object(je.jsx)(Ct,{children:"Something bad happend, please try again later :("}):null,"loading"===n.state||"error"===n.state?null:0===n.opinions.length?Object(je.jsx)(Ct,{children:"No opinions yet"}):Object(je.jsx)(At,{children:n.opinions.slice(0).reverse().map((function(n){return Object(je.jsx)(St,{opinion:n,onDeleteOpinion:e},n._id)}))})]})},zt=function(){return Object(je.jsxs)(pt,{children:[Object(je.jsx)(Ce,{}),Object(je.jsx)(Nt,{}),Object(je.jsx)(Re,{})]})},Et=t(32),Pt=ee.d.form(bn||(bn=Object(te.a)(["\n  position: relative;\n  display: flex;\n  margin-top: 60px;\n  flex-direction: column;\n  padding: 20px 30px;\n  background-color: #e6e6e6;\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 15px;\n\n  @media screen and (max-width: 500px){\n    padding: 20px 20px;\n  }\n"]))),Tt=ee.d.div(jn||(jn=Object(te.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media screen and (max-width: 500px){\n    flex-direction: column;\n  }\n"]))),Rt=ee.d.label(gn||(gn=Object(te.a)(["\n  ","\n\n  ","\n"])),(function(n){return n.author&&Object(ee.c)(hn||(hn=Object(te.a)(["\n    flex-basis: 49.8%;\n\n    @media screen and (max-width: 500px){\n      margin-bottom: 5px;\n      width: 100%;\n    }\n  "])))}),(function(n){return n.message&&Object(ee.c)(mn||(mn=Object(te.a)(["\n    margin: 5px 0 15px;\n\n    @media screen and (max-width: 500px){\n      margin: 0px 0 15px;\n    }\n  "])))})),Dt=ee.d.textarea(On||(On=Object(te.a)(["\n  padding: 10px 15px;\n  width: 100%;\n  height: 100px;\n  font-size: 14px;\n  resize: vertical;\n"]))),Qt=ee.d.input(fn||(fn=Object(te.a)(["\n  padding: 10px 15px;\n  width: 100%;\n  font-size: 14px;\n"]))),Jt=ee.d.input(vn||(vn=Object(te.a)(["\n  padding: 10px;\n  color: #b6b6b6;\n  font-weight: bold;\n  font-size: 15px;\n  letter-spacing: .5px;\n  background-color: #23232e;\n  border: none;\n  border-radius: 15px;\n\n  &:active{\n    color: #ececec;\n    background-color: ","\n  }\n"])),(function(n){return n.theme.colors.bgPrimary})),Bt=ee.d.div(yn||(yn=Object(te.a)(["\n  position: absolute;\n  width: 60%;\n  top: -28px;\n  left: 50%;\n  padding: 8px 12px;\n  background-color: #afedc4;\n  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 5px;\n  transform: translateX(-50%);\n"]))),Yt=ee.d.p(wn||(wn=Object(te.a)(["\n  font-size: 14px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  line-height: 20px;\n"])),(function(n){return n.theme.colors.textSecondary})),Ut=function(){var n=Object(_n.useState)(!1),e=Object(ce.a)(n,2),t=e[0],r=e[1],o=Object(_n.useRef)();return Object(je.jsxs)(Pt,{ref:o,onSubmit:function(n){n.preventDefault(),Et.a.sendForm("service_4bgo1h4","template_x3gsna9",o.current,"user_e27nZeE3w0SHo5M6uMRqJ").then((function(n){return console.log(n.text)}),(function(n){return console.error(n.text)})),n.target.reset(),r(!0),setTimeout((function(){r(!1)}),4e3)},children:[t?Object(je.jsxs)(Bt,{children:[Object(je.jsx)(Yt,{children:"Thanks for your message!"}),Object(je.jsx)(Yt,{children:"I will reply as soon as I can "})]}):null,Object(je.jsxs)(Tt,{children:[Object(je.jsx)(Rt,{author:!0,children:Object(je.jsx)(Qt,{type:"text",placeholder:"your name..",required:!0,name:"name"})}),Object(je.jsx)(Rt,{author:!0,children:Object(je.jsx)(Qt,{type:"email",placeholder:"your email..",required:!0,name:"email"})})]}),Object(je.jsx)(Rt,{message:!0,children:Object(je.jsx)(Dt,{placeholder:"your message..",required:!0,name:"message"})}),Object(je.jsx)(Jt,{type:"submit",value:"Send message"})]})},qt=t(31),Ft=ee.d.main(Sn||(Sn=Object(te.a)(["\n  flex-grow: 1;\n  padding: 30px 200px;\n  background-color: ",";\n\n  @media screen and (max-width: 1280px){\n    padding: 30px 100px;\n  }\n\n  @media screen and (max-width: 1024px){\n    padding: 30px 50px;\n  }\n"])),(function(n){return n.theme.colors.bgSecondary})),Lt=ee.d.p(kn||(kn=Object(te.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  font-weight: bold;\n  color: ",";\n\n  "," \n\n  @media screen and (max-width: 720px){\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.withLink&&Object(ee.c)(Cn||(Cn=Object(te.a)(["\n    margin-bottom: 10px;\n\n    @media screen and (max-width: 720px){\n      margin-bottom: 20px;\n    }\n  "])))})),Kt=Object(ee.d)(qt.a)(An||(An=Object(te.a)(["\n  margin: 0 10px;\n\n  @media screen and (max-width: 720px){\n    display: none;\n  }\n"]))),Ht=Object(ee.d)($n.b)(In||(In=Object(te.a)(["\n  display: block;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.textSecondary})),Wt=function(){return Object(je.jsxs)(Ft,{children:[Object(je.jsxs)(Lt,{withLink:!0,children:["You can express your opinion about this application here ",Object(je.jsx)(Kt,{})," ",Object(je.jsx)(Ht,{to:"/opinions",children:"/opinions"})]}),Object(je.jsx)(Lt,{children:"However, if you have a question or would like to cooperate, feel free to contact me via the form below"}),Object(je.jsx)(Ut,{})]})},Gt=ee.d.div(Nn||(Nn=Object(te.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Vt=function(){return Object(je.jsxs)(Gt,{children:[Object(je.jsx)(Ce,{}),Object(je.jsx)(Wt,{}),Object(je.jsx)(Re,{})]})},_t=ee.d.form(zn||(zn=Object(te.a)(["\n  position: relative;\n  display: flex;\n  width: 30%;\n  margin: 60px auto 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 60px 30px;\n  background-color: #e6e6e6;\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 15px;\n\n  @media screen and (max-width: 1024px){\n    width: 50%;\n  }\n\n  @media screen and (max-width: 500px){\n    width: 70%;\n    padding: 60px 0px;\n  }\n\n  @media screen and (max-width: 300px){\n    width: 90%;\n  }\n"]))),Xt=ee.d.div(En||(En=Object(te.a)(["\n  display: flex;\n  width: 80%;\n  margin-bottom: 20px;\n"]))),Mt=ee.d.p(Pn||(Pn=Object(te.a)(["\n  font-size: 14px;\n  flex-basis: 50%;\n  padding: 0 5px;\n\n  "," \n\n  "," \n\n  "," \n\n  "," \n"])),(function(n){return n.loginP&&Object(ee.c)(Tn||(Tn=Object(te.a)(["\n    border-right: 1px solid black;\n    text-align: right;\n  "])))}),(function(n){return n.registerP&&Object(ee.c)(Rn||(Rn=Object(te.a)(["\n    border-left: 1px solid black;\n  "])))}),(function(n){return!1===n.activeL&&Object(ee.c)(Dn||(Dn=Object(te.a)(["\n    color: #b6b6b6;\n  "])))}),(function(n){return!1===n.activeR&&Object(ee.c)(Qn||(Qn=Object(te.a)(["\n    color: #b6b6b6;\n  "])))})),Zt=ee.d.span(Jn||(Jn=Object(te.a)(["\n  padding: 5px 5px;\n  cursor: pointer;\n"]))),$t=ee.d.input(Bn||(Bn=Object(te.a)(["\n  padding: 10px 15px;\n  width: 80%;\n  font-size: 14px;\n  margin-bottom: 10px;\n  text-align: center;\n"]))),nr=ee.d.input(Yn||(Yn=Object(te.a)(["\n  padding: 10px;\n  color: #b6b6b6;\n  margin-top: 15px;\n  width: 80%;\n  font-weight: bold;\n  font-size: 15px;\n  letter-spacing: .5px;\n  background-color: #23232e;\n  border: none;\n  border-radius: 15px;\n  cursor: pointer;\n\n  &:active{\n    color: #ececec;\n    background-color: ","\n  }\n"])),(function(n){return n.theme.colors.bgPrimary})),er=ee.d.p(Un||(Un=Object(te.a)(["\n  position: absolute;\n  width: 60%;\n  top: -22px;\n  left: 50%;\n  padding: 8px 12px;\n  color: ",";\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #f54a4a;\n  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 5px;\n  transform: translateX(-50%);\n\n  "," \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.sendState&&Object(ee.c)(qn||(qn=Object(te.a)(["\n    background-color: #afedc4;\n  "])))})),tr=function(){var n=Object(_n.useState)(""),e=Object(ce.a)(n,2),t=e[0],r=e[1],o=Object(_n.useState)(!0),c=Object(ce.a)(o,2),i=c[0],a=c[1],s=Object(_n.useState)(!1),d=Object(ce.a)(s,2),l=d[0],p=d[1],x=Object(_n.useState)(""),u=Object(ce.a)(x,2),b=u[0],j=u[1],g=Object(_n.useState)(""),h=Object(ce.a)(g,2),m=h[0],O=h[1],f=Object(_n.useState)(""),v=Object(ce.a)(f,2),y=v[0],w=v[1],S=Object(_n.useState)(""),k=Object(ce.a)(S,2),C=k[0],A=k[1];return Object(je.jsxs)(_t,{onSubmit:function(n){n.preventDefault();var e,t=(new Date).toISOString().split("T")[0];i?(e={name:b,password:y},fetch("".concat(xt,"/users/auth"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(n){return n.json()})).then((function(n){n.code?(sessionStorage.setItem("account",JSON.stringify({logged:!0,name:b,token:n.token})),setTimeout((function(){window.location.reload(!0)}),700)):(sessionStorage.setItem("account",JSON.stringify({logged:!1})),r("badlogged"),setTimeout((function(){r("")}),2e3))}))):function(n){fetch("".concat(xt,"/users/create"),{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json"}}).then((function(n){return n.json()})).then((function(n){n.code?(r("created"),j(""),O(""),w(""),A(""),setTimeout((function(){r("")}),2e3)):(r("nocreated"),setTimeout((function(){r("")}),2e3))}))}({name:b,password:y,email:m,created:t})},children:[t?Object(je.jsx)(er,{sendState:"created"===t,children:"badlogged"===t?"Bad login or password":"created"===t?"Account created":"Accout with this login already exist"}):null,Object(je.jsxs)(Xt,{children:[Object(je.jsx)(Mt,{loginP:!0,activeL:i,children:Object(je.jsx)(Zt,{onClick:function(){a(!0),p(!1)},children:"Login"})}),Object(je.jsx)(Mt,{registerP:!0,activeR:l,children:Object(je.jsx)(Zt,{onClick:function(){a(!1),p(!0)},children:"Register"})})]}),Object(je.jsx)($t,{type:"text",placeholder:"login",required:!0,pattern:".{3,20}",title:"5 to 20 characters",value:b,onChange:function(n){return j(n.target.value)}}),l?Object(je.jsx)($t,{type:"email",placeholder:"email",required:!0,value:m,onChange:function(n){return O(n.target.value)}}):null,Object(je.jsx)($t,{type:"password",placeholder:"password",required:!0,pattern:".{3,}",title:"3 characters minimum",value:y,onChange:function(n){return w(n.target.value)}}),l?Object(je.jsx)($t,{type:"password",placeholder:"repeat password",required:!0,pattern:y,title:"passowrds must be the same",value:C,onChange:function(n){return A(n.target.value)}}):null,Object(je.jsx)(nr,{type:"submit",value:l?"Register":"Login"})]})},rr=ee.d.main(Fn||(Fn=Object(te.a)(["\n  flex-grow: 1;\n  padding: 30px 200px;\n  background-color: ",";\n\n  @media screen and (max-width: 1280px){\n    padding: 30px 20px;\n  }\n"])),(function(n){return n.theme.colors.bgSecondary})),or=function(){return Object(je.jsx)(rr,{children:Object(je.jsx)(tr,{})})},cr=ee.d.div(Ln||(Ln=Object(te.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),ir=function(){return Object(je.jsxs)(cr,{children:[Object(je.jsx)(Ce,{}),Object(je.jsx)(or,{}),Object(je.jsx)(Re,{})]})},ar=function(){return Object(je.jsx)("div",{})},sr=ee.d.div(Kn||(Kn=Object(te.a)(["\n  margin-top: 200px;\n  padding: 30px 20px 0;\n  text-align: center;\n  background-color: #f8d478;\n  border-radius: 15px;\n"]))),dr=ee.d.h3(Hn||(Hn=Object(te.a)(["\n  font-size: 40px;\n  color: green;\n  text-transform: uppercase;\n  ","\n"])),(function(n){return("error"===n.success||"serverError"===n.success)&&Object(ee.c)(Wn||(Wn=Object(te.a)(["\n      color: red;\n    "])))})),lr=ee.d.h3(Gn||(Gn=Object(te.a)(["\n  padding-bottom: 30px;\n  font-size: 40px;\n  text-transform: uppercase;\n"]))),pr=ee.d.p(Vn||(Vn=Object(te.a)(["\n  margin: 40px 0 50px;\n  font-size: 20px;\n"]))),xr=function(){var n=Object(ne.i)().userName,e=Object(_n.useState)("loading"),t=Object(ce.a)(e,2),r=t[0],o=t[1];return Object(_n.useEffect)((function(){o("loading"),fetch("".concat(xt,"/users/verify"),{method:"POST",body:JSON.stringify({userName:n}),headers:{"Content-type":"application/json"}}).then((function(n){return n.json()})).then((function(n){n.code?o("success"):o("error")})).catch((function(n){console.log("Error:",n),o("serverError")}))}),[n]),Object(je.jsx)(sr,{children:"loading"===r?Object(je.jsx)(lr,{children:"Weryfikowanie.."}):Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(dr,{success:r,children:"success"===r?"Account activated!":"error"===r?"No account required activation":"Server problem :("}),Object(je.jsx)(pr,{children:"success"===r?"Now you can sign in!":"error"===r?"Account not exist or was activated":"We found problem with server. Try later, please"}),Object(je.jsx)($n.b,{to:"/login",children:"Sign in"})]})})};var ur=function(){return Object(je.jsxs)(ee.a,{theme:oe,children:[Object(je.jsx)(re,{}),Object(je.jsx)($n.a,{children:Object(je.jsxs)(ne.d,{children:[Object(je.jsx)(ne.b,{path:"/movies",children:Object(je.jsx)(lt,{trend:!1})}),Object(je.jsx)(ne.b,{path:"/trending",children:Object(je.jsx)(lt,{trend:!0})}),Object(je.jsx)(ne.b,{path:"/opinions",children:Object(je.jsx)(zt,{})}),Object(je.jsx)(ne.b,{path:"/contact",children:Object(je.jsx)(Vt,{})}),Object(je.jsx)(ne.b,{path:"/login",children:sessionStorage.getItem("account")&&JSON.parse(sessionStorage.getItem("account")).logged?Object(je.jsx)(ne.a,{to:"/movies"}):Object(je.jsx)(ir,{})}),Object(je.jsx)(ne.b,{path:"/admin",children:Object(je.jsx)(ar,{})}),Object(je.jsx)(ne.b,{path:"/verify/:userName",children:Object(je.jsx)(xr,{})}),Object(je.jsx)(ne.b,{exact:!0,path:"/",children:Object(je.jsx)(ne.a,{to:"/movies"})}),Object(je.jsx)(ne.b,{exact:!0,path:"*",children:Object(je.jsx)(ne.a,{to:"/movies"})})]})})]})},br=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))};Zn.a.render(Object(je.jsx)(Xn.a.StrictMode,{children:Object(je.jsx)(ur,{})}),document.getElementById("root")),br()}},[[45,1,2]]]);
//# sourceMappingURL=main.b26b438d.chunk.js.map