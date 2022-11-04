<template>
  <div class="page-heading">
    <div class="container">
      <div class="page-heading__inner">
        <nuxt-link class="page-heading__back" v-if="showBack" :to="localePath('/portfolio')"><span><</span>Назад</nuxt-link>
        <h1 class="page-heading__title">{{ $t(title) }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Page-heading",
  props:{
    title: {type: String},
    showBack: {type: Boolean, default: false}
  }
}

</script>

<style lang="scss">
.page-heading{
  padding-top: 35px;
  padding-bottom: 35px;
  margin-bottom: 40px;
  border-top: 1px solid #5d5c5b;
  border-bottom: 1px solid #5d5c5b;
  @media (min-width: 768px) {
    padding-top: 55px;
    padding-bottom: 55px;
    margin-bottom: 80px;
  }
  &__inner{
    text-align: center;
    position: relative;
  }
  &__title{
    font-size: 32px;
    font-weight: 400;
    line-height: 1;
    margin: 0;
    text-transform: uppercase;
  }
  &__back {
    font-size: 14px;
    line-height: 1.1;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    &.nuxt-link-exact-active.nuxt-link-active {
      color: #FFFFFF;
    }
  }
}

</style>
