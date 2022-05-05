<template>
  <q-drawer v-model="store.isNavigationOpen" show-if-above bordered overlay>
    <q-list>
      <q-item-label v-if="label" header>{{ label }}</q-item-label>
      <NavigationLinkItem
        v-for="{ link, icon, title, caption } of linkList"
        :key="link"
        :link="link"
        :icon="icon"
        :title="title"
        :caption="caption"
      />
    </q-list>
  </q-drawer>
</template>

<script setup>
import NavigationLinkItem from "components/navigation/NavigationLinkItem.vue";
import { useStore } from "src/stores/store.js";

const store = useStore();

const label = "Main Navigation";
const linkList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "mdi-school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "mdi-file",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "mdi-chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "mdi-forum",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "mdi-rss",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "mdi-facebook",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "mdi-cart",
    link: "https://awesome.quasar.dev",
  },
];
</script>

<style lang="scss" scoped></style>
