<template>
  <button class="button-fixed" type="button" @click="openForm">{{ $t('fixedBtn.text_1') }}<span>{{ $t('fixedBtn.text_2') }}</span></button>
</template>


<script>
export default {
  name: "ButtonFixed",
  data() {
    return {
      isActive: false,
    }
  },


  methods: {
    openForm(){
      this.$chatra('openChat')
    }
  },
};

</script>
<style lang="scss">

.button-fixed {
  padding: 10px;
  background-color: #FFFFFF;
  color: #000000;
  position: fixed;
  right: 0;
  bottom: 70px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  &:hover {
    background-color: #bebebe;
  }
  span {
    display: none;
    @media (min-width: 768px) {
      display: block;
      margin-left: 5px;
    }
  }
  @media (min-width: 768px) {
    padding: 20px 30px;
    bottom: 370px;
    font-size: 16px;
  }
}
</style>
