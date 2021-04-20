<template>
  <div class="overlay" @click.self="closeModal">
    <div class="modal">
      <h1>ABOUT ME</h1>
      <div class="images">
        <!--novo-->
        <img />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  data: function() {
    return {
      show: false,
    };
  },

  methods: {
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
