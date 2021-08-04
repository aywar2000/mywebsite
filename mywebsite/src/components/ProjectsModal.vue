<template>
  <div class="overlay" @click.self="closeModal">
    <div class="projects-modal">
      <!--  -->
      <div class="project-item" style="overflow-y: scroll; height:400px;">
        <ul v-for="project in projects" :key="project.id">
          <div class="project-img">
            <img src="" class="img-proba" />
            <div>
              <button>visit</button>
              <button>github</button>
            </div>
          </div>
          <div class="project-desc">
            <p>{{ project.title }}</p>
            <p>{{ project.description }}</p>
          </div>
        </ul>
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
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var me = this;
      axios
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
.projects-modal {
  height: 80%;
  width: 60%;
  border: 1px solid rgb(78, 128, 78);
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

.project-item {
  display: flex;
  flex-direction: column;
}
/* .project-item:hover {
  border: 1.5px solid rgb(47, 88, 47);
} */

.img-proba {
  height: 100px;
  width: 100px;
}
.project-img {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

ul > button {
  border: 1px solid coral;
}
</style>
