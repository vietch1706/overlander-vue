<template>
  <div class="form-container">
    <el-form
      :model="data.user"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      label-position="top"
      class="demo-ruleForm"
    >
      <div class="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
        <div class="col sp-2">
          <el-form-item prop="firstName">
            <template label="scope">
              <label class="overwrite-label-register">
                <span class="required">*</span> First Name
              </label>
            </template>
            <el-input
              v-model="data.user.firstName"
              class="overwrite-form-item-register"
            ></el-input>
          </el-form-item>
        </div>
        <div class="col ps-2">
          <el-form-item prop="lastName">
            <template label="scope">
              <label class="overwrite-label-register"
                ><span class="required">*</span> Last Name
              </label>
            </template>
            <el-input
              v-model="data.user.lastName"
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
            <el-select v-model="data.user.phoneCode" placeholder="Select">
              <el-option
                v-for="item in data.country"
                :key="item.id"
                :label="item.id"
                :value="item.phonecode"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="col-sm-8 pt-2">
          <el-form-item prop="phoneNumber">
            <el-input
              v-model="data.user.phoneNumber"
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
          <el-form-item prop="region">
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
              v-model="gender"
              label="male"
              border
              class="overwrite-radio-item w-100"
              >Male</el-radio
            >
          </el-form-item>
        </div>
        <div class="col ps-2 pt-3">
          <el-form-item prop="gender">
            <el-radio
              v-model="gender"
              label="female"
              border
              class="overwrite-radio-item w-100"
              >Female</el-radio
            >
          </el-form-item>
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col">
          <el-form-item prop="interest">
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
              ></el-option>
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
          <el-button>Create Account</el-button>
          <template label="scope">
            <label class="overwrite-label-note">
              By create account, you agree to our
              <a :href="url">Terms & Conditions</a>
            </label>
          </template>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      checkedNews: false,
      checkedPromotion: false,
      gender: "",
      url: "http://anywhere.com",
      data: {
        country: [],
        user: {
          firstName: "",
          lastName: "",
          phoneCode: null,
          phoneNumber: "",
          password: "",
          country: null,
          email: "",
          year: "",
          month: "",
          gender: "",
          interests: null,
        },
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "Please input first name",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Too short first name",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Please input last name",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Too short last name",
            trigger: "blur",
          },
        ],
        year: [
          {
            min: 4,
            message: "Too short year",
            trigger: "blur",
          },
          {
            max: 4,
            message: "Too long year",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getAllPhoneCodes() {
      axios
        .get("general/phonecode/get")
        .then((result) => {
          this.data.country = result.data;
          for (let keys in result.data) {
            this.data.country[keys]["phonecode"] =
              "+ " + result.data[keys]["phonecode"];
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async mounted() {
    this.getAllPhoneCodes();
  },
};
</script>

<style lang="scss">
@import "./FromComponent.scss";
</style>
