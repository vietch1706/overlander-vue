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
        v-for="(item, index) in data.pointHistories"
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
                    <a @click="viewRecord(item)">View Purchase Record</a>
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
              <div class="history-date">
                <p>{{ item.history_date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item-shown text-center" v-show="data.moreExist">
        <p>
          Showing {{ data.currentShowRecords }} of
          {{ data.totalRecords }}
          Transactions
        </p>
      </div>
      <div class="view-more-btn text-center">
        <el-button @click="loadMore()" v-show="data.moreExist"
          >View More</el-button
        >
      </div>
      <el-dialog title="Purchase Record" :visible.sync="dialogVisible">
        <div class="record-note">
          <p>
            {{ currentItem.reason }} at
            {{ currentItem.transaction_date }}
          </p>
        </div>
        <div
          class="row py-3"
          v-for="(item, index) in transactionDetail"
          :key="index"
          :value="item"
        >
          <div class="col">
            <div class="detail-container">
              <div class="detail-item left">
                <div class="plc-description">
                  <p>{{ item.plc }} {{ item.description }}</p>
                </div>
                <div class="price-container">
                  <div class="price-amount">
                    <p>{{ item.price }}</p>
                  </div>
                  <div class="discount-amount">
                    <p>{{ item.discount }}</p>
                  </div>
                </div>
                <div class="price-container">
                  <div class="fprice-amount">
                    <p>
                      {{ item.fprice }}
                    </p>
                  </div>
                  &nbsp;
                  <div class="quantity-amount">
                    <p>{{ item.quantity }}</p>
                  </div>
                </div>
                <div class="campaign-multiplier">
                  <p>{{ item.multiplier }}</p>
                </div>
                <div class="transaction-campaign">
                  {{ item.transaction_campaign }}
                </div>
              </div>
              <div class="detail-item right">
                <div class="point-amount">
                  {{ item.point }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-dialog>
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
