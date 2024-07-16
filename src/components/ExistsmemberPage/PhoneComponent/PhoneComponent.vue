<template>
  <div class="phone-container">
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
        <p>Please verify your identity with phone no.</p>
      </div>
    </div>
    <div class="phone-form-container">
      <el-form
        :model="data.user"
        ref="ruleForm"
        label-width="120px"
        label-position="top"
      >
        <div class="row">
          <template label="scope">
            <label class="overwrite-label-phone"
              ><span class="required">*</span> Phone No
            </label>
          </template>
          <div class="col-sm-4 pt-2">
            <el-form-item prop="phoneCode">
              <el-select
                v-model="data.phoneCode"
                placeholder="Select"
                class="overwrite-form-item-phone"
              >
                <el-option
                  v-for="item in data.country"
                  :key="item.id"
                  :label="item.id"
                  :value="item.code"
                >
                  <span :class="item.image"> </span>
                  <span>{{ " " + item.country }} </span>
                  <span style="float: right">{{ item.code }}</span>
                </el-option>
              </el-select>
              <template label="scope">
                <span class="error-message" v-if="error">{{
                  error_message.phone
                }}</span>
              </template>
            </el-form-item>
          </div>
          <div class="col-sm-8 pt-2">
            <el-form-item prop="phoneNumber">
              <el-input
                v-model="data.phoneNumber"
                type="number"
                class="overwrite-form-item-phone"
              ></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-button type="button" @click="submitForm('ruleForm')"
            >Verify Phone No.</el-button
          >
        </div>
        <div class="col sp-2">
          <p class="change-method" @click="pushToButtonComponent()">
            Change verify method
          </p>
        </div>
      </div>
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
