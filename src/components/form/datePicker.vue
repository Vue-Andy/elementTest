<template>
  <div>
    <el-tag>默认</el-tag>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      @blur='getDateTime(1)'
      @change='change(1)'
      @focus="focus(1)">
    </el-date-picker>
    <el-tag>带快捷键选项</el-tag>
    <el-date-picker
      v-model="value2"
      type="date"
      align='center'
      placeholder="选择日期"
      :picker-options="pickerOptions1"
      @blur='getDateTime(2)'
      @change='change(2)'
      @focus="focus(2)">
    </el-date-picker>
    <br/>
    <el-tag>周</el-tag>
    <el-date-picker
      v-model="value3"
      type="week"
      format="yyyy 第 WW 周"
      @blur='getDateTime(3)'
      @change='change(3)'
      @focus="focus(3)">
      placeholder="选择周">
    </el-date-picker>
    <el-tag>月</el-tag>
    <el-date-picker
      v-model="value4"
      type="month"
      format="yyyy 第 MM 月"
      @blur='getDateTime(4)'
      @change='change(4)'
      @focus="focus(4)">
      placeholder="选择月">
    </el-date-picker>
    <el-tag>年</el-tag>
    <el-date-picker
      v-model="value5"
      type="year"
      @blur='getDateTime(5)'
      @change='change(5)'
      @focus="focus(5)">
      placeholder="选择年">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name:'datePicker',
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      pickerOptions1:{
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      }
    }
  },
  methods:{
    getDateTime(param){
      var val = param === 1 ? this.value1 : 
      (param === 2 ? this.value2 : 
        (param === 3 ? this.value3 :
          param === 4 ? this.value4 : this.value5
        )
      )
      console.log('blur方法被触发了，你选择的日期是：'+ val)
    },
    change(param){
      var val = param === 1 ? this.value1 : 
      (param === 2 ? this.value2 : 
        (param === 3 ? this.value3 :
          param === 4 ? this.value4 : this.value5
        )
      )
      console.log('change方法被触发了,你选择的日期是：'+val)
    },
    focus(param){
      console.log('focus方法被触发了')
    }
  }

}
</script>

<style>

</style>
