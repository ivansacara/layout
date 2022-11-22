<template>
    <form class="contact-form" method="post" @submit.prevent="submit">
      <label class="contact-form__label" for="name">{{ $t('contactForm.name') }}</label>
      <input class="contact-form__input" required v-model="name" type="text" id="name">
      <label class="contact-form__label" for="mail">{{ $t('contactForm.mail') }}</label>
      <input class="contact-form__input" required v-model="email" type="email" id="mail">
      <label class="contact-form__label" for="phone">{{ $t('contactForm.phone') }}</label>
      <input class="contact-form__input" required v-model="phone" type="tel" id="phone">
      <label class="contact-form__label" for="comment">{{ $t('contactForm.message') }}</label>
      <input class="contact-form__input" required v-model="message" type="text" id="comment">
      <button class="contact-form__button" type="submit" >{{ $t('contactForm.btnText') }}</button>
    </form>
</template>

<script>

export default {
  name: "contact-form",

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message:"",

      // BOT-TELEGRAM
      token: '5651956390:AAF7UdWvVmwXrUPBCl_84Q7-IWCohSbbWL8',
      chat_id : -1001835353593,

    };
  },
  methods: {
    submit(){
      const messageInTelegram = `<b>Новый Запрос:</b>%0A <b>Имя:</b> <i>"${this.name}"</i>%0A <b>Mail:</b> <i>"${this.email}"</i>%0A <b>Телефон:</b> <i>${this.phone}</i>%0A <b>Сообшение:</b> <i>"${this.message}"</i>`;
      if (this.name !== '' && this.email !== '' && this.phone !== '' &&  this.message !== ''){
        fetch(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat_id}&text=${messageInTelegram}&parse_mode=html`,)
          .then(response => {
            this.name = "";
            this.email = "";
            this.phone = "";
            this.message ="";
          })
          .catch(error => {
            console.log(error)
          })
        document.body.classList.remove('formIsOpened');
      }
    },

  }
}

</script>

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
  @media (min-width: 576px){
    padding: 60px 60px 70px 60px;
  }
  &__label{
    font-size: 18px;
    line-height: 1;
    font-weight: 300;
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
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
