<template>
    <div class="footer">
        <div class="describe">
            <h1>娜娜——帮你了解你的爱宠</h1>
            <p>宠物定制化管理平台</p>
        </div>
        <div class="related">
            <h2>网站相关</h2>
            <p><a href>关于我们</a></p>
            <P><a href>加入我们</a></P>
            <p><a href>友情链接</a></p>
        </div>
        <div class="contact">
            <h2>联系我们</h2>
            <p><a href>常见问题</a></p>
            <p><a href>官方QQ群</a></p>
            <p><a href>商务合作</a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: "myfooter",
    data() {
        return {
            
        };
    },
}
</script>
<style scoped>
.footer{
    height: 200px;
    padding-top: 30px;
}
.describe{
    float: left;
    margin-left: 5%;
    margin-top: 15px;
    width: 40%;
    text-align: center;
}
.describe h1{
    font-size: 30px;
    font-family: 华文行楷;
}
.describe p{
    font-size: 18px;
    color: #666666;
}
.related{
    float: right;
    margin-right: 8%;
    width: 15%;
    text-align: center;
}
.related h2{
    font-size: 18px;
}
.related a:link{
    text-decoration:none;
    color: black;
}
.related a:visited{
    text-decoration:none;
    color: black;
}
.related a:hover{
    color: darkred;
}
.contact{
    float: right;
    margin-right: 3%;
    width: 15%;
    text-align: center;
}
.contact h2{
    font-size: 18px;
}
.contact a:link{
    text-decoration:none;
    color: black;
}
.contact a:visited{
    text-decoration:none;
    color: black;
}
.contact a:hover{
    color: darkred;
}
</style>