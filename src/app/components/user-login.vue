<template>
  <div>用户登陆</div>
  <input type="text" ref="username">
  <input type="text">
</template>

<script>
export default {
  mounted() {
    console.log(this.$refs.username);
    this.$refs.username.focus();
  },
}
</script>