export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  component: {},
  data() {
    return {
      borderBottomStyle: {
        borderBottom: "5px solid #78C147",
      },
      fontColorStyle: {
        color: "#4B9916",
      },
    };
  },
};
