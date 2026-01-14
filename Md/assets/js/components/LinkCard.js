import {_$,$} from "./helpers/dom.js";
import LinkButton from "./LinkButton.js";
import Card from "./Card.js";
import Div from "./Div.js";


const Buttons =[
    {
        id:"fb-link",
        className:'link-btn main-btn g4 fw',
        text:"Voting link (The People's pick)", platform:"telegram fa-lg"
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