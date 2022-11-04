<template>
  <div class="main-page">
    <Slider />
    <div class="container">
      <div class="main-page__description">
        <h2 class="main-page__title">{{ $t('mainPage.title') }}</h2>
        <p class="main-page__text">
          {{ $t('mainPage.text') }}
        </p>
      </div>
    </div>
  <Posts :enabled="true"/>
  </div>
</template>

<script>


export default {
  name: "IndexPage",

  head() {
    return {
      title: "Layout",
      meta: [
        {
          name: "description",
          content: "My Custom Description",
        },
      ],
    };
  },

};
</script>
<style lang="scss">
.main-page {
  &__description {
    padding-top: 90px;
    max-width: 1050px;
    width: 100%;
    margin: 0 auto 115px;
    font-family: "Gotham Pro Light", sans-serif;
  }

  &__title{
    font-size: 36px;
    line-height: 1;
    font-weight: 400;
    text-align: center;
    margin-bottom: 80px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 42px;
    }
  }

  &__text {
    font-size: 14px;
    text-align: center;

  }
}

</style>
