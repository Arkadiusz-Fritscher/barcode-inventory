export default function log({ next, to }) {
  console.log("log");
  console.log(to.name);

  return next();
}
