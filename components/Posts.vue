<template>
  <div class="posts__items post__items">
    <div class="posts__items post__items">

      <div class="post__item" v-for="item of project">
        <nuxt-link :to="localePath(`/projects/${item.url}`)" class="post__item-inner">
          <span class="post__item-name">{{ item.title }}</span>
          <img :src="item.preview" alt="" class="post__item-image">
        </nuxt-link>
      </div>

    </div>
    <ShowMoreBtn :eventName="eventName" :isLoading="isLoading" :project="project" :total="total"/>
  </div>
</template>


<script>
export default {
  name: "Posts",
  props:['eventName','project', 'isLoading', 'total'],

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
    cursor: pointer;

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
