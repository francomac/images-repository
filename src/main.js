import { createApp } from "vue";
import App from "./App";
import { store } from "./store/";

// new Vue({
//     render: h => h(App)
// }).$mount('#app')

const app = createApp(App);
app.use(store);
app.mount("#app");
