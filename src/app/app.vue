<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
  <div @click="user.name = 'xiaoxuan'">{{user.name}}</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const name = ref('宁皓网');

    const user = reactive({
      name: '小炫',
    });

    console.log(user);

    console.log(name.value);

    return {
      name,
      user,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>