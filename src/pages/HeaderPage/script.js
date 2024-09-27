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
    },
    isLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        this.isHidden = true;
      }
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
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
