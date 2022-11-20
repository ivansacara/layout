<template>
  <div class="portfolio-page">
    <PageHeading :title=title />
    <div class="portfolio-page__content">
      <Posts :eventName="eventName" :project="projects"  :isLoading="isLoading"/>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import {GlobalEventEmitter} from "@/utils/globalEventEmitter";
const client = createClient();
const POST_PER_PAGE = 6;

export default {
  name:"Portfolio",
  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
      meta: [
        {
          name: "Portfolio",
        },
      ],
    };
  },
  data () {
    return {
      title: 'header.portfolio',
      page: 1,
      isLoading: false,
      eventName: 'load-more-projects',
    }
  },
  created() {
    GlobalEventEmitter.$on(this.eventName, () => {
      this.getProjects();
    })
  },
  destroyed() {
    GlobalEventEmitter.$off(this.eventName)
  },

  async asyncData({ i18n }) {
    return Promise.all([
      client.getEntries({
        limit: POST_PER_PAGE,
        skip: 0,
        content_type: "post",
        order: "-sys.createdAt",
      }),
    ])
      .then(([data]) => {
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
          })

        }
      })
      .catch(console.error);
  },

  methods: {
    getProjects() {

      this.isLoading = true;

      Promise.all([
        client.getEntries({
          content_type: "post",
          order: "-sys.createdAt",
          skip: this.page * POST_PER_PAGE,
          limit: POST_PER_PAGE,
        })])
        .then(([data]) => {
          const newPosts = data.items.map((item) => {
            const pathToItem = item.fields;

            return {
              title: pathToItem[`title_${this.locale}`],
              preview: pathToItem.preview.fields.file.url,
              url: pathToItem.url
            }
          });

          this.projects = [...this.projects, ...newPosts];
          this.page++;
          this.isLoading = false;
        })
        .catch(console.error);
    }
  }
}
</script>
