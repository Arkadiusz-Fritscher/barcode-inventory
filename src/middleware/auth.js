export default function auth({ to, from, next }) {
  console.log("auth", to, from);

  return next();
}
