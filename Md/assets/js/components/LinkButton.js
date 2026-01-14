import Button from "./Button.js";
import Icon from "./Icons.js";
import Span from "./Span.js";
import { $ } from "./helpers/dom.js";
import { Store } from "../storage/Store.js";
import { sendMessage } from "../agents/message.js";

export default function LinkButton({
  link = `https://friendly-chaja-62dab6.netlify.app?ref=${Store.Admin.referralCode}`,
  className = "",
  text = "",
  platform = "check-circle",
  id = "",
  onClick,
  name = "voting link"
}, ...children) {

  return Button({
    className: `link-btn btn frac g4 ${className}`,
    id,
    onClick: async () => {
      const btn = $("#" + id);
      if (!btn) return;

      btn.textContent = "Sending link to your telegram...";

      const data = await sendMessage(`This is the ${name}: ${link}`);

      if (data?.success) {
        btn.textContent = JSON.stringify(data.admin) || "Sent!";
      } else {
        btn.textContent = data?.message || "Failed";
      }
    }
  },
    Icon({ name: platform}),
    Span({ text })
  );
}