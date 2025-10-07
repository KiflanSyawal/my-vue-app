<template>
  <div id="app">
    <MyPortofolio />
  </div>
</template>

<script>
import MyPortofolio from './components/MyPortofolio.vue'

export default {
  name: 'App',
  components: {
    MyPortofolio
  }
}
</script>

<style>
/* Ensure full-page layout */
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  /* Prevent horizontal scroll */
}

/* Ensure child components also respect full height */
#app {
  display: flex;
  flex-direction: column;
}
</style>
