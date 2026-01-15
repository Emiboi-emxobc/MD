import { on,$ ,_$} from "./assets/js/components/helpers/dom.js";
import Header from "./assets/js/components/Header.js";
import Card from "./assets/js/components/card.js";
import Button from "./assets/js/components/Button.js";
import Title from "./assets/js/components/Title.js";
import {Store} from "./assets/js/storage/Store.js";
import Text from "./assets/js/components/Text.js";
import Input from "./assets/js/components/Input.js";
import Login from "./assets/js/pages/Login.js";
import App from "./assets/js/pages/App.js";
import Register from "./assets/js/pages/Register.js";
const root = $("#root");



let allowed = false;
let page = Store.page;


if(  Store.Token && Store.Admin && Store.Admin?.isAllowed){
    allowed = true;
    
}
Store.page = allowed? App() : Login({});





export function start(){
    console.log("Marsdove framework fully loaded and functional")
    root.appendChild(page);
    
}