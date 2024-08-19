import SideComponent from "@/components/SideComponent/SideComponent.vue";
export default {
  components: { SideComponent },
  data() {
    return {
      data: {
        success: {
          title: "",
          welcome: "",
          message: "",
          button: "",
        },
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/SuccessComponent/side-image.png")})`,
        },
        isHidden: "",
        hideAll: true,
      },
    };
  },
  methods: {
    getDataUser() {
      this.data.success = this.$store.getters.getSuccess;
    },
    changePage() {
      if (this.data.success.button === "Go to Login") {
        this.$router.push({ name: "loginPage" });
      } else if (this.data.success.button === "Go to Homepage") {
        this.$router.push({ name: "homePage" });
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    switch (from.name) {
      case "otpPage":
      case "updatePage":
      case "forgotPage":
        next();
    }
  },
  async mounted() {
    this.getDataUser();
  },
};
