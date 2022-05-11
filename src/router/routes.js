import auth from "src/router/middleware/auth";
import log from "src/router/middleware/log";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        meta: {
          middleware: [auth],
        },
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/scanner",
        name: "scan",
        meta: {
          middleware: [auth],
        },
        component: () => import("pages/ScannerPage.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
