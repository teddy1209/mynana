<style src="@/css/index.css"></style>
<template>
  <div class="index">
    <div class="header">
      <div class="logo">
        <img src="@/img/logo.jpg" class="banner">
        <img src="@/img/nana.png" class="nana">
      </div>
      <ul class="landing">
        <li>
          <el-button v-if="!name" @click="login">登录</el-button>
          <el-dropdown v-if="name" @command="userClick">
            <span class="el-dropdown-link">
              欢迎{{name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="0">个人主页</el-dropdown-item>
              <el-dropdown-item command="2">我的狗狗</el-dropdown-item>
              <el-dropdown-item command="1">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
      <ul class="menu">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/identification/dogs">狗狗识别</router-link>
        </li>
        <li>
          <router-link to="/community">社区</router-link>
        </li>
        <li>
          <a href="https://s.taobao.com/search?q=%E7%8B%97">商城</a>
        </li>
      </ul>
    </div>
    <!-- <div class="ad">
            <img src="@/img/maomao.jpg" class="advertising">
    </div>-->
    <div class="content">
      <el-dialog title="登录" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <user-login @close="closeDialog"></user-login>
      </el-dialog>
      <div class="function fl fun-l">
        <a href>
          <p class="identify">狗狗识别</p>
        </a>
      </div>
      <div class="function fr fun-r">
        <a href>
          <p class="photo">狗狗相册</p>
        </a>
      </div>
      <div class="function fl fun-l">
        <a href>
          <p class="weight">狗狗体重</p>
        </a>
      </div>
      <div class="function fr fun-r">
        <a href>
          <p style="margin-left: 130px;" class="plan">计划&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </a>
      </div>
    </div>
    <div class="footer">
      <div class="logo" style="width: 100%">
        <img src="@/img/logo.jpg" class="banner">
        <img src="@/img/nana.png" class="nana">
      </div>
      <div class="describe">
        <h1>娜娜——帮你了解你的爱宠</h1>
        <p>宠物定制化管理平台</p>
      </div>
      <div class="related">
        <h2>网站相关</h2>
        <p>
          <a href>关于我们</a>
        </p>
        <P>
          <a href>加入我们</a>
        </P>
        <p>
          <a href>友情链接</a>
        </p>
      </div>
      <div class="contact">
        <h2>联系我们</h2>
        <P>
          <a href>常见问题</a>
        </P>
        <p>
          <a href>官方QQ群</a>
        </p>
        <p>
          <a href>商务合作</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import userLogin from "../login/userLogin";
export default {
  components: { userLogin },
  name: "HelloWorld",
  data() {
    return {
      name: "",
      dialogVisible: false
    };
  },
  computed: {},
  methods: {
    // 点击菜单的选项触发的函数
    userClick(data) {
      if (data == 0) {
        this.$router.push({ path: "/personal" });
      }
      if (data == 1) {
        this.logout();
      }
      if (data == 2) {
        this.$router.push({ path: "/myDog" });
      }
    },
    // 登出函数
    logout() {
      this.name = "";
      sessionStorage.removeItem("realname");
    },
    login() {
      this.dialogVisible = true;
    },
    closeDialog(data) {
      sessionStorage.setItem("realname", data.name);
      this.name = data.name;
      this.dialogVisible = false;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  created() {
    this.name = sessionStorage.getItem("realname") || "";
  }
};
</script>
