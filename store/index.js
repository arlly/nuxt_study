import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

export const state = () => ({
  message: 'count number. ',
  counter: 0,
})

export const mutations = {
  doit(state) {
    var n = Math.floor(Math.random() * 10);
    state.counter += n;
    state.message = 'add ' + n + '.';
  },
  reset(stete) {
    state.counter = 0;
    stete.message = "reset now."
  },
}

export const plugins = [
  createPersistedState(),
]


const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: 'This is counter by Vuex!',
        counter: 0,
      }
    },
    mutations: {
      count: function (state, n) {
        state.counter += n;
      },
      say: function(state, msg) {
        state.message = msg;
      },
      reset: function (state) {
        state.counter = 0;
      }
    },
    actions: {
      doit: function (context) {
        var n = Math.floor(Math.random() * 10);
        context.commit("count", n);
        context.commit('say', 'add' + n + '!');
      }
    },
    plugins: [
      createPersistedState(),
    ],
  })
}

export default createStore;
