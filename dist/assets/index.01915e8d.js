var N=Object.defineProperty,W=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var A=(t,r,o)=>r in t?N(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,v=(t,r)=>{for(var o in r||(r={}))X.call(r,o)&&A(t,o,r[o]);if(S)for(var o of S(r))q.call(r,o)&&A(t,o,r[o]);return t},w=(t,r)=>W(t,Y(r));import{s as i,B as K,I as C,d as F,a as $,r as p,j as l,b as e,c as U,e as V,f as j,g as J,h as Q,L as Z,D as O,i as _,R as ee}from"./vendor.ad6e0d75.js";const te=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(n){if(n.ep)return;n.ep=!0;const d=o(n);fetch(n.href,d)}};te();const re=i.div`
    width: 100%;
    background-color: #183040;
    padding: 20px 0;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`,oe=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    width: 100%;
    margin: auto;
    flex-wrap: wrap;
    @media(max-width: 600px){
        flex-direction: column;
    }
`,ne=i.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    text-align: center;
    box-shadow: 2px 2px 8px 1px #1A242F;
    border-radius: 6px;
    position: relative;
    img{
        height: 100%;
        border-radius: 0 0 6px 6px;
    }
`,ie=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 40px;
    width: 100%;
    padding: 8px 0;
    font-size: 18px;
    background-color: #fff;
    color: #183040;
    @media(max-width: 800px){
        font-size: 16px;
    }
    h3{
        height: 60px;
        display: flex;
        align-items: center;
        max-width: 90%;
        line-height: 22px;
        overflow-y: hidden;
        @media(max-width: 600px){
            height: 40px; 
        }
    }
`,ae=i(K)`
    background-color: #A62014;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0;
    width: 100%;
    height: 40px;

    border-radius: 0 0 6px 6px;
    &:hover{
        background-color: #0D0D0D;
    }
`,se=i.div`
    display: flex;
    
`,de=i.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
`,ce=i.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: end;
    background-color: #fff;
    border-radius: 6px 6px 0 0;
`,f=i(C)`
    &:hover{
        background-color: rgba(0, 0, 0, .2);
    }
`,le=i(F)`
    color: white;
`,pe=i($)`
    color: white;
`,he=i(C)`
    &:hover{
        color: #A62014;
    }
`,ue=({item:t,handleAddToCart:r,handleAddFavorite:o,removeFromFavorites:s})=>{const[n,d]=p.exports.useState("default");return l(ne,{children:[e(ce,{"aria-label":"add to favorites",children:e(he,{onClick:()=>{n=="default"?(d("red"),o(t)):(d("default"),s(t.id))},children:e("div",{className:"heartDiv "+n,children:e($,{})})})}),e("img",{src:`https://image.tmdb.org/t/p/w400${t.poster_path}`,alt:t.title}),l(ie,{children:[e("div",{children:t.release_date}),e("h3",{children:t.title}),l(se,{children:[l(de,{children:[e(U,{}),e("div",{children:t.vote_average})]}),e("p",{children:"GENERO"})]}),e("div",{children:"R$ 79,99"})]}),e(ae,{onClick:()=>{r(t)},children:"Adicionar ao carrinho"})]})},fe=i.input`
    width: 300px;
    height: 40px;
    font-size: 20px;
    padding: 0 10px;
    outline: none;
    border: 0px;
    border-radius: 5px;
    @media(max-width: 600px){
        margin: 10px 0;
    }
    @media(max-width: 400px){
        width: 80%;
        font-size: 16px;
    }
`,xe=i(V)`
    position: relative;
    top: 6px;
    left: -35px;
    color: black;
    cursor: pointer;
`,ge=()=>{const[t,r]=p.exports.useState("");return l("div",{children:[e(fe,{type:"text",placeholder:"Digite o filme desejado",value:t,onChange:s=>{r(s.target.value)}}),e(xe,{})]})},me=i.div`
    max-width: 80%;
    margin: 150px auto;
    @media(max-width: 600px){
        margin: 220px auto;
    }
`,ve=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    align-content: center;
    gap: 25px;
    padding-bottom: 20px;
    @media(max-width: 800px){
        grid-template-columns: repeat(auto-fit, 230px);
    }
`,L=i.div`
    width: 400px;
    text-align: center;
    padding: 20px;
    @media(max-width: 600px){
        width: 92vw;
    }
    h2{
        padding: 10px 0;
    }
    p{
        margin: 20px 0;
        font-size: 20px;
    }
`,M=i.button`
    cursor: pointer;
    border:none;
    backgroundColor:#fff;
    width: 25px;
    height: 25px;
    display: flex;
    background-color: inherit;
    
`,z=i.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    
    img{
        height: 80px;
    }
    h3{
        width: 140px;
        font-size: 16px;
    }
