<script setup>
import { onMounted } from "vue";
import HeaderBar from "components/HeaderBar.vue";
import BottomNavigation from "components/BottomNavigation.vue";
import { useRouter } from "vue-router";
import { supabase } from "src/supabase";
import { useStore } from "src/stores/store";

const router = useRouter();
const store = useStore();

async function authUser() {
  const refreshToken = localStorage.getItem("supabase.auth.token");

  if (refreshToken) {
    const { currentSession, expiresAt } = JSON.parse(refreshToken);

    const { user, session, error } = await supabase.auth.signIn({
      email: currentSession.user.email,
      refreshToken: currentSession.refreshToken,
    });

    if (error) {
      console.log("error", error);
    } else {
      console.log("user", user, session, error);
      // store.setUser(user);
      // store.setUserToken(session);
    }
  } else {
    console.log("no refresh token");
    router.push({ name: "login" });
  }
}

onMounted(() => {
  authUser();
});
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <HeaderBar v-if="store.user" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <BottomNavigation v-if="store.user" />
  </q-layout>
</template>
