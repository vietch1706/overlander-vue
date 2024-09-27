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
  },
  component: {},
  data() {
    return {
      gainPointStyle: {
        borderBottom: "5px solid #78C147",
        color: "#4B9916",
      },
      lossPointStyle: {
        borderBottom: "5px solid #6D7786",
        color: "#6D7786",
      },
    };
  },
  computed: {
    visiblePointHistories() {
      return this.data.pointHistories.slice(0, this.data.pointHistoryVisible);
    },
  },
  methods: {
    checkType(type) {
      if (type === this.data.TYPE_GAIN) {
        return this.gainPointStyle;
      } else {
        return this.lossPointStyle;
      }
    },
    checkDetail(type) {
      return type === this.data.TYPE_GAIN;
    },
  },
};
