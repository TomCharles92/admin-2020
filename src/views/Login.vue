<template>
  <div class="login-container">
    <el-form :model="loginForm" class="login-form">
      <el-form-item>
        <el-input v-model="loginForm.account" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-button type="primary" class="login-button" @click="login">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {}
    };
  },
  created() {},
  methods: {
    login() {
      this.$axios.get("login.json").then(res => console.log(res));
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #2d3a4b;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
    color: #fff;
    .login-button {
      width: 100%;
    }
  }
}
</style>