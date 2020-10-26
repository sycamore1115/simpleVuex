<template>
  <div class="user-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
       <el-form-item label="用户年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="用户地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="用户职业">
        <el-input v-model="form.job"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增用户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
        address: "",
        job: "",
      },
    };
  },
  methods: {
    onSubmit() {
      //向vuex中保存信息
      this.$router.push('/users')
    },
  },
};
</script>

<style lang="scss" scoped>
</style>