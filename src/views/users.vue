<template>
  <div class="user-container">
    大家好，我是{{ user.name }}，我今年{{ user.age }}岁了，现在居住于{{
      user.address
    }}，目前从事的职业是{{ user.job }}，我的爱好1是{{user.like}}，我的爱好2有很多！
    <span v-for="(item,index) in user.likes" :key="index">{{item}},</span>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // name: "",
      // age: "",
      // address: "",
      // job: "",
      nation: "中国",
    };
  },
  //第一种写法
  // computed: {
  //   name(){
  //     return this.$store.state.name
  //   },
  //   age(){
  //     return this.$store.state.age
  //   },
  //   address(){
  //     return this.nation + this.$store.state.address
  //   },
  //   job(){
  //     return this.$store.state.job
  //   },
  // },
  //第二种写法
  // computed: mapState({
  //      name: state => state.name,
  //      age:'age',
  //      //箭头函数的this值指向
  //      address(state){
  //        return this.nation + state.address
  //      },
  //      job:'job'
  // }),
  //第三种写法
  // computed: mapState(['name','age','address','job']),
  //第四种写法
  //可以将mapState写在computed对象内部，这样可以方便添加其他属性(结合第一种和第二种说明展开运算符)
  // computed: {
  //   ...mapState({
  //     name:"name",
  //     age: "age",
  //     address(state) {
  //       return this.nation + state.address;
  //     },
  //     job: "job",
  //   }),
  // },
  //第五种写法
  computed:{
    // ...mapState(['name','age','address','job']),
    user(){
      return this.$store.state.user
    },
    ...mapGetters(['phoneShow']),
    sexShow(){
      return this.$store.getters.sexShow(0)
    },
  }
};
</script>

<style lang="scss" scoped>
</style>