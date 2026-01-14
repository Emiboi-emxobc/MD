import {_$} from "./helpers/dom.js";
import Title from "./Title.js";

export default function Image({src="./md-logo.png",
                className="image",
                id="",
                alt="Marsdove logo",
                onClick 
               })
 {
    return _$("img",{
           src,
           className,
           id,
           alt, 
           onClick
            });             
 }
 
 export function MdLogo(id="md-logo", onClick,){
 const con = _$("div",{},Image({
         src:"https://res.cloudinary.com/diiaihfac/image/upload/v1766221203/nexa_mini/yyvjmnfvslwccoxdxzvd.png",
         className:"image  md-logo",
                id:"",
                alt:"Marsdove logo",
                onClick :()=> alert(hhh)
     }),
     _$("span",{textContent:"Marsdove", className:"page-title fa-lg"}));
     
     return con
     
     
      
 }
 
 
 