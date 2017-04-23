// 引入 vue 和 vuex
import Vue from "vue"
import Vuex from "vuex"

// 使用 vuex
Vue.use(Vuex)

const state = {
    /*
        notes：存储 note 项
        activeNote：当前正在编辑的 note 项
    */
    notes : [
//      {
//          text : "new Note",
//          favorite : false
//      }
    ],
    activeNote : {}
}

const actions = {
    /*
        actions 处理函数接受一个 context 对象
        {
            state,     // 等同于 store.state, 若在模块中则为局部状态
            rootState, // 等同于 store.state, 只存在于模块中
            commit,    // 等同于 store.commit
            dispatch,  // 等同于 store.dispatch
            getters    // 等同于 store.getters
        }
    */
    // 添加
    addNote({commit}){
        commit('ADD_NOTE');
    },
    // 编辑
    editNote({commit}, text){
        commit('EDIT_NOTE', text);
    },
    // 设置当前激活项
    setActiveNote({commit}, note){
        commit('SET_ACTIVE_NOTE', note);
    },
    // 切换收藏
    toggleFavorite({commit}){
        commit('TOGGLE_FAVORITE');
    },
    // 删除
    deleteNote({commit}){
        commit('DELETE_NOTE');
    }
}

const mutations = {
    // ADD_NOTE 添加一个 note 项
    ADD_NOTE(state){
        let newNote = {
            /*
                text：默认文字内容
                favorite：收藏
            */
            text : "new Note",
            favorite : false
        }
        state.notes.push(newNote);
        console.log(state.notes);
        state.activeNote = newNote;
    },
    EDIT_NOTE(state, text){
        state.activeNote.text = text
    },
    SET_ACTIVE_NOTE(state, note){
        state.activeNote = note;
    },
    TOGGLE_FAVORITE(state){
        state.activeNote.favorite = !state.activeNote.favorite;
    },
    DELETE_NOTE(state){
        let notes = state.notes;
        let activeNote = state.activeNote;
        for (let i=0; i<notes.length; i++) {
            if (notes[i] == activeNote) {
                notes.splice(i, 1);
            }
        }
        // 以上代码的简单写法，将是激活状态的删除掉了。
//      state.notes = notes.filter((item) => item!=activeNote);
        
        if (notes.length > 0) {
            state.activeNote = notes[0];
        }
        
    }
}

const getters = {
    /*
        Getters 接受 state 作为其第一个参数
        state => state.notes 为箭头函数等价于：
        function (state){
            return state.notes
        }
    */
    notes : state => state.notes,
    activeNote : state => state.activeNote
}

// 导出
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
