<template>
    <div class="services-page">
      <PageHeading :title=title />
      <div class="container">
        <div class="services-page__content">
          <div class="services-page__description">
            <div class="services-page__coll service" v-for="service of services">
              <h2 class="service__title">{{ service.title }}</h2>
              <div class="service__content" v-html="service.content"></div>
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
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
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
  },

  async asyncData({ env, i18n }) {
    return Promise.all([
      client.getEntries({
        content_type: "servicePage",
        order: "-sys.createdAt",
      }),
    ])
      .then(([servicePage]) => {
        return{
          services: servicePage.items.map((itemService) => {
            return {
              title: itemService.fields[`title_${i18n.locale}`],
              content: documentToHtmlString(itemService.fields[`content_${i18n.locale}`])
            }
          })
        }
      })
      .catch(console.error);
  },
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
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 60px;
    text-transform: uppercase;

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
    font-weight: 300;
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

  &__content {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    li {
      font-size: 16px;
      font-weight: 300;
      line-height: 1.1;

      @media (min-width: 992px) {
        font-size: 18px;
      }
    }
  }



}
</style>
