<template>
    <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" class="submit-button">登录</el-button>
        </el-form-item>
        <el-form-item>
            <el-button @click="register" class="register-button">注册</el-button>
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
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        };
    },
    components: {},
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
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
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        register(){
            this.$router.push({path:'/registration'})
        }
    }
};
</script>

<style scoped>
.el-input {
    width: 350px;
}
.el-button{
    width: 350px;
}
.submit-button{
    /* margin-left: 60px; */
}
.register-button{
    /* margin-left: 20px; */
}
</style>
