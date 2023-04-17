import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
import App from "./App.vue";
// firebase
import * as firebase from "firebase/app";
import "firebase/auth";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// fontawesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import router from "./router";

const app = createApp(App);

// firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_DATABASE_URL
};

firebase.initializeApp(firebaseConfig);

// vuetify
const vuetify = createVuetify({
  components,
  directives
});
library.add(fas, far, fab);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use(vuetify);
app.component("font-awesome-icon", FontAwesomeIcon); // Font Awesome 아이콘 컴포넌트 등록

app.use(createPinia().use(piniaPluginPersistedstate));

app.mount("#app");
