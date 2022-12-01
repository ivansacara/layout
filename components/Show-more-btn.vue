<template>
    <button class="show-more-btn btn" v-bind:class="{'disabled': project.length === total}"  :disabled='isLoading'  @click="LoadBefore()">{{ $t('showMoreBtn.text') }}</button>
</template>

<script>
import { GlobalEventEmitter } from '/utils/globalEventEmitter';
export default {
  name: "Show-more-btn",
  props:['eventName', 'isLoading', 'project','total'],

  methods: {
    LoadBefore() {
      GlobalEventEmitter.$emit(this.eventName);
      }
    }


}
</script>
<style lang="scss">
.show-more-btn {
  margin: 80px auto 0;
  position: relative;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #888888;
  }

  &:before {
    content: '';
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='%23ffffff' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  }
  &[disabled] {
    color: #888888;
    border-color: #888888;
    cursor: default;
    &:before {
      width: 45px;
      height: 45px;
      background-image: url("../static/img/loading.gif");
    }
  }
  &.disabled {
    display: none;
  }
  @media (max-width: 768px){
    font-size: 18px;
    max-width: 300px;
    width: 100%;
    height: 55px;
  }
}
</style>





