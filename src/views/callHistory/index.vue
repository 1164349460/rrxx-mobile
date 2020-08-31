<!-- 岗位列表 -->
<template>
  <div>
    <div class="static">
      <van-nav-bar title="呼出记录" left-arrow @click-left="onClickLeft" />
      <!-- tab栏 -->
      <div class="cen-post">
        <van-button v-for="(item,index) in companySize" :key="index" size="mini" :class="currIndex ==index?'lightCor':'blackCor' " @click="getMenu(index)">
          {{item.name}}
          <van-icon :name="currIndex ==index?'arrow-up':'arrow-down'" />
        </van-button>
      </div>
    </div>
    <div class="list_box">
      <van-empty v-if="!list.length" />
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="dataInit">
        <van-row class="cen-list" v-for="(item,index) in list" :key="index" @click="getJobDetail(item)">
          <van-col span="18">
            <h4>{{item.JobName}}</h4>
            <p>{{item.CorpName}}</p>
            <div>
              <span>{{item.Province}}{{item.City}}</span>
            </div>
          </van-col>
          <van-col span="6" class="cen-talk">{{item.SalaryRangeStr}} <p>{{item.DeliveryNum}}人已投递</p></van-col>
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
      currIndex: -1,//当前索引
      companySize: [
        { name: '地区', value: 1 },
        { name: '薪资', value: 2 },
        { name: '学历', value: 3 }
      ],
      workList: [],
      salaryList: [],
      companyList: [],
      list: [],
      loading: false,
      finished: false,
      formData: {
        PageSize: 10,
        PageIndex: 1,
        KeyWord: '',
        AreaId: 10000,
        DegreeId: 0,
        CorpId: 0,
        SalaryRange: 0,
      },
    };
  },
  created() {
    // this.dataInit()
  },
  components: {  },
  methods: {
    //数据初始化
    dataInit() {
      queryCallrecordOfPage(this.formData).then(res => {
        if (res.Items) {
          this.list = this.list.concat(res.Items);
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.formData.PageIndex >= res.TotalPage) {
            this.finished = true;
          } else {
            this.formData.PageIndex++;
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
      this.formData.PageIndex = 1;
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
  padding-top: 80px;
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
.cen-post {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  width: 95%;
  .van-button {
    width: 90px;
    height: 30px;
    font-size: 14px;
    border-radius: 4px;
    flex: 1;
  }
  .van-icon {
    margin-left: 5px;
  }
  .lightCor {
    background-color: #1a76f3;
    color: #fff;
  }
  .blackCor {
    background-color: #fff;
  }
}

.van-pagination {
  margin-top: 20px;
  background-color: #fff;
}
</style>
