export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      backgroundStyleImage: {
        backgroundImage: `url(${require("@/assets/HomeComponent/center.png")})`,
      },
      rightImageStyle: {
        backgroundImage: `url(${require("@/assets/HomeComponent/right-image.png")})`,
      },
    };
  },
};
