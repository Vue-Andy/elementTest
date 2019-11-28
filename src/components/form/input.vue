<template>
  <div class="input">
    <!--suffix和prefix设置图标位置，有属性设置和slot设置两种方式-->
    <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="date1" value="10-25"></el-input>
    <el-input placeholder="请选择日期" v-model="date2">
      <i slot="prefix" class="el-input__icon el-icon-date"></i>
    </el-input>
    <!--通过rows控制高度和行数-->
    <el-input type="textarea" :rows="2" v-model="remark1"></el-input>
    <!--通过autosize自适应高度，还可绑定对象设置最小行数和最大行数-->
    <el-input type="textarea" :autosize="{minRows:2,maxRows:5}" v-model="remark2"></el-input>
    <!--通过slot组装复合型输入框-->
    <el-input v-model="website">
      <template slot="prepend">http://</template>
    </el-input>
    <el-input v-model="email">
      <template slot="append">.com</template>
    </el-input>
    <el-input placeholder="请输入内容" v-model="tel" class="input-with-select">
      <el-select v-model="siteName" slot="prepend" placeholder="请选择">
        <el-option label="家" value="1"></el-option>
        <el-option label="公司" value="2"></el-option>
        <el-option label="休闲场所" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <!--远程搜索-->
    <el-autocomplete v-model="content" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"
    ></el-autocomplete>

    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date1:'',
      date2:'',
      remark1:'',
      remark2:'',
      website:'',
      email:'',
      tel:'',
      siteName:'1',
      content:'',
      restaurants:[]
    }
  },
  methods:{
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" }
      ]
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    submit() {
      console.log(
        [this.date1,this.date2,this.remark1,this.remark2,this.website,this.email,this.tel,this.siteName,this.content]
      )
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
}
</script>
<!--  加了scope就不起作用了 -->
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>


