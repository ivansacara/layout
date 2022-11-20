<template>
  <div class="main-page">
    <Slider :slide="slides"/>
    <div class="container">
      <div class="main-page__description">
        <h2 class="main-page__title">{{ $t("mainPage.title") }}</h2>
        <div class="main-page__text" v-for="about of about" v-html="about.content">
        </div>
      </div>
    </div>
    <Posts :eventName="eventName" :project="projects"/>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import {GlobalEventEmitter} from "@/utils/globalEventEmitter";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
const client = createClient();
export default {
  name: "IndexPage",

  head() {
    return {
      title: "Layout main",
      meta: [
        {
          name: "Layut",
        },
      ],
    };
  },

  data () {
    return {
      eventName: 'redirect-to',

    }
  },
  mounted() {
    GlobalEventEmitter.$emit("header-add-class", "hasBorder");
    GlobalEventEmitter.$on(this.eventName, () => {
      this.$router.push('/projects')
    })
  },

  beforeDestroy() {
    GlobalEventEmitter.$emit("header-remove-class", "hasBorder");
    GlobalEventEmitter.$off(this.eventName)
  },
  async asyncData({ i18n }) {
    return Promise.all([
      client.getEntries({
        limit: 6,
        skip: 0,
        content_type: "post",
        order: "-sys.createdAt",
      }),
      client.getEntries({
        limit: 20,
        skip: 0,
        content_type: "slider",
        order: "-sys.createdAt",
      }),
      client.getEntries({
        content_type: "aboutUs",
        order: "-sys.createdAt",
      }),
    ])
      .then(([data, slider, aboutUs]) => {
        return {
          locale: i18n.locale,
          total: data.total,
          projects: data.items.map((item) => {
            const pathToItem = item.fields;

            return {
              title: pathToItem[`title_${i18n.locale}`],
              preview: pathToItem.preview.fields.file.url,
              url: pathToItem.url
            }
          }),

          slides: slider.items.map((item) => {
            const itemProps = item.fields;

            return {
              title: itemProps[`title_${i18n.locale}`],
              postName: itemProps[`postName_${i18n.locale}`],
              image: itemProps.image.fields.file.url,
              url: itemProps.link.fields.url
            }
          }),
          about: aboutUs.items.map((text) => {
            return {
              content: documentToHtmlString(text.fields[`text_${i18n.locale}`])
            }
          })

        }
      })
      .catch(console.error);
  },
};
</script>
<style lang="scss">
.main-page {
  &__description {
    padding-top: 90px;
    max-width: 1050px;
    width: 100%;
    margin: 0 auto 115px;
    font-weight: 300;
  }

  &__title {
    font-size: 36px;
    line-height: 1;
    font-weight: 400;
    text-align: center;
    margin-bottom: 80px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 42px;
    }
  }

  &__text {
    font-size: 14px;
    text-align: center;
  }
}
</style>
