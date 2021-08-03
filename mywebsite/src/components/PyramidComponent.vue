<template>
  <div class="canvas-wrap">
    <div class="canvas">
      <canvas id="canv" width="600" height="200"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "PyramidComponent",
  // props: {
  //   msg: String,
  // },
  mounted: function() {
    var canvas = document.getElementById("canv");
    const ctx = canvas.getContext("2d");
    this.vueCanvas = ctx;
  },

  methods: {
    pyraMids: function() {
      var canvas = document.getElementById("canv");
      const ctx = canvas.getContext("2d");
      //   this.vueCanvas = ctx;

      ctx.beginPath();
      ctx.strokeStyle = "rgb(58, 255, 58)";
      ctx.lineWidth = 3;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgb(58, 255, 58)";
      ctx.stroke();
      //sa beginpath počinje
      //glavna
      ctx.beginPath();
      ctx.moveTo(300, 0);
      ctx.lineTo(170, 200);
      ctx.moveTo(300, 0);
      ctx.lineTo(370, 200);
      ctx.moveTo(300, 0);
      ctx.lineTo(450, 200);
      ctx.lineTo(0, 200);
      ctx.stroke();
      //završava
      //lijevo
      ctx.beginPath();
      ctx.moveTo(130, 100);
      ctx.lineTo(50, 200);
      ctx.moveTo(130, 100);
      ctx.lineTo(180, 180);
      ctx.moveTo(130, 100);
      ctx.lineTo(170, 222);
      ctx.stroke();
      //mjesec
      ctx.beginPath();
      ctx.moveTo(130, 500);
      ctx.lineTo(50, 450);
      ctx.beginPath();
      ctx.arc(55, 55, 30, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.stroke();
      //desna
      ctx.beginPath();
      ctx.moveTo(500, 50);
      ctx.lineTo(420, 162);
      ctx.moveTo(500, 50);
      ctx.lineTo(590, 200);
      ctx.moveTo(500, 50);
      ctx.lineTo(600, 160);
      ctx.stroke();
    },
  },
};
</script>
<style>
#canv {
  margin: 50px;
  left: 40%;
  border: 3px solid green;

  opacity: 0.7;
  animation: glitch1 2.5s infinite;
}
#canv:hover {
  border: 3px solid black;
  background-color: rgb(97, 238, 15);
}
/* .canvas {
  left: 40;
  height: 200px;
} */
.canvas-wrap {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
}
</style>
