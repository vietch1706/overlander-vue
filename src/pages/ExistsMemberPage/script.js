import ButtonComponent from "@/components/ButtonComponent/ButtonComponent.vue";
import SideComponent from "@/components/SideComponent/SideComponent.vue";
export default {
  components: {
    SideComponent,
    ButtonComponent,
  },
  data() {
    return {
      data: {
        backgroundImageStyle: {
          backgroundImage: `url(${require("@/assets/RegisterComponent/side-image.png")})`,
        },
        isHidden: true,
      },
    };
  },
  async mounted() {},
};
