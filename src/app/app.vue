<template>
  <h3>{{ name }}</h3>
  <input type="text" @keyup="jian">
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      category: ''
    };
  },

  methods: {
    jian(da) {
      if (da.key === 'Enter') {
        console.log(da);
      }
    }
  }
};
</script>

<style>
@import './styles/app.css';
</style>