<template>
  <div class='navMenu'>
    <h2>第一个导航</h2>
    <!--
    一、Menu Attribute
      mode: 确定菜单是水平还是垂直模式，可选值：horizontal / vertical，默认vertical
      collapse:	是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
      background-color:	菜单的背景色（仅支持 hex 格式）
      text-color:	菜单的文字颜色（仅支持 hex 格式）
      active-text-color:	当前激活菜单的文字颜色（仅支持 hex 格式）
      default-active:	当前激活菜单的 index
      default-openeds:	当前打开的sub-menu的 key 数组---只针对垂直模式内嵌子菜单且未collapse的情况有用，如果同unique-opened同时使用，最初可以显示多个子菜单
      unique-opened:	是否只保持一个子菜单的展开---只针对垂直模式内嵌子菜单能看出效果
      menu-trigger:	子菜单打开的触发方式(只在 mode 为 horizontal 时有效),默认值 hover
      router:	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
    二、Menu Methods
      open:	展开指定的 sub-menu	index: 需要打开的 sub-menu 的 index --- this.$refs.menu3.open('3-2')
      close:	收起指定的 sub-menu	index: 需要收起的 sub-menu 的 index
    三、Menu Events
      select:	菜单激活回调	index: 选中菜单项的 index, indexPath: 选中菜单项的 index path --- 水平模式只能用select
      open:	sub-menu 展开的回调	index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path
      close:	sub-menu 收起的回调	index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path
    -->
    <el-menu mode='horizontal' background-color='#99DD00' text-color='#000088' active-text-color='#FF3333'
      default-active="1-1" menu-trigger='hover' @select='select' @open='open' @close="close">
      <!--
      一、Menu-Item Attribute
        index	唯一标志
        route	Vue Router 路径对象
      -->
    	<el-menu-item index='1-1' route='{name:"tabs",path:"/navigation/tabs"}'>导航一</el-menu-item>
      <!--
      一、SubMenu Attribute
        index:	唯一标志
        show-timeout:	展开 sub-menu 的延时  -- 不能直接绑定数字，得用变量，用数字可以生效，但会报错,对水平的子菜单有用，对垂直的没用
        hide-timeout:	收起 sub-menu 的延时  -- 不能直接绑定数字，得用变量，用数字可以生效，但会报错,对水平的子菜单有用，对垂直的没用
      -->
      <el-submenu index="1-2" :show-timeout='num1' :hide-timeout='num2'>
        <template slot="title">导航二</template>
        <el-menu-item index="1-2-1">选项1</el-menu-item>
        <el-menu-item index="1-2-2">选项2</el-menu-item>
        <el-menu-item index="1-2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="1-3">
        <template slot="title">导航三</template>
        <el-menu-item index="1-3-1">选项1</el-menu-item>
        <el-menu-item index="1-3-2">选项2</el-menu-item>
        <el-menu-item index="1-3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <h2>第二个导航</h2>
    <el-menu @select='select' @open="open" @close="close" unique-opened :default-openeds="openeds">
    	<el-menu-item index='2-1'>导航一</el-menu-item>
    	<el-menu-item index='2-2'>导航二</el-menu-item>
      <el-submenu index="2-3">
        <template slot="title">导航三</template>
        <el-menu-item index="2-3-1">选项1</el-menu-item>
        <el-menu-item index="2-3-2">选项2</el-menu-item>
        <el-menu-item index="2-3-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2-4">
        <template slot="title">导航四</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <button @click='isCollapse=!isCollapse'>click me</button>
    <h2>第三个导航</h2>
    <el-menu :collapse='!isCollapse' mode='vertical' unique-opened @select='select' @open='open' @close="close" ref='menu3'>
    	<el-menu-item index='3-1'>导航一</el-menu-item>
      <el-submenu index='3-2'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <!-- 
        一、Menu-Group Attribute
          title:	分组标题
        -->
      	<el-menu-item-group title='分组一'>
          <el-menu-item index='3-2-1-1'>导航3-2-1-1</el-menu-item>
          <el-menu-item index='3-2-1-2'>导航3-2-1-2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index='4-2'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
      	<el-menu-item-group title='分组一'>
          <el-menu-item index='4-3-1-1'>导航4-3-1-1</el-menu-item>
          <el-menu-item index='4-3-1-2'>导航4-3-1-2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">分组二</span>
          <el-menu-item index='4-3-2-1'>导航4-3-2-1</el-menu-item>
          <el-menu-item index='4-3-2-2'>导航4-3-2-2</el-menu-item>
          <el-submenu index='4-3-2-3'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航4-3-2-3</span>
            </template>
            <el-menu-item index='4-3-2-3-1'>导航4-3-2-3-1</el-menu-item>
            <el-menu-item index='4-3-2-3-2'>导航4-3-2-3-2</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <h2>第四个导航</h2>
    <el-menu router @open='open' @select='select' @close='close'>
      <el-menu-item index='/tabs'>tabs</el-menu-item>
      <el-menu-item index='/steps'>steps</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse:true,
      num1:1000,
      num2:100,
      openeds:['2-3','2-4']
    }
  },
  methods:{
    select(index,indexPath) {
      console.log("select--index:"+index+"--indexPath:"+indexPath)
    },
    open(index,indexPath) {
      console.log("open--index:"+index+"--indexPath:"+indexPath)
    },
    close(index,indexPath) {
      console.log("close--index:"+index+"--indexPath:"+indexPath)
    }
  },
  mounted() {
    console.log(this)
    this.$refs.menu3.open('3-2')
  }
}
</script>

<style>

</style>
