import { createRouter, createWebHistory } from "vue-router";
import AuthHandler from "@/components/AuthHandler";

const routes = [
  {
    path: "/oauth2/callback",
    component: AuthHandler,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
