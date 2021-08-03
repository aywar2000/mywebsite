<template>
  <div class="footer">
    <a target="_blank" href="https://github.com/aywar2000/mywebsite"
      >aywar2000</a
    >
  </div>
</template>
<script>
export default {
  name: "Footer",
  // props: {
  //   msg: String,
  // },
};
</script>
<style scoped>
.footer {
  color: white;
  font-family: "Press Start 2P";
  animation: glitch1 2.5s infinite;
  left: 0;
  height: 50px;
  margin-top: 250px;
  border: 1px solid green;
}
a:hover {
  color: green;
}
</style>
