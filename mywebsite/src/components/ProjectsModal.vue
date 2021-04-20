<template>
  <div class="overlay" @click.self="closeModal">
    <div class="modal">
      <ul v-for="project in projects" :key="project.title">
        <li>
          <p>{{ project.id }}</p>
          <p>{{ project.title }}</p>
          <p>{{ project.description }}</p>
        </li>
      </ul>
      <div class="images">
        <!--novo-->
        <img />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import VueAxios from "vue-axios";

export default {
  name: "ProjectsModal",
  props: ["projects"],

  data: function() {
    return {
      id: "",
      title: [],
      directory: "",
      description: "",
    };
  },

  methods: {
    getProjects() {
      console.log("add json data...");
      axios.get("http://localhost:8080/projects.json");
    },
    showModal() {
      console.log("click happens");
      //console.log("propzz", this.props);
      this.$emit("click");
    },
    closeModal: function() {
      console.log("zatvorio");
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  height: 400px;
  width: 600px;
  border: 1px solid green;
  color: white;
  background: linear-gradient(
    180deg,
    rgb(0, 0, 0, 0.9),
    rgb(80, 78, 78, 0.8),
    rgb(24, 21, 21, 0.7)
  );
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgb(0, 0, 0, 0.7),
    rgba(61, 59, 59, 0.3),
    rgb(24, 21, 21, 0.4)
  );
  /* background-color: rgba(0, 0, 0, 0.7); */
  align-items: center;
}
</style>
