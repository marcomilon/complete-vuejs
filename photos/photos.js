export const photos = {
  namespaced: true,

  state() {
    return {
        all: [],
        cache: {

        }
    }
  },

  mutations: {
    setPhotosForCurrentAlbum(state, { photos, albumId } ) {
        state.all = photos
        state.cache[albumId] = photos
    }
  },

  actions: {
    async getByAlbum(ctx, { albumId }) {
      if (ctx.state.cache[albumId]) {
        console.log('Hit')
        ctx.commit('setPhotosForCurrentAlbum', { photos: ctx.state.cache[albumId], albumId })
        return
      }
      console.log('Miss')
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      const json = await res.json()
      ctx.commit('setPhotosForCurrentAlbum', { photos: json, albumId })
    }
  }
}
