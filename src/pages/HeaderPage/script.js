import axios from "axios";

export default {
  data() {
    return {
      isHidden: false,
      scrolled: false,
    };
  },
  methods: {
    logOut() {
      this.isHidden = false;
      axios
        .get("user/logout", localStorage.getItem("token"))
        .then((result) => {
          console.log(result);
          this.$store.dispatch("isLogin", false);
          localStorage.removeItem("token");
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    isLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        this.isHidden = true;
      }
      axios
        .get("/user/me", token)
        .then((result) => {
          this.$store.dispatch("isLogin", true);
          this.$store.dispatch("user", result.data.data.user);
        })
        .catch((error) => {
          if (error.response.status == 401) {
            localStorage.removeItem("token");
          }
        });
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  watch: {
    $route() {
      if (this.$store.getters.getIsLogin) {
        this.isHidden = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  async mounted() {
    await this.isLogin();
  },
};
