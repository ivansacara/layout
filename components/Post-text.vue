<template>
  <div class="post-text" >
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default {
  name: "Post-text",
  props:['content'],
}
</script>
