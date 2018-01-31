import {mapGetters} from 'vuex'

export const playlistMixin = {
  mounted() {
    this.handlePlaylist(this.playlist)
  },
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  activated() {
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    handlePlaylist() {
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
