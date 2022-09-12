import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import VueRouter from "vue-router";
import routes from "./routes/routes";

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faCircleCheck, faPen, faTrash);

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

Vue.use(VueAxios, axios);

//vue router setup in main.js
Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes,
    mode: "history",
});

new Vue({
    render: (h) => h(App),
    router
}).$mount("#app");