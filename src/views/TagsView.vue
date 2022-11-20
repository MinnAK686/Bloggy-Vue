<template>
  <div class="container">
    <div class="row justify-content-start ">
      <!-- Posts -->
      <div v-if="posts.length > 0">
        <Posts :posts="filteredPosts"></Posts>
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
import getAllPost from '@/composables/getAllPost';
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  components: {
    Loading,
    Sidebar, Posts },
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