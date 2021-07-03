<template>
    <div ref="cardRoot">
        <div class="cc-task" :task_id="props.cardDetail.id">
            <div class="cc-task-title"><CcTitle :fontSize="18" :status="props.cardDetail.type" :title="props.cardDetail.title" /></div>
            <div class="cc-task-description">{{props.cardDetail.description}}</div>
            <CcDivider />
            <div class="cc-task-option">
                <div class="cc-task-users">
                    <CcPropicList :height="32" :list="props.cardDetail.assigned_user" listTarget="avatar" />
                </div>
                <div class="cc-task-btn">
                    <CcButtonDropdown>
                        <div class="cc-button-dropdown-item" @click="editTaskEvent(props.cardDetail.source)">Edit</div>
                        <div class="cc-button-dropdown-item" @click="deleteData()">Delete</div>
                    </CcButtonDropdown>
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
                        <div class="tsm-button-name" @click="editTaskPage = 'gen'" :style="{color: editTaskPage == 'gen' ? '#0049C6' : '#5D5D7A'}">General Info</div>
                        <div class="tsm-button-marker-container">
                            <div class="tsm-button-marker" :style="{backgroundColor: editTaskPage == 'gen' ? '#0049C6' : '#F5F8FC'}"></div>
                        </div>
                    </div>
                    <div class="tsm-button-spacer"></div>
                    <div class="tsm-button-container">
                        <div class="tsm-button-name" @click="editTaskPage = 'assign'" :style="{color: editTaskPage == 'assign' ? '#0049C6' : '#5D5D7A'}">Assigned To</div>
                        <div class="tsm-button-marker-container">
                            <div class="tsm-button-marker" :style="{backgroundColor: editTaskPage == 'assign' ? '#0049C6' : '#F5F8FC'}"></div>
                        </div>
                    </div>
                    <div class="tsm-button-spacer"></div>
                </div>
                <div v-if="errors">
                    <div v-for="err,index in errors" class="error" :key="index">{{ err[0] }}</div>
                </div>
                <div v-if="editTaskPage == 'gen'">
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
                <div  v-if="editTaskPage == 'assign'">
                  <div class="tsm-employee-search">
                      
                      <CcSearch v-model="srcEmployeeInput" @select="eployeeSelected" label="Search" :options="srcEmployeeOptions" />
                  </div>
                  <div class="tsm-employee-list">
                      <div v-for="(item) in taskItem.assigned_user" :key="item.id" class="tsm-employee-list-item">
                          <div  class="tsm-employee-list-image"><img :src="item.avatar" style="width:40px" /></div>
                          <div class="tsm-employee-list-text">{{item.name}}</div>
                          <div class="tsm-employee-list-delete" @click="removeUser(item)">
                              <img src="/icons/close.svg" style="width:10px" />
                          </div>
                      </div>
                  </div>
                </div>
                <div class="tsm-save-button">
                    <CcButton label="Save" @click="savetaskItem()" color="#0049C6" :textSize="14" textColor="#FFFFFF" :padding="1.5" />
                </div> 
            </div>
        </CcModal>
    </div>
</template>

