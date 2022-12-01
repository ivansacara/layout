<template>
  <div class="post-text" v-html="postText"></div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  name: "Post-text",
  props:['content'],

  data() {
    return {
      postText:''
    }
  },

  created() {
    this.postText = documentToHtmlString(this.content[`content_${this.$i18n.locale}`])
  }

}
</script>

<style lang="scss">
.post-text {
  margin: 20px 0;
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
