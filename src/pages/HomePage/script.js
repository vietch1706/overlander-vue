import LogoutHomeComponent from "@/components/LogoutHomeComponent/LogoutHomeComponent.vue";
import LoginHomeComponent from "@/components/LoginHomeComponent/LoginHomeComponent.vue";
import NewsComponent from "@/components/NewsComponent/NewsComponent.vue";
import axios from "axios";
export default {
  components: {
    LogoutHomeComponent,
    LoginHomeComponent,
    NewsComponent,
  },
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${require("@/assets/HomeComponent/Group1335.png")})`,
      },
      scrolled: false,
      isHidden: false,
      upgradeMembership: "",
      isUpradeable: false,
      data: {
        banner: [],
        brand: [],
      },
      userData: {
        user: {
          first_name: "",
          last_name: "",
          phone_area_code: "",
          phone: "",
          country: "",
          email: "",
          year: "",
          month: "",
          gender: "",
          upgrade_point: "",
          membership_tier: [],
          join_date: "",
          validity_date: "",
          member_no: "",
          address: "",
          district: "",
        },
        backgroundStyleColor: {
          backgroundColor: "#ffffff",
        },
        fontStyleColor: {
          color: "#78c147",
        },
        processBar: 0,
      },
    };
  },
  methods: {
    isLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        this.isHidden = true;
        axios
          .get("/user/me", localStorage.getItem("token"))
          .then((result) => {
            this.userData.user = result.data.data;
            console.log(this.userData.user.points);
            console.log(this.userData.user.upgrade_point);
            // this.userData.processBar =
            //   (parseInt(this.userData.user.points.replace(/,/g, ""), 10) /
            //     parseInt(
            //       this.userData.user.upgrade_point.replace(/,/g, ""),
            //       10
            //     )) *
            //   parseInt(100);
            this.userData.processBar =
              (this.userData.user.points / this.userData.user.upgrade_point) *
              100;
            if (this.userData.processBar >= 100) {
              this.userData.processBar = 100;
              this.getUpgadeMembership();
            }
            this.membershipType(this.userData.user.membership_tier.slug);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    membershipType(membershipSlug) {
      switch (membershipSlug) {
        case "temporary":
          this.userData.backgroundStyleColor.backgroundColor = "#EBEC92";
          this.userData.fontStyleColor.color = "#EBEC92";
          break;
        case "ordinary":
          this.userData.backgroundStyleColor.backgroundColor = "#78c147";
          this.userData.fontStyleColor.color = "#78c147";
          break;
        case "vip":
          this.userData.backgroundStyleColor.backgroundColor = "#8fe2fc";
          this.userData.fontStyleColor.color = "#8fe2fc";
          break;
        case "gold":
          this.userData.backgroundStyleColor.backgroundColor = "#de9431";
          this.userData.fontStyleColor.colorr = "#de9431";
          break;
        case "platinum":
          this.userData.backgroundStyleColor.backgroundColor = "#3175d1";
          this.userData.fontStyleColor.color = "#3175d1";
          break;
        case "premier":
          this.userData.backgroundStyleColor.backgroundColor = "#3c4a5d";
          this.userData.fontStyleColor.color = "#3c4a5d";
          break;
      }
    },
    getBanner() {
      axios
        .get("/general/banner/get")
        .then((result) => {
          this.data.banner = result.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBrand() {
      axios
        .get("/general/brand/get")
        .then((result) => {
          this.data.brand = result.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUpgadeMembership() {
      let id = this.userData.user.membership_tier.id + 1;
      axios
        .get("/general/membership-tier/get", {
          params: {
            id: id,
          },
        })
        .then((result) => {
          this.upgradeMembership = result.data.data;
          if (this.upgradeMembership.slug !== "platinum") {
            this.isUpradeable = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // checkProfile() {
    //   if (this.userData.user.year != "") {
    //   }
    // },
    upgradeMembershipTier() {
      axios
        .post("/general/membership-tier/upgrade", {
          token: localStorage.getItem("token"),
        })
        .then((result) => {
          location.reload();
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$store.getters.getIsLogin) {
        vm.isHidden = true;
        vm.userData.user = vm.$store.getters.getUser;
        console.log(vm.$store.getters.getUser);
        vm.membershipType(vm.userData.user.membership_tier.slug);
      }
    });
  },
  async mounted() {
    await this.isLogin();
    await this.getBanner();
    await this.getBrand();
  },
};
