<template>
  <div class="wrapper">
    <div class="overlay" @click="overlayClicked"></div>
    <div class="pop-up-form">
      <span class="pop-up-form__icon" @click="overlayClicked">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.878px" height="122.88px" viewBox="0 0 122.878 122.88" enable-background="new 0 0 122.878 122.88" xml:space="preserve">
            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"/>
        </svg>
      </span>
      <ContactForm />
    </div>
    <Header  />
      <main>
        <ButtonFixed />
        <Nuxt />
      </main>
    <Footer />

  </div>
</template>
<script>
import { GlobalEventEmitter } from '/utils/globalEventEmitter';

export default {
  name: "default",

  // data() {
  //   return {
  //     isActive: false,
  //   }
  // },
  methods: {
    overlayClicked() {
      document.body.classList.remove('navIsOpened');
      document.body.classList.remove('formIsOpened');
      // this.isActive = !this.isActive;
      // GlobalEventEmitter.$emit('burger-removeClass', {})
      // GlobalEventEmitter.$emit('nav-removeClass', {})
      // GlobalEventEmitter.$emit('form-removeShow', {})

    },
  },
  // created() {
  //   GlobalEventEmitter.$on('overlay-toggleShow', () => {
  //     this.isActive = !this.isActive;
  //   })
  // },
};

</script>
<style lang="scss">
@font-face {
  font-family: "Gotham Pro";
  src: local("Gotham Pro"),
  url(static/font/GothaProReg.ttf),url(static/font/GothaProLig.ttf) format("truetype");
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
html{

}
body {
  background-color: #171514;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
  color: #fff;
  font-family: 'Gotham Pro Regular', sans-serif;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 18px;
  }
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.container{
  max-width: 2000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  @media (min-width: 768px) {
    padding: 0 40px;
  }
}
main {
  flex: 1 1 auto;
}
.overflow{
  overflow: hidden;
}
.header__main,
.footer__main {
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.phone-link{
  font-size: 16px;
  line-height: 1.1;
  font-weight: 300;
}
a {
  text-decoration: none;
  color: #fff;
  transition: all 0.5s;
  &:hover {
    color: #888888;
  }
  &.nuxt-link-exact-active {
    color: #888888;
    cursor: default;
  }
}

.soc__link {
  padding: 0 7px;
}

.soc__img {
  max-width: 100%;
  height: auto;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
}
.pop-up-form {
  position: fixed;
  z-index: 1005;
  max-width: 580px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.9s;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  &__icon {
    position: absolute;
    right: 15px;
    top: 15px;
    svg {
      fill: #ffffff;
      width: 25px;
      height: 25px;
    }
  }
}

.navIsOpened {
  overflow: hidden;
  .overlay {
    display: block;
  }
  .header__main-bottom {
    transform: translate(0);
  }

  .header {
    z-index: auto;
  }

  .slider {
    z-index: -1;
  }
  .burger {
    &::before {
      transform: rotate(45deg);
      top: 8px;
    }
    &::after {
      transform: rotate(-45deg);
      bottom: 8px;
    }
    span {
      display: none;
    }

  }
}

.formIsOpened {
  overflow: hidden;

  .overlay {
    display: block;
  }

  .pop-up-form {
    display: block;
    visibility: visible;
    opacity: 1;
  }
}

.portfolio-page,
.post-page {
  .page-heading {
    margin-bottom: 0;
    border-bottom: none;
  }
}
//.portfolio-page,
//.before-after-page,
//.services-page,
//.about-page,
//.contacts-page {
//  .page-heading .page-heading__back{
//    display: none;
//  }
//}

.portfolio-page,
.before-after-page,
.services-page,
.about-page,
.contacts-page,
.post-page {
  padding-top: 95px;
  @media (min-width: 768px) {
    padding-top: 195px;
  }

}
</style>
