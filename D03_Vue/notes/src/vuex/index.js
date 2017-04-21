import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
	notes:[
		/*{
			text:"new Note",
			favorite:false
		}*/
	],
	activeNote:{}
}
const actions = {
	addOne({commit}){
		commit("ADD_ONE")
	},
	changeNote({commit},index){
		commit("CHANGE_NOTE",index)
	},
	toggleFavorite({commit}){
		commit("TOGGL_EFAVORITE")
	},
	delNote({commit}){
		commit("DEL_NOTE")
	}
}
const mutations = {
	ADD_ONE(state){
		let newNote = {
			text:"new Note",
			favorite:false
		}
		state.notes.push(newNote)
		state.activeNote = newNote
	},
	CHANGE_NOTE(state,index){
		state.activeNote = state.notes[index]
	},
	TOGGL_EFAVORITE(state){
		state.activeNote.favorite = !state.activeNote.favorite
	},
	DEL_NOTE(state){
		var notes = state.notes;
		let activeNote = state.activeNote
		/*for (let i = 0; i<notes.length; i++){

			if (notes[i]==activeNote){
				notes.splice(i,1)
			}
		}*/
		state.notes=notes.filter((item)=>item!=activeNote)
		if (notes.length>0){
			state.activeNote = notes[0]
		}
		
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})