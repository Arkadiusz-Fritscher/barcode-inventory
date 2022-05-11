import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    isNavigationOpen: false,
    user: null,
    userToken: null,
  }),
  getters: {
    //
  },
  actions: {
    toggleNavigation() {
      this.isNavigationOpen = !this.isNavigationOpen;
      console.log("toggle", this.isNavigationOpen);
    },

    setUser(user) {
      this.user = user;
    },

    setUserToken(token) {
      this.userToken = token;
    },
  },
});
