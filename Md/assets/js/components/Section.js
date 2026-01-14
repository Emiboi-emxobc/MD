import {_$} from "./helpers/dom.js";

export default
function Section(props={className:"p4"},...children){
    return _$("section",props,...children)
}