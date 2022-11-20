<template>
  <div class="post-image">
    <img class="post-image__img" :src="content.image.fields.file.url" alt="" >
  </div>
</template>

<script>
export default {
  name: "Post-image",
  props: ["content"],


}
</script>

<style lang="scss">

.post-image {
  width: 100%;
  height: 100%;
  max-height: 712px;
  margin-bottom: 10px;

  @media (min-width: 576px) {
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
