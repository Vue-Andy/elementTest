<template>
  <div>
    <el-button :plain='true' @click='open'>打开消息提示</el-button>
    <el-button :plain='true' @click='openVn'>VNode</el-button>
    <el-button :plain="true" @click="open2" type='success'>成功</el-button>
    <el-button :plain="true" @click="open3" type='warning'>警告</el-button>
    <el-button :plain="true" @click="open" type='info'>消息</el-button>
    <el-button :plain="true" @click="open4" type='danger'>错误</el-button>
    <el-button :plain="true" @click="open5">文字居中</el-button>
    <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
  </div>
</template>

<script>
export default {
  name:'message',
  data(){
    return {}
  },
  methods:{
    open(){
      this.$message('这是一条提示消息')
    },
    openVn(){
      const h = this.$createElement
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        duration:0,
        showClose:true,
        onClose(vm){
          console.log(vm.duration,'你关闭了消息框')
        }
      })
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },
    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    },
    open4() {
      this.$message.error('错了哦，这是一条错误消息');
    },
    open5() {
      this.$message({
        message:'这是一条文本居中消息',
        center:true
      });
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: `<div>
          <strong>这是 <i>HTML</i> 片段</strong>
        </div>`,
        type:'info'
      });
    }
  }
}
</script>

<style>

</style>


