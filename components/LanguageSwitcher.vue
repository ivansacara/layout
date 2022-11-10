<template>
  <div class="langs">
    <nuxt-link class="lang" v-on:click.native="emitLang('ro')" :to="switchLocalePath(selectLang('ro'))">{{ $t(`common.ro`) }}</nuxt-link>
    <nuxt-link class="lang  lang--ru" v-on:click.native="emitLang('ru')" :to="switchLocalePath(selectLang('ru'))">{{ $t(`common.ru`) }}</nuxt-link>
    <nuxt-link class="lang" v-on:click.native="emitLang('en')" :to="switchLocalePath(selectLang('en'))">{{ $t(`common.en`) }}</nuxt-link>
  </div>
</template>


<script>
import { GlobalEventEmitter } from '/utils/globalEventEmitter';
export default {
  name: "Langs",

  methods: {
    selectLang(lang) {
      return this._i18n.localeCodes.find(x => {
        return x === lang;
      });
    },
    emitLang(lang) {
      GlobalEventEmitter.$emit('lang-changed', lang);
      window.localStorage.setItem("LANGUAGE", lang);
    }
  },
};
</script>

<style lang="scss">

.langs {
  display: flex;
  align-items: center;
}
.lang {
  font-size: 16px;
  font-family: "Gotham Pro Light", sans-serif;
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
