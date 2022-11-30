<template>
  <div class="post-page">
    <PageHeading  :title="title" showBack/>
    <div class="container">
      <div class="post__content" v-for="item of blocks">
        <PostImages v-if="item.type === 'twoColumnImage'" :content="item.content"/>
        <PostImage v-if="item.type === 'oneColumnImage'" :content="item.content"/>
        <PostText v-if="item.type === 'postHtml'" :content="item.content"/>
      </div>

    </div>
  </div>
</template>


<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  name:"Post",
  head() {
    return {
      title: `Layout ${this.$t(this.title)}`,
      meta: [
        {
          name: "Post",
        },
      ],
    };
  },

  asyncData({ env, i18n, params, error }) {
    return Promise.all([
      client.getEntries({
        content_type: "post",
        "fields.url": params.slug,
      }),
    ])
      .then(([posts]) => {
        const item = posts.items[0].fields;

        return {
          title: item[`title_${i18n.locale}`],
          blocks: item.content.map((contentItem) => {
            return {
              type: contentItem.sys.contentType.sys.id,
              content: contentItem.fields
            }
          })
        }
      }).catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      });
  },


}
</script>

<style lang="scss">

.post-page {

  &__content {
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
  }
}

</style>
