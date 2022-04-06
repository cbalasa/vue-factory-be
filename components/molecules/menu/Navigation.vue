<template>
  <div
    class="flex justify-between w-full fixed"
    :class="[
      colorBackground == 'transparent'
        ? colorBackground + 'BackgroundColor'
        : colorBackground + 'BackgroundColor shadow-xl',
      windowsWidth > 1024 ? 'h-16 ' : null,
    ]"
    style="z-index: 9999999"
  >
    <div v-if="windowsWidth > 1024" class="flex w-full">
      <div class="relative w-2/12 flex items-start align-middle p-2 pl-4">
        <V-Image
          image="logo.png"
          parentName="general"
          class="self-start flex"
        />
      </div>
      <div class="w-10/12 flex items-center justify-end">
        <NavigationDesktop :colorBackground="colorBackground" />
      </div>
    </div>
    <div v-else class="pb-4">
      <div class="w-2/12 p-2 flex items-end h-16">
        <V-Image image="logo.png" parentName="general" class="self-end flex" />
      </div>
      <div class="w-10/12 flex items-center justify-end">
        <NavigationMobile />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      windowsWidth: 0,
    };
  },
  props: {
    colorBackground: {
      type: String,
      default: "white",
    },
  },
  methods: {
    setWindowsWidth() {
      this.windowsWidth = window.innerWidth;
    },
  },
  mounted() {
    this.setWindowsWidth();
    window.addEventListener("resize", this.setWindowsWidth);
  },
};
</script>