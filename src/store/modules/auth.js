import apiImgur from "../../api/imgur";

const namespaced = true;
const state = {
  token: null,
};
const getters = {
  isLoggedIn: (state) => !!state.token,
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};
const actions = {
  // finalizeLogin: ({ commit, dispatch }) => {},
  logout: ({ commit }) => {
    commit("SET_TOKEN", null);
  },
  login: () => {
    apiImgur.login();
  },
};

export default { namespaced, state, getters, mutations, actions };
