<template>
  <div class="user-container">
    大家好，我是{{ name }}，我今年{{ age }}岁了，现在居住于{{
      address
    }}，目前从事的职业是{{ job }}，很高兴认识大家！
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    ...mapState((['name','age','address','job']))
  }
};
</script>

<style lang="scss" scoped>
</style>