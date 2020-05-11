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
                message: 'This is counter!',
                counter: 0,
            }
        }
    })
}

export default createStore;
