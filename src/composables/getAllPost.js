import { ref } from "vue";

const getAllPost = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let response = await fetch("http://localhost:3000/posts");
      if(response.status === 404) {
        throw new Error("404 Posts Not Found!")
      }
      let datas = await response.json();
      posts.value = datas;
    } catch (e) {
      error.value = e.message;
    }
  }
  return {
    posts,error,load
  }
}

export default getAllPost;