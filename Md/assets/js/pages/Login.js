
import {_$,$} from "../components/helpers/dom.js";
import {swapPage} from "../components/helpers/dom.js";
import Title from "../components/Title.js";
import Text from "../components/Text.js";
import Button from "../components/Button.js";
import Input from "../components/Input.js";
import {login} from "../storage/login.js";
import Link from "../components/Link.js";
import Form from "../components/Form.js";
import Register from "./Register.js";

export default function Login({title="Login to your account",text=""}){

  return Form(
    {
      className:"md-form card",
      id:"md-login",
      onSubmit: () => login("#md-login")
    },
    Title({text:title}),
    Text({text}),
    Input({
      label:"Enter your phone number",
      type:'tel',
      id:'phone',
      name:"phone"
    }),
    Input({
      label:"Enter your password",
      id:"reg-password",
      name:"password",
     type:"password"
    }),
    _$("p",{
      textContent:"",
      id:"login-feedback",
      className:"feedback error"
    }),
    Text({text:"Don't have account yet? "},
      Link({text:"Sign up", onClick:()=>swapPage(Register({}),root)})
    ),
    _$("div",{ className:"btn-group" },
      Button({ html:"Login", type:"submit" })
    )
  );
}