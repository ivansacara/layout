<template>
  <div class="before-after__item">
    <div class="before-after__item-title">
      {{ beforeAfter.title }}
    </div>
    <div class="before-after__item-images">
      <div class="before-after__item-image-wrapper">
        <img :src="beforeAfter.imageLeft" alt="" class="before-after__item-image">
      </div>
      <div class="before-after__item-image-wrapper">
        <img :src="beforeAfter.imageRight" alt="" class="before-after__item-image">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Before-After-Component",
  props: ["beforeAfter"],


};
</script>

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
