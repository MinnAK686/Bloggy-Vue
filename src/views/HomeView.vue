<template>
  <div class="container">
    <div class="row justify-content-start ">
      <!-- Posts -->
      <div v-if="posts.length > 0">
        <Posts :posts="posts" :error="error"></Posts>
      </div>
      <div v-else>
        <Loading></Loading>
      </div>
      <!-- Sidebar -->
      <Sidebar :posts="posts"></Sidebar>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
// @ is an alias to /src
import getAllPost from '@/composables/getAllPost';

export default {
  name: 'HomeView',
  components: {
    Loading,
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
