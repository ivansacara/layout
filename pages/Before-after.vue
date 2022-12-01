<template>
  <div class="before-after-page">
    <PageHeading :title=title />
    <div class="container">
      <div class="before-after-page__content">
        <BeforeAfterComponent v-for="(item, index) of posts"  v-bind:key="index" :beforeAfter="item"/>
        <ShowMoreBtn :eventName="eventName" :isLoading="isLoading" :total="total" :project="posts"/>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import {GlobalEventEmitter} from "@/utils/globalEventEmitter";

const client = createClient();
const POST_PER_PAGE = 6;
export default {
  name:"Before-After",
  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
      meta: [
        {
          name: "Before-After",
        },
      ],
    };
  },
  data () {
    return {
      title: 'header.beforeAfter',
      eventName: 'load-more-posts',
      page: 1,
      isLoading: false,
    }
  },

  created() {
    GlobalEventEmitter.$on(this.eventName, () => {
      this.getPosts();
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
        content_type: "beforeAfterPage",
        order: "-sys.createdAt",
      }),
    ])
      .then(([beforeAfterPage]) => {
        return {
          locale: i18n.locale,
          total: beforeAfterPage.total,
          posts: beforeAfterPage.items.map((item) => {
            const pathToItem = item.fields;

            return {
              title: pathToItem[`title_${i18n.locale}`],
              imageLeft: pathToItem.image_left.fields.file.url,
              imageRight: pathToItem.image_right.fields.file.url,
            }
          })

        }
        })
      .catch(console.error);
  },

  methods: {
    getPosts( ) {
      this.isLoading = true;

      Promise.all([
        client.getEntries({
        content_type: "beforeAfterPage",
        order: "-sys.createdAt",
        skip: this.page * POST_PER_PAGE,
        limit: POST_PER_PAGE,
      })])
        .then(([beforeAfterPage]) => {
          const newPosts = beforeAfterPage.items.map((item) => {
            const pathToItem = item.fields;

            return {
              title: pathToItem[`title_${this.locale}`],
              imageLeft: pathToItem.image_left.fields.file.url,
              imageRight: pathToItem.image_right.fields.file.url,
            }
          });

          this.posts = [...this.posts, ...newPosts];
          this.page++;
          this.isLoading = false;
        })
        .catch(console.error);
    }
  }
}
</script>
<style lang="scss">
.before-after-page {

  &__content {
    max-width: 1430px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
