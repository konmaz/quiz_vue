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
      <font-awesome-icon :icon="theme === 'dark' ? ['fas', 'moon'] : ['fas', 'sun']" />
    </button>
  </div>



</template>
<style>
body{
  font-family: 'Sora Variable', sans-serif !important;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1210%26quot%3b)' fill='none'%3e%3cuse xlink:href='%23SvgjsSymbol1217' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1217' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1210'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1216'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1213'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1211'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1212'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1214'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1215'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1217'%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='30' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='30' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='30' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='30' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='30' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='30' y='570' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='90' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='90' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='90' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='90' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='90' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='90' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='150' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='150' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='150' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='150' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='150' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='210' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='210' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='210' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='210' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='210' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='210' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='270' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='270' y='210' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='270' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='270' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='270' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='270' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='330' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='330' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='330' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='330' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='330' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='330' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='330' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='330' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='330' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='330' y='570' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='390' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='390' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='390' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='390' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='390' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='390' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='450' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='450' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='450' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='450' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='450' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='450' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='450' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='450' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='450' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='450' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='510' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='510' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='510' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='510' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='510' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='510' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='510' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='510' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='510' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1213' x='510' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='570' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='570' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='570' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='570' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='570' y='510' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='570' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='630' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='630' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='630' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='630' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='630' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='630' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='630' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='630' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='630' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='630' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='690' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='690' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='690' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1216' x='690' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='690' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='690' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1215' x='690' y='390' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1212' x='690' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1211' x='690' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1214' x='690' y='570' stroke='%231c538e'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e");
  background-color: var(--bs-primary-bg-subtle);
}
@media (hover: hover) {
  button:hover {
    font-weight: bold;
  }
}


</style>
<script>
import '@fontsource-variable/sora';


import {ref, watch} from 'vue';
export default {
  setup() {
    const body = ref(document.documentElement);

    const theme = ref(localStorage.getItem('theme') || (  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')); // Load theme from localStorage
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
