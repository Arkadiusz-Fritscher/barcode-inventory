<script setup>
import { ref } from "vue";
const activeTab = ref(0);
const links = ref([
  {
    name: "home",
    label: "Übersicht",
    icon: "mdi-home",
    link: "home",
  },
  {
    name: "scan",
    label: "Scanner",
    icon: "mdi-barcode-scan",
    link: "scan",
  },
]);
</script>

<template>
  <q-footer bordered>
    <q-tabs
      v-model="activeTab"
      no-caps
      active-color="secondary"
      indicator-color="transparent"
      class="bordered"
      stretch
      mobile-arrows
    >
      <q-route-tab
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :icon="link.icon"
        :label="link.label"
        :to="{ name: link.link }"
      />
    </q-tabs>
  </q-footer>
</template>

<style lang="scss" scoped></style>
