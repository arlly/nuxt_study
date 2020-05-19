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
        state: function() {
            return {
                message: 'This is counter by Vuex!',
                counter: 0,
            }
        },
      mutations: {
          count: function (state, obj) {
            state.counter += obj.add;
            state.message = obj.message;
          },
        reset: function (state) {
            state.counter = 0;
        }
      }
    })
}

export default createStore;
