import api from "../../api/imgur";
import router from '../../router/'

export default {
  namespaced: true,
  state: {
    images: [],
  },
  getters: {
    allImages: (state) => state.images,
  },
  mutations: {
    SET_IMAGES: (state, images) => {
      state.images = images;
    },
  },
  actions: {
    fetchImages: async ({ commit, rootState }) => {
      const { token } = rootState.auth;
      const response = await api.fetchImages(token);

      commit("SET_IMAGES", response.data.data);
    },
    uploadImages: async ({ rootState }, images) => {
      const { token } = rootState.auth;
      await api.uploadImages(images, token);

      router.push('/')
    },
  },
};
