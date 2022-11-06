<template>
  <div class="about-page">
    <PageHeading :title=title />
      <div class="about-page__content">
        <p>{{ $t('aboutPage.text_1') }}</p>
        <p>{{ $t('aboutPage.text_2') }}</p>
        <p>{{ $t('aboutPage.text_3') }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name:"About",

  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
      meta: [
        {
          name: "Abous Us",
        },
      ],
    };
  },
  data () {
    return {
      title: 'header.about',
    }
  }
}
</script>

<style lang="scss">
.about-page {
  text-align: center;
  &__content {
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    p:not(:last-child){
      margin-bottom: 25px;
    }
  }

}
</style>
