import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "metismenujs";
import "metismenujs/dist/metismenujs.min.css"
import "jquery";
import "popper.js";


createApp(App).use(router).mount("#app");
