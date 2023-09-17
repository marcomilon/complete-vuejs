<template>
  <h3>New Post</h3>
  <form @submit.prevent="submit">
    <input v-model="newPost.title" placeholder="Title" />
    <br />
    <textarea
      cols="50"
      rows="10"
      v-model="newPost.content"
      placeholder="Content"
    >
    </textarea>
    <br />
    <button>Submit</button>
  </form>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { usePosts } from "./usePosts";

export default {
  setup() {
    const postStore = usePosts()
    const router = useRouter()

    const newPost = reactive({
      title: "",
      content: "",
    })

    const submit = () => {
      const id = postStore.posts.value.length + 1
      postStore.addPost({
        id: id,
        title: newPost.title,
        content: newPost.content,
      })

      router.push(`/posts/${id}`)
    }

    return {
      newPost,
      submit
    }
  },
};
</script>

<style scoped></style>
