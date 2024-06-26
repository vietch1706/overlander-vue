<template>
  <div class="button-container">
    <div class="text-field">
      <div class="top-text">
        <div class="transfer-field">
          <p>Transfer Existing Account</p>
        </div>
        <div class="top-img">
          <img src="@/assets/ExistmemberComponent/image 23.png" alt="" />
        </div>
      </div>
      <div class="note-text">
        <p>
          Please verify your identity with either phone no., email or member no.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column">
      <div class="py-2">
        <el-button @click="pushToPhoneComponent" icon="bi bi-telephone-fill">
          <p>Verfiy with Phone No.</p></el-button
        >
      </div>
      <div class="py-2">
        <el-button @click="pushToEmailComponent" icon="bi bi-envelope-fill">
          <p class="">Verfiy with Email</p></el-button
        >
      </div>
      <div class="py-2">
        <el-button @click="pushToMemberComponent" icon="bi bi-person-square">
          <p>Verfiy with Member No.</p></el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${require("@/assets/ExistmemberComponent/side-image.png")})`,
      },
      CurrentComponent: "ButtonComponent",
    };
  },
  methods: {
    pushToPhoneComponent() {
      this.$parent.pushToPhoneComponent();
    },
    pushToEmailComponent() {
      this.$parent.pushToEmailComponent();
    },
    pushToMemberComponent() {
      this.$parent.pushToMemberComponent();
    },
  },
};
</script>
<style lang="scss" scoped>
.button-container {
  .text-field {
    .top-text {
      display: flex;
      .transfer-field {
        color: #0b1d35;
        font-weight: 800;
        font-size: 36px;
        p {
          background-image: linear-gradient(#78c147 0 0);
          background-position: bottom left;
          background-size: 18% 5px;
          background-repeat: no-repeat;
          padding-bottom: 5px;
        }
      }
      .top-img {
        align-self: center;
        padding: 0 0 1rem 1rem;
        width: 20%;
        img {
          width: 25%;
        }
      }
    }
    .note-text {
      font-weight: 400;
      font-size: 16px;
    }
  }
  .el-button {
    width: 580px;
    border: 2px solid #78c147;
    color: #4b9916;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    span {
      p {
        padding: 0 150px;
        margin: unset;
      }
    }
  }
}
</style>
