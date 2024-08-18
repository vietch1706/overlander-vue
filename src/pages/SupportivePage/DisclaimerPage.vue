<template>
  <div class="supportive-container">
    <el-breadcrumb separator-class="el-icon-right">
      <el-breadcrumb-item to="/">
        <span class="el-icon-s-home overwrite-home-span">
          Home</span
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item
        ><span class="overwrite-current-span"
          >Disclaimer</span
        ></el-breadcrumb-item
      >
    </el-breadcrumb>
    <h1>{{ data.title }}</h1>
    <div v-html="data.contents"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getSupportivePage() {
      axios
        .get("general/supportive/get")
        .then((result) => {
          result.data.data.forEach((element) => {
            if (element.slug == "disclaimer") {
              this.data = element;
            }
          });
          console.log(this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getSupportivePage();
  },
};
</script>

<style lang="scss" scoped>
.supportive-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 130px;
  color: #0b1d35;
  background-color: #f2f2f2;
  background-image: url(@/assets/Frame2823.png);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
  .el-breadcrumb {
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        .overwrite-home-span {
          font-size: 16px;
          font-weight: 600;
          color: #6d7786;
        }
        .overwrite-home-span:hover {
          color: #4b9916;
        }
        .overwrite-current-span {
          font-size: 16px;
          font-weight: 600;
          color: #4b9916;
          cursor: context-menu;
        }
      }
    }
  }
}
</style>
