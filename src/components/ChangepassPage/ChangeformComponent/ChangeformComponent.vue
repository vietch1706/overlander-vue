<template>
  <div class="changepass-form-container">
    <el-form
      :model="data.user"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-form-item prop="new-password">
            <template label="scope">
              <label class="overwrite-label-changepass">New Password </label>
            </template>
            <el-input
              v-model="data.user.new_password"
              type="password"
              autocomplete="off"
              class="overwrite-form-item-changepass"
              show-password
            ></el-input>
            <template label="scope">
              <label class="overwrite-label-note">
                8 - 16 characters with numbers, upper and lower case
              </label>
            </template>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-form-item prop="confirm-password">
            <template label="scope">
              <label class="overwrite-label-changepass"
                >Confirm Password
              </label>
            </template>
            <el-input
              v-model="data.user.confirm_password"
              type="password"
              autocomplete="off"
              class="overwrite-form-item-changepass"
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
          <el-button type="button" @click="submitForm('ruleForm')"
            >Change Password</el-button
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
