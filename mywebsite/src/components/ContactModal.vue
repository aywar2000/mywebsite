<template>
  <div class="contact-overlay" @click.self="closeModal">
    <div class="contact-modal">
      <div class="contact-container">
        <h3>Write me:</h3>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactModal",
  data: function() {
    return {
      contactMe: false,
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
.contact-modal {
  margin-top: 50px;
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-overlay {
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

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  height: 200px;
  width: 200px;
}

.img {
  height: 100%;
  width: 100%;
}
input {
  color: rgb(22, 11, 11);
  height: 200px;
  width: 150px;
  background: linear-gradient(
    45deg,
    rgb(221, 195, 195),
    rgb(184, 159, 159),
    rgb(245, 237, 237)
  );
}
</style>
