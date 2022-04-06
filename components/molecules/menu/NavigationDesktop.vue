<template>
  <div class="flex mx-8 py-4">
    <a
      class="flex items-center px-2"
      v-for="(menu, i) in menuDesktop"
      :key="i"
      href="#"
    >
      <V-Icon
        :icon="menu.icon"
        :color="
          colorBackground == 'white'
            ? 'primary'
            : colorBackground == 'primary'
            ? 'white'
            : color
        "
        class="pr-2"
        size="sm"
      />
      <Body
        :text="menu.text"
        :color="
          colorBackground == 'white'
            ? 'primary'
            : colorBackground == 'primary'
            ? 'white'
            : color
        "
      />
    </a>
    <Buttons
      text="Register"
      :rounded="true"
      size="small"
      :type="
        colorBackground == 'primary' || colorBackground == 'white'
          ? 'outline'
          : null
      "
      :color="
        colorBackground == 'white'
          ? 'primary'
          : colorBackground == 'primary'
          ? 'white'
          : color
      "
    />
    <Input
      placeholder="Search"
      type="bottom"
      class="ml-2"
      :color="
        colorBackground == 'white'
          ? 'primary'
          : colorBackground == 'primary'
          ? 'white'
          : color
      "
    />
  </div>
</template>
<script>
export default {
  name: "NavigationDesktop",
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
  props: {
    color: {
      type: String,
      default: "white",
    },
    colorBackground: {
      type: String,
    },
  },
};
</script>