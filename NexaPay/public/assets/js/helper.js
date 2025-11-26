import {
  $,$$,_$,on
} from './dom.js';


export function edit(target) {
  const id = $(target);
  if (id) {
    switchClass(id,"preview-mode","edit-mode")
  }
}

export function switchClass(el,from,to) {
  if (el) {
    el.classList.remove(from);
    el.classList.add(to);
    
    console.log(`Switch class on element: ${el} from ${from}
    to ${to}`)
  }
}


export function showPage(id) {
  if (!id) return;

  // hide all pages
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });

  // show target page
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }

  // update nav buttons (data-role="nav", data-target matches id)
  document.querySelectorAll("[data-role='nav']").forEach((btn) => {
    const tgt = btn.getAttribute("data-target");
    if (tgt === id) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

 export function dot(dots,con = document.body){
  const dE = _$("div",{className:"dot-con"});
  dots.forEach((dot) =>{
    const d = _$("div",{className:"dot"});
    dE.appendChild(d);
  })
  con.appendChild(dE)
}