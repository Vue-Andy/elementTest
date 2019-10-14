<template>
  <div>
    <!-- 固定时间点 -->
    <el-tag>固定时间点</el-tag>
    <el-time-select
      v-model='time1'
      :picker-options='options1'
      placeholder="选择时间"
      @blur='getTime1'
      @change='change1'
      @focus='focus1'
    ></el-time-select>
    <!-- 禁用 -->
    <el-tag>禁用</el-tag>
    <el-time-select
      disabled
      v-model='time1'
      :picker-options='options1'
    ></el-time-select>
    <br/>
    <!-- 只读 -->
    <el-tag>只读</el-tag>
    <el-time-select
      readonly
      v-model='time1'
      :picker-options='options1'
    ></el-time-select>
    <!-- 不可输入 -->
    <el-tag>不可输入</el-tag>
    <el-time-select
      :editable='isEditable'
      v-model='time1'
      :picker-options='options1'
    ></el-time-select>
    <br/>
    <el-tag>任意时间点</el-tag>
    <!-- 任意时间点 -->
    <el-time-picker
      v-model='time2'
      :picker-options='options2'
      placeholder="选择起始时间"
      @blur='getTime2'
      @change='change2'
      @focus='focus2'
    ></el-time-picker>
    <el-time-picker
      v-model='time3'
      arrow-control
      :picker-options='options3'
      placeholder="选择结束时间"
      @blur='getTime3'
      @change='change3'
      @focus='focus3'
    ></el-time-picker>
    <br/>
    <!-- 固定时间范围 -->
    <el-tag>固定时间范围</el-tag>
    <el-time-select
      placeholder="选择起始时间"
      v-model='time4'
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
    ></el-time-select>
    <el-time-select
      placeholder="选择结束时间"
      v-model='time5'
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: time4
      }"
    ></el-time-select>
  </div>
</template>

<script>
export default {
  name:'timePicker',
  data() {
    return {
      isEditable:false,
      time1:'06:30',
      time2:new Date(2016, 9, 10, 18, 40),
      time3:new Date(2016, 9, 10, 18, 40),
      time4:'',
      time5:'',
      options1:{
        start:'06:00',
        end:'18:00',
        step:'00:15',
        minTime:'08:00',
        maxTime:'15:00'
      },
      options2:{
        selectableRange:'06:00:00-18:00:00'
      },
      options3:{
        selectableRange:'06:00:00-18:00:00'
      }
    }
  },
  methods:{
    getTime1(){
      console.log('blur事件被触发了，你选择的时间是：'+this.time1)
    },
    change1(){
      console.log('change事件被触发了')
    },
    focus1(){
      console.log('focus事件被触发了')
    },
    getTime2(){
      console.log('blur事件被触发了，你选择的时间是：'+this.time2)
    },
    change2(){
      console.log('change事件被触发了')
    },
    focus2(){
      console.log('focus事件被触发了')
    },
    getTime3(){
      console.log('blur事件被触发了，你选择的时间是：'+this.time3)
    },
    change3(){
      console.log('change事件被触发了')
    },
    focus3(){
      console.log('focus事件被触发了')
    }
  }
}
</script>

<style>

</style>


