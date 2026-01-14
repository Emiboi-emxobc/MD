import {_$,$} from "./helpers/dom.js";
import LinkButton from "./LinkButton.js";
import Card from "./Card.js";
import Div from "./Div.js";


const Buttons =[
    {
        id:"fb-link",
        className:'link-btn main-btn g4 fw',
        text:"Meta voting link", platform:"facebook"
    },
    {
        id:"ig-link",
        className:'link-btn main-btn fw',
        text:"Instagram link",
        platform:"instagram"
    }
]
export default function LinkCard(){
    return Div({className:"fc modal-con"},
    Div({
    className:"link-card"
    },
    LinkButton(Buttons[0]),
    
    Div({id:"error-fb"})
    ))
}