import * as dom from './dom.js';

export function modal({type,content}) {
    const title =
     content.title || "Page title";
    const description = 
     content.description || "Page description";
    const img = 
     content?.img;
    
    const tEl =
     dom._$("h2",{textContent:title});
    const desc =
     dom._$("p",{textContent:description});
    
    if (img) {
     const image = 
     dom._$("img",{textContent:img})
    }
   
    
    
    
    
    
    const modal = 
       dom._$("div",{
         className: `card modal ${type}`},[tEl,desc,image]);
   
   
document.body.appendChild(modal);
    
}