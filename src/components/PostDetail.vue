<template>
  <div class="col-sm-12 col-md-12 col-lg-8" v-if="post">
    <div class="card post">
      <div class="img-fluid">
        <img src="../assets/images/blog-post-03.jpg" class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <div class="post-header"> 
          <h4 class="post-category">{{post.category}}</h4>
          <h5 class="post-title">
            {{post.title}} 
            <!-- <router-link to="#">{{post.title}}</router-link> -->
            <!-- <router-link :to="{name: 'post-detail',params: {id: post.id}}">{{post.title}}</router-link> -->
          </h5>
          <div class="post-info">
            <span>
              <a href="#">Admin</a>
            </span>
            <span>
              <a href="#">19 / 11 / 2022</a>
            </span>
            <span>
              <a href="#">10 Comments</a>
            </span>
          </div>
          <hr>
        </div>
        <div class="post-detail">
          <p>{{post.detail}}</p>
        </div>
      </div>
      <div class="card-footer text-muted">
        <div class="d-md-flex justify-content-between d-block">
          <div class="tags">
            <i class="fa fa-tags"></i>
            <span v-for="tag in post.tags" :key="tag">
              <span>
                <router-link :to="{name: 'tags',params: {tag}}">{{tag}}</router-link>
              </span>
            </span>
          </div>
          <div class="share">
            <i class="fa fa-share"></i>
            <span>
              <a href="#">Facebook</a>
            </span>
            <span>
              <a href="#">Twitter</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 mt-3 mb-5">
      <button class="btn btn-primary" @click="deletePost">Delete</button>
    </div>
  </div>
  <div class="col-sm-12 col-md-12 col-lg-8" v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from './Loading'
import SinglePost from './SinglePost' 
import { db } from '@/firebase/config'
import { useRouter } from 'vue-router'
export default {
  components: {
    Loading, SinglePost
  },
  props: ['post'],

  setup(props) {
    let router = useRouter();

    let deletePost = async () => {
      let id = props.post.id;
      // console.log(id)
      await db.collection("posts").doc(id).delete();      
      router.push("/");
    }

    return {
      deletePost
    }
  }

}
</script>

<style>

</style>