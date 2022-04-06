<template>
  <div :class="position.includes('top') ? 'relative' : null" v-if="show">
    <div
      class="
        absolute
        rounded-md
        flex flex-col
        m-2
        items-center
        p-2
        shadow-md
        bg-white
      "
      style="z-index: 9999999999; min-width: 400px; min-height: 200px"
      :class="[positionAlert]"
    >
      <V-Icon
        :icon="icon"
        size="2x"
        class="mr-2 bg-white rounded-full p-2 mt-8 border-2 mb-4"
        style="width: 50px; height: 50px"
        :class="[color + 'TextColor ', color + 'BorderColor']"
        align="center"
      />
      <div class="flex justify-center flex-col w-full items-center">
        <span class="flex items-center text-center mx-auto text-lg font-medium"
          >{{ title }}
        </span>
        <span class="flex items-center text-center mx-auto">{{ text }} </span>
        <template v-if="!confirm">
          <Buttons text="OK" :rounded="true" class="my-2" />
        </template>
        <template v-else>
          <div class="flex w-8/12 justify-between items-center align-middle">
            <Buttons
              text="Delete it!"
              :rounded="true"
              class="my-2"
              color="success"
            />
            <Buttons
              text="Cancel"
              :rounded="true"
              class="my-2"
              color="danger"
            />
          </div>
        </template>
      </div>
    </div>
    <BackgroundPopUp />
  </div>
</template>
<script>
export default {
  name: "Modal",
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
      default: "center",
    },
    text: {
      type: String,
    },
    title: {
      type: String,
    },
    confirm: {
      type: Boolean,
      default: false,
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