<template>
  <div class="post-page">
    <PageHeading :title=title showBack='true'/>
    <div class="container">
      <div class="post__content">
        <PostImages />
        <PostImage />
        <PostImage />
        <PostImages />
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name:"Post",
  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
    };
  },
}
</script>

<style lang="scss">

.post-page {

  &__content {
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
  }
}

</style>
