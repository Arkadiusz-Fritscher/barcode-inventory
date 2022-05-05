import { ref } from "vue";

// by convention, composable function names start with "use"
export default function useNavigation() {
  const isNavigationOpen = ref(false);

  function toggleNavigation() {
    isNavigationOpen.value = !isNavigationOpen.value;
    console.log("toggle", isNavigationOpen.value);
  }

  return { isNavigationOpen, toggleNavigation };
}
