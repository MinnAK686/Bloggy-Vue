import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

const getAllPost = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let collections = collection(db,"posts");
      let res = await getDocs(collections);
      posts.value = res.docs.map((doc) => {
        return {id:doc.id ,...doc.data()}
        // console.log(doc.id) 
      })
    } catch (e) {
      error.value = e.message;
    }
  }
  return {
    posts,error,load
  }
}

export default getAllPost;