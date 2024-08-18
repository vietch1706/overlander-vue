<template>
  <div class="supportive-container">
    <el-breadcrumb separator-class="el-icon-right">
      <el-breadcrumb-item to="/">
        <span class="el-icon-s-home overwrite-home-span">
          Home</span
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item
        ><span class="overwrite-current-span">{{
          current
        }}</span></el-breadcrumb-item
      >
    </el-breadcrumb>
    <supportive-component />
  </div>
</template>

<script>
import axios from "axios";
import SupportiveComponent from "@/components/SupportiveComponent/SupportiveComponent.vue";
export default {
  components: {
    SupportiveComponent,
  },
  data() {
    return {
      data: [],
      current: "",
    };
  },
  methods: {
    getSupportivePage() {
      axios
        .get("general/supportive/get")
        .then((result) => {
          result.data.data.forEach((element) => {
            switch (this.$route.params.name) {
              case "disclaimer":
                this.data = element;
                break;
              case "terms-and-condition":
                this.data = element;
                break;
              case "policy-privacy":
                this.data = element;
                break;

              default:
                break;
            }
            // if (element.slug == "disclaimer") {
            //   this.data = element;
            // }
          });
          console.log(this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    next((vm) => {
      switch (to.params.name) {
        case "disclaimer":
          vm.current = "Disclaimer";
          break;
        case "terms-and-condition":
          vm.current = "Terms & Conditions";
          break;
        case "policy-privacy":
          vm.current = "Policy Privacy";
          break;
        default:
          break;
      }
    });
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
