<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
  <div @click="username = 'xiaoxuan'">{{username}}</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';

export default {
  setup() {
    const name = ref('宁皓网');

    const user = reactive({
      username: '小炫',
    });

    return {
      name,
      ...toRefs(user),
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>