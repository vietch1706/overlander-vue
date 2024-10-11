import axios from "axios";

export default {
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${require("@/assets/Frame2823.png")})`,
      },
      membershipTier: [],
    };
  },
  methods: {
    getMembershipTier() {
      axios
        .get("/general/membership-tier/get")
        .then((result) => {
          this.membershipTier = result.data.data;
          this.membershipTier = this.membershipTier.sort((a, b) => b.id - a.id);
          for (let key in this.membershipTier) {
            if (this.membershipTier[key]["slug"] == "temporary") {
              this.membershipTier[key]["message"] = "Remove Account After";
              this.membershipTier[key]["period"] =
                this.membershipTier[key]["period"] + " Months";
              this.membershipTier[key]["points_required"] = "";
            } else {
              if (this.membershipTier[key]["slug"] == "ordinary") {
                this.membershipTier[key]["points_required"] =
                  "Upgrade with any purchase";
              } else {
                this.membershipTier[key]["points_required"] =
                  "Upgrade with " +
                  this.membershipTier[key]["points_required"] +
                  "pt.";
              }
              this.membershipTier[key]["period"] =
                this.membershipTier[key]["period"] / 12 + " Years";
              this.membershipTier[key]["message"] = "Membership Tier Valid For";
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async mounted() {
    await this.getMembershipTier();
  },
};
