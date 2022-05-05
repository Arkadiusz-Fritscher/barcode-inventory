<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="mdi-menu"
        aria-label="Menu"
        @click="store.toggleNavigation()"
      />

      <!-- <q-toolbar-title> FW-Inventory </q-toolbar-title> -->
      <q-img
        src="~assets/logo-white.svg"
        no-native-menu
        style="max-width: 96px"
        class="q-mx-auto"
      />

      <q-btn flat dense round icon="mdi-bell" style="margin-right: 0.5rem">
      </q-btn>

      <q-btn flat dense round aria-label="Menu" icon="mdi-account">
        <TheUserMenu />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import TheUserMenu from "components/TheUserMenu.vue";
import { useStore } from "src/stores/store.js";

const store = useStore();

console.log(store.navigationState);
</script>

<style lang="scss" scoped></style>
