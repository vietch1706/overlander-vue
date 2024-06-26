<template>
  <div class="reset-form-container">
    <el-form
      :model="data.user"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row">
        <template label="scope">
          <label class="overwrite-label-password">Email Address </label>
        </template>
        <div class="col">
          <el-form-item prop="password">
            <el-input
              v-model="data.user.email"
              type="email"
              class="overwrite-form-item-password"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1 pt-4">
        <div class="col sp-2">
          <el-button type="button" @click="submitForm('ruleForm')"
            >Verify Email</el-button
          >
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import Script from "./script.js";
export default Script;
</script>

<style lang="scss" scoped>
@import "./style.css";
</style>
