<!-- 底部固定栏 -->
<template>
  <div class="cen-contaienr">
    <div class="cen-content">
      <router-view />
    </div>
    <van-tabbar active-color="#2281ff" v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">
        <router-link to="/admin/customer">客户管理</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="phone-circle-o">
        <router-link to="/admin/callHistory">呼出记录</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="label-o">
        <router-link to="/admin/userCenter">我的</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {},
  created() {
   
  },
  methods: {
    onChange(index) {
      switch (index) {
        case 0:
          this.$router.push("/admin/customer");
          break;
        case 1:
          this.$router.push("/admin/callHistory");
          break;
        case 2:
          this.$router.push("/admin/userCenter");
          break;
      }
    }
  }
};
</script>
<style lang="less" >
.wuChang {
  text-align: left;
  .district-content {
    background-color: #fff;
    margin: 10px 0px;
    padding: 20px 10px;
    margin-top: 45px;
  }

  strong {
    font-weight: bold;
    font-size: 16px;
  }
  span {
    font-size: 14px;
  }
  .p_img {
    overflow: hidden;
    img {
      widows: 100%;
    }
  }
  img {
    width: 100%;
  }
}
</style>

<style lang='less' scoped>
.cen-content {
  margin-bottom: 50px;
}
a {
  color: #646566;
}
.van-tabbar {
  border-top: 1px solid #d8d5d5;
  z-index: 9999;
}
</style>