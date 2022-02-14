import { createApp } from "vue";
import App from "./App";

// new Vue({
//     render: h => h(App)
// }).$mount('#app')

const app = createApp(App);

app.mount("#app");