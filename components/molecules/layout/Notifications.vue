<template>
  <div :class="position.includes('top') ? 'relative' : null" v-if="show">
    <div
      class="
        min-h-12
        absolute
        rounded-md
        text-white
        flex
        m-2
        justify-between
        items-center
        p-2
        shadow-md
      "
      style="z-index: 9999999999; min-width: 200px"
      :class="[color + 'BackgroundColor', positionAlert]"
    >
      <V-Icon
        :icon="icon"
        size="sm"
        class="mr-2 bg-white rounded-full p-2"
        style="width: 30px; height: 30px"
        :class="color + 'TextColor'"
        align="center"
      />

      <span class="flex items-center text-center m-auto">{{ text }} </span>
      <V-Icon
        icon="times"
        size="sm"
        class="ml-2 cursor-pointer"
        @clicked="clickClose()"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Notifications",
  data() {
    return {
      show: false,
      icon: "check",
      color: "success",
    };
  },
  props: {
    showAlert: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "success",
    },
    position: {
      type: String,
      default: "bottom-right",
    },
    text: {
      type: String,
    },
  },
  computed: {
    positionAlert() {
      let positionClasses;
      if (this.position == "bottom-center") {
        positionClasses = " bottom-0 centerBoxHorizontally";
      } else if (this.position == "bottom-right") {
        positionClasses = " bottom-0 right-0";
      } else if (this.position == "bottom-left") {
        positionClasses = " bottom-0 ";
      } else if (this.position == "center-left") {
        positionClasses = "centerBoxVertically ";
      } else if (this.position == "center") {
        positionClasses = "centerBox ";
      } else if (this.position == "center-right") {
        positionClasses = "centerBoxVertically right-0 ";
      } else if (this.position == "top-right") {
        positionClasses = "top-0 right-0 ";
      } else if (this.position == "top-center") {
        positionClasses = "top-0 centerBoxHorizontally";
      } else if (this.position == "top-left") {
        positionClasses = "top-0 ";
      }
      return positionClasses;
    },
  },
  methods: {
    clickClose() {
      this.$emit("input", false);
      this.show = false;
    },
    setTypeOfAlert() {
      if (this.type == "success") {
        this.icon = "check";
        this.color = this.type;
      } else if (this.type == "warning") {
        this.icon = "exclamation-triangle";
        this.color = this.type;
      } else if (this.type == "danger") {
        this.icon = "times";
        this.color = this.type;
      } else if (this.type == "info") {
        this.icon = "exclamation";
        this.color = this.type;
      }
    },
  },
  mounted() {
    this.setTypeOfAlert();
    this.show = this.showAlert;
  },
  watch: {
    type() {
      this.setTypeOfAlert();
    },
  },
};
</script>