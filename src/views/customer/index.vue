<template>
  <div id="cen-customer">
    <div class="static">
      <van-nav-bar title="我的客户" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="list_box">
      <van-empty v-if="!dataList.length" />
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="dataInit">
        <van-row
          class="cen-list"
          v-for="(item,index) in dataList"
          :key="index"
          @click="getJobDetail(item)"
        >
          <van-col span="18">
            <h4>{{item.name}}</h4>
            <p>来源：{{item.origin}}</p>
            <div>
              <span>手机号：{{item.phone}}</span>
            </div>
          </van-col>
          <van-col span="6" class="cen-talk" @click="handleView">
            查看
            <van-button size="mini" type="danger" icon="phone-o" @click="handleCall(item)">拨号</van-button>
          </van-col>
        </van-row>
      </van-list>
    </div>
  </div>
</template>
<script>
import { queryCustomerListOfPage, addCallrecord } from "@/apis/apis";
export default {
  data() {
    return {
      dataList: [],
      loading: false,
      finished: false,
      currPage: 0,
      totalPages: 0,
    };
  },
  created() {
    this.userMessage = this.$storage.userMessage('userMessage')
  },
  methods: {
    // 数据初始化
    dataInit() {
      let params = {
        page: this.currPage,
        size: 5,
        locatedId:this.userMessage.id
      };
      queryCustomerListOfPage(params).then((res) => {
        if (res.code === 0) {
          this.dataList = this.dataList.concat(res.data.content);
          this.loading = false;
          this.totalPages = res.data.totalPages;
          if (this.currPage >= this.currPage.totalPages) {
            this.finished = true;
          } else {
            this.currPage++;
          }
        } else {
          this.$notify({ type: "danger", message: res.message });
        }
      });
    },
    // 点击客户详情
    getJobDetail() {},
    // 查看详情
    handleView() {},
    // 拨号
    handleCall(data) {
      console.log(this.userMessage)
      console.log(data)
      let params = {
        customerId: data.id,
        customerPhone: data.phone,
        userId: this.userMessage.id,
      };
      addCallrecord(params).then((res) => {});
    },
    onClickLeft() {},
  },
};
</script>
<style lang="less" scoped>
.list_box {
  // padding-top: 80px;
  text-align: left;
  background-color: #f2f4f4;
  .cen-list {
    background-color: #fff;
    margin-top: 5px;
    padding: 10px 15px;
    color: #999;
    font-size: 14px;
    line-height: 1.8;
    border-radius: 6px;
    h4 {
      color: #333;
      font-size: 16px;
    }
    p {
      color: #666;
    }
    .cen-talk {
      color: #1a76f3;
      font-size: 16px;
      text-align: right;
      line-height: 2;
      p {
        font-size: 12px;
      }
    }
  }
}
</style>