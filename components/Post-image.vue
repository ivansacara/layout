<template>
  <div class="post-image">
    <img class="post-image__img" src="white_background_2.jpg" alt="" >
  </div>
</template>


<style lang="scss">

.post-image {
  width: 100%;
  height: 100%;
  max-height: 712px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  &__img {
    width: 100%;
    max-height: 712px;
    object-fit: cover;
  }
}
</style>