`,we=({item:t,removeFromCart:r})=>l(z,{children:[e("img",{src:`https://image.tmdb.org/t/p/w400${t.poster_path}`}),e("h3",{children:t.title}),e("div",{children:"1"}),e("div",{children:"R$ 79,99"}),e(f,{onClick:()=>r(t.id),children:e(j,{})})]}),Ce=({cartItems:t,removeFromCart:r,closeModal:o})=>l(L,{children:[e(M,{onClick:()=>o(!1),children:"X"}),e("h2",{children:"Seu carrinho de compras"}),e("hr",{}),t.length===0&&e("p",{children:"Carrinho vazio"}),t.map(s=>e(we,{item:s,removeFromCart:r},s.id))]}),be=i(C)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: #000;
`;function ye(){const[t,r]=p.exports.useState(0);function o(){r(window.scrollY)}function s(){window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("scroll",o),e("div",{children:t>900&&e(be,{onClick:s,children:e(J,{})})})}const Ie=({item:t,removeFromFavorites:r,handleAddToCart:o})=>l(z,{children:[e("img",{src:`https://image.tmdb.org/t/p/w400${t.poster_path}`}),e("h3",{children:t.title}),e("div",{children:"R$ 79,99"}),e(f,{onClick:()=>o(t),children:e(F,{})}),e(f,{onClick:()=>r(t.id),children:e(j,{})})]}),ke=({cartItems:t,handleAddToCart:r,removeFromFavorites:o,closeModal:s})=>l(L,{children:[e(M,{onClick:()=>s(!1),children:"X"}),e("h2",{children:"Seus Favoritos"}),e("hr",{}),t.length===0?e("p",{children:"Voc\xEA n\xE3o tem favoritos"}):null,t.map(n=>e(Ie,{item:n,handleAddToCart:r,removeFromFavorites:o},n.id))]}),Se=i.footer`
    background-color: #183040;
    color: #fff;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
`,Ae=()=>e(Se,{children:e("p",{children:"Todos os direitos reservados."})}),B="api_key=8f21d4621d3aab323c8603e47a7ce86d",D=Q.create({baseURL:"https://api.themoviedb.org/3"}),Fe={getAllMovies:async()=>{try{return(await D(`/movie/popular?${B}&language=pt-BR`)).data.results}catch(t){console.error(t)}},getAllGenres:async()=>{try{return(await D(`/genre/movie/list?${B}`)).data.genres}catch(t){console.error(t)}}};function $e(){const[t,r]=p.exports.useState(!1),[o,s]=p.exports.useState(!1),[n,d]=p.exports.useState(!0),[u,b]=p.exports.useState([]),[x,y]=p.exports.useState([]),[g,R]=p.exports.useState([]),E=a=>a.reduce((c,h)=>c+h.count,0),P=a=>a.reduce((c,h)=>c+h.count,0),T=a=>{y(c=>c.find(m=>m.id===a.id)?c:[...c,w(v({},a),{count:1})])},I=a=>{const c=x.filter(h=>h.id!=a);y(c)},G=a=>{const c=u.filter(h=>h.id!=a);b(c)},k=a=>{b(c=>c.find(m=>m.id===a.id)?c:[...c,w(v({},a),{count:1})])};p.exports.useEffect(()=>{H()},[]);const H=async()=>{let a=await Fe.getAllMovies();R(a),d(!1)};return n?e(Z,{}):l("div",{children:[e(re,{children:l(oe,{children:[e("h1",{children:"LOGO"}),e(O,{anchor:"right",open:t,onClose:()=>r(!1),children:e(Ce,{cartItems:u,removeFromCart:G,closeModal:()=>r(!1)})}),e(O,{anchor:"right",open:o,onClose:()=>s(!1),children:e(ke,{cartItems:x,removeFromFavorites:I,handleAddToCart:k,closeModal:()=>s(!1)})}),e(ge,{}),l("div",{children:[e(f,{onClick:()=>s(!0),children:e(_,{badgeContent:P(x),color:"error",children:e(pe,{})})}),e(f,{onClick:()=>r(!0),children:e(_,{badgeContent:E(u),color:"error",children:e(le,{})})})]})]})}),e(me,{children:e(ve,{children:g==null?void 0:g.map(a=>e(ue,{item:a,handleAddToCart:k,handleAddFavorite:T,removeFromFavorites:I},a.id))})}),e(ye,{}),e(Ae,{})]})}ee.render(e($e,{}),document.getElementById("root"));
