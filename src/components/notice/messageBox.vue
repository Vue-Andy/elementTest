<template>
  <div>
    <el-tag>消息提示</el-tag>--
    <el-button type="success" @click="open">点击打开 Message Box</el-button><br/>
    <el-tag>消息确认框</el-tag>--
    <el-button type="warning" @click="open2">删除数据</el-button><br/>
    <el-tag>提交内容</el-tag>--
    <el-button type="info" @click="open3">验证邮箱</el-button><br/>
  </div>
</template>

<script>
export default {
  name:'messageBox',
  data(){
    return {}
  },
  methods:{
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('你执行了删除操作')
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        console.log('你已取消了删除操作')
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    open3() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  }
}
</script>

<style>

</style>


