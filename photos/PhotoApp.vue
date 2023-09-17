<template>
  <layout>
    <template v-slot:header> Header </template>

    <template v-slot:sidebar>
      <album v-for="album in albums" :key="album.id" :album="album">
        {{ album.title }}
      </album>
    </template>

    <template v-slot:content>
      <router-view />
    </template>
  </layout>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Layout from './Layout.vue'
import Album from './Album.vue'

export default {
  components: {
    Layout,
    Album
  },

  setup() {
    const store = useStore()

    const albums = computed(() => {
      return store.state.albums.all
    })

    onMounted(() => {
      console.log('App mounted!')
      store.dispatch('albums/fetch')
    })

    return {
      albums
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
