<template>
  <div>
    <el-form :rules='rules' :model='form' ref='form'>
      <el-form-item label='拼团活动名称：' prop='groupName'>
        <el-input v-model="form.groupName" class="w400" :readonly="type=='check'"></el-input>
      </el-form-item>
      <el-form-item label='活动有效时间：' prop='efficialTime'>
        <el-date-picker v-model="form.efficialTime" type="datetimerange" :readonly="type=='check'" range-separator="至"
          start-placeholder="开始时间" value-format="yyyy-MM-dd HH:mm:ss" end-placeholder="结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label='商品原价：' prop='skuPrice'>
        <el-input v-model="form.skuPrice" class="w225" :readonly="type=='check'"></el-input>
        <p>商品原价会展示给客户，请慎重合理填写，有利于拼团成功</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let validatePrice = (rule, value, callback) => {
      let reg = new RegExp('(^\\d+[.]{1}\\d{1,2}$)|(^\\d+$)');
      if(!reg.test(value)) {
        callback(new Error('价格只能输入整数或至多两位小数'))
      } else if(value.indexOf('.') > 7 || (value.indexOf('.') == -1 && value.length > 7)){
        callback(new Error('价格最大只能7位整数'))
      } else {
        callback();  // 不能少
      }
    }
    return {
      form:{
        groupName:'',
        efficialTime: [],
        efficialDay: '',
        skuPrice:''
      },
      type:'edit',
      rules:{
        groupName:[
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        efficialTime:[
          {required:true,message:'时间为必填'}
        ],
        skuPrice:[
          { required:true, message:'价格为必填', trigger:'blur'},
          { validator:validatePrice, trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style>

</style>


