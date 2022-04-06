<template>
  <span
    class="flex text-sm"
    :class="[
      color + 'TextColor',
      'justify-' + align,
      'mt-' + marginTop,
      'mb-' + marginBottom,
    ]"
    >{{ text }}</span
  >
</template>
<script>
export default {
  name: "Body",
  props: {
    text: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: "darkgrey",
    },
    align: {
      type: String,
      default: "right",
    },
    marginTop: {
      type: Number,
    },
    marginBottom: {
      type: Number,
    },
  },
};
</script>
