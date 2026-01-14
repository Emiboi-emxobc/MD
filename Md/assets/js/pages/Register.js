import { _$, $ } from "../components/helpers/dom.js";
import { swapPage } from "../components/helpers/dom.js";
import Title from "../components/Title.js";
import Text from "../components/Text.js";
import Button from "../components/Button.js";
import Input from "../components/Input.js";
import Link from "../components/Link.js";
import { register } from "../storage/register.js";
import Form from "../components/Form.js";
import Login from "./Login.js";
import Icon from "../components/Icons.js";
/* =========================
   REGISTER STATE
========================= */
export const registerState = {
  step: 0,
  values: {
    firstname: "",
    lastname: "",
    chatId: "",
    phone: "",
    password: "",
    confirm: ""
  },
  set(name, value) {
    this.values[name] = value;
  },
  get(name) {
    return this.values[name] || "";
  },
  reset() {
    this.step = 0;
    Object.keys(this.values).forEach(k => this.values[k] = "");
  }
};

/* =========================
   INPUT FIELDS
========================= */
const fields = [
  Input({
    label: "Enter your first name",
    id: "firstname",
    name: "firstname",
    type: "text",
    value: registerState.get("firstname"),
    onInput: e => registerState.set("firstname", e.target.value)
  }),

  Input({
    label: "Enter your lastname",
    id: "lastname",
    name: "lastname",
    type: "text",
    value: registerState.get("lastname"),
    onInput: e => registerState.set("lastname", e.target.value)
  }),

  Input({
    label: "Enter your telegram chatID",
    id: "chatId",
    name: "chatId",
    type: "number",
    value: registerState.get("chatId"),
    onInput: e => registerState.set("chatId", e.target.value)
  },Link({
      location:`https://t.me/marsdove_bot`,className:"telegram-link",text:"Get chatId"
  })),

  Input({
    label: "Enter your Phone number",
    id: "reg-phone",
    name: "phone",
    type: "tel",
    value: registerState.get("phone"),
    onInput: e => registerState.set("phone", e.target.value)
  },Icon({name:"phon"})),

  Input({
    label: "Create a new password",
    id: "new-password",
    name: "password",
    type: "password",
    value: registerState.get("password"),
    onInput: e => registerState.set("password", e.target.value)
  },Icon({name:"loc"}),Icon({name:"ee"})),

  Input({
    label: "Re-enter your new password",
    id: "confirm-password",
    name: "confirm",
    type: "password",
    value: registerState.get("confirm"),
    onInput: e => registerState.set("confirm", e.target.value)
  },Icon({name:"loc"}),Icon({name:"ee"}))
];

/* =========================
   VALIDATION
========================= */
export function validateStep(step, values) {
  switch (step) {
    case 0:
      if (!values.firstname.trim()) return "First name is required";
      break;

    case 1:
      if (!values.lastname.trim()) return "Last name is required";
      break;

    case 2:
      if (!values.chatId.trim()) return "Telegram Chat ID is required";
      if (!/^\d+$/.test(values.chatId)) return "Chat ID must be numbers only";
      break;

    case 3:
      if (!values.phone.trim()) return "Phone number is required";
      if (!/^\+?\d{8,15}$/.test(values.phone)) return "Invalid phone number";
      break;

    case 4:
      if (!values.password) return "Password is required";
      if (values.password.length < 6) return "Password must be at least 6 characters";
      break;

    case 5:
      if (values.confirm !== values.password) return "Passwords do not match";
      break;

    default:
      return null;
  }

  return null;
}

/* =========================
   REGISTER COMPONENT
========================= */
export default function Register({ title = "Create account", text = "" }) {
  const i = registerState.step;
  const isLast = i >= fields.length - 1;
  const isFirst = i === 0;
  const error = validateStep(i, registerState.values);

  return Form({
    className: "md-form card",
    id: "md-register",
    onSubmit: async (e) => {
      e.preventDefault();
      if (!isLast) return;

      const err = validateStep(i, registerState.values);
      if (err) {
        showError(err);
        return;
      }

      // Backend call
      register("#md-register", registerState.values);
    }
  },

    Title({ text: isLast || isFirst? title :fields[i].textContent }),
    

    _$("div", { className: "form-data" }, fields[i]),

    _$("p", {
      id: "login-feedback",
      className: "feedback error",
      textContent: error || ""
    }),

    Text({ text: "Already have an account? " },
      Link({ text: "Login", onClick: () => swapPage(Login({}), $("#root")) })
    ),

    _$("div", { className: "btn-group" },

      !isFirst && Button({
        html: `<span class="fas fa-arrow-left"></span> Back`,
        type: "button",
        className:"syber-btn",
        onClick: () => {
          registerState.step--;
          swapPage(Register({}), $("#root"));
        }
      }),

      Button({
        html: isLast ? "Register" : `<span class="fas fa-arrow-right"></span> Next`,
        type: isLast ? "submit" : "button",
        onClick: () => {
          const err = validateStep(i, registerState.values);
          if (err) {
            showError(err);
            return;
          }

          if (!isLast) {
            registerState.step++;
            swapPage(Register({}), $("#root"));
          }
        }
      })
    )
  );
  
  
}

/* =========================
   ERROR DISPLAY
========================= */
function showError(msg) {
  const fb = $("#login-feedback");
  if (fb) {
      fb.textContent = msg;
      fb.classList.add("error")
  }
}