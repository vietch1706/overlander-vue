<template>
  <div class="changepass-form-container">
    <el-form
      :model="dataPass"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-form-item prop="current_password">
            <template label="scope">
              <label class="overwrite-label"> Current Password </label>
            </template>
            <el-input
              v-model="dataPass.current_password"
              type="password"
              class="overwrite-form-item"
              show-password
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-form-item prop="new_password">
            <template label="scope">
              <label class="overwrite-label"> New Password </label>
            </template>
            <el-input
              v-model="dataPass.new_password"
              type="password"
              class="overwrite-form-item"
              show-password
            ></el-input>
            <template label="scope">
              <label
                class="overwrite-label-note"
                :class="{ error: form.error }"
              >
                8 - 16 characters with numbers, special character upper and
                lower case
              </label>
            </template></el-form-item
          >
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-form-item prop="password_confirmation">
            <template label="scope">
              <label class="overwrite-label"> Comfim New Password </label>
            </template>
            <el-input
              v-model="dataPass.password_confirmation"
              type="password"
              class="overwrite-form-item"
              show-password
            ></el-input>
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
