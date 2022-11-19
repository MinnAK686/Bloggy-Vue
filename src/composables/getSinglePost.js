import { ref } from "vue";

const getSinglePost = (id) => {
  let post = ref({});
  let error = ref("");

  let load = async () => {
    try {
      let response = await fetch("http://localhost:3000/posts/"+id);
      if(response.status ===404) {
        throw new Error("404 Post Not Found");
      }
      let data = await response.json();
      post.value = data;
    } catch (e) {
      error.value = e.message;
    }
  }

  return {
    post,error,load
  }
}

export default getSinglePost;