import { _$ } from "./helpers/dom.js";
import Title from "./Title.js";
import  Text  from "./Text.js";
import Button from "./Button.js";

export default function Card({ className = "", id = "" }, ...children) {
  return _$(
    "div",
    {
      className: `card p4 ${className}`,
      id
    },
    ...children
  );
}



