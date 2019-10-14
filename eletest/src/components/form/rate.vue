<template>
  <div>
    <div style='width:200px;text-align:left;margin:0 auto;'>
      <el-tag>默认不区分颜色</el-tag>
      <el-rate v-model="value1"></el-rate>
      <el-tag>区分颜色</el-tag>
      <el-rate
        v-model="value2"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
        void-color='#0aa1ed'
        :low-threshold='lowRate'
        :high-threshold='hightRate'>
      </el-rate>
      <el-tag>辅助文字</el-tag>
      <el-rate
        v-model="value3"
        show-text>
      </el-rate>
      <el-tag>区分颜色+辅助文字</el-tag>
      <el-rate
        v-model="value4"
        show-text
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
        :low-threshold='lowRate'
        :texts='["垃圾","太次","还行","不错","牛逼"]'
        :high-threshold='hightRate'>
      </el-rate>
      <el-tag>其他icon</el-tag>
      <el-rate
        v-model="value5"
        :icon-classes="['el-icon-error', 'el-icon-warning', 'el-icon-success']"
        void-icon-class="el-icon-circle-plus-outline"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'rate',
  data(){
    return {
      lowRate:1,
      hightRate:4,
      value1:0,
      value2:0,
      value3:0,
      value4:0,
      value5:0
    }
  }
}
</script>

<style>
.icon-rate-face-1,.icon-rate-face-off{
  background-image:url(https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564804111&di=de0002a940677a2b112af99ddcb6c6fc&src=http://pic2.16pic.com/00/24/47/16pic_2447725_b.jpg)
}
</style>


