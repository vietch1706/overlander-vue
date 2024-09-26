<template>
  <div class="point-container">
    <div class="header-field">
      <div class="text-field">
        <p>Point History</p>
      </div>
      <div class="img-field">
        <img src="@/assets/PointHistoryComponent/image 23.png" alt="" />
      </div>
    </div>
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col"><el-button>All</el-button></div>
        <div class="col"><el-button>Gain</el-button></div>
        <div class="col"><el-button>Loss</el-button></div>
      </div>
    </div>
    <div class="container py-4">
      <div class="row py-4">
        <div class="col">
          <div class="history-container p-3" :style="borderBottomStyle">
            <div class="history-content">
              <div class="history-item left">
                <div class="invoice-id"><p>Invoice ID #46823763245</p></div>
                <div class="purchase-reason">
                  <p>Purchased in Kowloon Bay sStore</p>
                </div>
                <div class="record-container">
                  <div class="view-record">
                    <a href="">View Purchase Record</a>
                  </div>
                  &nbsp;
                  <div class="purchase-cost">
                    <p>(HKD $2,455)</p>
                  </div>
                </div>
              </div>
              <div class="history-item right" :hidden="data.logoHidden">
                <div class="img-container">
                  <img src="@/assets/Temporary.png" alt="" />
                </div>
              </div>
            </div>
            <div class="point-expired">
              <div class="point-wrapper">
                <p :style="fontColorStyle">+7,102pt.</p>
              </div>
              <div class="expired-date">
                <p>Expire at 12 Nov 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Script from "./script.js";
export default Script;
</script>

<style lang="scss" scoped>
@import url("./style.css");
</style>
