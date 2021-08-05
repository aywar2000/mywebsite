<template>
  <div id="app">
    <Header></Header>

    <div class="content">
      <div class="proba-template" @click="showMe = true">
        <h1>ABOUT ME</h1>
      </div>

      <div class="proba-template" @click="showModal = true">
        <h1>__PRO<br />JECTS</h1>
      </div>

      <div class="proba-template" @click="contactMe = true">
        <h1>CON<br />TACT</h1>
      </div>

      <about-modal v-if="showMe" @close="showMe = false"></about-modal>
      <contact-modal
        v-if="contactMe"
        @close="contactMe = false"
      ></contact-modal>

      <projects-modal
        v-if="showModal"
        @close="showModal = false"
      ></projects-modal>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ProjectsModal from "./components/ProjectsModal.vue";
import AboutModal from "./components/AboutModal.vue";
import ContactModal from "./components/ContactModal.vue";
import Footer from "./components/Footer.vue";
//import Carousel from "./components/Carousel.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    ProjectsModal,
    AboutModal,
    //Carousel,
    ContactModal,
    Footer,
    //
  },
  data: function() {
    return {
      projects: ["id", "title", "description"],
      showMe: false,
      showModal: false,
      contactMe: false,
      flip: false,
      vueCanvas: null,
    };
  },
  mounted: function getProjects() {
    var me = this;
    axios
      .get("http://localhost:8080/projects.json")
      .then(function(response) {
        console.log("response from getProjects: ", response);
        me.projects = response.data;
      })
      .catch(function(err) {
        console.log("err in GET /projects: ", err);
      });
  },

  methods: {
    closeModal: function() {
      console.log("zatvorio");
      // show = false;
    },
  },
};
</script>

<style>
#app {
  width: 90%;
}

.content {
  /* padding-top: 50px; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: "Press Start 2P";
}

.proba-template {
  margin-top: 100px;
  color: white;
  height: 200px;
  width: 200px;
  border: 2px solid rgb(26, 80, 26);
  background: linear-gradient(
    180deg,
    rgb(0, 0, 0),
    rgb(80, 78, 78),
    rgb(24, 21, 21)
  );
  cursor: pointer;
}
h1:hover {
  color: coral;
}

/* @media (min-width: 400px) {
  .content {
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    font-family: "Press Start 2P";
  }
} */
</style>
