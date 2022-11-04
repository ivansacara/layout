<template>
  <button class="button-fixed" type="button" @click="openForm">{{ $t('fixedBtn.text_1') }}<span>{{ $t('fixedBtn.text_2') }}</span></button>
</template>


<script>

export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    }
  },

  methods: {
    openForm(){
      document.body.classList.add("formIsOpened");
    }
  },
};

</script>
<style lang="scss">

.button-fixed {
  padding: 10px;
  background-color: #FFFFFF;
  color: #000000;
  text-transform: uppercase;
  position: fixed;
  right: 0;
  bottom: 70px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 10px;
  line-height: 1;
  font-weight: 400;
  display: flex;
  &:hover {
    background-color: #bebebe;
  }
  span {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  @media (min-width: 768px) {
    padding: 20px 30px;
    bottom: 370px;
    font-size: 16px;
  }
}
</style>
