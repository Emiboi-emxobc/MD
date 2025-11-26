import {_$,$$,$,on} from './dom.js';



function card(title, description, image,price,className="card") {
   const tE = 
   _$("h3",{textContent:title});
   const dE = _$("p",{textContent:description});
   
   if (image) {
      const iE = 
      _$("img",{src:image.src});
   }
   if (price) {
      const prE = 
      _$("p",{textContent:price,className:'price'})
   }
   const card = _$("div",{className:`card ${className}`},[iE,tE,dE,prE])
}

function prods(products){
   products.forEach((product) =>{
     const pT =
   _$("h3",{className:"prod-title title",textContent: product.title});
   const pD = 
   _$("p",{textContent:product.desc || "product"})
   })
   
}