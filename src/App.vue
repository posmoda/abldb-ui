<template>
  <div id="app">
      <Header/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


body {
    max-width: 1000px;
    margin: 0 auto;
}
fieldset {
    display: flex;
}
fieldset > label {
    width: 100%;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px solid black;
    padding: 0;
    background-color: white;
}
fieldset > label > input {
    position: absolute;
    display: block;
    z-index: -10;
}
fieldset > label > span {
    display: block;
    margin: 0;
    padding: 5px 0;
    width: 100%;
    height: calc(100% - 10px);
    background-color: white;
}
fieldset > label > input:checked + span {
    background-color: black;
    color: white;
}
</style>
