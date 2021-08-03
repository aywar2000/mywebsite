<template>
  <div class="overlay" @click.self="closeModal">
    <div class="modal">
      <ul v-for="project in projects" :key="project.id">
        <p>{{ project.id }}</p>
        <p>{{ project.title }}</p>
        <p>{{ project.description }}</p>
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
  data: function() {
    return {
      id: "",
      title: "",
      directory: "",
      description: "",
    };
  },
  watch: {
    projects: function() {
      this.getData();
    },
  },
  props: ["projects"],
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var me = this;
      axios
        //.get(`/image/${this.imageId}`)
        .get(`http://localhost:8080/projects.json`)
        .then(function(response) {
          if (response.data != 0) {
            me.projects = response.data;
            console.log("response from modalreceived", me.projects);
          } else {
            console.log("no response received");
            me.$emit("close");
          }
        })
        .catch(function(err) {
          console.log("err in GET /project", err);
        });
    },
    // getProjects() {
    //   console.log("add json data...");
    //   axios.get("http://localhost:8080/projects.json");
    // },
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
    rgba(20, 19, 19, 0.2),
    rgba(36, 35, 35, 0.5),
    rgb(24, 21, 21, 0.6)
  );
  /* background-color: rgba(0, 0, 0, 0.7); */
  align-items: center;
}

.modal > ul {
  color: white;
}
</style>
