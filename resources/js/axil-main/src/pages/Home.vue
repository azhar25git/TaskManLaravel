<template>
    <div>
        <div class="body-header">
            <div class="flx">
                <div><CcPropicList :height="40" :list="userList" listTarget="avatar" /></div>
                <div class="body-header-invite"><CcButton label="Invite People" :border="2" :textSize="16" icon="add-user" :padding=".8" /></div>
            </div>
            <div class="body-header-status-container">
                <div class="body-header-status"><CcTitle :fontSize="14" status="Importent" title="Importent" /></div>
                <div class="body-header-status"><CcTitle :fontSize="14" status="Irrelevant" title="Irrelevant" /></div>
                <div class="body-header-status"><CcTitle :fontSize="14" status="Default" title="Default" /></div>
            </div>
        </div>

        <div style="height:30px"></div>
        <div class="todo-items flx block-lg w100-lg">
            <!-- Item Container -->
            <div class="w30 w100-lg">
                <div class="todo-items-header">
                    <div class="f-16 f-bold flx-auto h-center">
                        To Do <span class="todo-items-title-count">({{toDoCount}})</span>
                    </div>
                    <div><CcButton label="New Task" color="#E0E2E8" :textSize="12" icon="plus" @click="newTaskEvent('todo')" :padding="1.2" /></div>
                </div>
                <div class="dragable-box">
                    <draggable class="dragArea list-group" :list="toDo" group="task" item-key="id" >
                        <template #item="{ element }">
                            <div class="list-group-item todo-todo">
                                <CcTaskCard :cardDetail="element" :userList="userList" :task_id="taskItem.id" />
                            </div>
                        </template>
                    </draggable>
                </div>
            </div>
            <!-- Item Container -->
            <div class="w30 w100-lg">
                <div class="todo-items-header">
                    <div class="f-16 f-bold flx-auto h-center">
                        In progress <span class="todo-items-title-count">({{inPogressCount}})</span>
                    </div>
                    <div><CcButton label="New Task" color="#E0E2E8" :textSize="12" icon="plus" @click="newTaskEvent('prog')" :padding="1.2" /></div>
                </div>
                <div class="dragable-box">
                    <draggable class="dragArea list-group inPogress" :list="inPogress" group="task" item-key="id" >
                        <template #item="{ element }">
                            <div class="list-group-item progress-todo">
                                <CcTaskCard :cardDetail="element" :userList="userList" />
                            </div>
                        </template>
                    </draggable>
                </div>
            </div>
            <!-- Item Container -->
            <div class="w30 w100-lg">
                <div class="todo-items-header">
                    <div class="f-16 f-bold flx-auto h-center">
                        Done <span class="todo-items-title-count">({{doneTaskCount}})</span>
                    </div>
                    <div></div>
                </div>
                <div class="dragable-box">
                    <draggable class="dragArea list-group" :list="doneTask" group="task" item-key="id" >
                        <template #item="{ element }">
                            <div class="list-group-item done-todo">
                                <div><CcTaskCard :cardDetail="element" :userList="userList" /></div>
                            </div>
                        </template>
                    </draggable>
                </div>
            </div>
        </div>

        <CcModal v-model="modal" :width="500">
            <div class="tsm">
                <div class="tsm-name">Create New Task</div>
                <CcDivider />
                <div class="tsm-button">
                    <div class="tsm-button-spacer"></div>
                    <div class="tsm-button-container">
                        <div class="tsm-button-name" @click="newTaskPage = 'gen'" :style="{color: newTaskPage == 'gen' ? '#0049C6' : '#5D5D7A'}">General Info</div>
                        <div class="tsm-button-marker-container">
                            <div class="tsm-button-marker" :style="{backgroundColor: newTaskPage == 'gen' ? '#0049C6' : '#F5F8FC'}"></div>
                        </div>
                    </div>
                    <div class="tsm-button-spacer"></div>
                    <div class="tsm-button-container">
                        <div class="tsm-button-name" @click="newTaskPage = 'assign'" :style="{color: newTaskPage == 'assign' ? '#0049C6' : '#5D5D7A'}">Assigned To</div>
                        <div class="tsm-button-marker-container">
                            <div class="tsm-button-marker" :style="{backgroundColor: newTaskPage == 'assign' ? '#0049C6' : '#F5F8FC'}"></div>
                        </div>
                    </div>
                    <div class="tsm-button-spacer"></div>
                </div>
                <div v-if="newTaskPage == 'gen'">
                    <!-- <input type="hidden" :value="taskItem.id"> -->
                    <div class="tsm-title">
                        <CcInput v-model="taskItem.title" label="Title" placeHolder="Web Design"  />
                    </div>
                    <div class="tsm-description">
                        <CcTextarea v-model="taskItem.description" :rows="4" label="Description" />
                    </div>
                    <div class="tsm-project-type">
                        <CcSelect v-model="taskItem.type" :options="options" :rows="10" label="Project Type" />
                    </div>     
                </div>
                <div  v-if="newTaskPage == 'assign'">
                  <div class="tsm-employee-search">
                      <CcSearch v-model="srcEmployeeInput" @select="eployeeSelected" label="Search" :options="srcEmployeeOptions" />
                  </div>
                  <div class="tsm-employee-list">
                      <div v-for="(item, index) in taskItem.assignedUser" :key="index" class="tsm-employee-list-item">
                          <div  class="tsm-employee-list-image"><img :src="item.avatar" style="width:40px" /></div>
                          <div class="tsm-employee-list-text">{{item.name}}</div>
                          <div class="tsm-employee-list-delete">
                              <img src="/icons/close.svg" style="width:10px" />
                          </div>
                      </div>
                  </div>
                </div>
                <div class="tsm-save-button">
                    <CcButton :label="newTaskPage == 'gen' ? 'Next' : 'save'" @click="savetaskItem()" color="#0049C6" :textSize="14" textColor="#FFFFFF" :padding="1.5" />
                </div> 
            </div>
        </CcModal>

    </div>
