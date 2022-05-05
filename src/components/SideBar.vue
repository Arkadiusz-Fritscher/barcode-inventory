<template>
  <q-drawer>
    <q-list>
      <q-item-label header v-if="label">{{ label }}</q-item-label>

      <SideBarLink
        v-for="{ link, icon, title, caption } of links"
        :link="link"
        :icon="icon"
        :title="title"
        :caption="caption"
        :key="link"
      />

      <!-- <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      /> -->
    </q-list>
  </q-drawer>
</template>

<script setup>
import SideBarLink from "components/SideBarLink.vue";
defineProps({
  links: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
