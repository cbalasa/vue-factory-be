<template>
  <span
    class="z-50"
    :class="[
      color + 'TextColor',
      'text-' + textAlign,
      'mt-' + marginTop,
      'mb-' + marginBottom,
      'text-' + size,
      'font-' + fontWeight,
      uppercase ? 'uppercase' : null,
    ]"
    >{{ text }}</span
  >
</template>

<script>
export default {
  name: "Title",

  props: {
    text: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      default: "",
    },
    textAlign: {
      type: String,
      default: "left",
    },
    marginTop: {
      type: Number,
    },
    marginBottom: {
      type: Number,
    },
    size: {
      type: String,
      default: "3xl",
    },
    fontWeight: {
      type: String,
      default: "bold",
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
