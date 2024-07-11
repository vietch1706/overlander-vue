<template>
  <div class="member-container">
    <div class="text-field">
      <div class="top-text">
        <div class="transfer-field">
          <p>2-step Authentication (1/2)</p>
        </div>
        <div class="top-img">
          <img src="@/assets/ExistmemberComponent/image 23 (1).png" alt="" />
        </div>
      </div>
      <div class="note-text">
        <p>Please verify your identity with member no.</p>
      </div>
    </div>
    <div class="member-form-container">
      <el-form
        :model="data.user"
        ref="ruleForm"
        label-width="120px"
        label-position="top"
      >
        <div class="row">
          <template label="scope">
            <label class="overwrite-label-member"
              ><span class="required">*</span> Member No.
            </label>
          </template>
          <div class="col">
            <el-form-item prop="member">
              <el-input
                v-model="data.user.method"
                type="number"
                class="overwrite-form-item-member"
              ></el-input
              ><template label="scope">
                <span class="error-message" v-if="error">{{
                  error_message.member_no
                }}</span>
              </template>
            </el-form-item>
          </div>
        </div>
        <div class="row row-cols-1">
          <div class="col sp-2">
            <el-button type="button" @click="submitForm('ruleForm')"
              >Verify Account</el-button
            >
          </div>
          <div class="col sp-2">
            <p class="change-method" @click="pushToButtonComponent()">
              Change verify method
            </p>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import Script from "./script.js";
export default Script;
</script>
<style lang="scss" scoped>
@import "./style.css";
</style>
