<template>
  <form class="contact-form">
    <label for="name" class="contact-form__label">Имя</label>
    <input type="text" id="name" class="contact-form__input">
    <label for="mail" class="contact-form__label">Email</label>
    <input type="email" id="mail" class="contact-form__input">
    <label for="phone" class="contact-form__label">Телефон</label>
    <input type="number" id="phone" class="contact-form__input">
    <label for="comment" class="contact-form__label">Комментарии</label>
    <input type="text" id="comment" class="contact-form__input">
    <button type="submit" class="contact-form__button">Отправить заявку</button>
  </form>
</template>

<style lang="scss">
.contact-form{
  background-color: #1c1c1c;
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 30px 50px 30px;
  margin: 0 auto;
  text-align: left;
  overflow: auto;
  max-height: 100vh;
  @media (min-width: 576px){
    padding: 60px 60px 70px 60px;
  }
  &__label{
    font-size: 18px;
    line-height: 1;
    font-weight: 400;
    margin-bottom: 5px;
    @media (min-width: 576px) {
      font-size: 24px;
    }
  }
  &__input{
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 35px;
    height: 35px;
    color: #ffffff;
    font-size: 21px;
    @media (min-width: 576px) {
      margin-bottom: 50px;
      height: 50px;
      font-size: 24px;
    }
  }
  &__button{
    text-transform: uppercase;
    font-size: 18px;
    line-height: 0.9;
    color: #ffffff;
    border: 1px solid #ffffff;
    background-color: transparent;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.5s;
    @media (min-width: 576px) {
      font-size: 20px;
      padding: 25px 0;
    }
    &:hover,
    &:focus{
      color: #888888;
      border-color: #888888;
    }
  }
}

</style>
