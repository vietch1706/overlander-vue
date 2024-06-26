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
          <label class="overwrite-label-password"
            ><span class="required">*</span> Phone No
          </label>
        </template>
        <div class="col-sm-4 pt-2">
          <el-form-item prop="phoneCode">
            <el-select
              v-model="data.phoneCode"
              placeholder="Select"
              class="overwrite-form-item-password"
            >
              <el-option
                v-for="item in data.country"
                :key="item.id"
                :label="item.id"
                :value="item.phonecode"
              >
                <span :class="item.flags" style=""> </span>
                <span> {{ item.phonecode }}</span>
              </el-option>
            </el-select>
            <template label="scope">
              <span class="error-message" v-if="error">{{
                error_message
              }}</span>
            </template>
          </el-form-item>
        </div>
        <div class="col-sm-8 pt-2">
          <el-form-item prop="phoneNumber">
            <el-input
              v-model="data.phoneNumber"
              type="number"
              class="overwrite-form-item-password"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1 pt-4">
        <div class="col sp-2">
          <el-button type="button" @click="submitForm('ruleForm')"
            >Verify Phone No.</el-button
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
