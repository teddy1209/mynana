<template>
    <div id="app">
        <myheader></myheader>
        <router-view/>
        <myfooter></myfooter>
    </div>
</template>

<script>
import myheader from "@/components/header.vue";
import myfooter from "@/components/footer.vue";
export default {
    name: 'App',
    components: { myheader, myfooter },
}
</script>

<style>
body{
    margin:0;
    padding:0;
    min-width: 1000px;
}
a,a:link,a:visited,a:hover,a:active{
        text-decoration: none;
        color:inherit;
    }
</style>
