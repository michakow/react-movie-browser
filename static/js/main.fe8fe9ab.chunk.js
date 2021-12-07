(this["webpackJsonpreact-movie-browser"]=this["webpackJsonpreact-movie-browser"]||[]).push([[0],{42:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,d,l,p,b,j,u,x,h,g,m,O,f,v,y,k,w,S,C,A,E,R,Q,P,D,I,T,B,z,N,U,Y,F,K,H,J,G,q,L,W,V,X,_,M,Z,$,nn,en,tn,rn,on,cn,an,sn,dn=t(2),ln=t.n(dn),pn=t(22),bn=t.n(pn),jn=t(16),un=t(5),xn=t(3),hn=t(4),gn=Object(xn.b)(r||(r=Object(hn.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html{\n    font-family: sans-serif;\n  }\n"]))),mn={colors:{bgPrimary:"#141418",bgSecondary:"#f3f4f8",textPrimary:"#b6b6b6",textPrimaryHover:"#ececec",textSecondary:"#23232e"}},On=xn.d.header(o||(o=Object(hn.a)(["\n  display: flex;\n  align-items: center;\n  padding: 8px 50px;\n  background-color: ","\n"])),(function(n){return n.theme.colors.bgPrimary})),fn=t(26),vn=xn.d.div(c||(c=Object(hn.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 2px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),yn=xn.d.h1(i||(i=Object(hn.a)(["\n  font-size: 30px;\n"]))),kn=Object(xn.d)(fn.a)(a||(a=Object(hn.a)(["\n  font-size: 45px;\n  margin-right: 10px;\n"]))),wn=t(1),Sn=function(){return Object(wn.jsxs)(vn,{children:[Object(wn.jsx)(kn,{}),Object(wn.jsx)(yn,{children:"Movie Browser"})]})},Cn=xn.d.nav(s||(s=Object(hn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 45px;\n"]))),An=xn.d.ul(d||(d=Object(hn.a)(["\n  display: flex;\n  list-style: none;\n"]))),En=xn.d.li(l||(l=Object(hn.a)(["\n  padding: 20px;\n"]))),Rn=Object(xn.d)(jn.b)(p||(p=Object(hn.a)(["\n  display: block;\n  padding: 2px;\n  font-size: 18px;\n  color: ",";\n  text-decoration: none;\n  letter-spacing: 1px;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.textPrimaryHover})),Qn=function(n){var e=n.item;return Object(wn.jsx)(En,{children:Object(wn.jsx)(Rn,{to:e.pathName,children:e.name.toUpperCase()})})},Pn=function(){return Object(wn.jsx)(Cn,{children:Object(wn.jsx)(An,{children:[{id:1,name:"movies",pathName:"/movies"},{id:2,name:"top10",pathName:"/trending"},{id:3,name:"opinions",pathName:"/opinions"}].map((function(n){return Object(wn.jsx)(Qn,{item:n},n.id)}))})})},Dn=t(7),In=xn.d.form(b||(b=Object(hn.a)(["\n  flex-grow: 1;\n  text-align: right;\n"]))),Tn=xn.d.input(j||(j=Object(hn.a)(["\n  max-width: 300px;\n  padding: 10px 15px;\n  font-size: 16px;\n  border: none;\n  border-radius: 20px;\n"]))),Bn=function(){var n=Object(dn.useState)(""),e=Object(Dn.a)(n,2),t=e[0],r=e[1],o=Object(un.h)().search,c=Object(un.g)();return Object(wn.jsx)(In,{onSubmit:function(n){n.preventDefault();var e=new URLSearchParams(o);t.trim()?e.set("search",t.trim()):e.delete("search"),c.push("/movies?".concat(e.toString())),r("")},children:Object(wn.jsx)(Tn,{type:"text",placeholder:"search..",value:t,onChange:function(n){return r(n.target.value)}})})},zn=function(){return Object(wn.jsxs)(On,{children:[Object(wn.jsx)(Sn,{}),Object(wn.jsx)(Pn,{}),Object(wn.jsx)(Bn,{})]})},Nn=xn.d.a(u||(u=Object(hn.a)(["\n  display: block;\n  margin: 0 30px;\n  padding: 2px;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.textPrimaryHover})),Un=function(){return Object(wn.jsx)(Nn,{children:"Contact"})},Yn=xn.d.p(x||(x=Object(hn.a)(["\n  flex-grow: 1;\n  text-align: right;\n  color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),Fn=function(){return Object(wn.jsx)(Yn,{children:"Copyright"})},Kn=xn.d.footer(h||(h=Object(hn.a)(["\n  display: flex;\n  height: 50px;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 5px 50px;\n  background-color: #141418;\n"]))),Hn=xn.d.a(g||(g=Object(hn.a)(["\n  display: block;\n  padding: 2px;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.textPrimary}),(function(n){return n.theme.colors.textPrimaryHover})),Jn=function(){return Object(wn.jsx)(Hn,{href:"https://github.com/michakow",target:"_blank",children:"GitHub"})},Gn=function(){return Object(wn.jsxs)(Kn,{children:[Object(wn.jsx)(Jn,{}),Object(wn.jsx)(Un,{}),Object(wn.jsx)(Fn,{})]})},qn=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],Ln=t(28),Wn=t(29),Vn=xn.d.div(m||(m=Object(hn.a)(["\n  position: relative;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: #eeefef; //#eaeaea;\n  /* border: 1px solid #8c8c8c; */\n  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n  border-radius: 5px;\n\n  &:hover{\n    transform: scale(1.03);\n  }\n"]))),Xn=xn.d.img(O||(O=Object(hn.a)(["\n  display: block;\n  width: 100%;\n"]))),_n=xn.d.p(f||(f=Object(hn.a)(["\n  margin: 10px 0;\n  padding: 2px;\n  font-size: 17px;\n  color: ",";\n\n  ","  \n\n  ","\n\n  ","\n\n  "," \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.movieName&&Object(xn.c)(v||(v=Object(hn.a)(["\n    font-size: 19px;\n    font-weight: bold;\n  "])))}),(function(n){return n.movieYear&&Object(xn.c)(y||(y=Object(hn.a)(["\n    margin-top: 0;\n    color: #585874;\n  "])))}),(function(n){return n.movieTag&&Object(xn.c)(k||(k=Object(hn.a)(["\n    margin: 0 8px 8px 0;\n    padding: 5px 10px;\n    font-size: 15px;\n    background-color: #d3d3d3;\n    /* border: 1px solid #585874; */\n    border-radius: 5px;\n  "])))}),(function(n){return n.movieRating&&Object(xn.c)(w||(w=Object(hn.a)(["\n    flex-grow: 1;\n    display: flex;\n    margin-bottom: 5px;\n    align-items: center;\n    font-size: 16px;\n    font-weight: bold;\n  "])))})),Mn=xn.d.div(S||(S=Object(hn.a)(["\n  width: 100%;\n  margin: 10px 0 15px;\n  display: flex;\n  flex-wrap: wrap;\n"]))),Zn=xn.d.div(C||(C=Object(hn.a)(["\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-end;\n"]))),$n=Object(xn.d)(Ln.a)(A||(A=Object(hn.a)(["\n  margin-right: 5px;\n  align-self: flex-start;\n  font-size: 25px;\n  color: #fbd400;\n"]))),ne=xn.d.span(E||(E=Object(hn.a)(["\n  font-size: 25px;\n"]))),ee=xn.d.span(R||(R=Object(hn.a)(["\n  margin-left: 15px;\n  font-style: italic;\n  font-weight: normal;\n  color: #585874;\n"]))),te=xn.d.div(Q||(Q=Object(hn.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  background-color: rgba(0,0,0,0.85);\n  transition: 0.4s;\n  overflow: hidden;\n\n  "," \n"])),(function(n){return n.showDetails&&Object(xn.c)(P||(P=Object(hn.a)(["\n    height: 100%;\n  "])))})),re=Object(xn.d)(Wn.a)(D||(D=Object(hn.a)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  font-size: 25px;\n  color: ",";\n  cursor: pointer;\n\n  "," \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.showDetails&&Object(xn.c)(I||(I=Object(hn.a)(["\n    display: none;\n  "])))})),oe=xn.d.h3(T||(T=Object(hn.a)(["\n  padding: 15px;\n  font-size: 20px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.textPrimaryHover})),ce=xn.d.p(B||(B=Object(hn.a)(["\n  padding: 15px;\n  font-size: 18px;\n  text-align: justify;\n  color: ",";\n"])),(function(n){return n.theme.colors.textPrimaryHover})),ie=function(n){var e=n.movie,t=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAACpCAYAAAD3JGmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARSSURBVHgB7dvrShtBAIbh2XjCc0RRvIv+D4K9Er2T6pVU70SQ/PcqREUhns+m+007hQb9YczSmY/3gW00LSp5M7vjzrQKfxweHm5WVfWj3+9/qx/bAbk7qDvtdzqdPX1S6Y9ut6uAOwHFqWPu1DF3qzridh3xZ0Cx6n7fW/UfWwFF0yWxVT9uBpTuWyvAQZuQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGmCkCYIaYKQJghpgpAmCGliPBRmeno6zMzMhImJidBqDfc+fH19DU9PT+Hu7i48Pj4GB8WEnJqaCsvLy2F8/PeP/Pb2Fo9h6E2grzc/Px9Dnp+fx7glKyLk7OxsjKhwl5eX4fb2Nry8vISvmJycjCH1tdfW1sLp6WnRMbO/Ro6NjcWICndychJDfjWi6NR6cXERD41yxRz2VJ2D7H/ydrsdH/WCjyLgII1uvTkUU6OzVFmH1AjRi6vrWJOTkuvr63ja1iTqPbqeLi0txVGba+ysr5G6jolml01SxOfn5xgs0ZtIny8sLPzzvD6em5uL19ScZB2yqqr4OOzs9DN02lYkzWg1MjURUkx97/v7+3B1dRXPChqZ+jv925x+dck65P+YfKyvr8fHNENOp91EkyTRNZWQGVOcXq9X3I0CQg5oanbcNO61miCkCUKaIKQJQpogpAlCmiCkCUKaIOSA1dXVsLi4GBe0S8ItugG6Ua+QOrTofHNzU8R9V0IOOD4+jjv1tOaoRWQduveqlRCtgmgJS3KLm3XItGSkBWaNjiZpWSrtzNP30qHnNDLTDr5kVPuGRinrkFq11wubdgo0RdfD9xaKFUurIaJRqp/j4eEhy1Nt9pMdLeymPahNSRu8dD38iHYJaCTmer0sIqRGhk5xTWx8Sl9XgZo+fTcp+8mOTq3aCb6yshKvU9pPo5GjuNpQ/Nn9PJqV6kj/9UCjPe1xLVkRs1a90GdnZ39HjyKMwkf7ckpUzK8faeKhF16jSBOPYTdnKZreHLrulR4wKe73SAXVUfL1rAncojNBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENEFIE4Q0QUgThDRBSBOENKGQvYDiKeRRQOkOWv1+fzegaFVV7bc2NjYOiFkutet0OntVeqLb7W7XT27VH24GZK3u1KtH4ZEiaiDquV93YYRcLj5kHgAAAABJRU5ErkJggg==",r=Object(dn.useState)(!1),o=Object(Dn.a)(r,2),c=o[0],i=o[1];return Object(wn.jsxs)(Vn,{onMouseLeave:function(){return i(!1)},children:[Object(wn.jsx)(Xn,{src:t,alt:"movie poster"}),Object(wn.jsx)(_n,{movieName:!0,children:e.title}),Object(wn.jsx)(_n,{movieYear:!0,children:e.release_date?e.release_date.substr(0,4):null}),Object(wn.jsx)(Mn,{children:e.genre_ids.map((function(n){return Object(wn.jsx)(_n,{movieTag:!0,children:qn.find((function(e){return e.id===n})).name},n)}))}),Object(wn.jsx)(Zn,{children:Object(wn.jsxs)(_n,{movieRating:!0,children:[Object(wn.jsx)($n,{}),e.vote_average,Object(wn.jsx)(ne,{children:"/"}),"10",Object(wn.jsxs)(ee,{children:[e.vote_count," votes"]})]})}),Object(wn.jsx)(re,{showDetails:c,onClick:function(){return i(!0)}}),Object(wn.jsxs)(te,{showDetails:c,children:[Object(wn.jsx)(oe,{children:e.title}),Object(wn.jsx)(ce,{children:e.overview}),Object(wn.jsx)(ce,{children:e.release_date?e.release_date:null})]})]})},ae=t(12),se=t.n(ae),de=t(17),le="8dee42bf8098403b600d854f802f0af0",pe=xn.d.main(z||(z=Object(hn.a)(["\n  flex-grow: 1;\n  padding: 30px 200px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.bgSecondary})),be=xn.d.h2(N||(N=Object(hn.a)(["\n  margin-bottom: 30px;\n  font-size: 26px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textSecondary})),je=xn.d.section(U||(U=Object(hn.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-items: center;\n  grid-gap: 40px 0;\n"]))),ue=xn.d.div(Y||(Y=Object(hn.a)(["\n  display: flex;\n  margin-top: 50px;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n"]))),xe=xn.d.p(F||(F=Object(hn.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: #585874;\n"]))),he=xn.d.button(K||(K=Object(hn.a)(["\n  margin: 0 10px;\n  padding: 10px;\n  font-size: 15px;\n  background-color: #d3d3d3;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n\n  "," \n"])),(function(n){return n.disabled&&Object(xn.c)(H||(H=Object(hn.a)(["\n    background-color: #d1d8dd;\n    cursor: not-allowed;\n  "])))})),ge=xn.d.span(J||(J=Object(hn.a)(["\n  margin: 0 5px;\n  font-weight: bold;\n"]))),me=function(n){var e=n.trend,t=Object(dn.useState)(1),r=Object(Dn.a)(t,2),o=r[0],c=r[1],i=Object(un.h)().search,a=new URLSearchParams(i).get("search"),s=function(n,e,t){var r=Object(dn.useState)({state:"loading"}),o=Object(Dn.a)(r,2),c=o[0],i=o[1];return Object(dn.useEffect)((function(){i({state:"loading"}),setTimeout(function(){var r=Object(de.a)(se.a.mark((function r(){var o,c,a,s,d,l;return se.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=t?"https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(le):n?"https://api.themoviedb.org/3/search/movie?api_key=".concat(le,"&query=").concat(n,"&page=").concat(e):"https://api.themoviedb.org/3/movie/popular?api_key=".concat(le,"&language=en-US&page=").concat(e),r.next=4,fetch(o);case 4:if((c=r.sent).ok){r.next=7;break}throw new Error(c.statusText);case 7:return r.next=9,c.json();case 9:a=r.sent,s=a.results,d=a.total_pages,l=a.total_results,i({state:"success",moviesData:s,pages:d,results:l}),r.next=20;break;case 16:r.prev=16,r.t0=r.catch(0),i({state:"error"}),console.error("Oops, something bad happend");case 20:case"end":return r.stop()}}),r,null,[[0,16]])})));return function(){return r.apply(this,arguments)}}(),1e3)}),[e,n,t]),c}(a,o,e);return Object(dn.useEffect)((function(){c(1)}),[a,e]),Object(wn.jsxs)(pe,{children:[Object(wn.jsx)(be,{children:"loading"===s.state?"Loading..":"error"===s.state?"Something bad happend, please try again later :(":a?'Search for "'.concat(a,'" (').concat(s.results,")"):e?"TOP10 watching movies this week":"Popular movies"}),"loading"===s.state||"error"===s.state?null:Object(wn.jsxs)(wn.Fragment,{children:[Object(wn.jsx)(je,{children:(e?s.moviesData.slice(0,10):s.moviesData).map((function(n){return Object(wn.jsx)(ie,{movie:n},n.id)}))}),e?null:Object(wn.jsx)(ue,{children:Object(wn.jsxs)(xe,{children:[Object(wn.jsx)(he,{disabled:1===o,onClick:function(){return c(1)},children:"First"}),Object(wn.jsx)(he,{disabled:1===o,onClick:function(){return c(o-1)},children:"Previous"}),"Page ",Object(wn.jsx)(ge,{children:o})," of ",Object(wn.jsx)(ge,{children:s.pages||1}),Object(wn.jsx)(he,{disabled:o===s.pages||0===s.pages,onClick:function(){return c(o+1)},children:"Next"}),Object(wn.jsx)(he,{disabled:o===s.pages||0===s.pages,onClick:function(){return c(s.pages)},children:"Last"})]})})]})]})},Oe=xn.d.div(G||(G=Object(hn.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),fe=function(n){var e=n.trend;return Object(wn.jsxs)(Oe,{children:[Object(wn.jsx)(zn,{}),Object(wn.jsx)(me,{trend:e}),Object(wn.jsx)(Gn,{})]})},ve=xn.d.div(q||(q=Object(hn.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),ye=xn.d.form(L||(L=Object(hn.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 30px;\n  background-color: #e6e6e6;\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 15px;\n"]))),ke=xn.d.label(W||(W=Object(hn.a)(["\n  ","\n"])),(function(n){return n.author&&Object(xn.c)(V||(V=Object(hn.a)(["\n    margin: 5px 0;\n  "])))})),we=xn.d.textarea(X||(X=Object(hn.a)(["\n  padding: 10px 15px;\n  width: 100%;\n  height: 100px;\n  font-size: 14px;\n"]))),Se=xn.d.input(_||(_=Object(hn.a)(["\n  padding: 10px 15px;\n  width: 100%;\n  font-size: 14px;\n"]))),Ce=xn.d.input(M||(M=Object(hn.a)(["\n  padding: 10px;\n  color: #b6b6b6;\n  font-weight: bold;\n  font-size: 15px;\n  letter-spacing: .5px;\n  background-color: #23232e;\n  border: none;\n  border-radius: 15px;\n\n  &:active{\n    color: #ececec;\n    background-color: ","\n  }\n"])),(function(n){return n.theme.colors.bgPrimary})),Ae=xn.d.p(Z||(Z=Object(hn.a)(["\n  position: absolute;\n  width: 60%;\n  top: -22px;\n  left: 50%;\n  padding: 8px 12px;\n  color: ",";\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #f54a4a;\n  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 5px;\n  transform: translateX(-50%);\n\n  "," \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.sendState&&Object(xn.c)($||($=Object(hn.a)(["\n    background-color: #afedc4;\n  "])))})),Ee=function(n){var e=n.serverState,t=Object(dn.useState)(!1),r=Object(Dn.a)(t,2),o=r[0],c=r[1],i=Object(dn.useState)(""),a=Object(Dn.a)(i,2),s=a[0],d=a[1],l=Object(dn.useState)(""),p=Object(Dn.a)(l,2),b=p[0],j=p[1];return Object(wn.jsxs)(ye,{onSubmit:function(n){n.preventDefault();var t,r=(new Date).toISOString().split("T")[0];t={text:s,date:r,author:b},fetch("http://127.0.0.1:8888/opinions",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}),c(!0),d(""),j(""),"success"===e?setTimeout((function(){window.location.reload(!0)}),2e3):setTimeout((function(){c(!1)}),2e3)},children:[o?Object(wn.jsx)(Ae,{sendState:"success"===e,children:"success"===e?"Opinion has been sent":"Opinion has not been sent (server problem)"}):null,Object(wn.jsx)(ke,{opinion:!0,children:Object(wn.jsx)(we,{placeholder:"your opinion..",required:!0,value:s,onChange:function(n){return d(n.target.value)}})}),Object(wn.jsx)(ke,{author:!0,children:Object(wn.jsx)(Se,{type:"email",placeholder:"your email..",required:!0,value:b,onChange:function(n){return j(n.target.value)}})}),Object(wn.jsx)(Ce,{type:"submit",value:"Send opinion"})]})},Re=xn.d.div(nn||(nn=Object(hn.a)(["\n  width: 99%;\n  margin-bottom: 15px;\n  padding: 10px 15px;\n  background-color: #eeefef;\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);\n  border-radius: 5px;\n"]))),Qe=xn.d.p(en||(en=Object(hn.a)(["\n  font-size: 14px;\n  color: ",";\n\n  ","  \n"])),(function(n){return n.theme.colors.textSecondary}),(function(n){return n.author&&Object(xn.c)(tn||(tn=Object(hn.a)(["\n    display: flex;\n    margin-top: 18px;\n    align-items: center;\n    font-weight: bold;\n  "])))})),Pe=xn.d.span(rn||(rn=Object(hn.a)(["\n  margin-left: 15px;\n  font-size: 12px;\n  font-weight: normal;\n  color: #585874;\n"]))),De=function(n){var e=n.opinion;return Object(wn.jsxs)(Re,{children:[Object(wn.jsx)(Qe,{children:e.text}),Object(wn.jsxs)(Qe,{author:!0,children:[e.author,Object(wn.jsx)(Pe,{children:e.date})]})]})},Ie=xn.d.main(on||(on=Object(hn.a)(["\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  padding: 30px 200px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.bgSecondary})),Te=xn.d.h2(cn||(cn=Object(hn.a)(["\n  /* margin-top: 25px; */\n  font-size: 26px;\n  color: ",";\n"])),(function(n){return n.theme.colors.textSecondary})),Be=xn.d.section(an||(an=Object(hn.a)(["\n  display: flex;\n  padding: 10px 0;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  max-height: 70vh;\n  overflow-y: scroll;\n"]))),ze=xn.d.div(sn||(sn=Object(hn.a)(["\n  width: 100%;\n  height: 1px;\n  margin: 25px auto 15px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.textPrimary})),Ne=function(){var n=function(){var n=Object(dn.useState)({state:"loading"}),e=Object(Dn.a)(n,2),t=e[0],r=e[1];return Object(dn.useEffect)((function(){r({state:"loading"}),setTimeout(function(){var n=Object(de.a)(se.a.mark((function n(){var e,t,o;return se.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("http://localhost:8888/opinions");case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:t=n.sent,o=t.opinions,r({state:"success",opinions:o}),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),r({state:"error"}),console.error("Oops, something bad happend");case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}(),1e3)}),[]),t}();return console.log(n),Object(wn.jsxs)(Ie,{children:[Object(wn.jsx)(Ee,{serverState:n.state}),Object(wn.jsx)(ze,{}),"loading"===n.state?Object(wn.jsx)(Te,{children:"Loading.."}):"error"===n.state?Object(wn.jsx)(Te,{children:"Something bad happend, please try again later :("}):null,"loading"===n.state||"error"===n.state?null:Object(wn.jsx)(Be,{children:n.opinions.map((function(n,e){return Object(wn.jsx)(De,{opinion:n},e)}))})]})},Ue=function(){return Object(wn.jsxs)(ve,{children:[Object(wn.jsx)(zn,{}),Object(wn.jsx)(Ne,{}),Object(wn.jsx)(Gn,{})]})};var Ye=function(){return Object(wn.jsxs)(xn.a,{theme:mn,children:[Object(wn.jsx)(gn,{}),Object(wn.jsx)(jn.a,{children:Object(wn.jsxs)(un.d,{children:[Object(wn.jsx)(un.b,{path:"/movies",children:Object(wn.jsx)(fe,{trend:!1})}),Object(wn.jsx)(un.b,{path:"/trending",children:Object(wn.jsx)(fe,{trend:!0})}),Object(wn.jsx)(un.b,{path:"/opinions",children:Object(wn.jsx)(Ue,{})}),Object(wn.jsx)(un.b,{exact:!0,path:"/",children:Object(wn.jsx)(un.a,{to:"/movies"})})]})})]})},Fe=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))};bn.a.render(Object(wn.jsx)(ln.a.StrictMode,{children:Object(wn.jsx)(Ye,{})}),document.getElementById("root")),Fe()}},[[42,1,2]]]);
//# sourceMappingURL=main.fe8fe9ab.chunk.js.map