<template>
  <div class="content-container">
    <h1>{{ data.title }}</h1>
    <div v-html="data.contents"></div>
  </div>
</template>

<script>
import Script from "./script.js";
export default Script;
</script>

<style>
@import "./style.css";
</style>
