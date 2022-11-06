<template>
    <div class="services-page">
      <PageHeading :title=title />
      <div class="container">
        <div class="services-page__content">
          <div class="services-page__description">
            <div class="services-page__coll service">
              <h2 class="service__title">Design Interior</h2>
              <ul class="service__list">
                <li class="service__list-item">обмерочный план;</li>
                <li class="service__list-item">рекомендации к проекту;</li>
                <li class="service__list-item">спецификация внесенных правок в проект;</li>
                <li class="service__list-item">план демонтажа;</li>
                <li class="service__list-item">план монтажа;</li>
                <li class="service__list-item">план после перепланировки;</li>
                <li class="service__list-item">3D схема квартиры;</li>
                <li class="service__list-item">мебельный план;</li>
                <li class="service__list-item">спецификация мебели;</li>
                <li class="service__list-item">план маркировки углов помещений;</li>
                <li class="service__list-item">развертка стен помещений;</li>
                <li class="service__list-item">спецификация сантехнических приборов;</li>
                <li class="service__list-item">план размещения осветительных приборов;</li>
                <li class="service__list-item">спецификации освещения и электрооборудования;</li>
                <li class="service__list-item">план групп света, выключателей, розеток и электровыводов;</li>
                <li class="service__list-item">план аудио/видео сети;</li>
                <li class="service__list-item">план вентиляции и кондиционирования;</li>
                <li class="service__list-item">план потолков; разрезы потолков;</li>
                <li class="service__list-item">план покрытия полов; разрезы по полам;</li>
                <li class="service__list-item">план отопления;</li>
                <li class="service__list-item">спецификация радиаторов;</li>
                <li class="service__list-item">план заполнения дверных проемов; спецификация дверей.</li>
              </ul>
            </div>
            <div class="services-page__coll service">
              <h2 class="service__title">Архитектура</h2>
              <ul class="service__list">
                <li class="service__list-item">архитектурные решения до 3 вариантов;</li>
                <li class="service__list-item">фасад;</li>
                <li class="service__list-item">3D визуализация эскизно;</li>
                <li class="service__list-item">технико-экономические показатели (ведомость отделки фасадов, спецификация оконных и дверных проемов, площадь озеленения и мощения);</li>
                <li class="service__list-item">схема застройки (привязка дома к участку на основании топосъемки участка);</li>
                <li class="service__list-item">план благоустройства.</li>
              </ul>
            </div>

            <div class="services-page__coll service">
              <h2 class="service__title">Ремонтные работы</h2>
              <ul class="service__list">
                <li class="service__list-item">архитектурные решения до 3 вариантов;</li>
                <li class="service__list-item">фасад;</li>
                <li class="service__list-item">3D визуализация эскизно;</li>
                <li class="service__list-item">технико-экономические показатели (ведомость отделки фасадов, спецификация оконных и дверных проемов, площадь озеленения и мощения);</li>
                <li class="service__list-item">схема застройки (привязка дома к участку на основании топосъемки участка);</li>
                <li class="service__list-item">план благоустройства.</li>
              </ul>
            </div>

            <div class="services-page__coll service">
              <h2 class="service__title">Изготовление мебели</h2>
              <ul class="service__list">
                <li class="service__list-item">производство и сборка мягкой мебели (диваны, кресла);</li>
                <li class="service__list-item">изготовление и сборка корпусной мебели (кухни, шкафы, комоды, кровати и т.д.);</li>
                <li class="service__list-item">изготовление гардеробных и раздвижных систем.</li>
              </ul>
            </div>

          </div>
          <div class="services-page__contact">
            <div class="services-page__contact-heading">
              <h2 class="services-page__contact-title">{{ $t('servicesPage.title') }}</h2>
              <div class="services-page__contact-subtitle">
                <p>{{ $t('servicesPage.subTitleTop') }}</p>
                <p>{{ $t('servicesPage.subTitleBottom') }}</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

  name:"Services",
  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
      meta: [
        {
          name: "services",
        },
      ],
    };
  },
  data () {
    return {
      title: 'header.services',
    }
  }
}
</script>

<style lang="scss">
.services-page {
  &__description {
    display: flex;
    flex-wrap: wrap;
    margin-right: -60px;
    margin-left: -60px;
    @media (max-width: 1500px) {
      margin-left: -40px;
      margin-right: -40px;
    }

    @media (max-width: 768px) {
      margin-left: -15px;
      margin-right: -15px;
    }
  }

  &__contact-heading {
    text-align: center;
  }

  &__contact-title {
    font-size: 48px;
    margin-bottom: 60px;
    text-transform: uppercase;
    font-family: "Gotham Pro Medium", sans-serif;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 40px;
    }
  }

  &__contact-subtitle {
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 85px;


    @media (max-width: 768px) {
      font-size: 18px;
      margin-bottom: 55px;
    }
  }
}
.service{
  flex: 0 0 100%;
  max-width: 25%;
  padding-right: 60px;
  padding-left: 60px;
  margin-bottom: 100px;
  @media (max-width: 1500px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 1200px) {
  max-width: 50%;
  }

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 80px;
    }
  }

  &__title {
    font-size: 36px;
    line-height: 1.1;
    font-family: "Gotham Pro Light", sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    padding-bottom: 35px;
    margin-bottom: 35px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background-color: #ffffff;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 576px) {
      padding-bottom: 25px;
      margin-bottom: 25px;
    }
  }

  &__list {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  &__list-item {
    font-size: 21px;
    font-family: "Gotham Pro Light", sans-serif;
    line-height: 1.1;

    @media (max-width: 1500px) {
      font-size: 21px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

}
</style>
