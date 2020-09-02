<!-- 呼叫记录 -->
<template>
  <div>
    <div class="static">
      <van-nav-bar title="呼出记录" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="list_box">
      <van-empty v-if="!dataList.length" />
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="dataInit">
        <van-row class="cen-list" v-for="(item,index) in dataList" :key="index" @click="getJobDetail(item)">
          <van-col span="18">
            <h4>{{item.customerName}}</h4>
            <p>手机号：{{item.customerPhone}}</p>
            <div>
              <span>拨号时间：{{item.created|time}}</span>
            </div>
          </van-col>
          <!-- <van-col span="6" class="cen-talk">{{item.SalaryRangeStr}}  {{item.userName}}<p></p></van-col> -->
        </van-row>
      </van-list>
    </div>
  </div>
</template>

<script>
import { queryCallrecordOfPage } from '@/apis/apis'
export default {
  data() {
    return {
      dataList: [],
      loading: false,
      finished: false,
      currPage:0
    };
  },
  created() {
    this.userMessage = this.$storage.userMessage("userMessage");
  },
  components: {  },
  methods: {
    //数据初始化
    dataInit() {
      let params = {
        page:this.currPage,
        size:20,
        userId:this.userMessage.id
      }
      queryCallrecordOfPage(params).then(res => {
        if (res.code === 0) {
          this.dataList = this.dataList.concat(res.data.content);
          console.log(this.dataList)
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          console.log(this.currPage, res.data.totalPages,this.currPage >= res.totalPages)
          if (this.currPage >= res.data.totalPages-1) {
            this.finished = true;
          } else {
            this.currPage++;
          }
        }
      })
    },
    // 点击下拉框
    getMenu(e) {
      // this.currIndex = e;
      // this.$nextTick(() => {
      //   switch (e) {
      //     case 0:
      //       this.$refs.pickerCompany.showStatus = true
      //       break;
      //     case 1:
      //       this.$refs.pickerSalary.showStatus = true
      //       break;
      //     case 2:
      //       this.$refs.pickerWork.showStatus = true
      //       break;
      //   }
      // })
    },
    clear(){
      this.formData.page = 1;
      this.list = [];
    },
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 查看岗位详情
    getJobDetail(item) {
      // this.$router.push({ path: "/findJob/jobDetail", query: { Id: item.ID } });
    }
  }
};
</script>

<style lang='less' scoped>
.static {
  width: 100%;
  position: fixed;
  background-color: #f2f4f4;
  z-index: 1;
}
.van-nav-bar {
  height: 36px;
  line-height: 36px;
  font-size: 14px;
}
.chose_header {
  padding: 10px 0;
}
.list_box {
  padding-top: 40px;
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
  }
}
 
.van-pagination {
  margin-top: 20px;
  background-color: #fff;
}
</style>
