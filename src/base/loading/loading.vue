<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">{{title}}<span class="refresh" @click="refresh1" v-show="refresh">返回</span></p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '来不及解释了快上车...'
      },
      refresh: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      refresh1() {
        this.$router.back()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .loading
    width: 100%
    text-align: center
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
      .refresh
        color: $color-theme
        text-decoration: underline
</style>
