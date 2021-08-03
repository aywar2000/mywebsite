import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
Vue.prototype.$http = axios;
// import VueAxios from "vue-axios";

// import Header from "./components/Header.vue";
// import ProjectsModal from "./components/ProjectsModal.vue";
// import AboutModal from "./components/AboutModal.vue";
// //import PyramidComponent from "./components/PyramidComponent.vue";
// import Footer from "./components/Footer.vue";
// import Carousel from "../components/Carousel.vue";

// Vue.component("header", Header);
// Vue.component("projects-modal", ProjectsModal);
// Vue.component("about-modal", AboutModal);
// Vue.component("footer", Footer);
// Vue.component("projects-carousel", Carousel);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
