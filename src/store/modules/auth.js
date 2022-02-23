import apiImgur from "../../api/imgur";
import qs from 'qs'

export default ({
  namespaced: true,
  state: {
    token: null,
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    finalizeLogin: ({ commit }, hash) => {
      const hashObject = qs.parse(hash.replace('#', ''));

      commit("SET_TOKEN", hashObject.access_token);
    },
    logout: ({ commit }) => {
      commit("SET_TOKEN", null);
    },
    login: () => {
      apiImgur.login();
    },
  },
});
