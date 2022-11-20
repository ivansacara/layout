<template>
  <div class="about-page">
    <PageHeading :title=title />
      <div class="about-page__content" v-for="about of about" v-html="about.content"></div>
    </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  name:"About",

  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
      meta: [
        {
          name: "Abous Us",
        },
      ],
    };
  },
  data () {
    return {
      title: 'header.about',
    }
  },
  async asyncData({ env, i18n }) {
    return Promise.all([
      client.getEntries({
        content_type: "aboutUs",
        order: "-sys.createdAt",
      }),
    ])
      .then(([aboutUs]) => {
        return{
          about: aboutUs.items.map((text) => {
            return {
              content: documentToHtmlString(text.fields[`text_${i18n.locale}`])
            }
          })
        }
      })
      .catch(console.error);
  },
}


</script>

<style lang="scss">
.about-page {
  text-align: center;
  &__content {
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
    }

    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 1.2;
      text-align: left;

      &:not(:last-child){
        margin-bottom: 25px;
      }
    }
  }

}
</style>
