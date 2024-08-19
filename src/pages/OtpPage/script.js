import axios from "axios";
import SideComponent from "@/components/SideComponent/SideComponent.vue";
export default {
  components: {
    SideComponent,
  },
  data() {
    return {
      available: true,
      loading: false,
      started: null,
      previousPage: "",
      data: {
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/UpdateComponent/side-image.png")})`,
        },
        users: {
          user: "",
          code: "",
        },
        isHidden: "",
        hideAll: true,
        timerCount: 60,
      },
      timeout: null,
    };
  },
  methods: {
    submitUser() {
      this.nextPage();
      // axios
      //   .post("/user/verify-code", this.data.users)
      //   .then((result) => {
      //     console.log("success");
      //     this.$notify({
      //       title: "Success",
      //       message: result.data.data.message,
      //       type: "success",
      //     });
      //     this.nextPage();
      //   })
      //   .catch((error) => {
      //     console.log("error!");
      //     this.$notify.error({
      //       title: "Error",
      //       message: error.response.data.message,
      //     });
      //     console.log(error);
      //   });
    },
    countdown() {
      if (this.started) {
        if (this.data.timerCount != 0) {
          this.timeout = setTimeout(() => {
            this.data.timerCount -= 1;
            this.countdown();
          }, 1000);
        } else {
          this.started = false;
          this.available = !this.available;
          clearTimeout(this.data.timerCount);
        }
      }
    },
    nextPage() {
      console.log(this.previousPage);
      switch (this.previousPage) {
        case "registerPage":
          this.$store.dispatch("success", {
            title: "Account Created",
            welcome: "Welcome abroad!" + this.$store.getters.getUser.first_name,
            message: "Hope you enjoy your experience in Overlander!",
            button: "Go to Homepage",
          });
          this.$router.push({ name: "successPage" });
          break;
        case "authenOnePage":
          console.log("hehe");
          this.$router.push({ name: "authenTwoPage" });
          break;
        case "authenTwoPage":
          this.$router.push({ name: "updatePage" });
          break;
        case "updatePage":
          this.$store.dispatch("success", {
            title: "Account Updated",
            welcome: "Welcome abroad!" + this.$store.getters.getUser.first_name,
            message: "Hope you enjoy your experience in Overlander!",
            button: "Go to Homepage",
          });
          this.$router.push({ name: "successPage" });
          break;
        case "forgotPage":
          this.$router.push({
            name: "forgotPage",
            params: {
              name: "reset-password",
            },
          });
          break;
        default:
          break;
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    switch (from.name) {
      case "registerPage":
        next((vm) => {
          vm.previousPage = from.name;
          vm.data.users.user = vm.$store.getters.getUser.email;
        });
        break;
      case "authenOnePage":
        next((vm) => {
          vm.previousPage = from.name;
          vm.data.users.user = vm.$store.getters.getExistsUser.answer1;
        });
        break;
      case "authenTwoPage":
        next((vm) => {
          vm.previousPage = from.name;
          vm.data.users.user = vm.$store.getters.getExistsUser.answer2;
        });
        break;
      case "forgotPage":
        next((vm) => {
          vm.previousPage = from.name;
          vm.data.users.user = vm.$store.getters.getUser.user;
          console.log(vm.data.users.user);
        });
        break;
      default:
        return false;
    }
    next();
  },
  async mounted() {
    this.countdown();
  },
};
