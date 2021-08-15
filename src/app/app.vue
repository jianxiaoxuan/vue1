<template>
  <h3>{{ name }}</h3>
  <div>{{errorMessage}}</div>
  <div v-for="post in posts" :key="post.id">
    {{post.title}} - 
    <small>{{post.user.name}}</small>
  </div>
</template>

<script>
import {apiHttpClient} from '@/app/app.service';

export default {
  data() {
    return {
      name: '宁皓网',
      posts: [],
      errorMessage: '',
      user: {
        name: '大嘴',
        password: '123123',
        token: ''
      }
    };
  },

  async created() {
    try {
      const response = await apiHttpClient.get('/posts');

      // console.log(axios.defaults);

      this.posts = response.data;
    } catch (error) {
      this.errorMessage = error.message;
    }

    try {
      const response = await apiHttpClient.post('/login', this.user);
      this.token = response.data.token;
    } catch (error) {
      this.errorMessage = error.message;
    }
    
  },
};
</script>

<style>
@import './styles/app.css';
</style>