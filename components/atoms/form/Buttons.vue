<template>
  <div
    :class="['justify-' + align, 'mt-' + marginTop, 'mb-' + marginBottom]"
    class="flex z-50 self-center button"
  >
    <button
      :class="[typeFn(), roundedFn(), sizeFn(), colorFn()]"
      class="flex items-center justify-center px-6"
      style="min-width: 88px"
    >
      <!-- @click="onClick" -->
      <font-awesome-icon
        icon="user-secret"
        size="xs"
        :class="[this.type == 'iconOnly' ? null : 'mr-2']"
        class="relative h-3"
        v-if="icon !== undefined"
      />
      <span v-if="type !== 'iconOnly'" class="uppercase" :class="textSize()">{{
        text
      }}</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Buttons",
  props: {
    onClick: {
      type: Function,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    icon: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    align: {
      type: String,
      require: false,
    },
    marginTop: {
      type: Number,
    },
    marginBottom: {
      type: Number,
    },
  },
  methods: {
    typeFn() {
      return this.type == undefined ||
        this.type == "filled" ||
        this.type == "simple" ||
        this.type == "iconOnly"
        ? ""
        : this.type == "outline"
        ? "border "
        : "";
    },
    roundedFn() {
      return this.rounded == undefined
        ? "rounded-md"
        : this.rounded
        ? "rounded-md"
        : null;
    },
    textSize() {
      return this.size == undefined
        ? "text-sm"
        : this.size == "small"
        ? "text-sm"
        : this.size == "medium"
        ? "text-md"
        : this.size == "large"
        ? "text-lg"
        : null;
    },
    sizeFn() {
      return this.size == undefined
        ? this.type == "iconOnly" || this.text == undefined
          ? "py-2"
          : "py-1"
        : this.size == "small"
        ? this.type == "iconOnly" || this.text == undefined
          ? "py-2"
          : "py-1"
        : this.size == "medium"
        ? this.type == "iconOnly" || this.text == undefined
          ? "py-4"
          : "py-3"
        : this.size == "large"
        ? this.type == "iconOnly" || this.text == undefined
          ? "py-6"
          : "py-5"
        : null;
    },
    colorFn() {
      return this.type == "filled" ||
        this.type == undefined ||
        this.type == "iconOnly"
        ? this.color + "BackgroundColor text-white"
        : this.type == "outline"
        ? this.color + "BorderColor " + this.color + "TextColor"
        : this.type == "simple"
        ? this.color + "TextColor"
        : null;
    },
  },
};
</script>
