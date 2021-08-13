<template>
  <h3>{{ name }}</h3>
  <AppButton text="确定"></AppButton>
  <AppButton />
  <app-button></app-button>
  <app-button/>
  <app-demo-button />
</template>

<script>
import AppButton from './components/app-button.vue';
import AppDemoButton from './components/app-demo-button.vue';
export default {
  data() {
    return {
      name: '宁皓网',
      content: 0
    };
  },

  components: {AppButton, AppDemoButton}
};
</script>

<style>
@import './styles/app.css';
</style>