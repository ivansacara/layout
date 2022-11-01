<template>
  <div class="main-page">
    <Slider />
    <div class="container">
      <div class="main-page__description">
        <h2 class="main-page__title">Архитектура | ДИЗАЙН ИНТЕРЬЕРА </h2>
        <p class="main-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel mauris sed massa molestie dignissim. Cras dictum, tortor id luctus faucibus, nulla libero congue quam, at malesuada nunc nunc ac augue. Donec dictum pellentesque placerat.
          Etiam felis mauris, finibus eu volutpat non, malesuada in sapien.
          Suspendisse potenti. Ut varius lectus ac ante convallis porta. Ut ullamcorper ut odio eget tempus. Donec sagittis, est in faucibus gravida,
          ugue augue luctus libero, eu finibus augue arcu a dui. In urna elit, tristique vel urna nec, euismod rutrum massa. Curabitur porttitor sagittis enim, eu cursus orci hendrerit in. Donec in augue urna. Praesent lobortis augue ut quam lobortis feugiat at nec ligula. Sed blandit pellentesque venenatis. Proin sit amet lacinia sapien, a rutrum sapien. Suspendisse mollis, velit sed porttitor molestie, lectus metus semper leo, vel lacinia orci lorem quis nisi. Donec rutrum mauris vitae rhoncus condimentum.
        </p>
      </div>
    </div>
  <Posts />
  </div>
</template>

<script>


export default {
  name: "IndexPage",

  head() {
    return {
      title: "Layout",
    };
  },

};
</script>
<style lang="scss">
.main-page {
  &__description {
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
