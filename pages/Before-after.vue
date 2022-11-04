<template>
  <div class="before-after-page">
    <PageHeading :title=title />
    <div class="container">
      <div class="before-after-page__content">
        <BeforeAfter />
        <BeforeAfter />
        <ShowMoreBtn />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Before/After",

  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
    };
  },
  data () {
    return {
      title: 'header.beforeAfter',
    }
  }
}
</script>
<style lang="scss">
.before-after-page {

  &__content {
    max-width: 1430px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
