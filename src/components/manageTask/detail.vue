<template>
  <el-container>
    <el-header style="height:200px;border-bottom:1px solid gainsboro; ">
      <el-row style="height:100%;">
        <el-col :span="5" class="picture">
          <div>
            <el-image style="width: 70%; " :src="url" fit="fill"></el-image>
          </div>
        </el-col>
        <el-col :span="10" class="task">
          <div class="taskId">
            <div>
              <p>{{name}}</p>
            </div>
            <div style="margin-left:10px;">
              <el-tag>{{status}}</el-tag>
            </div>
          </div>
          <div class="taskId">
            <p>编号:{{id}}</p>
          </div>
          <div class="taskId">
            <p>申请人:{{user}}</p>
          </div>
        </el-col>
        <el-col :span="9" class="btns">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" @click="examine()">审核</el-button>
            <el-button type="primary" icon="el-icon-delete" @click="deleted()">删除</el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </el-header>
    <el-main style="padding:10px;">
      <el-row>
        <el-col :span="2">
          <div>
            <label style="border-left:3px solid gainsboro;padding-left:3px;">任务详情</label>
          </div>
        </el-col>
        <el-col :span="10" class="textDecoration">
          <div>
            <label>标题</label>
          </div>
          <div>
            <label>起止时间</label>
          </div>
          <div>
            <label>任务描述</label>
          </div>

          <div>
            <label>标签</label>
          </div>

          <div>
            <label>酬劳</label>
          </div>

          <div>
            <label>联系方式</label>
          </div>
        </el-col>
        <el-col :span="10">
          <el-col :span="2">
            <div>
              <label style="border-left:3px solid gainsboro;padding-left:3px;">地图</label>
            </div>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'taskDetail',
  data: function () {
    return {
      url:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586064043299&di=936d37ebfc418579e3debf6d674edc82&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg',
      name: '任务标题1231513513',
      status: '未完成',
      id: '123',
      user: 'wang'
    }
  },
  methods: {
    // 审核
    examine () {
      this.$router.push({
        path: '/manageTask/examine',
        query: {
          id: this.id
        }
      })
    },
    // 删除
    deleted () {
      this.$confirm('此操作将永久删除该任务, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 访问接口删除
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  // 初始化函数
  created: function () {
    console.log(this.$route.query.id)
    // 根据id访问接口获取数据
  }
}
</script>

<style scoped>
.picture {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.task {
  display: flex;
  flex-direction: column;
}
.taskId {
  display: flex;
  align-items: center;
}
.textDecoration {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
}
.textDecoration > div {
  margin: 10px 0;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.el-container {
  background: white;
  border: 1px solid gainsboro;
}
</style>
