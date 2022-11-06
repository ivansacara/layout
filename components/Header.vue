<template>
  <header class="header">
    <div class="header__main">
      <div class="header__main-top">
        <a class="header__phone-link header__phone-link--mobile" href="tel:+37379187494">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.62 26.62 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zm1.41 5.66L23.5 27.94a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6S3.31 15.41 3 12.16a4.53 4.53 0 0 1 1-3.66L5.41 7.14a1 1 0 0 1 .71-.29h0a1 1 0 0 1 .71.29L9.66 10a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.49 27.49 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83h0a1 1 0 0 1 .29.71A1 1 0 0 1 24.86 26.59zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z" />
            <path
              d="M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z" />
          </svg>
        </a>
        <div class="header__socials-langs">
          <div class="header__socials soc">
            <a href="https://www.instagram.com/" class="soc__link">
              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" class="header__social soc__link">
              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="24px" height="24px"><path d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"/></svg>
            </a>
          </div>
          <LanguageSwitcher />
        </div>
        <div class="header__logo">
         <Logo />
        </div>

        <a href="tel:+37379187494" class="header__phone-link header__phone-link--desktop phone-link">MD: +373 79 187 494</a>

        <Burger />
      </div>
      <div class="header__main-bottom" v-bind:class="{'opened': isActive}">
        <div class="header__langs--mobile">
         <LanguageSwitcher />
        </div>
        <nav class="header__nav">
          <nuxt-link
            v-for="(item, index) in menu"
            v-bind:todo="item"
            v-bind:key="index"
            :to="localePath(item.path)"
            class="header__nav-link"
            v-on:click.native="closeNavigation()"
          >
            {{ $t(item.text) }}
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>

import {GlobalEventEmitter} from "@/utils/globalEventEmitter";

export default {
  name: "Header",

  data() {
    return {
      menu: [
        { text: 'header.main', path: '/' },
        { text: 'header.services', path: '/services' },
        { text: 'header.portfolio', path: '/portfolio' },
        { text: 'header.beforeAfter', path: '/before-after' },
        { text: 'header.about', path: '/about' },
        { text: 'header.contacts', path: '/contacts' }
      ],
      isActive: false,
    }
  },

  methods: {
    closeNavigation() {
      document.body.classList.remove("navIsOpened");
      // GlobalEventEmitter.$emit('burger-overlay-nav-close', {})
    },
  },
  // created() {
  //   GlobalEventEmitter.$on('nav-toggleShow', () => {
  //     this.isActive = !this.isActive;
  //     // document.body.classList.toggle("navIsOpened");
  //   })
  //   GlobalEventEmitter.$on('nav-removeClass', () => {
  //     this.isActive = !this.isActive;
  //     // document.body.classList.toggle("navIsOpened");
  //   })
  // },
};
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  //z-index: 15;
  z-index: 1001;
  &__main {
    position: relative;
  }
  &__main-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #5b5754;
    @media (min-width: 768px) {
      padding-top: 35px;
      padding-bottom: 25px;
    }
  }
  &__socials-langs {
    display: none;
    min-width: 200px;
    @media (min-width: 768px) {
      display: flex;
    }
  }
  &__socials {
    margin-left: -7px;
    padding-right: 20px;
  }
  &__langs {
    &--mobile {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
  &__phone-link {
    font-family: "Gotham Pro Light", sans-serif;
    &--mobile {
      @media (min-width: 768px) {
        display: none;
      }
    }
    &--desktop {
      display: none;
      min-width: 200px;
      text-align: right;
      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  &__phone-link--mobile {
    display: inline-flex;
    svg {
      fill: #fff;
      width: 25px;
      height: 25px;
      transform: rotate(-90deg);
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  &__nav {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 25px 0;
    }
  }
  &__nav-link {
    padding: 15px 0;
    font-size: 21px;
    font-family: "Gotham Pro Light", sans-serif;
    line-height: 1;
    white-space: nowrap;
    @media (min-width: 768px) {
      padding: 0 13px;
      font-size: 19px;
    }
    @media (min-width: 992px) {
      font-size: 21px;
    }
  }
  &__main-bottom {
    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;
      background-color: #181818;
      max-width: 320px;
      width: 100%;
      padding: 40px 30px;
      height: 100vh;
      transition: all 0.5s;
      transform: translateX(320px);
      overflow: auto;
    }
  }
}

</style>
