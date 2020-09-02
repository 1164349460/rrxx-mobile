<template>
  <div class="cen-customer">
    <div class="static">
      <van-nav-bar title="客户信息" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="cen-main">
      <van-form>
        <van-field v-model="userInfo.name" label="客户名称" />
        <van-field v-model="userInfo.phone" label="手机号" />
        <van-field v-model="userInfo.address" label="地址" />
        <van-field v-model="userInfo.city" label="城市" />
        <van-field v-model="userInfo.origin" label="来源" />
        <van-field :value="userInfo.status?'正常':'冻结'" label="客户状态" />
        <van-field v-model="userInfo.score" label="评分" />
        <van-field v-model="userInfo.avgPrice" label="均价" />
      </van-form>
    </div>
     <van-button  type="danger" icon="phone-o" class="cen-phone" @click="handleCall">拨号</van-button>
  </div>
</template>
<script>
import { addCallrecord } from "@/apis/apis";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.userInfo = this.$storage.userMessage("customerDetails");
    this.userMessage = this.$storage.userMessage("userMessage");
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 拨号
    handleCall() {
      let params = {
        customerId: this.userInfo.id,
        customerPhone: this.userInfo.phone,
        userId: this.userMessage.id,
      };
      addCallrecord(params).then((res) => {
        let a = document.createElement("a");
        a.setAttribute("href", `tel:${this.userInfo.phone}`);
        a.click();
      });
    },
  },
};
</script>
<style lang="less" scoped>
.cen-phone{
  width:100px;
  margin:0 auto;
}
.cen-main {
  margin: 10px 20px;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 10px;
}
</style>