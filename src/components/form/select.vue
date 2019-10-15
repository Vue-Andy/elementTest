<template>
  <div>
    <div>
      <el-tag>基础用法+禁用选项</el-tag>
      <el-select v-model="value" placeholder="请选择" @change='change'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
    <div style='margin-top:20px;'>
      <el-tag>禁用状态-禁用整个下拉选择框</el-tag>
      <el-select disabled v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
    <div style='margin-top:20px;'>
      <el-tag>可清空单选-只适合单选</el-tag>
      <el-select clearable v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
    <div style='margin-top:20px;'>
      <el-tag>基础多选</el-tag>
      <el-select v-model="value3" multiple placeholder="请选择" @change='change1'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select
        v-model="value4"
        multiple
        collapse-tags
        style="margin-left: 20px;"
        placeholder="请选择"
        @change='change2'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div style='margin-top:20px;'>
      <el-tag>自定义模板</el-tag>
      <el-select v-model="value6" placeholder="请选择">
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
    </div>
    <div style='margin-top:20px;'>
      <el-tag>分组</el-tag>
      <el-select v-model="value7" placeholder="请选择">
        <el-option-group
          v-for="group in options3"
          :key="group.label"
          :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </div>
  </div>
  
</template>

<script>
export default {
  name:'selectCon',
  data(){
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎',
        disabled:true
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      value6: '',
      options3: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      value7: ''
    }
  },
  methods:{
    change(val){
      console.log(val)
    },
    change1(val){
      console.log(val)
    },
    change2(val){
      console.log(val)
    }
  }
}
</script>

<style>

</style>


