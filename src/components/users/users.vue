<template>
  <el-card class="box-card">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/users' }">用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col>
        <el-input autocomplete="off" placeholder="请输入内容" v-model="query" class="input-query" clearable>
          <el-button slot="append" icon="el-icon-search" @click.prevent="handleQuery"></el-button>
        </el-input>
        <el-button type='primary' plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格数据 -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      select: "",
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    };
  },
  methods:{
      handleQuery(){
          this.$message("查询")
      }
  }
};
</script>

<style scoped>
.box-card {
  height: 100%;
  /* background-color: cornflowerblue */
}
.el-input {
  width: 300px;
}
.input-query{
    margin-top: 10px;
}
</style>