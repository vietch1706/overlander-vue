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
        <router-link
          :to="{
            name: 'authenOnePage',
            query: {
              state: 'phone',
            },
          }"
          ><el-button icon="bi bi-telephone-fill">
            Verfiy with Phone No.</el-button
          ></router-link
        >
      </div>
      <div class="py-2">
        <router-link
          :to="{
            name: 'authenOnePage',
            query: {
              state: 'email',
            },
          }"
          ><el-button icon="bi bi-envelope-fill">
            Verfiy with Email</el-button
          ></router-link
        >
      </div>
      <div class="py-2">
        <router-link
          :to="{
            name: 'authenOnePage',
            query: {
              state: 'member',
            },
          }"
          ><el-button icon="bi bi-person-square">
            Verfiy with Member No.</el-button
          ></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "./style.css";
</style>
