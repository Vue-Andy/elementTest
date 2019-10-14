<template>
  <div>
    <el-tag>日期时间点</el-tag>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间"/>
  </div>
</template>

<script>
export default {
  name:'dateTimePicker',
  data(){
    return {
      value1:''
    }
  }
}
</script>

<style>

</style>


