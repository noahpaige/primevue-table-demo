import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import router from "./router.js"; // Import the router

import App from "./App.vue";
import AppState from "./plugins/appState.js";
import Noir from "./presets/Noir.js";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: "p",
      darkModeSelector: ".p-dark",
      cssLayer: false,
    },
  },
});
app.use(AppState);
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

app.mount("#app");
