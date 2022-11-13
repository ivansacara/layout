<template>
  <nuxt-link :to="localePath('/portfolio')" class="show-more-link">{{ $t('showMoreBtn.text') }}</nuxt-link>
</template>

<script>
export default {
  name: "Show-more-link",
}
</script>

<style lang="scss">
.show-more-link {
  padding: 20px 30px;
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1;
  display: block;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
  margin-top: 80px;
  &:hover,
  &:focus{
    color: #888888;
    border-color: #888888;
  }

  //&:before {
  //  content: '';
  //  position: absolute;
  //  top: -50px;
  //  left: 50%;
  //  transform: translateX(-50%);
  //  width: 30px;
  //  height: 30px;
  //  background-position: center;
  //  background-size: contain;
  //  background-repeat: no-repeat;
  //  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='%23ffffff' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  //}
  @media (min-width: 768px) {
    padding: 25px 50px;
    font-size: 20px;
  }
}
</style>
