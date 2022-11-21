import { db } from "@/firebase/config";

import { ref } from "vue";

const getSinglePost = (id) => {
  let post = ref(null);
  let error = ref("");

  let load = async () => {
    try {
  
      let doc = await db.collection("posts").doc(id).get();
      // console.log(doc.data())
      post.value = { id: doc.id, ...doc.data() }

    } catch (e) {
      error.value = e.message;
    }
  }

  return {
    post,error,load
  }
}

export default getSinglePost;