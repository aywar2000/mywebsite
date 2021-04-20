<template>
  <div class="header">
    <h1>HEADER</h1>
    <div class="modes">
      <h2>modes</h2>
      <div>
        <ul>
          <p></p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  top: 0;
  left: 0;
  height: 50px;
  /* width: 100%; */
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.header > h1 {
  color: white;
  font-family: "Press Start 2P";
  animation: glitch1 2.5s infinite;
}
.modes {
  color: white;
  font-family: "Press Start 2P";
  animation: glitch1 2.5s infinite;
}
</style>
