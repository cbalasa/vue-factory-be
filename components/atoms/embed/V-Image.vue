<template>
  <img :src="backImg" class="no-repeat relative h-full flex object-contain" />
</template>
<script>
export default {
  name: "V-Image",

  computed: {
    backImg() {
      return require("@/assets/images/pages/" +
        this.parentName.toLowerCase() +
        "/" +
        this.image);
    },
  },
  props: {
    image: {
      type: String,
      require: true,
    },
    parentName: {
      type: String,
      require: true,
    },
  },
};
</script>