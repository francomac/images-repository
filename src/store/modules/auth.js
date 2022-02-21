const auth = {
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
    // finalizeLogin: ({ commit, dispatch }) => {},
    logout: ({ commit }) => {
      commit("SET_TOKEN", null);
    },
    // login: ({ commit, dispatch }) => {},
  },
};

module.exports = {
  auth,
};
