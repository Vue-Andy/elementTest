<template>
  <div>
    <h2>使用单一分栏创建基础的栅格布局。</h2>
    <!-- 
    一、Row Attributes
      gutter:	栅格间隔
      type:	布局模式，可选 flex，现代浏览器下有效
      justify:	flex 布局下的水平排列方式  start/end/center/space-around/space-between
      align:	flex 布局下的垂直排列方式 top/middle/bottom
      tag:	自定义元素标签
    -->
    <el-row>
      <!-- 
        一、Col Attributes
        span:	栅格占据的列数
        offset:	栅格左侧的间隔格数
        push:	栅格向右移动格数
        pull:	栅格向左移动格数
        xs:	<768px 响应式栅格数或者栅格属性对象
        sm:	≥768px 响应式栅格数或者栅格属性对象
        md:	≥992px 响应式栅格数或者栅格属性对象
        lg:	≥1200px 响应式栅格数或者栅格属性对象
        xl:	≥1920px 响应式栅格数或者栅格属性对象
        tag:	自定义元素标签
      -->
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row :gutter='20'>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around" align="middle">
      <el-col :span="6" :pull='1'><div class="grid-content bg-purple">6</div></el-col>
      <el-col :span="6" :push='1'><div class="grid-content bg-purple-light">6</div></el-col>
      <el-col :span="6" tag='button'><div class="grid-content bg-purple">6</div></el-col>
    </el-row>
    <!-- 
    附：Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：
      import 'element-ui/lib/theme-chalk/display.css';
      包含的类名及其含义为：
        hidden-xs-only - 当视口在 xs 尺寸时隐藏
        hidden-sm-only - 当视口在 sm 尺寸时隐藏
        hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏
        hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
        hidden-md-only - 当视口在 md 尺寸时隐藏
        hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏
        hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
        hidden-lg-only - 当视口在 lg 尺寸时隐藏
        hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏
        hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
        hidden-xl-only - 当视口在 xl 尺寸时隐藏 
    -->
    <el-row :gutter="10" tag='section'>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple hidden-lg-and-up">1</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">2</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">4</div></el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name:'layout'
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    height:200px;
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
