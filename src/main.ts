import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "metismenujs";
import "metismenujs/dist/metismenujs.min.css"
import "jquery";
import "popper.js";
import VueLogger from 'vuejs3-logger';

const isProduction = process.env.NODE_ENV === 'production';

const options = {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
};


createApp(App).use(VueLogger, options).use(router).mount('#app')
