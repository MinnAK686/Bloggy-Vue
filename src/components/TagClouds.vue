<template>
  <div class="tag-clouds">
    <h4>Tag Clouds</h4> <hr>
    <div class="tags">
      <button class="btn btn-outline-primary">{{uniqueTags}}</button>
      <!-- <span v-for="tag in uniqueTags" :key="tag"> 
        <button class="btn btn-outline-primary">{{tag}}</button>
      </span> -->
    </div>
    <!-- <button class="btn btn-outline-primary">Tags Test</button> -->
      
  </div>
</template> 

<script>
// import getAllPost from '@/composables/getAllPost';
import { ref } from '@vue/reactivity';

export default {
  props: ["posts"],
  setup(props) {
    // let {posts,error,load} = getAllPost();
    // load();
    let tags = ref([]);

    console.log(props.posts)  

    let uniqueTags = tags.value.filter((tag,index,array) => {
      return array.indexOf(tag) === index;
    })

    // let arr = ref([
    //   {id: 1,title: 'one'},
    //   {id: 2,title: 'two'},
    //   {id: 3,title: 'three'}
    // ])
    // arr.value.forEach(a => {
    //   console.log(a)
    // })

    // console.log(uniqueTags)

    // const fragor = [{ fraga: 'Question 1', svar: 'This is this explanation', tags: ['knowledge'] }, { fraga: 'Question 2', svar: 'This is this explanation for question 2', tags: ['knowledge', 'code'] }, { fraga: 'Question 3', svar: 'This is this explanation for question 3', tags: ['code'] }];
    // const tags = Array.from(new Set(fragor.map(f => f.tags).flat()));
    // console.log(tags);

    // props.posts.forEach((post)=>{
    //   console.log(post)
    //   post.tags.forEach((tag)=>{
    //     console.log(tag)
    //     tags.value.push(tag);
    //   })
    // })

    
    return {
      uniqueTags
    }
  }
}
</script>

<style>

</style>