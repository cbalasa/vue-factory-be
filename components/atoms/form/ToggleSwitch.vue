<template>
  <div class="flex items-center align-middle w-full">
    <div class="flex mr-2 items-center">
      <font-awesome-icon :icon="icon" size="xs" class="mr-1" v-if="icon" />
      <span class="text-sm" v-if="label">{{ label }}</span>
    </div>
    <label class="switch">
      <input
        type="checkbox"
        v-model="checked"
        @change="$emit('change', checked)"
      />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ToggleSwitch",
  data() {
    return {
      checked: false,
    };
  },
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  watch: {
    value(newVal) {
      this.checked = newVal;
    },
  },
  mounted() {
    this.checked = this.value !== undefined ? this.value : false;
  },
};
</script>