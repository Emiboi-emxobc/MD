import {_$} from "./helpers/dom.js";
import Icon from "./Icons.js";
import Div from "./Div.js";
import Button from "./Button.js";
import {MdLogo} from "./Image.js";
export default function Header({
    className = "md-header",
    id ="",
    
},...children){
    
    return _$("header",{
        className,id
    },...children)
}

export function MdHeader(){
    return Header({}, Div({
        className:"fsb p4"
     },Div({className:"fr g4"},
          Icon({name:"bars"}),
          MdLogo()),
          Button({html:"Refer a friend"})
      )       
    )
    
}