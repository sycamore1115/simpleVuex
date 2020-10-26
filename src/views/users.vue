<template>
  <div class="user-container">
    大家好，我是{{user.name}}，我今年{{user.age}}岁了，现在居住于中国{{user.address}}，目前从事的职业是{{user.job}}，很高兴认识大家！
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
      },
    };
  },
}
</script>

<style lang="scss" scoped>

</style>