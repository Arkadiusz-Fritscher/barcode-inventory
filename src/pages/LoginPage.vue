<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h6">Login</div>
        <div class="text-subtitle2">with email</div>

        <q-card-separator></q-card-separator>
      </q-card-section>
      <q-card-section>
        <q-form>
          <q-form-item>
            <q-input
              v-model="username"
              label="Username"
              placeholder="Enter your username"
              :rules="[
                { required: true, message: 'Please enter your username' },
              ]"
            ></q-input>
          </q-form-item>
          <q-form-item>
            <q-input
              v-model="password"
              label="Password"
              placeholder="Enter your password"
              :rules="[
                { required: true, message: 'Please enter your password' },
              ]"
            ></q-input>
          </q-form-item>
          <q-form-item>
            <q-btn color="primary" @click="login"> Login </q-btn>
          </q-form-item>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "src/supabase";
import { useStore } from "src/stores/store.js";

const store = useStore();
const username = ref("");
const password = ref("");

async function login() {
  console.log("login", username.value, password.value);
  const { user, session, error } = await supabase.auth.signIn({
    email: username.value,
    password: password.value,
  });

  if (error) {
    console.log("error", error);
  } else {
    console.log("user", user, session, error);
    store.setUser(user);
    store.setUserToken(session);
    localStorage.set("refreshToken", session.refreshToken);
  }
}
</script>
