<template>
  <div class="before-after__item">
    <div class="before-after__item-title">
      Vander Park, 88
      <span>(дизайн квартиры)</span>
    </div>
    <div class="before-after__item-images">
      <div class="before-after__item-image-wrapper">
        <img src="../static/img/white_background.jpg" alt="" class="before-after__item-image">
      </div>
      <div class="before-after__item-image-wrapper">
        <img src="../static/img/white_background.jpg" alt="" class="before-after__item-image">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.before-after {

  &__item {
    margin-bottom: 90px;

    @media (min-width: 768px) {
      margin-bottom: 90px;
    }
  }

  &__item-title {
    font-size: 28px;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 60px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  &__item-images {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      margin-right: -15px;
      margin-left: -15px;
    }
  }

  &__item-image-wrapper {
    flex: 0 0 100%;
    max-width: 100%;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      padding-left: 15px;
      padding-right: 15px;
      flex: 0 0 100%;
      max-width: 50%;

      &:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }

  &__item-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