</template>
<script setup>
    import CcPropicList from '../components/cc-propic-list.vue'
    import CcTitle from '../components/cc-title.vue'
    import CcTaskCard from '../components/cc-task-card.vue'

    import CcModal from '../components/cc-modal.vue'
    import CcDivider from '../components/cc-divider.vue'
    import CcSearch from '../components/cc-search.vue'
    import CcButton from '../components/cc-button.vue'
    import CcInput from '../components/cc-input.vue'
    import CcTextarea from '../components/cc-textarea.vue'
    import CcSelect from '../components/cc-select.vue'

    import axios from 'axios'
    import draggable from 'vuedraggable'
    import lodash from 'lodash'

    import { ref, reactive, onMounted, computed, watch  } from 'vue'
    import {useStore} from 'vuex'

    const store = useStore()

    const userList = reactive([]);
    const taskList = reactive([]);
    const modal = ref(false);

    const toDo = computed(() =>  store.state.toDo) 
    const inPogress = computed(() => store.state.inPogress) 
    const doneTask = computed(() => store.state.doneTask) 
    const toDoCount = computed(() => store.state.toDo.length) 
    const inPogressCount = computed(() => store.state.inPogress.length) 
    const doneTaskCount = computed(() => store.state.doneTask.length) 

    //New Task Create
    const newTaskPage = ref('gen');
    const srcEmployeeInput = ref('');
    const selectedEmployeeList = reactive([]);
    const options = reactive(['Importent','Irrelevant', 'Default']);
    const taskItem = reactive({
        id:null,
        title:null,
        description: null,
        type:'Importent',
        source:null,
        assignedUser: [],
    })
    const srcEmployeeOptions = computed(()=>{
        var re = new RegExp(srcEmployeeInput.value, "i");
        return userList.filter((item) => {
            return re.test(item.name)
        })

    })

    const newTaskEvent = (source) => {
        modal.value = true;
        taskItem.id = null;
        taskItem.assignedUser.length = 0;
        taskItem.title = null;
        taskItem.description = null;
        taskItem.source = source;
        taskItem.type = 'Importent';
        newTaskPage.value = 'gen';
    }
    const eployeeSelected = (e) => {
        taskItem.assignedUser.push(e)
    }
    const savetaskItem = async () => {
        if(newTaskPage.value == 'gen'){
            newTaskPage.value = 'assign';
        }else{
            if(taskItem.source == 'todo'){
                await callBackendGet();
                if(taskItem.id != null){
                    var newToDO = toDo.value;
                    newToDO.push(lodash.cloneDeep(taskItem));
                    store.commit('toDoUpdate', newToDO)
                }else {
                    console.log('taskItem.id = null');
                }
                
            }
            if(taskItem.source == 'prog'){
                await callBackendGet();
                if(taskItem.id != null){
                    var newInPogress = inPogress.value;
                    newInPogress.push(lodash.cloneDeep(taskItem));
                    store.commit('inPogressUpdate', newInPogress)
                }else {
                    console.log('taskItem.id = null');
                }
                
            }
            modal.value = false;            
        }

    }
    watch([store.state.toDo, store.state.inPogress, store.state.doneTask], () => {
        store.commit('callSave')
    })

    //Load innitials
    const requestUserList = async () =>{
        try{
            // var req = await axios.get('https://api.github.com/users')
            // userList.push(...req.data);
            var req = await store.dispatch('getAssignedTo')
            userList.push(...req);
        }catch(err){console.log(err)}
    }
    const requestTaskList = async () =>{
        try{
            var req = await axios.get('tm-api/task')
            console.log(req.data);
            console.log("store.state.callSave",store.state.callSave);
            let i;
            if(store.state.callSave === 0) {
                // console.log(Object.keys(req.data).length)
                for( i in req.data ) {
                    // console.log(req.data[i]);
                    if(req.data[i].status === 'prog'){
                        var newInPogress = inPogress.value;
                        taskItem.id = req.data[i].id;
                        taskItem.assignedUser = req.data[i].user_ids;
                        taskItem.title = req.data[i].title;
                        taskItem.description = req.data[i].description;
                        taskItem.source = req.data[i].status;
                        taskItem.type = req.data[i].project_type;
                        newInPogress.push(lodash.cloneDeep(taskItem));
                        store.commit('inPogressUpdate', newInPogress)
                    }
                    else if(req.data[i].status === 'todo'){
                        // console.log(i);
                        var newToDO = toDo.value;
                        taskItem.id = req.data[i].id;
                        taskItem.assignedUser = req.data[i].user_ids;
                        taskItem.title = req.data[i].title;
                        taskItem.description = req.data[i].description;
                        taskItem.source = req.data[i].status;
                        taskItem.type = req.data[i].project_type;
                        newToDO.push(lodash.cloneDeep(taskItem));
                        store.commit('toDoUpdate', newToDO)
                    }

                };
            } 
            // taskList.push(...req.data);
        }catch(err){console.log(err)}
    }

    const callBackendGet = async () => {
        var newusers = [];
        var newuserId;
        for (var i = 0; i < taskItem.assignedUser.length; i++) {
            newuserId = taskItem.assignedUser[i].id;
            newusers.push({"user_id":newuserId});
        }
        // console.log("newusers:", newusers);
        await axios.post('tm-api/task', {
            "task": {
                "title": taskItem.title,
                "description": taskItem.description,
                "status": taskItem.source,
                "project_type": taskItem.type,
                "user_ids": newusers
            }
        })
        .then(response => {
            if(response.status === 201){
                taskItem.id = response.data.id
                // console.log(taskItem);
                return response.data.id;
            }
            console.log(response)
        })
        .catch(err =>{ 
            console.log('tm-api:',err)
            return err;
            });
    }

    onMounted(async ()=>{
        // console.log(lodash.cloneDeep(taskItem))
        requestUserList();
    })

</script>

<style lang="scss">
    .body-header{
        display: flex;
        padding: 30px 0px;
        &-status{
            padding: 0px 10px;
            display: flex;
            align-items: center;
        }
        &-invite{
            padding: 0px 20px;
        }
        &-status-container{
            padding-top: 0px;
            display: flex;
            justify-content: flex-end;
            flex:auto;
        }
    }
    @media (max-width:850px) {
        .body-header{
            display: block;
            &-status-container{
                padding-top: 30px;
                justify-content: flex-start;
            }
        }
    }
    .todo-items{
        justify-content: space-between;
        &-header{
            display: flex;
            height: 35px;
        }
        &-title-count{
            font-size:18px;
            color:#8F909F;
            padding-left:10px ;
        }
    }
    .dragable-box{
        padding-top: 25px;
        padding-bottom: 25px;
    }
    .list-group{
        min-height: 250px;
    }
    .list-group-item{
        padding: 10px 0px;
    }
    @media (max-width:1000px) {
        .dragable-box{
            padding-top: 5px;
            padding-bottom: 35px;
        }
    }





</style>