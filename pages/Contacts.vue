<template>
  <div class="contacts-page">
    <PageHeading :title=title />
    <div class="container">
      <div class="contacts-page__heading">
        <p class="contacts-page__text">
          {{ $t('contactsPage.topText') }}
        </p>
        <a class="contacts-page__phone" href="tel:+37368580787">+373 68 580 787</a>
        <p class="contacts-page__text">
          {{ $t('contactsPage.bottomText') }}
        </p>
      </div>
      <div class="contacts-page__contact-form">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Contacts",
  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
    };
  },
  data () {
    return {
      title: 'header.contacts',
    }
  }
}
</script>


<style lang="scss">
.contacts-page {
  &__heading{
    text-align: center;
    margin-bottom: 30px;
  }
  &__text{
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
  &__phone{
    display: block;
    font-size: 32px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      font-size: 40px;
      margin-top: 50px;
      margin-bottom: 70px;
    }
  }
  &__contact-form{
    display: flex;
    justify-content: center;
  }
}
</style>
