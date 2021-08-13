<template>
  <h3>{{ name }}</h3>
  <AppButton 
    @tap="onTapAppButton"
    @init="onInitAppButton"
  >提交</AppButton>
</template>

<script>
import AppButton from './components/app-button.vue';

export default {
  data() {
    return {
      name: '宁皓网',
      content: 0
    };
  },

  methods: {
    onTapAppButton(text) {
      console.log('on tap app button', text);
    },

    onInitAppButton(text) {
      console.log('on init app button', text);
    },
  },

  components: {AppButton},
};
</script>

<style>
@import './styles/app.css';
</style>