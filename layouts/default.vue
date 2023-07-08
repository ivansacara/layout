<template>
  <div class="wrapper">
    <div class="overlay" @click="overlayClicked"></div>
    <div class="pop-up-form">
       <span class="pop-up-form__icon" @click="overlayClicked">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.878px" height="122.88px" viewBox="0 0 122.878 122.88" enable-background="new 0 0 122.878 122.88" xml:space="preserve">
            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"/>
        </svg>
      </span>
      <div class="pop-up-form__title">{{ $t('popUpForm.title') }}</div>
      <p class="pop-up-form__text">{{ $t('popUpForm.textTop') }}</p>
      <p class="pop-up-form__text">{{ $t('popUpForm.textBottom') }}</p>
      <ContactForm />
    </div>
    <Header/>
      <main>
        <ButtonFixed />
        <Nuxt />
      </main>
    <Footer />

  </div>
</template>
<script>
import { GlobalEventEmitter } from '/utils/globalEventEmitter';
import json from '../static/chatra.json'

export default {
  name: "default",
  data() {
      return {
        lang: '',
        chatraJson: json,
      }
  },

  methods: {
    overlayClicked() {
      document.body.classList.remove('navIsOpened');
      document.body.classList.remove('formIsOpened');
    },
    chatra(lang = 'en') {
      if (lang === 'ro') {
        lang = 'it'
      }
      if (process.browser) {
        window.ChatraSetup = {
          customWidgetButton: '.custom-chat-button',
          language: lang,
          locale: this.chatraJson,
        }
      }
    }
  },
  created() {
    if (process.browser) {
      this.lang = window.localStorage.getItem("LANGUAGE");
    }
    this.chatra(this.lang);

    GlobalEventEmitter.$on('lang-changed', (lang) => {
      this.chatra(lang);
      window.Chatra('restart')
    })
  }
};

</script>
<style lang="scss">
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
  font-family: 'Montserrat', sans-serif;
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
.header__main-top,
.header__main-bottom,
.footer__main {
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 1;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
  width: 395px;
  height: 65px;

  &:hover,
  &:focus{
    color: #888888;
    border-color: #888888;
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
  display: inline-block;
  svg {
    transition: all 0.3s;
    &:hover,
    &:focus {
      fill: #888888;
    }
  }
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
  max-width: 993px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.9s;
  visibility: hidden;
  opacity: 0;
  background-color: #1c1c1c;
  overflow: auto;
  text-align: center;
  padding-top: 40px;
  max-height: 880px;
  //@media (min-width: 768px) {
  //  padding-top: 100px;
  //  padding-bottom: 50px;
  //}
  @media (max-width: 992px) {
    height: 100vh;
  }
  &__title{
    font-size: 38px;
    line-height: 1;
    font-weight: 400;
    //font-family: "Gotham Pro Medium", sans-serif;
    text-transform: uppercase;
    margin-bottom: 22px;
    padding: 0 15px;
    @media (min-width: 768px) {
      font-size: 48px;
    }
  }
  &__text{
    font-size:16px;
    padding: 0 15px;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
  &__icon {
    position: absolute;
    right: 15px;
    top: 15px;
    svg {
      fill: #ffffff;
      width: 20px;
      height: 20px;
      cursor: pointer;
      @media (min-width: 768px) {
        width: 25px;
        height: 25px;
      }
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
