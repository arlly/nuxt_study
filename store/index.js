import Vuex from 'vuex'

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
