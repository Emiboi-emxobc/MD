import * as _ from './dom.js';
import * as help from './helper.js';



window.onload = () => {
   
  const navButtons = _.$$("[data-role=nav]");

  navButtons.forEach((btn) => {
    _.on(btn,"click", (e) => {
      e.preventDefault();
      const target = btn.dataset.target;
      if (target) {
        help.showPage(target);
      }
    });
  });

}
