import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    isNavigationOpen: false,
  }),
  getters: {
    //
  },
  actions: {
    toggleNavigation() {
      this.isNavigationOpen = !this.isNavigationOpen;
      console.log("toggle", this.isNavigationOpen);
    },
  },
});
