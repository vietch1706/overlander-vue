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
            <el-select v-model="data.user.phoneCode" placeholder="Code">
              <el-option
                v-for="value in data.phoneCode"
                :key="value.id"
                :value="value.id"
                :label="value.iso3"
              />
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
              v-model="data.user.region"
              filterable
              class="overwrite-form-item-register"
            >
              <el-option
                v-for="value in data.country"
                :key="value.id"
                :value="value.id"
                :label="value.name"
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
          <el-form-item prop="year">
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
          <el-form-item prop="month">
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
            <el-checkbox v-model="checked"
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
            <el-checkbox v-model="checked"
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
      checked: true,
      gender: "",
      url: "http://anywhere.com",
      data: {
        user: {
          firstName: "",
          lastName: "",
          phoneCode: "",
          phoneNumber: "",
          password: "",
          country: "",
          email: "",
          year: "",
          month: "",
          gender: "",
          interests: "",
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
          this.data.user.phoneCode = result.data;
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-container {
  .el-form-item__content {
    line-height: unset;
  }
  padding: 0 3.5rem;
  .overwrite-label-register {
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #3c4a5d;
    .optional {
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      color: #6d7786;
    }
    .required {
      display: inline-block;
      color: #e22b30;
      font-size: 20px;
    }
  }
  .append-slot {
    .el-input__inner {
      border-right: none;
    }
  }

  .phone-code-field {
    .el-input__inner {
      background: #e7e9eb;
      border-color: #ced2d7;
      color: #0b1d35;
    }
  }

  .overwrite-label-note {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #6d7786;
    a {
      color: #6d7786;
      font-weight: 400;
      text-decoration: underline solid #6d7786 1.5px;
    }
  }
  .overwrite-form-item-register {
    width: 100%;
    .el-input__inner,
    .el-textarea__inner {
      padding: 0.5rem 0.75rem;
      background: #e7e9eb;
      gap: 12px;
      align-self: stretch;
      border-color: #ced2d7;
    }
    .el-input-group__append {
      border-left: none;
      gap: 12px;
      background: #e7e9eb;
      border-color: #ced2d7;
      font-weight: 600;
      font-size: 18px;
      line-height: 18px;
      color: #3c4a5d;
    }
  }
  .overwrite-radio-item {
    background: #e7e9eb;
    border-color: #ced2d7;
    color: #0b1d35;
  }

  .check-box {
    .el-checkbox {
      .el-checkbox__label {
        color: #3c4a5d;
        font-size: 16px;
      }
      .el-checkbox__inner {
        width: 24px;
        height: 24px;
        border-color: #ced2d7;
        transition: none;
      }
      .is-checked {
        .el-checkbox__inner {
          background-color: #78c147;
        }
        .el-checkbox__inner::after {
          border-bottom: 4px solid #fff;
          border-right: 4px solid #fff;
          transform: rotate(45deg);
          font-size: 16px;
          width: 5px;
          height: 10px;
          left: 7px;
          bottom: 5px;
        }
      }
    }
  }
  .el-button {
    background: #a1d47e;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }
}
</style>
