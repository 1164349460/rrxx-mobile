<!-- 个人中心 -->
<template>
  <div class="user-center">
    <div class="cen-top">
      <div class="cen-left">
        <div class="cen-image">
          <img src="../../assets/images/login/company.png" />
        </div>
        <span>{{userInfo.name}}</span>
        <!-- <p>{{userInfo.phone}}</p> -->
      </div>
      <van-button size="small" @click="changeRole">退出登录</van-button>
    </div>
    <div class="cen-user">
      <h3>我的资料</h3>
      <div class="cen-li">性别：{{userInfo.sex|sexStatus}}</div>
      <div class="cen-li">手机号：{{userInfo.phone}}</div>
      <div class="cen-li">部门：{{userInfo.department}}</div>
      <div class="cen-li">岗位：{{userInfo.position}}</div>
      <div class="cen-li">最近一次登录时间：{{userInfo.loginTime|time}}</div>
    </div>
  </div>
</template>
 <script>
// import { GetUserResume } from "@/apis/apis";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  components: {},
  created() {
    this.userInfo = this.$storage.userMessage("userMessage");
    console.log(this.$storage.userMessage("userMessage"));
    this.dataInit();
  },
  methods: {
    dataInit() {
      // GetUserResume().then((res) => {
      //   if (!res.IsSuccess) {
      //     this.$toast.fail(res.Message);
      //     this.$router.push("/admin/login");
      //   } else {
      //     this.userInfo = res.Result;
      //   }
      // });
    },
    changeRole() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "确认退出登录吗",
        })
        .then(() => {
          this.$storage.removeStorage();
          this.$router.push("/admin/login");
        });
    },
  },
};
</script>
<style lang='less' scoped>
.cen-top {
  height: 100px;
  background-color: #2281ff;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  .cen-left {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .cen-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    img {
      width: 90%;
      border-radius: 50%;
      max-height: 90%;
    }
    span {
      align-self: center;
      color: #fff;
      font-size: 16px;
      text-align: left;
    }
  }
  .van-button {
    align-self: center;
    border-radius: 20px 0 0 20px;
  }
}

.cen-user {
  background-color: #fff;
  margin: 20px 10px;
  padding:10px 0 40px 0;
  border-radius: 10px;
  h3 {
    text-align: left;
    padding: 10px;
  }
  .cen-li{
    text-align: left;
    padding:10px 20px;
  }
}

a {
  width: 25%;
}
</style>