import { _$, $$ ,$} from "./helpers/dom.js";



export default function Input({
  label = "",
  type = "text",
  id = "",
  name = id,
  className = "",onInput,onBlur
} = {},...icons) {

  // input element
  const inp = _$("input", {
    id,
    name:name||id,
    type,
    className: `${id}-input ${className}`,
    onInput:(e)=>{onInput && onInput(e); validateInput()},onBlur
  });

  // label element
  const lbl = _$("label", {
    htmlFor: id,
    textContent: label
  });

  // wrapper
  const con = _$("div", {
    className: "input-group m4"
  }, inp, lbl);

  // icons (optional)
  icons.forEach(icon => con.appendChild(icon));

  return con;
}

 function validateInput(scope = document) {
  $$("input", scope).forEach(inp => {
    const group = inp.closest(".input-group");
    if (!group) return;

    const check = () =>
      group.classList.toggle("not-empty", inp.value.trim() !== "");

    inp.addEventListener("input", check);
    inp.addEventListener("blur", check);
    check();
  });
}

validateInput();


