<script setup>
import HeaderBar from "components/HeaderBar.vue";
import BottomNavigation from "components/BottomNavigation.vue";
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <HeaderBar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <BottomNavigation />
  </q-layout>
</template>
