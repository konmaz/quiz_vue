// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        room: null,
    },
    mutations: {
        setRoom(state, room) {
            state.room = room;
        },
    },
    actions: {
        updateRoom({ commit }, room) {
            commit('setRoom', room);
        },
    },
    modules: {},
});
