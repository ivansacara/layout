<template>
  <div class="before-after-page">
    <PageHeading />
    <div class="container">
      <div class="before-after-page__content">
        <BeforeAfter />
        <BeforeAfter />
        <ShowMoreBtn />
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.before-after-page {

  &__content {
    max-width: 1430px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
