import api from "../../api/imgur";

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
    fetchImages: async({ commit, rootState }) => {
      const { token } = rootState.auth;
      const response = await api.fetchImages(token);

      commit('SET_IMAGES', response.data.data)
    },
    // uploadImage: ({ commit }) => {},
  },
};
