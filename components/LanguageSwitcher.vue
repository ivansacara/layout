<template>
  <div class="langs">
    <nuxt-link to="#" class="lang">ro</nuxt-link>
    <nuxt-link to="#" class="lang lang--ru">ru</nuxt-link>
    <nuxt-link to="#" class="lang">en</nuxt-link>
  </div>
</template>

<style lang="scss">

.langs {
  display: flex;
  align-items: center;
}
.lang {
  font-size: 16px;
  text-transform: uppercase;
  position: relative;

}

.lang--ru {
  padding: 0 16px;
  &::before,
  &::after {
    content: '/';
    position: absolute;
    top: 0;
    color: #fff;
  }
  &::before {
    left: 4px;
  }
  &::after {
    right: 4px;
  }
}
</style>
