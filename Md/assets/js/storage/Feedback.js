import {$,_$} from "../components/helpers/dom.js";

export function feedback({type="error",root="#login-feedback", text="",icon="info-circle"}){
    const info = "<span class="fa-solid fa-info-circle"></span>";
    const success = "<span class="fa-solid fa-info-circle"></span>";
    const error = "<span class="fa-solid fa-info-circle"></span>";
    
    
   const msg = _$("span",{html:text,className:"feedback "+type,});
   
    Div({},msg,)
}