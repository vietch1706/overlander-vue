export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    showAll: {
      type: Function,
    },
    showGain: {
      type: Function,
    },
    showLoss: {
      type: Function,
    },
    loadMore: {
      type: Function,
    },
  },
  component: {},
  data() {
    return {
      currentItem: "",
      transactionDetail: "",
      gainPointStyle: {
        borderBottom: "5px solid #78C147",
        color: "#4B9916",
      },
      lossPointStyle: {
        borderBottom: "5px solid #6D7786",
        color: "#6D7786",
      },
      dialogVisible: false,
    };
  },
  methods: {
    checkType(type) {
      if (type === this.data.TYPE_GAIN) {
        return this.gainPointStyle;
      } else {
        return this.lossPointStyle;
      }
    },
    viewRecord(item) {
      this.currentItem = item;
      this.dialogVisible = true;
      for (let key in item.detail) {
        item.detail[key]["point"] = item.detail[key]["point"] + "pt.";
        item.detail[key]["price"] = "$" + item.detail[key]["price"];
        item.detail[key]["fprice"] = "$" + item.detail[key]["fprice"];
        item.detail[key]["discount"] =
          "(-$" + item.detail[key]["discount"] + ")";
        item.detail[key]["quantity"] = " Qty:" + item.detail[key]["quantity"];
        if (item.detail[key]["multiplier"] != 0) {
          item.detail[key]["multiplier"] =
            item.detail[key]["multiplier"] + "X Point Reward";
        } else {
          item.detail[key]["multiplier"] = "";
        }
      }
      this.transactionDetail = item.detail;
    },

    checkDetail(type) {
      return type === this.data.TYPE_GAIN;
    },
  },
};
