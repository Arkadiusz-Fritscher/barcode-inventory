export default function auth({ to, from, next, store }) {
  if (to.name !== "login" && !store.user) {
    next("/login");
  } else {
    next();
  }
}
