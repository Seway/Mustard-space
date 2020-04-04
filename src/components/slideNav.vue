<template>
  <div>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/overView">
        <i class="el-icon-document"></i>
        <span slot="title">概览</span>
      </el-menu-item>
      <el-menu-item index="/manageTask">
        <i class="el-icon-document"></i>
        <span slot="title">任务管理</span>
      </el-menu-item>
      <el-menu-item index="/index/PayList">
        <i class="el-icon-document"></i>
        <span slot="title">租赁管理</span>
      </el-menu-item>
      <el-menu-item index="/index/PayList">
        <i class="el-icon-document"></i>
        <span slot="title">失物管理</span>
      </el-menu-item>
      <el-menu-item index="/index/PayList">
        <i class="el-icon-document"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
      <el-menu-item index="/test">
        <i class="el-icon-star-on"></i>
        <span slot="title">管理员</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'slideNav'
}
</script>

<style scoped>

</style>
