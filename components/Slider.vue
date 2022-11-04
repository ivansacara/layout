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
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"

            />
          </svg>
        </button>
        <button id="slider__button-next" class="slider__button-next swiper-button slider__btn">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"

            />
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
