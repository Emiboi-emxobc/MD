import Login from  '../pages/Login.js';
export const Store = {
  // ---- CONFIG ----
  Site:  localStorage.getItem("site") || "https://friendly-chja-6dab6.netlify.app",
  URL: "https://prosper-cub-1.onrender.com",
  page: Login({}),
  // ---- STATE ----
  Token: localStorage.getItem("nexa_token")|| null,
  Admin: JSON.parse(localStorage.getItem("nexa_admin"))|| null,

  // Temporary session data (form steps, UI state, etc.)
  _temp: {},

  // ---- TEMP DATA API ----
  setTemp(key, value) {
    if (!key) return this._temp;
    this._temp[key] = value;
    return this._temp;
  },

  getTemp(key) {
    return this._temp[key] ?? null;
  },

  hasTemp(key) {
    return Object.prototype.hasOwnProperty.call(this._temp, key);
  },

  removeTemp(key) {
    delete this._temp[key];
    return this._temp;
  },

  clearTemp() {
    this._temp = {};
    return this._temp;
  },

  getAllTemp() {
    return { ...this._temp };
  },

  // ---- AUTH / SESSION ----
  getToken(name = "nexa_token") {
    const t = localStorage.getItem(name);
    this.Token = t ? t : null;
    return this.Token;
  },

  setToken(token) {
    if (!token) return;
    this.Token = token;
    localStorage.setItem("nexa_token", token);
  },

  clearToken() {
    this.Token = null;
    localStorage.removeItem("nexa_token");
  },

  getAdmin() {
    let admin = localStorage.getItem("nexa_admin");

    if (!admin) {
      admin = this.seedGuest();
      localStorage.setItem("nexa_admin", JSON.stringify(admin));
    } else {
      try {
        admin = JSON.parse(admin);
      } catch (e) {
        admin = this.seedGuest();
        localStorage.setItem("nexa_admin", JSON.stringify(admin));
      }
    }

    this.Admin = admin;
    return admin;
  },

  setAdmin(admin) {
    if (!admin) return;
    this.Admin = admin;
    localStorage.setItem("nexa_admin", JSON.stringify(admin));
  },

  clearAdmin() {
    this.Admin = null;
    localStorage.removeItem("nexa_admin");
  },

  // ---- GUEST SEEDING ----
  seedGuest() {
    const id = Date.now(); // persistent-ish uniqueness
    return {
      role: "guest",
      username: `guest_${id}`
    };
  }
};