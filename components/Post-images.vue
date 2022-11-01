<template>
  <div class="post-images">

    <div class="post-images__image-wrap">
      <div class="post-images__image-wrap-inner">
        <img class="post-images__img" src="white_background.jpg" alt="" >
      </div>
    </div>

    <div class="post-images__image-wrap">
      <div class="post-images__image-wrap-inner">
        <img class="post-images__img" src="white_background.jpg" alt="" >
      </div>
    </div>

  </div>
</template>


<style lang="scss">

.post-images {
  display: flex;
  margin-left: -5px;
  margin-right: -5px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 576px) {
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 40px;
  }


  &__image-wrap {
    flex: 0 0 100%;
    max-width: 50%;
    padding-left: 5px;
    padding-right: 5px;

    @media (min-width: 576px) {
      padding-left: 10px;
      padding-right: 10px;
    }

    @media (min-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &__image-wrap-inner {
    width: 100%;
    height: 100%;
  }

  &__img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
