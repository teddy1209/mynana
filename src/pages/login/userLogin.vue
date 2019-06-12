<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import request from "@/utils/request";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  components: {},
  methods: {
    onSubmit() {
      request
        .post("/api/user/login", this.form)
        .then(result => {
          let res = result.data;
          if (res.errno === 0) {
            this.$message.success("登录成功!");
            let userInfo = {
              name: res.data.realname
            };
            this.$emit("close", userInfo);
          } else {
            this.$message.error("用户名或密码错误!");
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.el-input {
  width: 250px;
}
</style>
