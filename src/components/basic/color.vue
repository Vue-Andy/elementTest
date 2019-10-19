<template>
  <div class='flex'>
    <!-- 元素颜色 -->
    <div style='width:100px;height:100px;line-height:50px;background:#409EFF;color:#fff;cursor:not-allowed;'>Blue--#409EFF</div>
    <div style='width:100px;height:100px;line-height:50px;background:#67C23A;color:#fff;cursor:pointer;'>Success--#67C23A</div>
    <div style='width:100px;height:100px;line-height:50px;background:#E6A23C;color:#fff;'>Warning--#E6A23C</div>
    <div style='width:100px;height:100px;line-height:50px;background:#F56C6C;color:#fff;'>Danger--#F56C6C</div>
    <div style='width:100px;height:100px;line-height:50px;background:#909399;color:#fff;'>Info--#909399</div>
    <!-- 字体颜色 -->
    <div style='width:100px;height:100px;line-height:50px;background:#303133;color:#fff;'>主要文字--#303133</div>
    <div style='width:100px;height:100px;line-height:50px;background:#606266;color:#fff;'>常规文字--#606266</div>
    <div style='width:100px;height:100px;line-height:50px;background:#909399;color:#fff;'>次要文字--#909399</div>
    <div style='width:100px;height:100px;line-height:50px;background:#C0C4CC;color:#fff;'>占位文字--#C0C4CC</div>
    <!-- 边框颜色 -->
    <div style='width:100px;height:100px;line-height:50px;background:#DCDFE6;color:#fff;'>一级边框#DCDFE6</div>
    <div style='width:100px;height:100px;line-height:50px;background:#E4E7ED;color:#fff;'>二级边框#E4E7ED</div>
    <div style='width:100px;height:100px;line-height:50px;background:#EBEEF5;color:#fff;'>三级边框#EBEEF5</div>
    <div style='width:100px;height:100px;line-height:50px;background:#F2F6FC;color:#fff;'>四级边框#F2F6FC</div>
  </div>
</template>


<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex{
    display:flex;
    justify-content: space-between;
  }
</style>
