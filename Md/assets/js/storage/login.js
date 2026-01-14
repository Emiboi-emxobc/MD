import { $ } from "../components/helpers/dom.js";
import App from "../pages/App.js";
import { Store } from "./Store.js";
import {swapPage} from  "../components/helpers/dom.js";

export async function login(f = "") {
  const form = $(f);
  const phone = form.phone.value.trim();
  const password = form.password.value.trim();
  let fb = $("#login-feedback");
  if (!phone || !password) {
    fb.innerHTML = "Please enter a valid phone number and password to login";
    return;
  }
  fb.innerHTML = '<span class="fas fa-spin fa-cog"style="color:#1D2C44"></span> Please wait...';

  try {
    const res = await fetch("https://prosper-cub-1.onrender.com/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({phone, password }),
    });

    const data = await res.json();
    if(data.success){
        fb.innerHTML = data.message || "✅ Login successful";
      
        Store.setToken(data.token);
        alert(data.token)
        Store.setAdmin(data.admin);
        swapPage(App(),$("#root"))
    }else{
        fb.innerHTML = '<span class="fa-solid fa-info-circle"></span> '+ data.error;
    }
  } catch (error) {
    console.error(error);
    fb.innerHTML = '<span class="fa-solid fa-info-circle"></span> Login failed. Please try again.';
  } finally {
     
  }
}