<template>
    <div class="row justify-content-center">
        <div class="col-10 col-sm-8 col-md-6 col-lg-5">
            <h1 class="text-center my-4">Create Post</h1>
            <form @submit.prevent="addPost">
                <div class="mb-3">
                    <label for="TextTitle" class="form-label">Title</label>
                    <input type="text" class="form-control" id="TextTitle" v-model="title">
                </div>
                <div class="mb-3">
                    <label for="TextDetail" class="form-label">Detail</label>
                    <textarea class="form-control" placeholder="Enter Your Detail Here..." id="TextDetail" style="height: 100px" v-model="detail"></textarea>
                </div>
                <div class="mb-3">
                    <label for="TextTags" class="form-label">Tags (Press Enter key to add Tag)</label>
                    <input type="text" class="form-control" id="TextTags" v-model="tag" @keydown.enter.prevent="addTags">
                    <div class="pills mt-3 mb-5">
                        <span v-if="tags.length > 0">
                            <span v-for="tag in tags" :key="tag">
                                <span class="badge rounded-pill p-2 m-1 text-bg-dark">{{tag}}</span>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="TextCate" class="form-label">Category</label>
                    <input type="text" class="form-control" id="TextCate" v-model="category">
                </div>
                <div class="mb-3">
                    <label for="TextAuthor" class="form-label">Author</label>
                    <input type="text" class="form-control" id="TextAuthor" v-model="author">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { db, timestamp } from '@/firebase/config';
import { useRouter } from 'vue-router';
export default {
    
    setup() {
        let router = useRouter()

        let title = ref("");
        let detail = ref("");
        let author = ref("");
        let category = ref("");
        let tag = ref("");
        let tags = ref([]);

        let addPost = async () => {
            let posts = {
                title: title.value,
                detail: detail.value,
                author: author.value,
                category: category.value,
                tags: tags.value,
                created_at: timestamp()
            }
            let resp = await db.collection("posts").add(posts);
            router.push('/')
        }
        
        let addTags = () => {
            if(!tags.value.includes(tag.value)) {
                tags.value.push(tag.value);
            }
            tag.value = "";
        }

        return {
            title,detail,author,category,tag,tags,addPost,addTags
        }
    }
}
</script>
<style>
    
</style>