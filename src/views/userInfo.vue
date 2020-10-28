<template>
  <div class="user-container">
    <el-form ref="form" label-width="80px" :model="user">
      <el-form-item label="用户姓名">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="用户年龄">
        <el-input v-model="user.age"></el-input>
      </el-form-item>
      <el-form-item label="用户地址">
        <el-input v-model="user.address"></el-input>
      </el-form-item>
      <el-form-item label="用户职业">
        <el-input v-model="user.job"></el-input>
      </el-form-item>
      <el-form-item label="用户爱好1">
        <el-input v-model="user.like"></el-input>
      </el-form-item>
      <el-form-item label="用户爱好2">
        <el-checkbox-group v-model="user.likes">
          <el-checkbox v-for="(item,index) in user.likes" :key="index" :label="item"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addLikes">新增爱好</el-button>
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
      user: {
        name: "",
        age: "",
        address: "",
        job: "",
        likes: ["111", "222", "333"],
      },
    };
  },
  methods: {
    onSubmit() {
      //向vuex中保存信息
      this.$store.commit("addUser", this.user);
      this.$router.push("/users");
    },
    addLikes() {
      // this.user.like = '音乐'
      // alert(this.user.like)
      // this.user.likes[3]='444'
      // this.$set(this.user, "like", "音乐");
      this.$set(this.user.likes, 3, "444");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>