import axios from "axios";
import EmptyComponent from "@/components/EmptyTracsactionComponent/EmptyTransactionComponent.vue";
import PointHistoryComponent from "@/components/PointHistoryComponent/PointHistoryComponent.vue";
export default {
  components: {
    EmptyComponent,
    PointHistoryComponent,
  },
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${require("@/assets/Frame2823.png")})`,
      },
      profileImageStyle: {
        backgroundImage: `url(${require("@/assets/ProfileComponent/Frame2861.png")})`,
      },
      isHidden: false,
      currentComponent: "Message Center",
      data: {
        logoHidden: true,
      },
    };
  },
  methods: {
    getPointHistory() {
      axios
        .get("/transaction/point-history/get", localStorage.getItem("token"))
        .then((result) => {
          console.log(result);
          if (result.status == 200) {
            this.currentComponent = "Point History";
            this.isHidden = true;
          } else {
            this.currentComponent = "Message Center";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async mounted() {
    await this.getPointHistory();
  },
};
