import {_$} from "./helpers/dom.js";

export default 
function Div(props={},...children){

    return _$("div",props,...children)
}