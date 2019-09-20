<template>
  <div class="homepage">
    <div class="function fl fun-l" @click="go('identify')">
        <p class="link identify"><i></i><span>狗狗识别</span></p>
        <!-- <router-link to="/identify" class="link identify"><i></i>狗狗识别</router-link> -->
    </div>
    <div class="function fr fun-r" @click="go('photo')">
        <p class="link photo"><i></i><span>狗狗相册</span></p>
        <!-- <router-link to="/photo" class="link photo"><i></i>狗狗相册</router-link> -->
    </div>
    <div class="function fl fun-l" @click="go('myDog')">
        <p class="link myDog"><i></i><span>狗狗数据</span></p>
        <!-- <router-link to="/myDog" class="link myDog"><i></i>狗狗数据</router-link> -->
    </div>
    <div class="function fr fun-r" @click="go('plan')">
        <p class="link plan"><i></i><span>计划</span></p>
        <!-- <router-link to="/plan" class="link plan"><i></i>计划</router-link> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "homepage",
    data() {
        return {};
    },
    methods: {
        go(route){
            this.$router.push({path:`/${route}`})
        }
    }
};
</script>
<style scoped>
.homepage{
    background-color:#f4f4f4;
    overflow: hidden;
    padding: 10% 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
}
.function {
    height: 200px;
    background-color: white;
    border-radius: 20px;
}
.link{
    background-color: #fff;
    display: block;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    position: relative;
    top: 50%;
    height: 40px;
    margin-top: -20px;
}
.link i{
    margin-right: 5px;
    display: inline-block;
    height: 40px;
    width: 40px;
}
.link i:before { 
    content: '\3000'; 
}
.link span{
    display: inline-block;
    top: -10px;
    margin-top: -5px;
}
.identify i{
    background: url(../img/dog.png) no-repeat 0px 0px;
    background-position: center center;
}
.photo i{
    background: url(../img/photo.png) no-repeat 0px 5px;
}
.myDog i{
    background: url(../img/weight.png) no-repeat 0px 0px;
}
.plan i{
    background: url(../img/plan.png) no-repeat 0px 0px;
}
</style>