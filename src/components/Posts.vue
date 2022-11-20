<template>
  <div class="col-sm-12 col-md-12 col-lg-8">
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
import SinglePost from './SinglePost'
export default {
  components: {
    Loading, SinglePost },
  props: ['posts','error'], 

}
</script>

<style>

</style>