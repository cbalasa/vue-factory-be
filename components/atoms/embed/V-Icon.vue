<template>
  <div class="flex" :class="'justify-' + align">
    <div
      class="rounded-full"
      :class="
        type == 'outline'
          ? colorBackground +
            'BorderColor border-2 px-' +
            paddingHorizontal +
            ' py-' +
            paddingVertical
          : colorBackground + 'BackgroundColor px-7 py-6'
      "
      v-if="colorBackground !== undefined"
    >
      <font-awesome-icon
        :icon="icon"
        :color="color"
        :size="size"
        @click="$emit('clicked', true)"
      />
    </div>

    <font-awesome-icon
      :icon="icon"
      :color="color"
      :size="size"
      :class="color + 'TextColor'"
      v-else
      @click="$emit('clicked', true)"
    />
  </div>
</template>
<script>
export default {
  name: "V-Icon",
  props: {
    color: {
      type: String,
    },
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: "xs",
    },
    align: {
      type: String,
      default: "left",
    },
    colorBackground: {
      type: String,
    },
    type: {
      type: String,
      default: "outline",
    },
    paddingHorizontal: {
      type: Number,
      default: 8,
    },
    paddingVertical: {
      type: Number,
      default: 6,
    },
  },
};
</script>