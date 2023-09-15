<template>
  <div id="app">
    <div class="container-fluid">
      <MainMenu />
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/navbar/MainmenuPage.vue'

export default {
  name: 'AboutView',
  components: {
    MainMenu
  }
}
</script>

<style>

#app{
  font-family: Avenir,Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -mos-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
