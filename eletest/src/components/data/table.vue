<template>
  <div>
    <div>{{sex|gender|extendGender}}</div>

    <el-table
      v-loading='loading'
      ref='myTable'
      :data='tableData'
      max-height='600'
      size='medium'
      :highlight-current-row='isHighlight'
      @current-change='handleCurrentChange'
      border
      :show-header='isShowheader'
      stripe
      :fit='isfit'
      :row-class-name="hasZeroOrFiveInId"
      :row-style='setRowStyle'
      style="width: 100%">
      <el-table-column type='selection'></el-table-column>
      <el-table-column type='index' fixed></el-table-column>
      <el-table-column
        prop='id'
        label='编号'
        width='50'
        fixed
      ></el-table-column>
      <el-table-column label='基本信息' align='center'>
        <el-table-column
          prop='name'
          label='姓名'
          width='100'
        ></el-table-column>
        <el-table-column
          prop='gender'
          label='性别'
          width='100'
          :formatter='formatGender'
        ></el-table-column>
        <el-table-column
          prop='age'
          label='年龄'
          width='100'
        ></el-table-column>
        <el-table-column
          prop='birthDate'
          label='出生日期'
          :formatter='formatBirthday'
        ></el-table-column>
      </el-table-column>
      <el-table-column label='地址信息' align='center'>
        <el-table-column
          prop='site'
          label='籍贯'
          width='200'
        ></el-table-column>
        <el-table-column
          prop='addr'
          label='现住市名'
          width='100'
        ></el-table-column>
        <el-table-column
          width='400'
          prop='detail'
          label='详细地址'
          show-overflow-tooltip
        ></el-table-column>
      </el-table-column>
      <el-table-column
        width='200'
        label='操作'
        fixed='right'
        align='center'
      >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button @click.native.prevent="deleteData(scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange1"
      :current-page.sync="currentPage"
      :page-sizes="[5, 10, 25]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="50">
    </el-pagination>
    <div style="margin-top: 20px">
      <el-button @click='loading=!loading'>切换加载</el-button>
      <el-button @click="setCurrent(tableData[2])" v-changeColor>选中第三行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'tableCom',
  data(){
    return {
      loading:true,
      sex:'male',
      isfit:true,
      isShowheader:true,
      isHighlight:true,
      currentRow: null,
      isShowTooltip:true,  // :show-oveflow-tooltip='isShowTooltip'
      pageSize:10,
      currentPage:1,
      tableData:[],
      tableData1:[{
        id:0,name:'pzh0',gender:'male',age:'0',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:1,name:'pzh1',gender:'female',age:'1',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:2,name:'pzh2',gender:'male',age:'2',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:3,name:'pzh3',gender:'female',age:'3',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:4,name:'pzh4',gender:'female',age:'4',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:5,name:'pzh5',gender:'male',age:'5',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:6,name:'pzh6',gender:'female',age:'6',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:7,name:'pzh7',gender:'male',age:'7',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:8,name:'pzh8',gender:'male',age:'8',birthDate:'19990219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:9,name:'pzh9',gender:'male',age:'9',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:10,name:'pzh10',gender:'female',age:'10',birthDate:'19890319',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:11,name:'pzh11',gender:'male',age:'11',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:12,name:'pzh12',gender:'male',age:'12',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:13,name:'pzh13',gender:'male',age:'13',birthDate:'19890519',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:14,name:'pzh14',gender:'male',age:'14',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:15,name:'pzh15',gender:'female',age:'15',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:16,name:'pzh16',gender:'male',age:'16',birthDate:'19890919',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:17,name:'pzh17',gender:'female',age:'17',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:18,name:'pzh18',gender:'female',age:'18',birthDate:'19891219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:19,name:'pzh19',gender:'male',age:'19',birthDate:'19891219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      },{
        id:20,name:'pzh0',gender:'male',age:'0',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:21,name:'pzh1',gender:'female',age:'1',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:22,name:'pzh2',gender:'male',age:'2',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:23,name:'pzh3',gender:'female',age:'3',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:24,name:'pzh4',gender:'female',age:'4',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:25,name:'pzh5',gender:'male',age:'5',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:26,name:'pzh6',gender:'female',age:'6',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:27,name:'pzh7',gender:'male',age:'7',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:28,name:'pzh8',gender:'male',age:'8',birthDate:'19990219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:29,name:'pzh9',gender:'male',age:'9',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:30,name:'pzh0',gender:'male',age:'0',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:1,name:'pzh1',gender:'female',age:'1',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:32,name:'pzh2',gender:'male',age:'2',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:33,name:'pzh3',gender:'female',age:'3',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:34,name:'pzh4',gender:'female',age:'4',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:35,name:'pzh5',gender:'male',age:'5',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:36,name:'pzh6',gender:'female',age:'6',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:37,name:'pzh7',gender:'male',age:'7',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:38,name:'pzh8',gender:'male',age:'8',birthDate:'19990219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:39,name:'pzh9',gender:'male',age:'9',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:40,name:'pzh0',gender:'male',age:'0',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:41,name:'pzh1',gender:'female',age:'1',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:42,name:'pzh2',gender:'male',age:'2',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:43,name:'pzh3',gender:'female',age:'3',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:44,name:'pzh4',gender:'female',age:'4',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:45,name:'pzh5',gender:'male',age:'5',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:46,name:'pzh6',gender:'female',age:'6',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:47,name:'pzh7',gender:'male',age:'7',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:48,name:'pzh8',gender:'male',age:'8',birthDate:'19990219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }, {
        id:49,name:'pzh9',gender:'male',age:'9',birthDate:'19890219',site:'湖南-衡阳',addr:'长沙',detail:'湖南省长沙市高新区尖山路39号中电软件园一期7栋厂房303室'
      }]
    }
  },
  directives: {
    changeColor: {
      // 指令的定义
      inserted: function (el) {
        el.style.color='blue'
      }
    }
  },
  filters: {
    gender(value) {
      return value === 'male' ? '男' : '女'
    },
    extendGender(value){
      return '肌肉'+value
    }
  },
  created(){
    this.tableData = this.tableData1.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage)
  },
  methods:{
    // row-class-name设置
    hasZeroOrFiveInId(row, rowIndex) {
      if (row.rowIndex.toString().indexOf('0') !== -1) {
        return 'hasZero'
      }else if(row.rowIndex.toString().indexOf('5') !== -1){
        return 'hasFive'
      }
      return ''
    },
    // row-style设置
    setRowStyle(row, rowIndex){
      if(row.rowIndex === 5){
        return 'color:green'
      }
    },
    formatGender(row, column, cellValue){
      return cellValue === 'male' ? '男' : '女'
    },
    formatBirthday(row, column, cellValue){
      return cellValue.slice(0,4) + "年" + (cellValue.slice(4,5) == "0" ? cellValue.slice(5,6) : cellValue.slice(4,6)) + '月' + 
      (cellValue.slice(6,7) == '0' ? cellValue.slice(7,8) : cellValue.slice(6)) + '日'
    },
    handleSizeChange(val){
      this.pageSize = val
      this.tableData = this.tableData1.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage)
    },
    handleCurrentChange1(val){
      console.log(val)
      this.currentPage = val
      this.tableData = this.tableData1.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage)
    },
    // 查看
    handleClick(rowData){
      console.log(rowData)
    },
    // 删除
    deleteData(index){
      this.tableData.splice(index,1)
    },
    // current-change点击行事件
    handleCurrentChange(currentRow,oldCurrentRow){
      console.log(currentRow,oldCurrentRow)
      this.currentRow = currentRow
    },
    // 单选--为何取消选择无效？？？
    setCurrent(row){
      console.log(arguments[0])
      this.$refs.myTable.setCurrentRow(row);
    },
    // 多选
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.myTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.myTable.clearSelection()
      }
    },
    // 取消多选
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted(){
    this.$refs.myTable.setCurrentRow(this.tableData[0]);
  }
}
</script>

<style>
.el-table .hasZero {
  background: oldlace;
}
.el-table .hasFive {
  font-weight: bold;
  /* background:brown; */
}
</style>


