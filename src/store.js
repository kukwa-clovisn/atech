import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      mode: {
        light: false,
        dark: true,
        gray: false,
        edit: false,
        cafe: false,
      },
      chat: {
        start: false,
      },
      menuState: false,
      course_mode: {
        light: false,
        dark: true,
        cafe: false,
        gray: false,
        edit: false,
      },
    };
  },
  getters: {},
  mutations: {
    LIGHT_MODE(state, pagemode) {
      state.mode.light = true;
      state.mode.dark = false;
      state.mode.gray = false;
      // for course mode
      state.course_mode.light = true;
      state.course_mode.dark = false;
      state.course_mode.gray = false;
    },
    DARK_MODE(state, pagemode) {
      state.mode.light = false;
      state.mode.dark = true;
      state.mode.gray = false;
      // for course mode
      state.course_mode.light = false;
      state.course_mode.dark = true;
      state.course_mode.gray = false;
    },
    GRAY_MODE(state, pagemode) {
      state.mode.light = false;
      state.mode.dark = false;
      state.mode.gray = true;
      // for course mode
      state.course_mode.light = false;
      state.course_mode.dark = false;
      state.course_mode.gray = true;
    },
    CAFE_MODE(state, pagemode) {
      state.mode.cafe = true;
    },
    EDIT_COURSE(state, editToken) {
      if (editToken) {
        state.mode.edit = true;
      } else {
        state.mode.edit = false;
      }
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
      } else if (pagemode === "cafe") {
        commit("CAFE_MODE", pagemode);
      } else {
        commit("LIGHT_MODE", pagemode);
      }
    },
    edit_course({ commit }, editToken) {
      commit("EDIT_COURSE", editToken);
    },
  },
});

export default store;
