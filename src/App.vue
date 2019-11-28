<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerCon>
          <!-- <span slot='first'>first slot</span>
          <span slot='second'>second slot</span>
          <span>我是插槽内容</span> -->
          <template slot-scope="param">
            <span v-for="item in param.data" :key="item.id">
              {{item}}
            </span>
          </template>
        </headerCon>
      </el-header>
      <el-container style='display:flex;position:absolute;bottom:60px;top:60px;left:0;right:0;'>
        <transition name='el-zoom-in-center'>
          <!-- 手写模式 -->
          <!-- <el-aside width="260px" v-show='isSpread'>
            <div class="navItem" v-for='(item,index) in menuList' :key='index+"el"'>
              <span v-if='!item.path'>{{item.name}}</span>
              <router-link v-else :to='item.path'>{{item.name}}</router-link>
            </div>
          </el-aside> -->
          <!-- 子菜单模式 -->
          <!-- <el-menu router unique-opened v-show='isSpread'>
          	<el-submenu v-for='item in menuList1' :index='String(item[0].id)'>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item[0].name}}</span>
              </template>
              <el-menu-item v-for='(sub_item,index) in item' :index="sub_item.path" v-if='index > 0'>{{sub_item.name}}</el-menu-item>
            </el-submenu>
          </el-menu> -->
          <!-- 分组模式 -->
          <el-menu router unique-opened v-show='isSpread'>
          	<el-menu-item-group v-for='item in menuList1' :index='String(item[0].id)' :key='String(item[0].id)'>
              <template slot="title">{{item[0].name}}</template>
              <el-menu-item v-for='(sub_item,index) in item' :index="sub_item.path" v-if='index > 0' :key='sub_item.path'>{{sub_item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </transition>
        
        <el-main style='flex:1;overflow:hidden;'>
          <div class="spread">
            <el-button round  @click='isSpread=!isSpread'>{{isSpread?'收起':'展开'}}</el-button>
          </div>
          <transition name="slide-fade">
            <router-view/>
          </transition>
        </el-main>
      </el-container>
      <el-footer style='position:absolute;bottom:0;width:100%;background:#999;'>aaa</el-footer>
    </el-container>
  </div>
</template>

<script>
import headerCon from '../src/components/common/header'
export default {
  name: 'App',
  data() {
    return {
      isSpread:true,
      show:false,
      menuList:[
        {id:0,name:'basic'},
        {id:1,name:'Layout 布局',path:'/layout'},
        {id:2,name:'Container 布局容器',path:'/container'},
        {id:3,name:'Color 色彩',path:'/color'},
        {id:4,name:'Typography 字体',path:'/typography'},
        {id:5,name:'Icon 图标',path:'/icon'},
        {id:6,name:'Button 按钮',path:'/button'},

        {id:7,name:'form'},
        {id:8,name:'Radio 单选框',path:'/radio'},
        {id:9,name:'Checkbox 多选框',path:'/checkbox'},
        {id:10,name:'Input 输入框',path:'/input'},
        {id:11,name:'InputNumber 计数器',path:'/inputNumber'},
        {id:12,name:'Select 选择器',path:'/select'},
        {id:13,name:'Cascader 级联选择器',path:'/cascader'},
        {id:14,name:'Switch 开关',path:'/switch'},
        {id:15,name:'Slider 滑块',path:'/slider'},
        {id:16,name:'TimePicker 时间选择器',path:'/timePicker'},
        {id:17,name:'DatePicker 日期选择器',path:'/datePicker'},
        {id:18,name:'DateTimePicker 日期时间选择器',path:'/dateTimePicker'},
        {id:19,name:'Upload 上传',path:'/upload'},
        {id:20,name:'Rate 评分',path:'/rate'},
        {id:21,name:'ColorPicker 颜色选择器',path:'/colorPicker'},
        {id:22,name:'Transfer 穿梭框',path:'/transfer'},
        {id:23,name:'Form 表单',path:'/form'},

        {id:24,name:'data'},
        {id:25,name:'Table 表格',path:'/table'},
        {id:26,name:'Tag 标签',path:'/tag'},
        {id:27,name:'Progress 进度条',path:'/progress'},
        {id:28,name:'Tree 树形控件',path:'/tree'},
        {id:29,name:'Pagination 分页',path:'/pagination'},
        {id:30,name:'Badge 标记',path:'/badge'},

        {id:31,name:'notice'},
        {id:32,name:'Alert 警告',path:'/alert'},
        {id:33,name:'Loading 加载',path:'/loading'},
        {id:34,name:'Message 消息提示',path:'/message'},
        {id:35,name:'MessageBox 弹框',path:'/messageBox'},
        {id:36,name:'Notification 通知',path:'/notification'},

        {id:37,name:'navigation'},
        {id:38,name:'NavMenu 导航菜单',path:'/navMenu'},
        {id:39,name:'Tabs 标签页',path:'/tabs'},
        {id:40,name:'Breadcrumb 面包屑',path:'/breadCrumb'},
        {id:41,name:'Dropdown 下拉菜单',path:'/dropdown'},
        {id:42,name:'Steps 步骤条',path:'/steps'},

        {id:43,name:'others'},
        {id:44,name:'Dialog 对话框',path:'/dialog'},
        {id:45,name:'Tooltip 文字提示',path:'/tooltip'},
        {id:46,name:'Popover 弹出框',path:'/popover'},
        {id:47,name:'Card 卡片',path:'/card'},
        {id:48,name:'Carousel 走马灯',path:'/carousel'},
        {id:49,name:'Collapse 折叠面板',path:'/collapse'}
      ],
      menuList1:[
        [
          {id:0,name:'basic'},
          {id:1,name:'Layout 布局',path:'/layout'},
          {id:2,name:'Container 布局容器',path:'/container'},
          {id:3,name:'Color 色彩',path:'/color'},
          {id:4,name:'Typography 字体',path:'/typography'},
          {id:5,name:'Icon 图标',path:'/icon'},
          {id:6,name:'Button 按钮',path:'/button'},
        ],[
          {id:7,name:'form'},
          {id:8,name:'Radio 单选框',path:'/radio'},
          {id:9,name:'Checkbox 多选框',path:'/checkbox'},
          {id:10,name:'Input 输入框',path:'/input'},
          {id:11,name:'InputNumber 计数器',path:'/inputNumber'},
          {id:12,name:'Select 选择器',path:'/select'},
          {id:13,name:'Cascader 级联选择器',path:'/cascader'},
          {id:14,name:'Switch 开关',path:'/switch'},
          {id:15,name:'Slider 滑块',path:'/slider'},
          {id:16,name:'TimePicker 时间选择器',path:'/timePicker'},
          {id:17,name:'DatePicker 日期选择器',path:'/datePicker'},
          {id:18,name:'DateTimePicker 日期时间选择器',path:'/dateTimePicker'},
          {id:19,name:'Upload 上传',path:'/upload'},
          {id:20,name:'Rate 评分',path:'/rate'},
          {id:21,name:'ColorPicker 颜色选择器',path:'/colorPicker'},
          {id:22,name:'Transfer 穿梭框',path:'/transfer'},
          {id:23,name:'Form 表单',path:'/form'},
        ],[
          {id:24,name:'data'},
          {id:25,name:'Table 表格',path:'/table'},
          {id:26,name:'Tag 标签',path:'/tag'},
          {id:27,name:'Progress 进度条',path:'/progress'},
          {id:28,name:'Tree 树形控件',path:'/tree'},
          {id:29,name:'Pagination 分页',path:'/pagination'},
          {id:30,name:'Badge 标记',path:'/badge'},
        ],[
          {id:31,name:'notice'},
          {id:32,name:'Alert 警告',path:'/alert'},
          {id:33,name:'Loading 加载',path:'/loading'},
          {id:34,name:'Message 消息提示',path:'/message'},
          {id:35,name:'MessageBox 弹框',path:'/messageBox'},
          {id:36,name:'Notification 通知',path:'/notification'},
        ],[
          {id:37,name:'navigation'},
          {id:38,name:'NavMenu 导航菜单',path:'/navMenu'},
          {id:39,name:'Tabs 标签页',path:'/tabs'},
          {id:40,name:'Breadcrumb 面包屑',path:'/breadCrumb'},
          {id:41,name:'Dropdown 下拉菜单',path:'/dropdown'},
          {id:42,name:'Steps 步骤条',path:'/steps'},
        ],[
          {id:43,name:'others'},
          {id:44,name:'Dialog 对话框',path:'/dialog'},
          {id:45,name:'Tooltip 文字提示',path:'/tooltip'},
          {id:46,name:'Popover 弹出框',path:'/popover'},
          {id:47,name:'Card 卡片',path:'/card'},
          {id:48,name:'Carousel 走马灯',path:'/carousel'},
          {id:49,name:'Collapse 折叠面板',path:'/collapse'},
        ]
      ]
    }
  },
  components:{ headerCon },
  beforeMount(){

  },
  mounted(){
    this.show = !this.show
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
.spread{
  text-align:left;
}
a{
  display:block;
  height:20px;
  line-height:20px;
  font-size:14px;
  text-align: left;
  text-decoration: none;
  color:#333;
}
a:hover{
  color:rgb(28, 81, 228);
}
a.router-link-active{
  font-weight: bold;
  color:rgb(28, 81, 228);
}
.navItem span{
  display:block;
  font-size:16px;
  font-weight: bold;
  color:bisque;
  height:30px;
  line-height:30px;
  border-bottom:1px solid #0aa1ed;
  border-top:1px solid #0aa1ed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  height: 60px;
  line-height:60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  padding:29px;
}
.el-aside::-webkit-scrollbar {
  display: none;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

.slide-fade-enter-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate(100px,100px) rotate(360deg);
  opacity: 0;
}
.slide-fade-leave-to{
  transform: translate(0px,-100px);
  opacity: 0;
}
.routeItem{
  color:green;
  height:30px;
  line-height:30px;
}
.subMenuItem{
  color:red;
  height:30px;
  line-height:30px;
}
.el-menu{
  overflow:auto;
  box-sizing: border-box;
  padding:30px 0;
}
.el-menu::-webkit-scrollbar {
  display: none;
}
</style>
