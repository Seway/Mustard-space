<template>
  <div class="shadow box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="编号：">
        <el-input v-model="form.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="名称：">
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域" disabled>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%;"
            disabled
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;" disabled></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="起效">
        <el-switch v-model="form.delivery" disabled></el-switch>
      </el-form-item>
      <el-form-item label="权限">
        <el-checkbox-group v-model="form.type" disabled>
          <el-checkbox label="增" name="type"></el-checkbox>
          <el-checkbox label="删" name="type"></el-checkbox>
          <el-checkbox label="改" name="type"></el-checkbox>
          <el-checkbox label="查" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊">
        <el-radio-group v-model="form.resource" disabled>
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'adminDetail',
  data: function () {
    return {
      form: {
        id: '',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },
  // 初始化函数
  mounted: function () {
    var that = this
    // 根据id访问接口获取数据
    this.$axios.get(
      this.$store.state.headPort +
        '/api/admin/query/accountNumber/' +
        that.$route.query.accountNumber
    )
      .then(function (response) {
        var data = response.data.data
        that.form.id = data.id
      })
  }
}
</script>

<style scoped>
.shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: white;
}
.box {
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
}
</style>
