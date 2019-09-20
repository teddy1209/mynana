<template>
    <div class="header">
        <div class="logo">
            <img src="@/img/logo.jpg" class="banner">
            <img src="@/img/nana.png" class="nana">
        </div>
        <div class="landing">
            <el-button v-if="!name" @click="login">登录</el-button>
            <img v-if="name" :src="headPath" class="avatar">
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
        </div>
        <ul class="menu">
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/identify">狗狗识别</router-link>
            </li>
            <li>
                <router-link to="/community">社区</router-link>
            </li>
            <li>
                <a href="https://s.taobao.com/search?q=%E7%8B%97">商城</a>
            </li>
        </ul>
        <el-dialog title="登录" :visible.sync="dialogVisible" width="500px" :before-close="handleClose">
            <user-login @close="closeDialog"></user-login>
        </el-dialog>
    </div>
</template>
<script>
import userLogin from "@/pages/login/userLogin.vue";
export default {
    components: { userLogin },
    name: "HelloWorld",
    data() {
        return {
            headPath:
                "https://mynana.oss-cn-beijing.aliyuncs.com/img/sy_74391315184.jpg", //默认头像路径
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
<style scope>
.header{
    width: 100%;
    height: 100px;
    margin: 0 auto;
}
.logo{
    width: 20%;
    height: 100px;
    float: left;
}
.nana{
    float: left;
    margin-top: 15px;
}
.banner{
    width: 45px;
    height: 45px;
    border-radius: 30px;
    margin-left: 30px;
    margin-top: 25px;
    float: left;
}
.menu{
    width: 50%;
    float: right;
    margin-top: 35px;
    margin-right: 2%;
}
.menu li{
    float:left;
    margin-right: 15%;
    list-style-type: none;
    color: #666666;
    font-size: 18px;
}
.header a:link{
    text-decoration:none;
    color: #666666;
}
.header a:visited{
    text-decoration:none;
    color: #666666;
}
.header a:hover{
    color: darkred;
}
.landing{
    width: 10%;
    float: right;
    margin-right: 5%;
    margin-top: 30px;
    list-style-type: none;
    color: #666666;
    font-size: 18px;
}
.landing li{

}
</style>