<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Nav from './components/Nav.vue'


</script>

<template>
  <div id='demo'>
    


    <Nav />
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>

  </div>
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  margin-top: 60px;
}

#demo{
  border:  1px solid black;
  width:  50%;
  margin: 0 auto;
}
</style>
