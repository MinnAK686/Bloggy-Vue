<template>
  <div class="card post">
    <div class="img-fluid">
      <img src="../assets/images/blog-post-03.jpg" class="card-img-top" alt="..."/>
    </div>
    <div class="card-body">
      <div class="post-header">
        <h4 class="post-category">{{post.category}}</h4>
        <h5 class="post-title">
          <router-link :to="{name: 'post-detail',params: {id: post.id}}">{{post.title}}</router-link>
        </h5>
        <div class="post-info">
          <span>
            <router-link to="#">{{post.author}}</router-link>
          </span>
          <span>
            <router-link to="#">19 / 11 / 2022</router-link>
          </span>
          <span>
            <router-link to="#">10 Comments</router-link>
          </span>
        </div>
        <hr>
      </div>
      <div class="post-detail">
        <p>{{post.detail.substring(0,300)}} <router-link :to="{name: 'post-detail',params: {id: post.id}}">...Read More</router-link> </p>
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
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style>

</style>