import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        postContent : ''
    },
    mutations: {

        updatePostContent ( state, status ){
            state.postContent = status ;
        },

    },
    actions: {

        loadPostContent : ( context ) => {
            console.log( context );
            return new Promise((resolve, reject) => {

                context.commit('updatePostContent', 'sdfgsdfgsdfg sdfgsdfg sdfg sdfg  111' );

                resolve();
            })
        },
    }
})
