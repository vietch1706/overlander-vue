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
        <div class="col"><el-button @click="showAll()">All</el-button></div>
        <div class="col"><el-button @click="showGain()">Gain</el-button></div>
        <div class="col"><el-button @click="showLoss()">Loss</el-button></div>
      </div>
    </div>
    <div class="container py-4">
      <div class="row py-3" v-if="data.pointHistories.length == 0">
        <div class="col">
          <div class="no-history">
            <p>You have no loss point history</p>
          </div>
        </div>
      </div>
      <div
        class="row py-3"
        v-for="(item, index) in visiblePointHistories"
        :key="index"
        :value="item"
      >
        <div class="col">
          <div class="history-container p-3" :style="checkType(item.type)">
            <div class="history-content">
              <div class="history-item left">
                <div class="invoice-id">
                  <p>
                    {{ item.invoice_no }}
                  </p>
                </div>
                <div class="purchase-reason">
                  <p>{{ item.reason }}</p>
                </div>
                <div class="record-container" v-show="checkDetail(item.type)">
                  <div class="view-record">
                    <a href="">View Purchase Record</a>
                  </div>
                  &nbsp;
                  <div class="purchase-cost">
                    <p>{{ item.total_fprice }}</p>
                  </div>
                </div>
              </div>
              <div class="history-item right" v-show="item.logoShow">
                <div class="img-container">
                  <img :src="item.logo" alt="" />
                </div>
              </div>
            </div>
            <div class="point-expired">
              <div class="point-wrapper">
                <p>{{ item.amount }}</p>
              </div>
              <div class="expired-date">
                <p>{{ item.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="item-shown"
        v-if="data.pointHistoryVisible < data.pointHistories.length"
      >
        <p>
          Showing {{ data.pointHistoryVisible }} of
          {{ data.pointHistories.length }}
          Transactions
        </p>
      </div>
      <div class="view-more-btn">
        <el-button
          @click="data.pointHistoryVisible += data.step"
          v-if="data.pointHistoryVisible < data.pointHistories.length"
          >View More</el-button
        >
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
