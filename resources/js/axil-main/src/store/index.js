import { createStore, storeKey } from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import axios from 'axios';

export default createStore({
  // plugins: [createPersistedState()],
  state:{
      toDo:[],
      inPogress:[],
      doneTask:[],
      callSave:0,
      assignee:{
        id:0,
        name:'',
        avatar:''
      }

  },
  getters: {
    allToDos: state => state.toDo,
    allInPogress: state => state.inPogress,
    allDoneTask: state => state.doneTask,
    allCallSave: state => state.callSave,
    getAssignee: state => state.assignee,
  },
  mutations: {
    toDoUpdate (state, payload) {
      state.toDo = payload
    },
    inPogressUpdate (state, payload) {
      state.inPogress = payload
    },
    doneTaskUpdate (state, payload) {
      state.doneTask = payload
    },
    callSave (state) {
      state.callSave++
    },
    setAssignee (state, payload) {
      state.assignee = payload
    },
  },
  actions: {
    async saveTask({ commit }, task) {
      // console.log(task);
      const response = await axios.post('tm-api/task', {
        task : {
          title: task.title,
          description: task.description,
          project_type: task.type,
          source: task.source,
          assignee_user_id: task.assignee,
          assigned_user: task.assigned_user,
        }
      })
      .then(res => res)
      .catch(error => error.response.data)
        
      return response;
    },
    async updateTask({ commit }, task) {
      // console.log(task);
      try{
        const response = await axios.put('tm-api/task/'+ task.id, {
          task : {
            task_id: task.id,
            title: task.title,
            description: task.description,
            project_type: task.type,
            source: task.source,
            assignee_user_id: task.assignee,
            assigned_user: task.assigned_user,
          }
        })
        .then(res => res)
        .catch(error => error.response.data)
        
        return response;
      }
      catch(error){
        console.log('error msg',error);

      }

    },
    async getTodos({ commit }) {
      const response = await axios.get('tm-api/gettasks/todo');
      if(response.status === 200) {
        var todos = await response.data;
        // console.log('todos',await todos);
        
        return await todos;
      }
      return;
    },
    async getInPogress({ commit }) {
      const response = await axios.get('tm-api/gettasks/prog');
      if(response.status === 200) {
        var allInPogress = await response.data;
        // console.log('allInPogress',await allInPogress);
        return await allInPogress;
      }
      return;
    },
    async getDoneTask({ commit }) {
      const response = await axios.get('tm-api/gettasks/done');
      if(response.status === 200) {
        var allDoneTask = await response.data;
        // console.log('allDoneTask',await allDoneTask);
        return await allDoneTask;
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
      // console.log('getAssignee',response);
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
