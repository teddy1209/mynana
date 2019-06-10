<style src="../css/index.css"></style>
<template>
    <div class="index">
        <div class="header">
            <div class="logo">
                <img src="../img/logo.jpg" class="banner">
                <img src="../img/nana.png" class="nana">
            </div>
            <ul class="landing">
                <li>
                    <a href="">注册</a>|
                    <a href="">登陆</a>
                </li>
            </ul>
            <ul class="menu">
                <li><a href="http://localhost:8080/">首页</a></li>
                <li><a href="">狗狗识别</a></li>
                <li><a href="">社区</a></li>
                <li><a href="">商城</a></li>
            </ul>
        </div>
        <div class="ad">
            <img src="../img/maomao.jpg" class="advertising">
        </div>
        <div class="content">
            <div class="function fl fun-l" >
                <a href=""><p class="identify">狗狗识别</p></a>
            </div>
            <div class="function fr fun-r">
                <a href=""><p class="photo">狗狗相册</p></a>
            </div>
            <div class="function fl fun-l">
                <a href=""><p class="weight">狗狗体重</p></a>
            </div>
            <div class="function fr fun-r">
                <a href=""><p style="margin-left: 130px;" class="plan">计划&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>
            </div>
        </div>
        <div class="footer">
            <div class="logo" style="width: 100%">
                <img src="../img/logo.jpg" class="banner">
                <img src="../img/nana.png" class="nana">
            </div>
            <div class="describe">
                <h1>娜娜——帮你了解你的爱宠</h1>
                <p>宠物定制化管理平台</p>
            </div>
            <div class="related">
                <h2>网站相关</h2>
                <p><a href="">关于我们</a></p>
                <P><a href="">加入我们</a></P>
                <p><a href="">友情链接</a></p>
            </div>
            <div class="contact">
                <h2>联系我们</h2>
                <P><a href="">常见问题</a></P>
                <p><a href="">官方QQ群</a></p>
                <p><a href="">商务合作</a></p>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
    export default {
        name: 'HelloWorld',
        data () {
            return {
              msg: 'Welcome to Your Vue.js App',
              a:1
            }
        },
        computed:{
            aDouble(){
              return this.a*2;
            }
        },
        methods:{
            say(h){
              alert(h);
            }
        }
    }
</script>
