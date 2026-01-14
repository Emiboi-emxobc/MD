import { _$ } from './helpers/dom.js';

export default function Link({
  text = "",
  className = "",
  location = "",
  id = "",
  onClick
}, ...children) {

  const p = _$("span", {
    className: "link " + className,
    id,
    html: text,
    onClick: (e) => {
      if (onClick) {
        onClick(e);
        return;
      }

      if (location) {
        window.open(location, "_blank");
      }
    }
  }, ...children);

  return p;
}