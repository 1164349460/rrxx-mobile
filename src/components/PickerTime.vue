<!-- 时间选择器 -->
<template>
  <van-popup v-model="showStatus" position="bottom" :close-on-click-overlay="true">
    <van-datetime-picker v-model="currentDate" :type="type?type:'date'" :min-date="minDate" @confirm="onSelectTime" @cancel="onCancelTime" />
  </van-popup>
</template>

<script>
import {
  shortTime,
  leaveTime,
  time,
} from '@/utils/tool'
import moment from "moment"
export default {
  props: ['min-time', 'type'],
  data() {
    return {
      minDate: new Date('1960/01/01'),
      currentDate: new Date(),
      showStatus: false
    };
  },
  created() {
    if (this.minTime) {
      this.minDate = new Date(this.minTime);
    }
  },
  methods: {
    //确认时间
    onSelectTime(e) {
      if (this.type == 'datetime') {
        this.$emit('input', time(e))
        this.$emit('getTime', time(e))
      } else {
        this.$emit('input', shortTime(e))
        this.$emit('getTime', shortTime(e))
      }
      this.showStatus = false
    },
    // 取消时间
    onCancelTime() {
      this.showStatus = false
    },
  }
}
</script>
<style lang='less' scoped>
</style>
