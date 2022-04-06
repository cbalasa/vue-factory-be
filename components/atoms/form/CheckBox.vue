<template>
  <div class="flex w-full">
    <label class="labelCheckbox text-sm flex items-center" :class="color">
      <span class="flex self-center mt-1">{{
        label.charAt(0).toUpperCase() + label.substr(1).toLowerCase()
      }}</span>
      <input type="checkbox" checked="checked" :value="label" :name="name" />
      <span
        class="checkmark border"
        :class="[rounded ? ' rounded-md ' : null, color + 'BorderColor']"
      ></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  data() {
    return { value: "" };
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    label: {
      type: String,
      required: false,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
  },
};
</script>
