<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/images/home/banner.jpg" alt="专场招聘会" class="banner" />
      </van-swipe-item>
      <!-- <van-swipe-item>
        <img src="@/assets/images/home/banner.jpg" alt="专场招聘会" class="banner" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/home/banner.jpg" alt="专场招聘会" class="banner" />
      </van-swipe-item> -->
    </van-swipe>
    <div class="nav_list">
      <router-link to="/admin/wc" class="nav_btn">
        <img src="@/assets/images/home/paper.png" alt="区情介绍" />
        <span class="nav_txt">区情介绍</span>
      </router-link>
      <router-link to="/admin/corpStyle" class="nav_btn">
        <img src="@/assets/images/home/flower.png" alt="企业风采" />
        <span class="nav_txt">企业风采</span>
      </router-link>
      <router-link to="/admin/home" class="nav_btn">
        <img src="@/assets/images/home/love.png" alt="空中招聘会" />
        <span class="nav_txt">空中招聘会</span>
      </router-link>
      <router-link to="/admin/zc" class="nav_btn">
        <img src="@/assets/images/home/book.png" alt="政策宣导" />
        <span class="nav_txt">政策宣导</span>
      </router-link>
      <router-link to="/admin/districtIntro" class="nav_btn">
        <img src="@/assets/images/home/wuhan.png" alt="武昌印象" />
        <span class="nav_txt">武昌印象</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.my-swipe {
  height: 180px;
  .banner {
    width: 100%;
    height: 180px;
    display: block;
  }
}
.nav_list {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  text-align: center;
  .nav_btn {
    flex: 1;
    width: 70px;
    img {
      display: block;
      width: 100%;
    }
    .nav_txt {
      color: #333;
      font-size: 14px;
    }
  }
}
</style>