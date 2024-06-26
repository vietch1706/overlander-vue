<template>
  <div class="login-form-container">
    <el-form
      :model="data.user"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row">
        <div class="col-sm-4 pt-2">
          <template label="scope">
            <label class="overwrite-label-login"> Email Address </label>
          </template>
        </div>
        <div class="col-sm-8 pt-2">
          <template label="scope">
            <div class="overwrite-label-login-change">
              <a @click="changeLoginMethod">Login with member no.</a>
            </div>
          </template>
        </div>
        <el-form-item prop="email">
          <el-input
            v-model="data.user.email"
            type="text"
            class="overwrite-form-item-login"
            required
          ></el-input>
        </el-form-item>
      </div>
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-form-item prop="password">
            <template label="scope">
              <label class="overwrite-label-login"> Password </label>
            </template>
            <el-input
              v-model="data.user.password"
              type="password"
              autocomplete="off"
              class="overwrite-form-item-login"
              show-password
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1 pt-4">
        <div class="col sp-2">
          <el-button type="button" @click="submitForm('ruleForm')"
            >Login</el-button
          >
          <template label="scope">
            <label class="overwrite-label-note">
              <router-link to="/reset-password">Forgot Password?</router-link>
            </label>
          </template>
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
