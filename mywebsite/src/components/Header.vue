<template>
  <div class="header">
    <div class="logo-img">
      <img src="../assets/lww.jpg" alt="logo" />
    </div>
    <h3>HEADER</h3>
    <div class="header-button">
      <button>LIGHT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  border: 2px solid green;
  /* display: flex;
  flex-direction: row;
  justify-content: space-evenly; */
}
h3 {
  color: white;
  text-align: center;
  font-family: "Press Start 2P";
  margin-bottom: 10px;
}
h3:hover {
  color: green;
  animation: glitch1 2.5s infinite;
}
.logo-img {
  height: 50px;
  width: 50px;
  border: 1px solid green;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
}
.logo-img > img {
  height: 50px;
  width: 50px;
}
.header-button {
  height: 50px;
  width: 50px;
  border: 1px solid green;
  border-radius: 50%;
  overflow: hidden;
  float: right;
}
.header-button > button {
  height: 100%;
  width: 100%;
}
.modes {
  color: white;
  font-family: "Press Start 2P";
  animation: glitch1 2.5s infinite;
}
</style>
