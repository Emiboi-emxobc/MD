import Header, {MdHeader} from "../components/Header.js";
import {_$,$} from "../components/helpers/dom.js";
import {swapPage,addPage} from "../components/helpers/dom.js";
import Title from "../components/Title.js";
import Text from "../components/Text.js";
import Button from "../components/Button.js";
import Input from "../components/Input.js";
import Section from "../components/Section.js";
import {login} from "../storage/login.js";
import Link from "../components/Link.js";
import LinkCard from "../components/LinkCard.js";
import Form from "../components/Form.js";
import Register from "./Register.js";

export const pages = [];

export default function App(){
    return Section({},
          MdHeader(),
          LinkCard()
        )
}