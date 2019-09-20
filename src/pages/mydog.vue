<template>
  <div class="mydog">
    <div class="title">欢迎您,{{name}}</div>
    <div class="dogList">
      <div>宠物列表</div>
      <el-col :span="4" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://mynana.oss-cn-beijing.aliyuncs.com/img/sy_74391315184.jpg"
            class="image"
          >
          <div style="padding: 14px;">
            <span>{{dogName}}</span>
            <div class="bottom clearfix">
              <time class="time">最后操作:{{ $formatDate(currentDate,'{y}-{m}-{d}') }}</time>
              <el-button type="text" class="button" @click>详细信息</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      currentDate: new Date(),
      name: "游客",
      dogName: "妮娜"
    };
  },
  components: {},
  created() {
      this.name = sessionStorage.getItem("realname") || "";
  },
};
</script>

<style scoped>
.mydog {
  margin: 0 auto;
  width: 1200px;
  overflow: hidden;
  min-height: 500px;
}
.button{
    padding-bottom: 0
}
.title {
  float: left;
}
.time {
  font-size: 13px;
  color: #999;
}
.dogList {
  clear: both;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.dogList .image {
  width: 200px;
  height: 200px;
}
</style>
