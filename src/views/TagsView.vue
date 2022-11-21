<template>
  <div class="container">
    <div class="row justify-content-start ">
      <!-- Posts -->
      <Posts :posts="filteredPosts"></Posts>
      <!-- Sidebar -->
      <Sidebar :posts="posts"></Sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import getAllPost from '@/composables/getAllPost';
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  components: {
    Sidebar, Posts 
  },
  props: ['tag'],
  setup(props) {
    let {posts,error,load} = getAllPost();
    load();

    let filteredPosts = computed(() => {
      return posts.value.filter(post => {
        return post.tags.includes(props.tag);
      })
    })
    

    return {
      posts,error,filteredPosts
    }
  }
}
</script>

<style>

</style>