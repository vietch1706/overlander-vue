<template>
  <div class="question-container">
    <div class="text-field">
      <div class="top-text">
        <div class="transfer-field">
          <p>2-step Authentication (2/2)</p>
        </div>
        <div class="top-img">
          <img src="@/assets/ExistmemberComponent/image 23 (1).png" alt="" />
        </div>
      </div>
      <div class="note-text">
        <p>Answer below question to verifying the account</p>
      </div>
    </div>
    <div class="question-form-container">
      <el-form
        :model="data.user"
        ref="ruleForm"
        label-width="120px"
        label-position="top"
      >
        <div class="row row-cols-1">
          <div class="col">
            <el-form-item prop="questions">
              <template label="scope">
                <label class="overwrite-label-question">
                  Verification Question
                </label>
              </template>
              <el-select
                v-model="data.user.question"
                class="overwrite-form-item-question"
                placeholder="Select your verification question"
                :change="checkQuestions()"
              >
                <el-option
                  v-for="value in data.questions"
                  :key="value.id"
                  :value="value"
                  :label="value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="row" v-if="questions.birthdate">
          <template label="scope">
            <label class="overwrite-label-question">Birth Year and Month</label>
          </template>
          <div class="col sp-2 pt-3">
            <el-form-item prop="year">
              <div class="inside-text">
                <strong>Year</strong>
              </div>
              <el-date-picker
                v-model="data.date.birth_year"
                type="year"
                format="yyyy"
                value-format="yyyy"
                placeholder="YYYY"
                class="overwrite-form-item-question date-picker"
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
                v-model="data.date.birth_month"
                type="month"
                format="MM"
                value-format="M"
                placeholder="MM"
                class="overwrite-form-item-question date-picker"
              >
              </el-date-picker>
            </el-form-item>
          </div>
        </div>
        <div class="row" v-if="questions.membership">
          <template label="scope">
            <label class="overwrite-label-question"
              >Membership Joint Date</label
            >
          </template>
          <div class="col sp-2 pt-3">
            <el-form-item prop="year">
              <div class="inside-text">
                <strong>Year</strong>
              </div>
              <el-date-picker
                v-model="data.date.joint_year"
                type="year"
                format="yyyy"
                value-format="yyyy"
                placeholder="YYYY"
                class="overwrite-form-item-question date-picker"
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
                v-model="data.date.joint_month"
                type="month"
                format="MM"
                value-format="M"
                placeholder="MM"
                class="overwrite-form-item-question date-picker"
              >
              </el-date-picker>
            </el-form-item>
          </div>
        </div>
        <div class="row" v-if="questions.purchase">
          <template label="scope">
            <label class="overwrite-label-question">Last Purchase Date</label>
          </template>
          <div class="col sp-2 pt-3">
            <el-form-item prop="year">
              <div class="inside-text">
                <strong>Year</strong>
              </div>
              <el-date-picker
                v-model="data.date.purchase_year"
                type="year"
                format="yyyy"
                value-format="yyyy"
                placeholder="YYYY"
                class="overwrite-form-item-question date-picker"
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
                v-model="data.date.purchase_month"
                type="month"
                format="MM"
                value-format="M"
                placeholder="MM"
                class="overwrite-form-item-question date-picker"
              >
              </el-date-picker>
            </el-form-item>
          </div>
        </div>
        <div class="row row-cols-1" v-if="questions.email">
          <div class="col sp-2">
            <el-form-item prop="email">
              <template label="scope">
                <label class="overwrite-label-question"> Email Address </label>
              </template>
              <el-input
                v-model="data.user.email"
                type="email"
                class="overwrite-form-item-question"
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
