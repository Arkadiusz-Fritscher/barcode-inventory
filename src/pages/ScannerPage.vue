<script setup>
import { ref } from "vue";
import TheScanner from "components/scanner/TheScanner.vue";
import TheScannerOptionsCard from "components/scanner/TheScannerOptionsCard.vue";
</script>

<template>
  <q-page class="flex flex-center" padding>
    <TheScanner />
    <TheScannerOptionsCard />
  </q-page>
</template>
