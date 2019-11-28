<template>
  <div>
    <el-tag>日期时间点</el-tag>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      placeholder="选择日期时间"
      @change="handleChange"/>

      <el-date-picker
        v-model="queryObj.dateValue"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        value-format='yyyy-MM-dd HH:mm:ss'
        @change="getGroupBuyList(true)">
      </el-date-picker>
  </div>
</template>

<script>
export default {
  name:'dateTimePicker',
  data(){
    return {
      value1:['',''],
      queryObj:{
        dateValue:['','']
      }
    }
  },
  methods:{
    handleChange() {
      console.log(this.value1)
    },
    getGroupBuyList() {
      console.log(this.queryObj)
    }
  }
}
</script>

<style>

</style>


