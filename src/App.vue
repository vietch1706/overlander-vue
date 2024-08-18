<template>
  <div id="app">
    <header-page />
    <main class="main-component">
      <router-view></router-view>
    </main>
    <footer-page />
  </div>
</template>

<script>
import HeaderPage from "@/pages/HeaderPage/HeaderPage.vue";
import FooterPage from "@/pages/FooterPage/FooterPage.vue";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
  name: "app",
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
