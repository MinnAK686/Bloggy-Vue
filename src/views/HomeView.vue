<template>
  <div class="container">
    <div class="row justify-content-start ">
      <!-- Posts -->
      <Posts :posts="posts" :error="error"></Posts>
      <!-- Sidebar -->
      <Sidebar :posts="posts"></Sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import getAllPost from '@/composables/getAllPost';

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Posts,
  },
  setup() {
    let {posts,error,load} = getAllPost();
    load();


    return {
      posts,error
    }
  }
}
</script>
