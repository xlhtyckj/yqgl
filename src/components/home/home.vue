<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="1">
          <div>
            <img src="@/assets/img/logo.png" alt="logo" class="logo" />
          </div>
        </el-col>
        <el-col :span="22">
          <div class="title">
            <h2>管理系统</h2>
          </div>
        </el-col>
        <el-col :span="1">
          <div>
            <a href="#" class="loginout">
              <el-button @click.prevent="handleSignOut()">退出</el-button>
            </a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="220px" height="100%">
        <el-menu background-color="#fff" :router="true">
          <!-- 1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users">
              <i class="el-icon-user-solid"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="roles">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              <span slot="title">商品列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i>
              <span slot="title">分类参数</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <i class="el-icon-menu"></i>
              <span slot="title">商品分类</span>
            </el-menu-item>
          </el-submenu>
          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-menu"></i>
              <span slot="title">订单列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>统计管理</span>
            </template>
            <el-menu-item index="5-1">
              <i class="el-icon-menu"></i>
              <span slot="title">统计列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
      <!-- <el-footer class="footer">底部</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    handleSignOut() {
      // alert("signout")
      this.$confirm("确定要退出吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          localStorage.clear();
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          this.$router.push({ name: "login" });
        })
        .catch(() => {
          this.$message({
            type: "inof",
            message: "取消退出！"
          });
        });
    }
  }
};
</script>

<style scoped>
.title {
  /* height: 54px; */
  text-align: left;
  margin-left: 10px;
  line-height: 20px;
  /* color: #FFD700; */
  color: #b3c0d1;
}

.loginout {
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  color: #fff;
}
.logo {
  height: 54px;
  margin-top: 0px;
  margin-left: -10px;
}
.container {
  height: 100%;
}
.header {
  background-color: #2d2e2e;
  border-radius: 0 px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.aside {
  background-color: #d7dfe9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  overflow: auto;
}
.main {
  background-color: #e9eef3;
}
.footer {
  background-color: #b3c0d1;
}
</style>