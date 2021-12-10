<template>
  <div class='main'>
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  components: { Menu },
  setup () {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

a {
  font-size: 1em;
  font-family: 'Inder', sans-serif;
  line-height: 1.5em;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:active {
  text-decoration: underline;
}

.main {
}

@media screen and (max-width: 600px) {
  .main {
  }
}
</style>
