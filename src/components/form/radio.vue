<template>
  <div>
    <div>
      <el-radio v-model="radio1" label="1">备选项</el-radio>
      <el-radio v-model="radio1" label="2">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="3">备选项</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model='radio2' @change='change2'>
        <el-radio :label='3'>备选项</el-radio>
        <el-radio :label='6'>备选项</el-radio>
        <el-radio :label='9'>备选项</el-radio>
      </el-radio-group>
    </div>
    <div>
      <el-radio-group v-model='radio3' text-color='#333' fill='#0aa1ed'>
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio4" size="medium">
        <el-radio-button label="上海" ></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio5" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled ></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio6" disabled size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
      <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
      <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio9" size="small">
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border disabled>备选项2</el-radio>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio10" size="mini" disabled>
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border>备选项2</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name:'radio',
  data(){
    return {
      radio1:'1',
      radio2:6,
      radio3:'北京',
      radio4:'北京',
      radio5:'北京',
      radio6:'北京',
      radio7: '1',
      radio8: '1',
      radio9: '1',
      radio10: '1'
    }
  },
  methods:{
    change2(val){
      console.log(val)
    }
  }
}
</script>

<style>

</style>


