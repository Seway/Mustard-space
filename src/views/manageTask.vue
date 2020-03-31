<template>
  <div class="manageTask">
    <h1>任务管理页面</h1>
    <searchBox></searchBox>
  </div>
</template>

<script>
import searchBox from '@/components/manageTask/searchBox.vue'

export default {
  name: 'pageTask',
  components: {
    searchBox
  }
}
</script>

<style>
.manageTask{
  background: white;
  border: 1px solid black;
}
</style>
