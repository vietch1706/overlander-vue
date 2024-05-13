<template>
  <div id="app">
    <div class="register-container">
      <div class="register-item left">
        <div class="register-img">
          <img src="./assets/RegisterComponent/side-image.png" alt="" />
        </div>
      </div>
      <div class="register-item right">
        <div class="text-field">
          <div class="top-text">
            <div class="create-field">
              <p><span>Crea</span>te a New Account</p>
            </div>
            <div class="top-img">
              <img src="./assets/RegisterComponent/image 23.png" alt="" />
            </div>
          </div>
          <div class="login-field">
            <p>
              New an account or
              <span>Login</span>
            </p>
          </div>
        </div>
        <div class="form-container">
          <el-form
            :model="ruleForm"
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
                    <label class="overwrite-label-register"> First Name </label>
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
                    <label class="overwrite-label-register"> Last Name </label>
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
                <label class="overwrite-label-register"> Phone No </label>
              </template>
              <div class="col-sm-4 pt-2">
                <el-form-item prop="phoneCode">
                  <el-select
                    v-model="data.user.phoneCode"
                    placeholder="Activity zone"
                  >
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
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
                    <label class="overwrite-label-register"> Password </label>
                  </template>
                  <el-input
                    v-model="data.user.password"
                    type="password"
                    autocomplete="off"
                    class="overwrite-form-item-register"
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
                      Country/Region
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
                    <label class="overwrite-label-register"> Email </label>
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
                    v-model="male"
                    label="1"
                    border
                    class="overwrite-radio-item w-100"
                    >Male</el-radio
                  >
                </el-form-item>
              </div>
              <div class="col ps-2 pt-3">
                <el-form-item prop="month">
                  <el-radio
                    v-model="female"
                    label="1"
                    border
                    class="overwrite-radio-item w-100"
                    >Female</el-radio
                  >
                </el-form-item>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);
export default {
  name: "app",
  data() {
    return {
      data: {
        user: {
          firstName: "",
          lastName: "",
          phoneCode: "",
          phoneNumber: "",
          password: "",
          region: "",
          email: "",
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
};
</script>

<style lang="scss">
* {
  font-family: "Kanit";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
ol,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: none;
  background-color: transparent;
  outline: none;
}

input {
  border: none;
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.register-container {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  .left {
    flex-basis: 40%;
  }
  .right {
    flex-basis: 60%;
    padding-top: 80px;
  }
  .register-item {
    align-self: flex-start;
    .register-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .text-field {
      .top-text {
        display: flex;
        padding: 0 3.5rem;
        .create-field {
          color: #0b1d35;
          font-weight: 800;
          font-size: 36px;
          span {
            text-decoration: underline solid #78c147 5px;
            text-underline-offset: 20px;
          }
        }
        .top-img {
          align-self: center;
          padding: 0 0 1rem 1rem;
          width: 20%;
          img {
            width: 25%;
          }
        }
      }
      .login-field {
        padding: 0 3.5rem;
        font-weight: 400;
        font-size: 16px;
        span {
          color: #78c147;
          font-weight: 600;
          text-decoration: underline solid #78c147 2px;
        }
      }
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
      }

      .append-slot {
        .el-input__inner {
          border-right: none;
        }
      }
      .overwrite-label-note {
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #6d7786;
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
        .el-radio,
        .el-radio__input {
          padding: 0.5rem 0.75rem;
          background: #e7e9eb;
          gap: 12px;
          align-self: stretch;
          border-color: #ced2d7;
          color: white;
        }
      }
      .overwrite-radio-item {
        padding: 0.5rem 0.75rem;
        background-color: #e7e9eb;
        gap: 12px;
        align-self: stretch;
        border-color: #ced2d7;
        color: white;
      }
    }
  }
}
</style>
