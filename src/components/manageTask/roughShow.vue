<template>
    <div class="roughShow container-fluid">
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>
                        <div class="row" >
                            <div class="col-md-4">简述</div>
                            <div class="col-md-2">起始时间</div>
                            <div class="col-md-2">地点</div>
                            <div class="col-md-1">发布人</div>
                            <div class="col-md-1">状态</div>
                            <div class="col-md-1">操作</div>
                            <div class="col-md-1"></div>
                        </div>
                    </td>
                </tr>
            </thead>
            <tbody >
                <everyOne></everyOne>
                                <everyOne></everyOne>
                <everyOne></everyOne>

            </tbody>
        </table>

    </div>
</template>

<script>
import everyOne from './everyOne.vue'

export default {
  name: 'roughShow',
  components: {
    everyOne
  }
}
</script>

<style scoped>
.roughShow{
  background: whitesmoke;
}
</style>
