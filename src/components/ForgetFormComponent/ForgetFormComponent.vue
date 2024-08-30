<template>
  <div class="forget-form-container">
    <el-form
      :model="data.user"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row row-cols-1" :hidden="data.form.isHidden">
        <div class="col sp-2">
          <el-form-item prop="user">
            <template label="scope">
              <label class="overwrite-label">Email </label>
            </template>
            <el-input
              v-model="data.user.user"
              autocomplete="off"
              class="overwrite-form-item"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1" :hidden="!data.form.isHidden">
        <div class="col sp-2">
          <el-form-item prop="password">
            <template label="scope">
              <label class="overwrite-label">New Password </label>
            </template>
            <el-input
              v-model="data.user.password"
              type="password"
              autocomplete="off"
              class="overwrite-form-item"
              show-password
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1" :hidden="!data.form.isHidden">
        <div class="col sp-2">
          <el-form-item prop="password-confirmation">
            <template label="scope">
              <label class="overwrite-label">Confirm Password </label>
            </template>
            <el-input
              v-model="data.user.password_confirmation"
              type="password"
              autocomplete="off"
              class="overwrite-form-item"
              show-password
            ></el-input
            ><span class="error-message" v-if="error">{{
              data.error_message
            }}</span>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1 pt-4">
        <div class="col sp-2">
          <el-button type="button" @click="submitForm('ruleForm')">{{
            data.form.btn_name
          }}</el-button>
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
