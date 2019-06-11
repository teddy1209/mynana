<template>
  <div>{{name}}的个人主页</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      name: ""
    };
  },
  components: {},
  created() {
    this.name = sessionStorage.getItem("realname");
  }
};
</script>

<style scoped></style>
