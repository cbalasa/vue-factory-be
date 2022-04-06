<template>
  <a :href="link">
    <slot />
  </a>
</template>
<script>
export default {
  name: "Hyperlink",
  props: {
    link: String,
  },
};
</script>
