import { createRouter, createWebHistory } from "vue-router";
import AuthHandler from "@/components/AuthHandler";
import ImageList from "@/components/ImageList";
import UploadForm from "@/components/UploadForm";

const routes = [
  {
    path: "/",
    component: ImageList,
  },
  {
    path: "/oauth2/callback",
    component: AuthHandler,
  },
  {
    path: "/upload",
    component: UploadForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
