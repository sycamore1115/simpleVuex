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
      <el-form-item>
        <el-button type="primary" @click="onSubmit(user)">新增用户</el-button>
      </el-form-item>
    </el-form>

     <el-input :value="count"></el-input>
     <el-button type="primary" @click="increment()">+1</el-button>

     <el-form label-width="80px" :model="like">
       <el-form-item label="用户爱好1">
        <el-input v-model="like.music"></el-input>
      </el-form-item>
      <el-form-item label="用户爱好2">
        <el-checkbox-group v-model="like.sports">
          <el-checkbox v-for="(item,index) in like.sports" :key="index" :label="item"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addLikes">新增爱好</el-button>
      </el-form-item>
     </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user:{
      },
      like:{
        sports:['足球','游泳','慢跑']
      }
    };
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    increment(){
      this.$store.commit('increment')
    },
    onSubmit(user) {
      //向vuex中保存信息
      this.$store.commit("addUser", user);
      this.$router.push("/users");
    },
    addLikes() {
      // this.like.music = '音乐'
      // alert(this.like.music)
      // this.like.sports[3]='乒乓'
      // this.$set(this.like, "music", "音乐");
      this.$set(this.like.sports, 3, "乒乓");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>