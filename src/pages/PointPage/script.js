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
      isHidden: "",
      currentComponent: "Message Center",
      data: {
        pointHistories: [],
        TYPE_GAIN: "0",
        TYPE_LOSS: "1",
        pointHistoryVisible: 3,
        step: 3,
      },
      pointHistories: [],
    };
  },
  methods: {
    getPointHistory() {
      axios
        .get("/transaction/point-history/get", localStorage.getItem("token"))
        .then((result) => {
          this.pointHistories = result.data.data;
          console.log(this.pointHistories.length);
          this.currentComponent = "Point History";
          this.isHidden = true;
          this.refactorData(this.pointHistories);
          this.showAll();
        })
        .catch((error) => {
          this.isHidden = false;
          this.currentComponent = "Message Center";
          console.log(error);
        });
    },
    refactorData(pointHistories) {
      for (let key in pointHistories) {
        if (pointHistories[key]["logo"]) {
          pointHistories[key]["logoShow"] = true;
        }
      }
    },
    showAll() {
      this.data.pointHistoryVisible = 3;
      this.data.step = 3;
      this.data.pointHistories = [];
      this.data.pointHistories = this.pointHistories;
    },
    showGain() {
      let dataKey = 0;
      this.data.pointHistoryVisible = 3;
      this.data.step = 3;
      this.data.pointHistories = [];
      for (let key in this.pointHistories) {
        if (this.pointHistories[key]["type"] == this.data.TYPE_GAIN) {
          this.data.pointHistories[dataKey] = this.pointHistories[key];
          dataKey++;
        }
      }
      console.log(this.data.pointHistories);
    },
    showLoss() {
      let dataKey = 0;
      this.data.pointHistoryVisible = 3;
      this.data.step = 3;
      this.data.pointHistories = [];
      for (let key in this.pointHistories) {
        if (this.pointHistories[key]["type"] == this.data.TYPE_LOSS) {
          this.data.pointHistories[dataKey] = this.pointHistories[key];
          dataKey++;
        }
      }
      console.log(this.data.pointHistories);
    },
  },
  async mounted() {
    await this.getPointHistory();
    await this.showAll();
  },
};
