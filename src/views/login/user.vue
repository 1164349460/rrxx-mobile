<template>
  <div class="user-page">
    <div class="login-user">
      <div>
        <img src="@/assets/images/login/person.png" alt />
        <span>登录</span>
      </div>
    </div>
    <van-form @submit="onSubmit">
      <van-field v-model="formData.phone" label="用户名" placeholder="请输入手机号" />
      <van-field v-model="formData.password" type="password" label="密码" placeholder="请输入密码" />
      <div class="login-btn">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { userLogin } from "@/apis/apis.js";
import { mobileStatus } from "@/utils/checkForm.js";
export default {
  data() {
    return {
      formData: {
        password: "",
        phone: "",
      },
    };
  },
  methods: {
    // 登录
    onSubmit(values) {
      if (!mobileStatus(this.formData.phone)) {
        this.$notify({ type: "warning", message: "请正确填写手机号" });
        return;
      } else if (!this.formData.password) {
        this.$notify({ type: "warning", message: "请输入密码" });
        return;
      }
      let params = {
        ...this.formData,
        isAdmin: false,
      };
      userLogin(params).then((res) => {
        if (res.code === 0) {
          this.$storage.setStorage('userMessage',JSON.stringify(res.data))
          this.$storage.setStorage("token", res.data.token);
          this.$router.push("/admin/customer");
        } else {
          this.$notify({ type: "warning", message: res.message });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.user-page {
  padding: 80px 45px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fff;
  .login-user {
    text-align: center;
    margin-bottom: 30px;
  }
  .login-btn {
    margin: 40px 10px 20px 10px;
    button {
      margin-bottom: 20px;
    }
  }
  img {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
</style>


<style lang="less">
.user-page {
  .van-image {
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .van-field__label {
    width: 80px;
  }
}
</style>

