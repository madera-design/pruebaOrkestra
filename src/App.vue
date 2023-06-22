<template>
  <div class="container--app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderApp />
    <SearchBar />
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import SearchBar from './components/SearchBar.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    SearchBar,
  },
  data() {
      return {
      }
  },
  methods: {
    handleDecode(result) {
      // Aquí puedes manejar el resultado del escaneo del código QR
      console.log('Resultado del escaneo:', result);
    }
  }
}
</script>

<style>
.container--app {
  background-color: #E3E9EE;
}
</style>
