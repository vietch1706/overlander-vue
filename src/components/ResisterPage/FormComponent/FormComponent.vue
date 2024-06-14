<template>
  <div class="form-container">
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
              <label class="overwrite-label-register">
                <span class="required">*</span> First Name
              </label>
            </template>
            <el-input
              v-model="data.user.first_name"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
        <div class="col ps-2">
          <el-form-item prop="last_name">
            <template label="scope">
              <label class="overwrite-label-register"
                ><span class="required">*</span> Last Name
              </label>
            </template>
            <el-input
              v-model="data.user.last_name"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row">
        <template label="scope">
          <label class="overwrite-label-register"
            ><span class="required">*</span> Phone No
          </label>
        </template>
        <div class="col-sm-4 pt-2 phone-code-field">
          <el-form-item prop="phoneCode">
            <el-select v-model="data.phoneCode" placeholder="Select">
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
          </el-form-item>
        </div>
        <div class="col-sm-8 pt-2">
          <el-form-item prop="phoneNumber">
            <el-input
              v-model="data.phoneNumber"
              type="number"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-form-item prop="password">
            <template label="scope">
              <label class="overwrite-label-register"
                ><span class="required">*</span> Password
              </label>
            </template>
            <el-input
              v-model="data.user.password"
              type="password"
              autocomplete="off"
              class="overwrite-form-item-register"
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
              <label class="overwrite-label-register">
                <span class="required">*</span> Country/Region
              </label>
            </template>
            <el-select
              v-model="data.user.country"
              filterable
              class="overwrite-form-item-register"
              placeholder="Select Country"
            >
              <el-option
                v-for="item in data.country"
                :key="item.id"
                :label="item.id"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col sp-2">
          <el-form-item prop="email">
            <template label="scope">
              <label class="overwrite-label-register"
                ><span class="required">*</span> Email
              </label>
            </template>
            <el-input
              v-model="data.user.email"
              type="email"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row">
        <template label="scope">
          <label class="overwrite-label-register"
            >Birth Date <span class="optional">(Optional)</span></label
          >
        </template>
        <div class="col sp-2 pt-3">
          <el-form-item prop="year">
            <el-input
              v-model="data.user.year"
              type="number"
              class="overwrite-form-item-register append-slot"
              placeholder="YYYY"
              ><template slot="append">Year</template>
            </el-input>
          </el-form-item>
        </div>
        <div class="col ps-2 pt-3">
          <el-form-item prop="month">
            <el-input
              v-model="data.user.month"
              type="number"
              class="overwrite-form-item-register append-slot"
              placeholder="MM"
              ><template slot="append">Month</template></el-input
            >
          </el-form-item>
        </div>
      </div>
      <div class="row">
        <template label="scope">
          <label class="overwrite-label-register"
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
              <label class="overwrite-label-register">
                Interests <span class="optional">(Optional)</span>
              </label>
            </template>
            <el-select
              v-model="data.user.interests"
              filterable
              class="overwrite-form-item-register"
              placeholder="Select your interests"
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
            <el-checkbox v-model="checkedNews"
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
            <el-checkbox v-model="checkedPromotion"
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
      <div class="bottom-container">
        <div class="bottom-btn">
          <router-link to="/terms-and-conditions">
            Terms & Conditions</router-link
          ><router-link to="privacy-policy"> Policy Privacy </router-link
          ><router-link to="/disclaimer"> Disclaimer </router-link>
        </div>
        <p>© 2021 Overlander All Rights Reserved</p>
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
