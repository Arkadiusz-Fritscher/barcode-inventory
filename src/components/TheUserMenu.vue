<template>
  <q-menu auto-close>
    <q-list style="min-width: 100px">
      <q-item
        v-for="{ url, title, icon } of linkList"
        :key="title"
        clickable
        :to="url"
      >
        <q-item-section v-if="icon" side>
          <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>{{ title }}</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script setup>
const linkList = [
  {
    url: "",
    title: "Einstellungen",
    icon: "mdi-cog",
  },
  {
    url: "",
    title: "Mein Verlauf",
    icon: "mdi-swap-horizontal",
  },
  {
    url: "",
    title: "Ausloggen",
    icon: "mdi-logout",
  },
];
</script>

<style lang="scss" scoped></style>
