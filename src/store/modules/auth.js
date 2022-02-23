import apiImgur from "../../api/imgur";
import qs from "qs";
import router from '../../router/'

export default {
  namespaced: true,
  state: {
    token: window.localStorage.getItem("imgur_token") || null,
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
      const hashObject = qs.parse(hash.replace("#", ""));

      commit("SET_TOKEN", hashObject.access_token);
      window.localStorage.setItem('imgur_token', hashObject.access_token)

      router.push('/')
    },
    logout: ({ commit }) => {
      commit("SET_TOKEN", null);
      window.localStorage.removeItem('imgur_token')
      router.push('/')
    },
    login: () => {
      apiImgur.login();
    },
  },
};
