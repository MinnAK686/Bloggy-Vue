import { ref } from "vue";
import { db } from "@/firebase/config";


const getAllPost = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      
      let dataResp = await db.collection("posts").orderBy("created_at","desc").get();
      // console.log(dataResp.docs)
      posts.value = dataResp.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      // posts.value = res.docs.map((doc) => {
      //   return {id:doc.id ,...doc.data()}
      //   // console.log(doc.id) 
      // })
    } catch (e) {
      error.value = e.message;
    }
  }
  return {
    posts,error,load
  }
}

export default getAllPost;