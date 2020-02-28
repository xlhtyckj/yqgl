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
          @clear="handleQuery"
        >
          <el-button slot="append" icon="el-icon-search" @click.prevent="handleQuery" ></el-button>
        </el-input>
        <el-button type="primary" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格数据 -->
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="id" label="#" width="60"></el-table-column>
      <el-table-column prop="username" label="姓名" width="100"></el-table-column>
      <el-table-column prop="role_name" label="角色名称"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <!-- 过滤器使用，原使用方法：{{create_time | fmtdate}} -->
      <!-- 如果单元格内显示的内容不是字符串（文本），需要给被显示的内容外层包裹一个template -->
      <!-- template 内部要用数据 设置slot-scope 属性，该属性的值是要用数据create_time 的数据源users -->
      <!-- slot-scope 的值users其实就是el-table绑定的数据users，
      users.row-> 数组中的每个对象-->
      <!-- slot-scope 属性会自动寻找上一级数据源，并将数据源赋值给slot-scope的属性值scope -->
      <el-table-column prop="create_time" label="创建时间"></el-table-column>

      <el-table-column label="创建时间" with="10">
        <template slot-scope="scope">{{scope.row.create_time | fmtdate}}</template>
      </el-table-column>

      <el-table-column label="状态" width="60">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template>
          <el-row>
            <el-button size="mini" plain type="primary" icon="el-icon-edit" circle></el-button>
            <el-button size="mini" plain type="danger" icon="el-icon-delete" circle></el-button>
            <el-button size="mini" plain type="success" icon="el-icon-check" circle></el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页功能 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[1,5 ,10, 100]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
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
      pagesize: 1,
      total: 0
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize=val
      this.pagenum=1
      this.getUserList()
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pagenum=val
      this.getUserList()
      console.log(`当前页: ${val}`);
    },
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