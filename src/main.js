import { createApp } from "vue";
import App from "./App";
import { store } from "./store/";
import router from "./router/";

// new Vue({
//     render: h => h(App)
// }).$mount('#app')

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
