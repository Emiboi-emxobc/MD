import {_$} from "./helpers/dom.js";

export default function Icon({type="solid",name=""}){
    return _$("span",{className :`fa-${type} icon fa-${name}`})
}