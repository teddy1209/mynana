<template>
  <div class="main">
    <div class="head">社区首页</div>
    <div class="condition">
      <el-input v-model="searchContent" placeholder="请输入搜索的内容"></el-input>
      <el-button type="primary" @click="handleSearch">搜索</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期">
        <template slot-scope="scope">{{parseTime(scope.row.createtime,'{y}-{m}-{d}')}}</template>
      </el-table-column>
      <el-table-column prop="author.realname" label="作者"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="getDetails(scope.row.id)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="文章详情" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>{{content}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import request from "@/utils/request";
import parseTime from "@/utils/date";
export default {
  data() {
    return {
      searchContent: "",
      content: "",
      parseTime,
      tableData: [],
      dialogVisible: false
    };
  },
  components: {},
  methods: {
    getData() {
      request
        .get("/api/blog/list")
        .then(result => {
          let res = result.data;
          this.tableData = res.data;
        })
        .catch(err => {});
    },
    getDetails(id) {
      request
        .get("/api/blog/detail?id=" + id)
        .then(result => {
          let res = result.data;
          this.dialogVisible = true;
          this.content = res.data.content;
        })
        .catch(err => {});
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleSearch() {
      request
        .get("/api/blog/list?keyword="+this.searchContent)
        .then(result => {
          let res = result.data;
          this.tableData = res.data;
        })
        .catch(err => {});
    }
  },
  created() {
    this.getData();
    // test()
  }
};
</script>

<style scoped>
.main {
  margin: 0 auto;
  width: 1200px;
}
.condition {
  float: left;
  margin: 20px 0;
}
.head {
  margin: 20px auto;
}
.el-input {
  width: 250px;
}
</style>
