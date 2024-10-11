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
      limit: 2,
      type: "",
      isHidden: "",
      currentComponent: "Message Center",
      data: {
        currentShowRecords: "",
        totalRecords: "",
        pointHistories: [],
        TYPE_GAIN: "0",
        TYPE_LOSS: "1",
        moreExist: true,
        page: 1,
      },
    };
  },
  methods: {
    getPointHistory() {
      let url =
        "/transaction/point-history/get?" +
        "limit=" +
        this.limit +
        "&page=" +
        this.data.page +
        "&type=" +
        this.type;
      axios
        .get(url, localStorage.getItem("token"))
        .then((result) => {
          console.log(result.data.data);
          if (result.data.data.current_page == result.data.data.last_page) {
            this.data.moreExist = false;
            console.log("hehehe");
          } else {
            this.data.moreExist = true;
          }
          this.data.currentShowRecords = result.data.data.per_page;
          this.data.totalRecords = result.data.data.total;
          this.data.pointHistories = result.data.data.data;
          this.currentComponent = "Point History";
          this.isHidden = true;
          this.refactorData(this.data.pointHistories);
        })
        .catch((error) => {
          this.isHidden = false;
          this.currentComponent = "Message Center";
          console.log(error);
        });
    },
    loadMore() {
      this.data.page += 1;
      let url =
        "/transaction/point-history/get?" +
        "limit=" +
        this.limit +
        "&page=" +
        this.data.page +
        "&type=" +
        this.type;
      axios
        .get(url, localStorage.getItem("token"))
        .then((result) => {
          if (result.data.data.current_page == result.data.data.last_page) {
            this.data.moreExist = false;
          }
          this.data.currentShowRecords += result.data.data.data.per_page;
          this.refactorData(result.data.data.data);
          result.data.data.data.forEach((data) => {
            this.data.pointHistories.push(data);
          });
          this.data.paging = result.data.data;
          this.currentComponent = "Point History";
          this.isHidden = true;
          console.log(this.data.pointHistories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    refactorData(pointHistories) {
      for (let key in pointHistories) {
        if (pointHistories[key]["type"] == this.data.TYPE_GAIN) {
          pointHistories[key]["invoice_no"] =
            "Invoice ID #" + pointHistories[key]["invoice_no"];
          pointHistories[key]["total_fprice"] =
            "$" + pointHistories[key]["total_fprice"];
          pointHistories[key]["history_date"] =
            "Expire at " + pointHistories[key]["history_date"];
          pointHistories[key]["amount"] =
            "+" + pointHistories[key]["amount"] + "pt.";
        } else {
          pointHistories[key]["amount"] =
            "-" + pointHistories[key]["amount"] + "pt.";
          if (pointHistories[key]["logo"]) {
            pointHistories[key]["history_date"] =
              "Upgrade at " + pointHistories[key]["history_date"];
            pointHistories[key]["logoShow"] = true;
          } else {
            pointHistories[key]["history_date"] =
              "Expire at " + pointHistories[key]["history_date"];
          }
        }
      }
    },
    showAll() {
      this.data.page = 1;
      this.type = "";
      this.getPointHistory();
    },
    showGain() {
      this.data.page = 1;
      this.type = this.data.TYPE_GAIN;
      this.getPointHistory();
    },
    showLoss() {
      this.data.page = 1;
      this.type = this.data.TYPE_LOSS;
      this.getPointHistory();
    },
  },
  async mounted() {
    await this.getPointHistory();
  },
};
