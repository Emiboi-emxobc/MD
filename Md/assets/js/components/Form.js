
import {_$,$} from './helpers/dom.js';
import Header from './Header.js';
import {MdLogo} from './Image.js';
import Text from './Text.js';
import Div from './Div.js';
export default function Form({ className = "", id = "md-login", onSubmit } = {}, ...children) {
  const header = Header({}, Div({className:"p4"},MdLogo()));

  const form = _$("form", {
    className: "p4 md-form card " + className,
    id,
    onsubmit: async e => {
      e.preventDefault();

      const f = e.target;
      submitForm(f);

      try {
        if (onSubmit) await onSubmit(e);
        formSuccess(f);
      } catch (err) {
        formError(f, err);
      } finally {
        unfreezeForm(f);
      }
    }
  }, ...children);

  const m = _$("div", { className: "modal-con" }, form);

  return _$("section", { id: "login" }, header, m, Text({ html: "&copy; 2026 Marsdove" }));
}


export function submitForm(form){
  if(!form) return console.warn("Submit form error: form not found");

  freezeForm(form);

  const button = form.querySelector("[type=submit]");
  if (!button) return;

  button.dataset.originalText = button.textContent;
  button.textContent = "Submitting...";
}

export function freezeForm(form){
  if(!form) return;

  const fields = form.querySelectorAll("input, textarea, select, button");
  fields.forEach(el => el.disabled = true);
}


export function unfreezeForm(form){
  if(!form) return;

  const fields = form.querySelectorAll("input, textarea, select, button");
  fields.forEach(el => el.disabled = false);

  const button = form.querySelector("[type=submit]");
  if (button?.dataset.originalText) {
    button.textContent = button.dataset.originalText;
    delete button.dataset.originalText;
  }
}


export function formSuccess(form){
  console.log("Form submitted successfully 🚀");
}

export function formError(form, err){
  console.error("Form submission failed:", err);
}