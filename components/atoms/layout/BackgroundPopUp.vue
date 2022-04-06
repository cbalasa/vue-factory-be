<template>
  <div
    class="bg-black opacity-75 fixed w-screen h-screen top-0"
    style="z-index: 99999999"
    @click="$emit('clicked', true)"
  ></div>
</template>
<script>
export default {
  name: "BackgroundPopUp",
};
</script>