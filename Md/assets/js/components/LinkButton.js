import Button from "./Button.js";
import Icon from "./Icons.js";
import Span from "./Span.js";
import { $ } from "./helpers/dom.js";
import { Store } from "../storage/Store.js";
import { sendMessage } from "../agents/message.js";

export default function LinkButton({
  link = ``,
  className = "",
  text = "",
  platform = "telegram",
  id = "",
  onClick,
  name = "meta_voting"
}, ...children) {

  return Button({
    className: `link-btn btn frac g4 ${className}`,
    id,
    onClick: async () => {
      const btn = $("#" + id);
      if (!btn) return;

      btn.textContent = "Sending link";

      const data = await sendMessage(`${name}`);

      if (data?.success) {
        btn.textContent = JSON.stringify(data.admin) || "Sent!";
      } else {
        btn.textContent = data?.message || "Failed";
      }
    }
  },
    Icon({ name: platform,type:"brands"}),
    Span({ text })
  );
}