import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      mode: {
        light: true,
        dark: false,
        gray: false,
      },
    };
  },
  gtters: {},
  mutations: {
    LIGHT_MODE(state, pagemode) {
      state.mode.light = true;
      state.mode.dark = false;
      state.mode.gray = false;
    },
    DARK_MODE(state, pagemode) {
      state.mode.light = false;
      state.mode.dark = true;
      state.mode.gray = false;
    },
    GRAY_MODE(state, pagemode) {
      state.mode.light = false;
      state.mode.dark = false;
      state.mode.gray = true;
    },
  },
  actions: {
    pagemode({ commit }, pagemode) {
      if (pagemode === "light") {
        commit("LIGHT_MODE", pagemode);
      } else if (pagemode === "dark") {
        commit("DARK_MODE", pagemode);
      } else if (pagemode === "gray") {
        commit("GRAY_MODE", pagemode);
      } else {
        commit("LIGHT_MODE", pagemode);
      }
    },
  },
});

export default store;
