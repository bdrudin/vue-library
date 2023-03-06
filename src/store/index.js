import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isAuthenticated: false,
            user: null,
            token: null,
            role: null
        };
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        login(state, user) {
            state.isAuthenticated = true;
            state.user = user;
            state.role = user.role;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.role = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
        },
        checkLocalStorage(state) {
            const token = localStorage.getItem('token');

            if (token) {
                state.token = token;
                state.isAuthenticated = true;
                state.role = localStorage.getItem('role');
            }
        },
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        user: (state) => state.user,
        isAdmin: (state) => state.role === 'admin'
    },
});

store.commit('checkLocalStorage');

export default store;
