<template>
  <div class="slider">
    <div class="slider__container swiper-container" v-swiper:mySwiper="sliderMain" >
      <div class="slider__wrapper swiper-wrapper">
        <div class="slider__slide swiper-slide">
          <nuxt-link class="slider__slide-text" :to="localePath('/portfolio')">
            <p>Загородный дом | Архитектурный проект</p>
            <h1>AV10</h1>
          </nuxt-link>
          <div class="slider__slide-image">
            <img class="slider__slide-img" src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg"  alt="slide"/>
          </div>

        </div>
      </div>
        <button id="slider__button-prev" class="slider__button-prev swiper-button slider__btn" >
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 267 512.43">
            <path fill-rule="nonzero" d="M263.78 18.9c4.28-4.3 4.3-11.31.04-15.64a10.865 10.865 0 0 0-15.48-.04L3.22 248.38c-4.28 4.3-4.3 11.31-.04 15.64l245.16 245.2c4.28 4.3 11.22 4.28 15.48-.05s4.24-11.33-.04-15.63L26.5 256.22 263.78 18.9z"/>
          </svg>
        </button>
        <button id="slider__button-next" class="slider__button-next swiper-button slider__btn">
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 267 512.43">
            <path fill-rule="nonzero" d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"/>
          </svg>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["slider"],

  data() {
    return {
      sliderMain: {
        loop: true,
        speed: 600,
        slidesPerView: 1,
        loopAdditionalSlides: true,
        slidesPerColumn: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: "#slider__button-next",
          prevEl: "#slider__button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss">

.slider {

  &__container {
    position: relative;
  }

  &__slide {
    position: relative;
    min-height: 450px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(#0000, 0.7);
    }
  }

  &__slide-image {
    width: 100%;
    min-height: 450px;
    height: 100%;

    @media (min-width: 768px) {
      height: 100vh;
      width: 100vw;
    }
  }

  &__slide-img {
    width: 100%;
    display: block;
    min-height: 450px;
    object-fit: cover;
    @media (min-width: 768px) {
      height: 100vh;
      min-height: 450px;
      width: 100vw;
    }
  }

  &__slide-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    p {
      font-size: 14px;
      font-family: "Gotham Pro Light", sans-serif;
      line-height: 1;
      margin-bottom: 35px;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
    h1 {
      font-size: 40px;
      line-height: 1;
      font-family: "Gotham Pro Light", sans-serif;
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: 60px;
      }
      @media (min-width: 992px) {
        font-size: 80px;
      }
    }
  }
  &__btn {
    position: absolute;
    background-color: transparent;
    outline: none;
    z-index: 4;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);

    svg {
      width: 30px;
      height: 30px;
      fill: #ffffff;
      transition: all 0.5s;
      &:hover,
      &:focus {
        fill: #888888;
      }
      @media (min-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }
  }
  &__button-prev {
    left: 10px;
    @media (min-width: 768px) {
      left: 40px;
    }
  }
  &__button-next {
    right: 10px;
    @media (min-width: 768px) {
      right: 40px;
    }
  }
}

</style>
