<template>
  <div class="questions-form-container">
    <el-form
      :model="data.user"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
    >
      <div class="row">
        <div class="row row-cols-1">
          <div class="col">
            <el-form-item prop="country">
              <template label="scope">
                <label class="overwrite-label"> Verification Question </label>
              </template>
              <el-select
                v-model="data.user.question2"
                filterable
                class="overwrite-form-item"
                placeholder="Select your question"
                @change="showAnswerField()"
              >
                <el-option
                  v-for="item in data.question"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="row" :hidden="data.phoneField">
        <template label="scope">
          <label class="overwrite-label"> {{ answerTitle }} </label>
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
      <div class="row row-cols-1" :hidden="data.textField">
        <div class="col sp-2">
          <el-form-item prop="password">
            <template label="scope">
              <label class="overwrite-label"> {{ answerTitle }} </label>
            </template>
            <el-input
              v-model="data.user.answer2"
              class="overwrite-form-item"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="row" :hidden="data.datePicker">
        <template label="scope">
          <label class="overwrite-label">{{ answerTitle }}</label>
        </template>
        <div class="col sp-2 pt-3">
          <el-form-item prop="year">
            <div class="inside-text">
              <strong>Year</strong>
            </div>
            <el-date-picker
              v-model="user.year"
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
              v-model="user.month"
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
