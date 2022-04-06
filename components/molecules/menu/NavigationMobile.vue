<template>
  <div class="flex mx-8">
    <div>
      <V-Icon icon="bars" />
      <div class="flex flex-col">
        <a
          class="flex items-center px-2"
          v-for="(menu, i) in menuDesktop"
          :key="i"
          href="#"
        >
          <V-Icon :icon="menu.icon" color="darkgrey" class="pr-2" size="sm" />
          <Body :text="menu.text" color="darkgrey" />
        </a>
        <Buttons text="Register" :rounded="true" size="small" />
        <Input placeholder="Search" type="bottom" class="ml-2" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationMobile",
  data() {
    return {
      menuDesktop: [
        {
          icon: "tag",
          text: "Discover",
        },
        {
          icon: "tag",
          text: "Discover",
        },
        {
          icon: "tag",
          text: "Discover",
        },
      ],
    };
  },
};
</script>