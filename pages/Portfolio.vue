<template>
  <div class="portfolio-page">
    <PageHeading :title=title />
    <div class="portfolio-page__content">
    <Posts />
      </div>
  </div>
</template>

<script>
export default {
  name:"Portfolio",
  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
      meta: [
        {
          name: "Portfolio",
        },
      ],
    };
  },
  data () {
    return {
      title: 'header.portfolio',
    }
  }
}
</script>
