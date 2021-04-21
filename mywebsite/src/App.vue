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
      <div class="proba-template">
        <h1>CON<br />TACT</h1>
      </div>
      <about-modal v-if="showMe" @close="showMe = false"></about-modal>
      <projects-modal
        v-if="showModal"
        @close="showModal = false"
      ></projects-modal>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ProjectsModal from "./components/ProjectsModal.vue";
import AboutModal from "./components/AboutModal.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    ProjectsModal,
    AboutModal,
    //
  },
  data: function() {
    return {
      projects: [
        // {
        //   id: 1,
        //   title: "connect4",
        //   directory: "connect4-new",
        //   description:
        //     "a simple web version of 'connect four' game. Two colors, two players, four tokens in line needed to win",
        // },
        // {
        //   id: 2,
        //   title: "pane",
        //   directory: "pane",
        //   description:
        //     "dynamic, interactive and visually attractive element for every website",
        // },
        // {
        //   id: 3,
        //   title: "spiced website",
        //   directory: "spiced-web",
        //   description: "website for spiced academy",
        // },
        // {
        //   id: 4,
        //   title: "spotify",
        //   directory: "spotify",
        //   description:
        //     "a search engine for music artists and albums utilizing spotify's API",
        // },
      ],
      showMe: false,
      showModal: false,
    };
  },
  mounted: function getProjects() {
    // var self = this;
    // axios.get("http://localhost:8080/projects.json").then(function(response) {
    //   console.log("response", response);
    //   console.log("self: ", self);
    //   // console.log("this inside then: ", this);
    //   //console.log("this.projects inside then: ", this.projects);
    // });
    // ///return response;
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
    // showModal() {
    //   console.log("click happens");
    // },
    closeModal: function() {
      console.log("zatvorio");
      // show = false;
    },
  },
};
</script>

<style>
#app {
  width: 100%;
}

.content {
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: "Press Start 2P";
}

.proba-template {
  color: white;
  height: 200px;
  width: 200px;
  border: 1px solid green;
  background: linear-gradient(
    180deg,
    rgb(0, 0, 0),
    rgb(80, 78, 78),
    rgb(24, 21, 21)
  );
  cursor: pointer;
}
</style>
