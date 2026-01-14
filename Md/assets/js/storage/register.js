import { $ } from "../components/helpers/dom.js";
import {Store} from "./Store.js";
export async function register(f="#md-register", d ={}) {
  /*const form = $(f);
  const password = form.password?.value.trim();
  const password = form.password?.value.trim();
  const password = form.password?.value.trim();
  const lastname = form.lastname?.value.trim();
  const firstname = form.firstname?.value.trim();
  
*/

   
  let fb = $("#login-feedback");
  
  fb.innerHTML = '<span class="fas fa-spin fa-cog"style="color:#1D2C44"></span> Please wait...';

  try {
    const res = await fetch("https://prosper-cub-1.onrender.com/admin/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(d),
    });

    const data = await res.json();
    let admin = null;
    
    if(data.success){
    admin = data.admin;
    localStorage.setItem("site",data.site);
    alert(data.site)
        fb.innerHTML = data.message || `✅ Account created for <strong>${admin.username}</strong>`;
        
       
       Store.setAdmin(admin);
       Store.setToken(data.token);
        window.location.href = data.site;
    }else{
        fb.innerHTML = '<span class="fa-solid fa-info-circle"></span> '+ data.error;
    }
  } catch (error) {
    console.error(error);
    fb.innerHTML = '<span class="fa-solid fa-info-circle"></span> Registeration failed. Please try again.';
  } finally {
     
  }
}