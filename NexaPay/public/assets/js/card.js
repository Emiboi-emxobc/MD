import { _$, $$, $, on } from './dom.js';

/**
 * Helper to create elements
 */
function create(tag, attrs={}, children=[]){
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=>{
    if(k==='class') el.className = v;
    else if(k==='onclick') on(el,'click',v);
    else el.setAttribute(k,v);
  });
  children.forEach(c=>{
    if(typeof c === 'string') el.appendChild(document.createTextNode(c));
    else el.appendChild(c);
  });
  return el;
}

/**
 * ProductCard
 */
export function ProductCard({ title, price, img, discount=null, rating=0, onAdd=null, onBuy=null }) {
  const badge = discount ? create('div',{class:'discount'},[discount]) : null;
  const image = create('img',{src:img});
  const h4 = create('h4',{class:'title'},[title]);
  const priceP = create('p',{class:'price'},[price]);

  const stars = rating ? create('div',{class:'rating'},['★'.repeat(rating)+'☆'.repeat(5-rating)]) : null;

  const addBtn = create('button',{class:'syber-btn', onclick:onAdd},['Add to cart']);
  const buyBtn = create('button',{class:'main-btn', onclick:onBuy},['Buy now']);
  const btnWrapper = create('div',{class:'cta-buttons fe'}, [addBtn,buyBtn]);

  const cardChildren = [badge,image,h4,stars,priceP,btnWrapper].filter(Boolean);
  return create('div',{class:'prod-card card'}, cardChildren);
}

/**
 * UserCard
 */
export function UserCard({ name, role, country, img, isFounder=false, socials=[] }) {
  const avatar = create('img',{src:img, alt:name, class:'avatar'});
  const badge = isFounder ? create('span',{class:'badge founder'},['Founder']) : null;
  const n = create('h4',{},[name]);
  const r = create('p',{},[role]);
  const c = create('p',{},[country]);

  let socialWrapper = null;
  if(socials.length){
    socialWrapper = create('div',{class:'social-icons fr'},
      socials.map(icon=>create('i',{class:`fab fa-${icon}`}))
    );
  }

  const cardChildren = [avatar,badge,n,r,c,socialWrapper].filter(Boolean);
  return create('div',{class:'user-card card fcac'}, cardChildren);
}

/**
 * CategoryCard
 */
export function CategoryCard({ name, img, onClick=null }){
  const image = create('img',{src:img});
  const label = create('p',{},[name]);
  return create('div',{class:'category-card card fcac', onclick:onClick}, [image,label]);
}

/**
 * HeroBanner
 */
export function HeroBanner({ title, subtitle, img, ctaText='Click', onCTA=null }){
  const h1 = create('h1',{class:'page-title'},[title]);
  const sub = create('h3',{class:'slogan'},[subtitle]);
  const image = create('img',{src:img});
  const btn = create('button',{class:'main-btn', onclick:onCTA},[ctaText]);
  const btnWrapper = create('div',{class:'fe cta-buttons'},[btn]);
  return create('div',{class:'banner card p8'},[h1,sub,image,btnWrapper]);
}