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
                <div class="dragable-box" @mouseenter="mouseFunc">
                    <draggable class="dragArea list-group toDo" :list="toDo" group="task" item-key="id" >
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
                <div class="dragable-box" @mouseenter="mouseFunc">
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
                <div class="dragable-box" @mouseenter="mouseFunc">
                    <draggable class="dragArea list-group done" :list="doneTask" group="task" item-key="id" >
                        <template #item="{ element }">
                            <div class="list-group-item done-todo">
                                <div><CcTaskCard :cardDetail="element" :userList="userList" :assignee="assigneeUserId.value" /></div>
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
                <div v-if="errors">
                    <div v-for="err,index in errors" class="error" :key="index">{{ err[0] }}</div>
                </div>
                <div v-if="newTaskPage == 'gen'">
                    <!-- <input type="hidden" :value="taskItem.id"> -->
                    <div class="tsm-title">
                        <small v-if="errors?.title">Title is invalid</small>
                        <CcInput v-model="taskItem.title" label="Title" placeHolder="Web Design"  />
                    </div>
                    <div class="tsm-description">
                        <small v-if="errors?.description">Description is invalid</small>
                        <CcTextarea v-model="taskItem.description" :rows="4" label="Description" />
                    </div>
                    <div class="tsm-project-type">
                        <small v-if="errors?.project_type">Project Type is invalid</small>
                        <CcSelect v-model="taskItem.type" :options="options" :rows="10" label="Project Type" />
                    </div>     
                </div>
                <div  v-if="newTaskPage == 'assign'">
                  <div class="tsm-employee-search">
                      <small v-if="errors?.assigned_user">Employee is invalid</small>
                      <CcSearch v-model="srcEmployeeInput" @select="eployeeSelected" label="Search" :options="srcEmployeeOptions" />
                  </div>
                  <div class="tsm-employee-list">
                      <div v-for="(item, index) in taskItem.assigned_user" :key="index" class="tsm-employee-list-item">
                          <div class="tsm-employee-list-image"><img :src="item.avatar" style="width:40px" /></div>
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

    import { ref, reactive, onMounted, computed, watch, onUpdated  } from 'vue'
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
    const assigneeUserId = computed(() => store.state.assignee.id)

    //New Task Create
    const newTaskPage = ref('gen');
    const srcEmployeeInput = ref('');
    const selectedEmployeeList = ref(null);
    const options = reactive(['Importent','Irrelevant', 'Default']);
    const taskItem = reactive({
        id:null,
        title:null,
        description: null,
        type:'Importent',
        assignee: null,
        source:null,
        assigned_user: [],
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
        taskItem.assigned_user.length = 0;
        taskItem.title = null;
        taskItem.description = null;
        taskItem.source = source;
        taskItem.type = 'Importent';
        taskItem.assignee = assigneeUserId.value;
        newTaskPage.value = 'gen';
        console.log(taskItem)
    }
    const eployeeSelected = (e) => {
        taskItem.assigned_user.push(e)
    }
    const savetaskItem = async () => {
        if(newTaskPage.value == 'gen'){
            newTaskPage.value = 'assign';
        }else{
            if(taskItem.source == 'todo'){
                let response = await store.dispatch('saveTask',taskItem);
                if(!response.errors) {
                    let newToDO = toDo.value;
                    newToDO.push(lodash.cloneDeep(taskItem));
                    store.commit('toDoUpdate', newToDO)
                    modal.value = false;
                } else {
                    errors.value = await response.errors
                    console.log('errors.value',errors.value)
                }
            }
            if(taskItem.source == 'prog'){
                let response = await store.dispatch('saveTask',taskItem);
                if(!response.errors) {
                    let newInPogress = inPogress.value;
                    newInPogress.push(lodash.cloneDeep(taskItem));
                    store.commit('inPogressUpdate', newInPogress)
                    modal.value = false;
                } else {
                    errors.value = await response.errors
                    console.log('errors.value',errors.value)
                }
            }
                        
        }

    }
    // set errors
    const errors = ref(null);

    watch([store.state.toDo, store.state.inPogress, store.state.doneTask], () => {
        store.commit('callSave')
    })

    //Load initials
    const requestUserList = async () =>{
        try{
            // var req = await axios.get('https://api.github.com/users')
            // userList.push(...req.data);
            var req = await store.dispatch('getAssignedTo')
            userList.push(...req);
        }catch(err){console.log(err)}
    }

    const getAllTasks = async () => {
        if(toDoCount.value === 0){
            var todos = await store.dispatch('getTodos');
            // console.log('todos:',todos);

            var newToDO = toDo.value;
            // // modify taskItem
            for(let i = 0; i < todos.length; i++) {
                taskItem.id = todos[i].id;
                taskItem.assigned_user = todos[i].assigned_user;
                taskItem.title = todos[i].title;
                taskItem.description = todos[i].description;
                taskItem.source = todos[i].status;
                taskItem.type = todos[i].project_type;
                taskItem.assignee = todos[i].assignee;
                newToDO.push(lodash.cloneDeep(taskItem));
            }
            
            store.commit('toDoUpdate', newToDO)
            // console.log(toDo.value)
        }
        if(inPogressCount.value === 0){
            var inPogresses = await store.dispatch('getInPogress');
            var newInPogress = inPogress.value;
            for(let i = 0; i < inPogresses.length; i++) {
                taskItem.id = inPogresses[i].id;
                taskItem.assigned_user = inPogresses[i].assigned_user;
                taskItem.title = inPogresses[i].title;
                taskItem.description = inPogresses[i].description;
                taskItem.source = inPogresses[i].status;
                taskItem.type = inPogresses[i].project_type;
                taskItem.assignee = inPogresses[i].assignee;
                newInPogress.push(lodash.cloneDeep(taskItem));
            }
            store.commit('inPogressUpdate', newInPogress)
        }
        if(doneTaskCount.value === 0){
            var doneTasks = await store.dispatch('getDoneTask');
            var newDoneTask = doneTask.value;
            for(let i = 0; i < doneTasks.length; i++) {
                taskItem.id = doneTasks[i].id;
                taskItem.assigned_user = doneTasks[i].assigned_user;
                taskItem.title = doneTasks[i].title;
                taskItem.description = doneTasks[i].description;
                taskItem.source = doneTasks[i].status;
                taskItem.type = doneTasks[i].project_type;
                taskItem.assignee = doneTasks[i].assignee;
                newDoneTask.push(lodash.cloneDeep(taskItem));
            }
            store.commit('doneTaskUpdate', newDoneTask)
        }
    }

    const mouseFunc = (e) => {
        // console.log('todo', e.target.childNodes[0].classList[2])
        // console.log(e.target)
        // console.log('inPogress', e.target.childNodes.classList.contains('inPogress'))
        // console.log('done', e.target.childNodes.classList.contains('done'))
    }

    onMounted(async () => {
        await getAllTasks(); 
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