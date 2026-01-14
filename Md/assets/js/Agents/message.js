import { Store } from "../storage/Store.js";
import {$} from "../components/helpers/dom.js";

export async function sendMessage(message = "") {
  try {
    // Ensure token exists
    const token = Store.Token || Store.getToken();
    if (!token) throw new Error("No auth token found");

    // Ensure admin exists
    const admin = Store.Admin || Store.getAdmin();
    if (!admin) throw new Error("No admin session");

    const res = await fetch(`${Store.URL}/sendLink`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name:message })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Failed to send message");
    }

    return data; // let caller handle success UI

  } catch (err) {
    console.error("sendMessage:", err.message);
    return { success: false, message: err.message };
  }
}