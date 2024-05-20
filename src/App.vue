<template>
  <div id="app">
    <register-page></register-page>
  </div>
</template>

<script>
import RegisterPage from "./components/ResisterPage/RegisterPage.vue";
export default {
  name: "app",
  components: {
    RegisterPage,
  },
};
</script>

<style lang="scss">
* {
  font-family: "Kanit";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
ol,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: none;
  background-color: transparent;
  outline: none;
}

input {
  border: none;
  outline: none;
}
</style>
