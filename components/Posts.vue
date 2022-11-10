<template>
  <div class="posts__items post__items">
    <div class="posts__items post__items">
      <div class="post__item">
        <nuxt-link to="#" class="post__item-inner">
          <span class="post__item-name"></span>
          <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="post__item-image">
        </nuxt-link>
      </div>

      <div class="post__item">
        <nuxt-link to="#" class="post__item-inner">
          <span class="post__item-name"></span>
          <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="post__item-image">
        </nuxt-link>
      </div>

      <div class="post__item">
        <nuxt-link to="#" class="post__item-inner">
          <span class="post__item-name"></span>
          <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="post__item-image">
        </nuxt-link>
      </div>

      <div class="post__item">
        <nuxt-link to="#" class="post__item-inner">
          <span class="post__item-name"></span>
          <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="post__item-image">
        </nuxt-link>
      </div>

      <div class="post__item">
        <nuxt-link to="#" class="post__item-inner">
          <span class="post__item-name"></span>
          <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="post__item-image">
        </nuxt-link>
      </div>

      <div class="post__item">
        <nuxt-link to="#" class="post__item-inner">
          <span class="post__item-name">БЛА БЛА</span>
          <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="post__item-image">
        </nuxt-link>
      </div>
    </div>
    <ShowMoreBtn v-if="!enabled"/>
    <ShowMoreLink v-if="enabled"/>
  </div>
</template>


<script>
export default {
  name: "Posts",
  props:{
    enabled: {type: Boolean, default: false}
  }
}
</script>

<style lang="scss">

.posts {

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
  }
}
.post {
  &__item {
    flex: 0 0 100%;
    padding: 5px;

    @media (min-width: 768px) {
      max-width: 50%;
    }
    @media (min-width: 992px) {
      max-width: 33.333%;
    }
    &:focus,
    &:hover {
      .post__item-name{
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &__item-inner {
    display: block;
    width: 100%;
    max-height: 580px;
    height: 100%;
    position: relative;
    &:focus,
    &:hover {
      color: #FFFFFF;
    }
  }

  &__item-name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(#000000,0.85);
    font-size: 48px;
    line-height: 1.1;
    text-transform: uppercase;
    transition: all 0.3s;
    visibility: hidden;
    opacity: 0;

  }
  &__item-image {
    width: 100%;
    height: 100%;
  }
}

</style>
