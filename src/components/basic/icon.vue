<template>
  <div>
    <i v-for='(icon,index) in icons' :key='index' :class="'el-icon-'+icon.name"></i>
    <br/>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="danger" icon="el-icon-delete">删除</el-button>
  </div>
</template>

<script>
export default {
  name:'icon',
  data() {
    return {
      icons:[
        {id:0,name:'upload'},
        {id:1,name:'error'},
        {id:2,name:'success'},
        {id:3,name:'warning'},
        {id:4,name:'sort-down'},
        {id:5,name:'sort-up'},
        {id:6,name:'arrow-left'},
        {id:7,name:'circle-plus'},
        {id:8,name:'circle-plus-outline'},
        {id:9,name:'arrow-down'},
        {id:10,name:'arrow-right'},
        {id:11,name:'arrow-up'}
      ]
    }
  }
}
</script>

<style>
  i{
    display:inline-block;
  }
</style>


