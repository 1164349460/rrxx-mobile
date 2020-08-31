<!-- 学历程度选择 -->
<template>
  <div>
    <!-- <div class="basic-form" @click="showStatus = true">
      <label for="tel" class="star">学历</label>
      <input type="text" v-model="educationTex" placeholder="请选择" />
      <i class="iconfont icon-you"></i>
    </div>-->
    <van-popup v-model="showStatus" position="bottom" custom-style="height: 20%;">
      <!-- <van-picker :columns="educationList" value-key="text" show-toolbar @confirm="onSelectEdu" @cancel="onCancel" /> -->
      <van-picker show-toolbar :columns="educationList" value-key="text" @cancel="onCancel" :visible-item-count="visibleCount" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
// import { educationList } from '@/utils/data'
export default {
  data() {
    return {
      showStatus: false,
      educationList: this.$store.state.degreeList,
      educationTex: ''
    };
  },
  created() {
  },
  components: {},
  methods: {
    onSelectEdu(e) {
      this.$emit('getEducate', e.val)
      this.educationTex = e.name
      this.showStatus = false
    },
    // 取消
    onCancel() {
      this.showStatus = false;
      this.$emit('getEducate', '')
    }
  }
}

</script>
<style lang='less' scoped>
</style>