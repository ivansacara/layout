import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import SwiperClass, { Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';


SwiperClass.use([Navigation, Pagination]);
 
Vue.use(VueAwesomeSwiper);