<template>
  <div class="demo-container">
    <el-input :value="count"></el-input>
    <el-input :value="count1"></el-input>
    <el-button type="primary" @click="addCount1">+</el-button>
    <el-button type="primary" @click="add">action同步+</el-button>
    <el-button type="primary" @click="addAsync">action异步+</el-button>
    <br>
    <el-button type="primary" @click="addM">mutation同步+</el-button>
    <el-button type="primary" @click="addAsyncM">mutation异步+</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      count1:0,
      count:this.$store.state.count
    }
  },
  computed:{
    // count(){
    //   return this.$store.state.count
    // }
  },
  methods:{
    add(){
      this.$store.dispatch('increment')
    },
    addAsync(){
      this.$store.dispatch('incrementAsync')
    },
    addM(){
      this.$store.commit('increment')
    },
    addAsyncM(){
      this.$store.commit('incrementAsync')
    },
    addCount1(){
      this.count1++
    }
  }
};
</script>

<style lang="scss" scoped>
</style>