<template>
  <div class="full-form-container">
    <el-form
      :model="data.user"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
        <div class="col sp-2">
          <el-form-item prop="first_name">
            <template label="scope">
              <label class="overwrite-label"> First Name </label>
            </template>
            <el-input
              v-model="data.user.first_name"
              class="overwrite-form-item"
            ></el-input>
          </el-form-item>
        </div>
        <div class="col ps-2">
          <el-form-item prop="last_name">
            <template label="scope">
              <label class="overwrite-label"> Last Name </label>
            </template>
            <el-input
              v-model="data.user.last_name"
              class="overwrite-form-item"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row">
        <template label="scope">
          <label class="overwrite-label"> Phone No </label>
        </template>
        <div class="col-sm-4 pt-2">
          <el-form-item prop="phone_area_code">
            <el-select
              v-model="data.user.phone_area_code"
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
            <template label="scope">
              <span class="error-message" v-if="data.error">{{
                data.error_message.phone
              }}</span>
            </template>
          </el-form-item>
        </div>
        <div class="col-sm-8 pt-2">
          <el-form-item prop="phone">
            <el-input
              v-model="data.user.phone"
              type="number"
              class="overwrite-form-item"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1 disabled">
        <div class="col sp-2">
          <el-form-item prop="password">
            <template label="scope">
              <label class="overwrite-label"> Password </label>
            </template>
            <el-input
              v-model="data.user.password"
              type="password"
              autocomplete="off"
              class="overwrite-form-item"
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
        <div class="col">
          <el-form-item prop="country">
            <template label="scope">
              <label class="overwrite-label"> Country/Region </label>
            </template>
            <el-select
              v-model="data.user.country"
              filterable
              class="overwrite-form-item"
              placeholder="Select Country"
            >
              <el-option
                v-for="item in data.country"
                :key="item.id"
                :label="item.id"
                :value="item.country"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1" :hidden="data.form.email.isHidden">
        <div class="col sp-2">
          <el-form-item prop="email">
            <template label="scope">
              <label class="overwrite-label"> Email </label>
            </template>
            <el-input
              v-model="data.user.email"
              type="email"
              class="overwrite-form-item"
              placeholder="email@example.com"
            ></el-input
            ><template label="scope">
              <span class="error-message" v-if="data.error">{{
                data.error_message.email
              }}</span>
            </template>
          </el-form-item>
        </div>
      </div>
      <div class="row">
        <template label="scope">
          <label class="overwrite-label"
            >Birth Date <span class="optional">(Optional)</span></label
          >
        </template>
        <div class="col sp-2 pt-3">
          <el-form-item prop="year">
            <div class="inside-text">
              <strong>Year</strong>
            </div>
            <el-date-picker
              v-model="data.user.year"
              type="year"
              format="yyyy"
              value-format="yyyy"
              placeholder="YYYY"
              class="overwrite-form-item date-picker"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="col ps-2 pt-3">
          <el-form-item prop="month">
            <div class="inside-text">
              <strong>Month</strong>
            </div>
            <el-date-picker
              v-model="data.user.month"
              type="month"
              format="MM"
              value-format="M"
              placeholder="MM"
              class="overwrite-form-item date-picker"
            >
            </el-date-picker>
          </el-form-item>
        </div>
      </div>
      <div class="row">
        <template label="scope">
          <label class="overwrite-label"
            >Gender <span class="optional">(Optional)</span></label
          >
        </template>
        <div class="col sp-2 pt-3">
          <el-form-item prop="gender">
            <el-radio
              v-model="data.user.gender"
              label="0"
              border
              class="overwrite-radio-item w-100"
              >Male</el-radio
            >
          </el-form-item>
        </div>
        <div class="col ps-2 pt-3">
          <el-form-item prop="gender">
            <el-radio
              v-model="data.user.gender"
              label="1"
              border
              class="overwrite-radio-item w-100"
              >Female</el-radio
            >
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col">
          <el-form-item prop="interests">
            <template label="scope">
              <label class="overwrite-label">
                Interests <span class="optional">(Optional)</span>
              </label>
            </template>
            <el-select
              v-model="data.user.interests"
              filterable
              class="overwrite-form-item"
              placeholder="Select your interests"
              multiple
              :multiple-limit="3"
              default-first-option
              placement="bottom-start"
            >
              <el-option
                v-for="value in data.interests"
                :key="value.id"
                :value="value.id"
                :label="value.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1 pt-3">
        <div class="col sp-2 check-box">
          <template>
            <!-- `checked` should be true or false -->
            <el-checkbox v-model="data.user.e_newsletter"
              >I would like to receive email about news and
              promotion</el-checkbox
            >
          </template>
        </div>
      </div>
      <div class="row row-cols-1 pt-3">
        <div class="col sp-2 check-box">
          <template>
            <!-- `checked` should be true or false -->
            <el-checkbox v-model="data.user.mail_receive"
              >I would like to receive promotion booklet</el-checkbox
            >
          </template>
        </div>
      </div>
      <div class="row row-cols-1 pt-4">
        <div class="col sp-2">
          <el-button type="button" @click="submitForm('ruleForm')"
            >Create Account</el-button
          >

          <template label="scope">
            <label class="overwrite-label-note">
              By create account, you agree to our<router-link
                to="/terms-and-conditions"
              >
                Terms & Conditions</router-link
              >
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
