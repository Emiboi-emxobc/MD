import {$,_$} from "./helpers/dom.js";


export default function Span({text, className}={},...children){
    return _$("span", {textContent:text, className},...children)
}