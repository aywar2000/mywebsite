<template>
  <div class="overlay" @click.self="closeModal">
    <div class="modal">
      <div class="about-container" :class="{ flip }" @click="flip = !flip">
        <div class="about__face about__face--front">
          <!--novo-->
          <img class="img" src="../assets/bzvzz.jpg" alt="kojeto" />
        </div>
        <div class="about__face about__face--back">
          <h3>About:</h3>
          <p>art historian, philosopher, web developer</p>
        </div>
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
      flip: false,
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

<style scoped>
.modal {
  height: 500px;
  width: 400px;
  border: 1px solid green;
  color: white;
  background: linear-gradient(
    45deg,
    rgb(0, 0, 0, 0.9),
    rgb(80, 78, 78, 0.8),
    rgb(24, 21, 21, 0.7)
  );
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgb(0, 0, 0, 0.7),
    rgba(61, 59, 59, 0.3),
    rgb(24, 21, 21, 0.4)
  );
  /* background-color: rgba(0, 0, 0, 0.7); */
  align-items: center;
}

.about-container {
  height: 400px;
  width: 300px;
  position: relative;
  transition: transform 3s;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.about__face {
  z-index: 2;
  height: 100%;
  width: 100%;
  border: 2px solid green;
  cursor: pointer;
  position: absolute;
  backface-visibility: hidden;
}

.about__face--back {
  /* background-image: url("/root/mywebsite/mywebsite/src/assets/bzvzz.jpg"); */
  z-index: 33;
  background: linear-gradient(
    30deg,
    rgb(245, 237, 237),
    rgb(87, 87, 87),
    rgb(49, 49, 49)
  );
}

.about__face--front {
  transform: rotateY(180deg);
  z-index: 33;
  background: linear-gradient(
    45deg,
    rgb(87, 87, 87),
    rgb(49, 49, 49),
    rgb(245, 237, 237)
  );
}
.flip {
  transform: rotateY(180deg);
  z-index: 100;
}
.img {
  height: 100%;
  width: 100%;
}
</style>
