import { createStore } from "vuex";

import auth from "../store/modules/auth";
import images from "../store/modules/images";

export const store = createStore({
  modules: {
    auth,
    images
  },
});
