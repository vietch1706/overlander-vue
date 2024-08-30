<template>
  <div class="authen-form-container">
    <el-form
      :model="user"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row" :hidden="!data.state.email">
        <template label="scope">
          <label class="overwrite-label"> Email Address </label>
        </template>
        <div class="col">
          <el-form-item prop="email">
            <el-input
              v-model="user.email"
              class="overwrite-form-item"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row" :hidden="!data.state.phone">
        <template label="scope">
          <label class="overwrite-label"> Phone No. </label>
        </template>
        <div class="col-sm-4 pt-2">
          <el-form-item prop="phone_area_code">
            <el-select
              v-model="user.phone_area_code"
              placeholder="Select"
              class="overwrite-form-item"
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
          </el-form-item>
        </div>
        <div class="col-sm-8 pt-2">
          <el-form-item prop="phone">
            <el-input
              v-model="user.phone"
              type="number"
              class="overwrite-form-item"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row" :hidden="!data.state.member">
        <template label="scope">
          <label class="overwrite-label"> Member No. </label>
        </template>
        <div class="col">
          <el-form-item prop="member">
            <el-input
              v-model="user.member"
              class="overwrite-form-item"
              type="number"
            ></el-input>
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
          <router-link class="change-method" :to="{ name: 'existsMemberPage' }">
            Change verify method
          </router-link>
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
