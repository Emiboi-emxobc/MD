import {_$} from './helpers/dom.js';

export default function Button({
  className="main-btn",
  id="",text="",type="button",onClick=null,html
  //Add more later
},...children){
  const b = _$("button",{
    className:`btn ${className}`,
    id,textContent:text,type,onClick
  }, ...children);
  
  if (html) {
      b.innerHTML = html;
  }
  
  return b
}

export function loadBtn(btn,msg = "Please wait...",load =true){
    const text = msg;
    let b = btn;
    let o;
    if(typeof btn === "string"){
        b = $(btn);
        o = b.textContent;
    }
    
    
    btn.innerHTML = msg;
}