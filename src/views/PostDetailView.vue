<template>
  <div class="container">
    <div class="row justify-content-start ">
      <!-- Posts -->
      <PostDetail :post="post"></PostDetail> 
      <!-- Sidebar -->
      <Sidebar :posts="posts"></Sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import PostDetail from '../components/PostDetail'
import getSinglePost from '@/composables/getSinglePost';
import getAllPost from '@/composables/getAllPost';
import { useRoute } from 'vue-router';
export default {
  components: {
    Sidebar, PostDetail },
  // props: ['id'],
  setup() {
    let route = useRoute();
    let {post,error,load} = getSinglePost(route.params.id);
    let {posts} = getAllPost()
    load();

    return {
      posts,post,error
    }
  }
}
</script>

<style>

</style>