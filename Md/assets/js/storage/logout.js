import {Store} from './Store.js';
import Login from '../pages/Login.js';
import {swapPage,$} from '../components/helpers/dom.js';
export function logOut() {
   const i = confirm("Are you sure you want to logOut?");
   if (i) {
      Store.clearAdmin();
      Store.clearToken();
      Store.page = Login({});
      swapPage(Store.page,$("#root"))
   }
   
}