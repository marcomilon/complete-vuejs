<template>
  <button v-for="post in posts" :key="post.id" @click="click(post)">
    {{ post.title }}
  </button>

  <div v-if="currentPost">
    <h2>{{ currentPost.title }}</h2>
    <p>{{ currentPost.content }}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  setup() {
    const store = useStore()

    const click = (post) => {
      store.commit('posts/setPostId', post.id)
    }

    const fetchData = () => {
      store.dispatch('posts/fetch')
    }

    onMounted(() => {
      fetchData()
    })

    return {
      postId: computed(() => store.state.postId),
      posts: computed(() => store.state.posts.all),
      click,
      currentPost: computed(() => store.getters['posts/currentPost'])
    }
  }
}
</script>
<style scoped></style>
