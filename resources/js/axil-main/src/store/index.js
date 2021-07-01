import { createStore } from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import axios from 'axios';

export default createStore({
  // plugins: [createPersistedState()],
  state:{
      toDo:[],
      inPogress:[],
      doneTask:[],
      callSave:0,

  },
  getters: {
    allToDos: state => state.toDo,
    allInPogress: state => state.inPogress,
    allDoneTask: state => state.doneTask,
    allCallSave: state => state.callSave,
  },
  mutations: {
    toDoUpdate (state, payload) {
      state.toDo = payload
    },
    inPogressUpdate (state, payload) {
      state.inPogress = payload
    },
    doneTaskdate (state, payload) {
      state.doneTask = payload
    },
    callSave (state) {
      state.callSave++
    },
  },
  actions: {
    async getTodos({ commit }) {
      const response = await axios.get('tm-api/task');
      if(response.status === 200) {
        var allTodos = await response.data.filter(task => task.status === 'todo');
        return allTodos;
      }
      return;
    },
    async getInPogress({ commit }) {
      const response = await axios.get('tm-api/task');
      if(response.status === 200) {
        var allInPogress = await response.data.filter(task => task.status === 'prog');
        return allInPogress;
      }
      return;
    },
    async getDoneTask({ commit }) {
      const response = await axios.get('tm-api/task');
      if(response.status === 200) {
        var allDoneTask = await response.data.filter(task => task.status === 'done');
        return allDoneTask;
      }
      return;
    },
    async getAssignedTo({ commit }) {
      const response = await axios.get('tm-api/getassignedto');
      // console.log(response);
      if(response.status === 200) {
        var allUsers = await response.data;
        return allUsers;
      }
      return;
    },
    async getAssignee({ commit }) {
      const response = await axios.get('tm-api/getassignee/1');
      // console.log('getAssignee',response.data);
      if(response.status === 200) {
        var assignee = await response.data;
        return assignee;
      }
      return;
    },
  },
  modules: {
  }
})
