<template>
  <div class="user-container">
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
       <el-form-item label="用户年龄">
        <el-input v-model="age"></el-input>
        <el-button type="primary" @click="increment">+</el-button>
      </el-form-item>
      <el-form-item label="用户地址">
        <el-input v-model="address"></el-input>
      </el-form-item>
      <el-form-item label="用户职业">
        <el-input v-model="job"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增用户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
        name: "",
        age: 1,
        address: "",
        job: "",
    };
  },
  computed:{
    // ...mapState(['age']),
  },
  methods: {
    increment(){
      // this.$store.commit('increment')
      this.age++
    },
    onSubmit() {
      //向vuex中保存信息
      this.$store.commit('addUser', {
        name:this.name,
        age:this.age,
        address:this.address,
        job:this.job,
      })
      this.$router.push("/users");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>