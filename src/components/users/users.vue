<template>
  <el-card class="box-card">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/users' }">用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col>
        <el-input
          autocomplete="off"
          placeholder="请输入内容"
          v-model="query"
          class="input-query"
          clearable
        >
          <el-button slot="append" icon="el-icon-search" @click.prevent="handleQuery"></el-button>
        </el-input>
        <el-button type="primary" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格数据 -->
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="id" label="#" width="60"></el-table-column>
      <el-table-column prop="username" label="姓名" width="100"></el-table-column>
      <el-table-column prop="role_name" label="角色名称" width="100"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="create_time" label="创建时间"></el-table-column>
      <el-table-column type prop="mg_state" label="状态"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      select: "",
      users: [],
      pagenum: 1,
      pagesize: 10,
      total: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    handleQuery() {
      //   this.$message("查询")
      this.getUserList();
    },
    async getUserList() {
      const token = localStorage.getItem("token");
      //   this.$http.default.headers.common["Authorization"] = token;
      this.$http.defaults.headers.common["Authorization"] = token;
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
      );
      // this.users=res.data.data.users
      console.log(res);
      const { status, statusText } = res;
      if (status === 200) {
        const {
          meta: { msg, status }
        } = res.data;

        //   console.log(msg)
        if (status === 200) {
          const {
            data: { total, pagenum, users }
          } = res.data;
          //1、给表格数据赋值
          this.users = users;
          //2、给total赋值
          this.total = total;

          //3、提示msg信息
          this.$message.success(msg);
        } else {
          this.$message.error(msg);
        }
      } else {
        this.$message.error(statusText);
      }
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
.input-query {
  margin-top: 10px;
}
</style>