<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { onMounted } from "vue";
import { supabase } from "src/supabase";

export default defineComponent({
  name: "App",

  setup() {
    onMounted(() => {
      supabase.auth.onAuthStateChange((event, session) => {
        console.log("onAuthStateChange", event, session);
      });
    });
  },
});
</script>
