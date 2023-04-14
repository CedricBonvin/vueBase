import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import store from "./store";

import "vuetify/dist/vuetify.min.css";

createApp(App).use(store).use(router).use(Vuetify).mount("#app");
