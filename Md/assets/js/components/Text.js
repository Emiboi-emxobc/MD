import {_$} from './helpers/dom.js';

export default function Text({
   text="",
   className="",
   id=""
},...children) {
   
   const p = _$("p",{
                className,
                id,
                html:text
              },...children 
   )
   
   return p
}