<script setup>
    import CcButtonDropdown from '../components/cc-button-dropdown.vue'
    import CcPropicList from '../components/cc-propic-list.vue'
    import CcTitle from '../components/cc-title.vue'
    import CcDivider from '../components/cc-divider.vue'

    import CcModal from '../components/cc-modal.vue'
    import CcSearch from '../components/cc-search.vue'
    import CcButton from '../components/cc-button.vue'
    import CcInput from '../components/cc-input.vue'
    import CcTextarea from '../components/cc-textarea.vue'
    import CcSelect from '../components/cc-select.vue'    
    import { defineProps, reactive, computed, ref, onMounted, onUpdated } from 'vue'

    import lodash from 'lodash'
    import {useStore} from 'vuex'
    import axios from 'axios'

    const store = useStore()

    const assigneeUserId = computed(() => store.state.assignee.id)

    const props = defineProps({
        cardDetail: Object,
        userList:Array,
        assignee: Number,
    })

    const modal = ref(false);
    const cardRoot = ref(null)
    const editTaskPage = ref('gen');
    const srcEmployeeInput = ref('');
    const taskItem = reactive({
        id:null,
        title:null,
        description: null,
        type:'Importent',
        assignee: null,
        source:null,
        assigned_user: [],
    })
    const options = reactive(['Importent','Irrelevant', 'Default']);
    const editTaskEvent = (source) => {
        modal.value = true;
        taskItem.id = props.cardDetail.id;
        taskItem.assigned_user = lodash.cloneDeep(props.cardDetail.assigned_user);
        taskItem.title = props.cardDetail.title;
        taskItem.description = props.cardDetail.description;
        taskItem.type = props.cardDetail.type;
        taskItem.source = source;
        taskItem.assignee = assigneeUserId.value;
        editTaskPage.value = 'gen';
        // console.log(taskItem);
    }
    const srcEmployeeOptions = computed(()=>{
        var re = new RegExp(srcEmployeeInput.value, "i");
        return props.userList.filter((item) => {
            return re.test(item.name)
        })

    })
    const eployeeSelected = (e) => {
        taskItem.assigned_user.push(e)
    }
    const savetaskItem = async () => {
        var classes = cardRoot.value.parentElement;
        if(classes.closest('.todo-todo') != null){
            taskItem.source = 'todo';
            var data = await store.state.toDo
        }
        if(classes.closest('.progress-todo') != null){
            taskItem.source = 'prog';
            var data = await store.state.inPogress
        }   
        if(classes.closest('.done-todo') != null){
            taskItem.source = 'done';
            var data = await store.state.doneTask
        } 
        var index = await data.indexOf(props.cardDetail)
        
        let response = await store.dispatch('updateTask',taskItem)
        // console.log('savetaskItem:response',response.errors);
        if(!response.errors) {
            
            data[index]= await lodash.cloneDeep(taskItem);

            modal.value = false;
        } else {
            errors.value = await response.errors
            console.log('errors.value',errors.value)
        }
    }
    const deleteData = async () => {
        await callBackendDelete();
        var classes = cardRoot.value.parentElement;
        if(classes.closest('.todo-todo') != null){
            var data = await store.state.toDo
        }
        if(classes.closest('.progress-todo') != null){
            var data = await store.state.inPogress
        }   
        if(classes.closest('.done-todo') != null){
            var data = await store.state.doneTask
        } 
        var index = data.indexOf(props.cardDetail)
        data.splice(index, 1);
    }

    // set errors
    const errors = ref(null);

    const removeUser = async (user) => {
        const index = taskItem.assigned_user.indexOf(await user);
        console.log(await index)
        taskItem.assigned_user = lodash.cloneDeep(taskItem.assigned_user.splice(index,1))
        console.log(taskItem.assigned_user)
    }

    const callBackendDelete = async () => {
        console.log('callBackendDelete', props.cardDetail)
        // var newusers = [];
        // var newuserId;
        // for (var i = 0; i < taskItem.assigned_user.length; i++) {
        //     newuserId = taskItem.assigned_user[i].id;
        //     newusers.push({"user_id":newuserId});
        // }
        await axios.delete('tm-api/task/'+ props.cardDetail.id)
        .then(response => {
            console.log(response)
        })
        .catch(err =>{ console.log('tm-api:',err)});
    }

    onMounted(() => {
        // console.log(props)
    })
    onUpdated(() => {
        // console.log('props.cardDetail',props.cardDetail)
    })
</script>

<style lang="scss">
    .cc-button-dropdown-item{
        padding: 10px;
        border-radius: 10px;
        color: #808191;
        cursor: pointer;
    }
    .cc-button-dropdown-item:hover{
        background-color:#F9FAFC;
    }
    .cc-task {
        padding: 20px;
        background-color: #FFFFFF;
        border-radius: 10px;

        &-title{

        }
        &-description{
            font-size:13px;
            color: #A0A0AC;
            padding: 20px 0px;
        }
        &-option{
            display: flex;
            padding-top:20px;
        }
        &-users{
            flex:1;
        }
        &-btn{
            display: flex;
            align-items: center;
        }
    }
    .error {
        background: #ebe0de;
        color: #905545;
        border: 1px solid #f1f1f1;
    }
</style>