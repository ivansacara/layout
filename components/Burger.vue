<template>
  <div class="burger" @click="openNavigation" v-bind:class="{'active': isActive}" >
    <span></span>
  </div>
</template>

<script>

import {GlobalEventEmitter} from "@/utils/globalEventEmitter";

export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    }
  },

  methods: {
    openNavigation() {
      document.body.classList.toggle("navIsOpened");
      // document.body.classList.toggle("navIsOpened");
      // GlobalEventEmitter.$emit('overlay-toggleShow', {})
      // GlobalEventEmitter.$emit('nav-toggleShow', {})
      // this.isActive = !this.isActive
    },
  },
  // created() {
  //   GlobalEventEmitter.$on('burger-toggleClass', () => {
  //     // document.body.classList.toggle("navIsOpened");
  //   })
  // },
};
</script>

<style lang="scss">

.burger {
  display: block;
  position: relative;
  z-index: 1001;
  width: 25px;
  height: 18px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    transition: all 0.3s;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  span {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    top: 8px;
  }
  @media (min-width: 768px) {
    display: none;
  }
  //&.active {
  //  &::before {
  //    transform: rotate(45deg);
  //    top: 8px;
  //  }
  //  &::after {
  //    transform: rotate(-45deg);
  //    bottom: 8px;
  //  }
  //  span {
  //    display: none;
  //  }
  //  .header__main-bottom {
  //    transform: translateX(0);
  //  }
  //}
}

</style>
