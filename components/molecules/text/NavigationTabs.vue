<template>
  <div class="w-full shadow-md rounded-md">
    <!-- HEADER -->
    <div class="flex rounded-t-md" :class="color + 'BackgroundColor'">
      <div
        v-for="(header, i) in navigationData"
        :key="i"
        class="flex align-middle items-center cursor-pointer py-2 px-4"
        :class="[
          i == 0 ? ' rounded-tl-md' : null,
          selectedTab == i + header.title
            ? 'bg-white  border-t-2 border-l-2 ' +
              color +
              'TextColor ' +
              color +
              'BorderColor'
            : 'text-white',
        ]"
        @click="selectedTab = i + header.title"
      >
        <V-Icon :icon="header.icon" class="mr-2" size="lg" v-if="header.icon" />
        <span>{{ header.title }}</span>
      </div>
    </div>

    <!-- BODY -->
    <div class="flex rounded-b-md">
      <template v-for="(header, i) in navigationData">
        <div
          :key="i"
          class="
            flex
            align-middle
            items-center
            cursor-pointer
            py-2
            px-4
            text-sm
            border-2 border-t-0
            rounded-b-md
            text-justify
          "
          :class="color + 'BorderColor'"
          v-if="selectedTab == i + header.title"
        >
          <span>{{ header.text }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationTabs",
  data() {
    return {
      selectedTab: "",
      navigationData: [
        {
          icon: "user-circle",
          title: "Profile",
          text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
        },
        {
          icon: "envelope-open-text",
          title: "Message",
          text: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
        },
        {
          icon: "wrench",
          title: "Settings",
          text: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.",
        },
      ],
    };
  },
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
  mounted() {
    this.selectedTab = 0 + this.navigationData[0].title;
  },
};
</script>