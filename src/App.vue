<script setup>
</script>

<template>
<!--  <HelloWorld msg="Vite + Vue" />-->
  <div class="container">
<!--    <Home></Home>-->
<!--    <Question></Question>-->
    <router-view></router-view>

  </div>

  <div class="fixed-bottom p-5 d-flex justify-content-end">
    <button class="btn btn-outline-secondary btn-lg" @click="toggleTheme">
      <font-awesome-icon :icon="theme === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']" />
    </button>
  </div>



</template>
<style>
body{
  font-family: 'Sora Variable', sans-serif !important;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1210%26quot%3b)' fill='none'%3e%3cuse xlink:href='%23SvgjsSymbol1217' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1217' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1210'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1216'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1213'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1211'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1212'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1214'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1215'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1217'%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='30' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='30' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='30' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='30' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='30' y='570' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='90' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='90' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='90' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='90' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='90' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='150' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='150' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='150' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='150' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='210' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='210' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='210' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='210' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='210' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='270' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='270' y='210' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='270' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='270' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='270' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='330' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='330' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='330' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='330' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='330' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='330' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='330' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='330' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='330' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='330' y='570' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='390' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='390' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='390' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='390' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='390' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='450' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='450' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='450' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='450' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='450' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='450' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='450' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='450' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='450' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='450' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='510' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='510' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='510' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='510' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='510' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='510' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='510' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='510' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='510' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='510' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='570' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='570' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='570' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='570' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='570' y='510' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='630' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='630' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='630' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='630' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='630' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='630' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='630' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='630' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='630' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='630' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='690' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='690' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='690' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='690' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='690' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='690' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='690' y='390' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='690' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='690' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='690' y='570' stroke='%231c538e'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");

  //background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1012%26quot%3b)' fill='none'%3e%3cpath d='M733.6 138.83L766.33 138.83L766.33 171.56L733.6 171.56z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M17.23 93.73L54.87 93.73L54.87 131.37L17.23 131.37z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M593.34 436.9L595.62 436.9L595.62 439.18L593.34 439.18z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1117.6 20.98 a13.27 13.27 0 1 0 26.54 0 a13.27 13.27 0 1 0 -26.54 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M431.05 182.09 a8.01 8.01 0 1 0 16.02 0 a8.01 8.01 0 1 0 -16.02 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1037.06 539.6L1092.08 539.6L1092.08 545.54L1037.06 545.54z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1114.7 362.01 a30.86 30.86 0 1 0 61.72 0 a30.86 30.86 0 1 0 -61.72 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M888.27 439.17 a41.75 41.75 0 1 0 83.5 0 a41.75 41.75 0 1 0 -83.5 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M627.55 535.84 a40.71 40.71 0 1 0 81.42 0 a40.71 40.71 0 1 0 -81.42 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M733.32 121.17L759.77 121.17L759.77 147.62L733.32 147.62z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M726.68 62.25 a20.53 20.53 0 1 0 41.06 0 a20.53 20.53 0 1 0 -41.06 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M728.7 88.26 a32.8 32.8 0 1 0 65.6 0 a32.8 32.8 0 1 0 -65.6 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M110.73 202.95a52.54 52.54 0 1 0-63.29 83.88z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M260.11 110.76 a52.58 52.58 0 1 0 105.16 0 a52.58 52.58 0 1 0 -105.16 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M367.9 117.68a21.88 21.88 0 1 0 21.8-37.95z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M680.29 228.35 a32.11 32.11 0 1 0 64.22 0 a32.11 32.11 0 1 0 -64.22 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M155 311.74a11.47 11.47 0 1 0 20.88-9.5z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M326.82 163.31L356.01 163.31L356.01 192.5L326.82 192.5z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M13.24 311.49L34.64 311.49L34.64 335.83L13.24 335.83z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1177.53 504.44a54.89 54.89 0 1 0 29.82 105.66z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M882.76 317.83a33.14 33.14 0 1 0 8.47 65.74z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1186.79 388.43L1221.8 388.43L1221.8 423.44L1186.79 423.44z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M362.85 416.39a52.24 52.24 0 1 0-36.91-97.74z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M901.4 191.59L933.64 191.59L933.64 223.83L901.4 223.83z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M528.6 520.54L545.65 520.54L545.65 538.79L528.6 538.79z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M101.02 315.5L110.36 315.5L110.36 324.84L101.02 324.84z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1137.57 496.96L1177.46 496.96L1177.46 536.85L1137.57 536.85z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M759.21 293.98L809.15 293.98L809.15 343.92L759.21 343.92z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M388.17 312.61L411.43 312.61L411.43 346.01L388.17 346.01z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M600.37 242.22L647.8 242.22L647.8 261.12L600.37 261.12z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1354.73 473.89 a44.76 44.76 0 1 0 89.52 0 a44.76 44.76 0 1 0 -89.52 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M578.28 493.38 a26.36 26.36 0 1 0 52.72 0 a26.36 26.36 0 1 0 -52.72 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M392.36 470.09a26.83 26.83 0 1 0-16.37 51.1z' fill='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1012'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

  background-color: var(--bs-primary-bg-subtle);
}
.btn:hover {
  font-weight: bolder;
}


</style>
<script>
import '@fontsource-variable/sora';


import {ref, watch} from 'vue';
export default {
  setup() {
    const body = ref(document.documentElement);

    const theme = ref(localStorage.getItem('theme') || 'white'); // Load theme from localStorage
    body.value.setAttribute('data-bs-theme', theme.value);
    // Function to toggle the theme
    const toggleTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
      body.value.setAttribute('data-bs-theme', theme.value);
      localStorage.setItem('theme', theme.value);
    };

    // Watch for changes in the theme and update the body class accordingly
    watch(theme, (newTheme) => {
      body.value.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', theme.value);
    });

    return {
      toggleTheme,
      theme,
    };
  },
};

</script>
<!--<script>-->
<!--export default {-->
<!--  // mounted() {-->
<!--  //   window.addEventListener('beforeunload', this.confirmRefresh);-->
<!--  // },-->
<!--  // beforeDestroy() {-->
<!--  //   window.removeEventListener('beforeunload', this.confirmRefresh);-->
<!--  // },-->
<!--  // methods: {-->
<!--  //   confirmRefresh(event) {-->
<!--  //     // Display a confirmation message when the user tries to refresh the page.-->
<!--  //     event.preventDefault();-->
<!--  //     event.returnValue = '';-->
<!--  //   },-->
<!--  // },-->
<!--};-->
<!--</script>-->
