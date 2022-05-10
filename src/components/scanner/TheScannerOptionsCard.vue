<script setup>
import { ref } from "vue";
const currentBarcode = ref(null);
const isDialogOpen = ref(false);
</script>

<template>
  <q-dialog v-model="isDialogOpen" class="relative-position" persistent>
    <q-card class="scanner-card">
      <img
        src="https://www.nieruf.de/media/6a/69/b0/1649688570/flansch-en-1092-typ-11-edelstahl_7e6f.png"
        loading="lazy"
        style="
          max-width: 100%;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: contain;
        "
      />
      <q-card-section>
        <div class="text-h6">Flansch</div>
        <div class="text-subtitle2 text-grey-8">DN125 PN10/16</div>
      </q-card-section>

      <q-card-section>
        <q-list dense separator>
          <q-item>
            <q-item-section> Produkt: </q-item-section>
            <q-item-section> Flansch </q-item-section>
          </q-item>
          <q-item>
            <q-item-section> Lager: </q-item-section>
            <q-item-section>Europaviertel</q-item-section>
          </q-item>
          <q-item>
            <q-item-section> Anzahl: </q-item-section>
            <q-item-section> 6 </q-item-section>
          </q-item>

          <q-item>
            <q-item-section> Anschluss: </q-item-section>
            <q-item-section>Edelstahl</q-item-section>
          </q-item>

          <q-item>
            <q-item-section> Lochanzahl: </q-item-section>
            <q-item-section>8</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-separator />

      <q-card-actions style="gap: 0.5rem 1rem">
        <q-btn
          v-close-popup
          no-caps
          unelevated
          color="secondary"
          padding="sm md sm sm"
          style="flex: 1 1 fit-content"
        >
          <q-icon left size="xs" name="mdi-download-multiple" />
          Einlagern
        </q-btn>

        <q-btn
          v-close-popup
          no-caps
          unelevated
          color="green"
          padding="sm md sm sm"
          style="flex: 1 1 fit-content; margin: 0"
        >
          <q-icon left size="xs" name="mdi-upload-multiple" />
          Entnehmen
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.scanner-card {
  width: 100%;
  max-width: 375px;
}
</style>
