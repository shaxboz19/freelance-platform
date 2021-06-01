import {createStore} from 'vuex'
import axios from '../axios/request';

// plugins = [];
// if(process.env.NODE_ENV === 'development') {
//     plugins.push(createLogger())
// }

export default  createStore({
    // plugins,
    
    state() {
        return {
            jobs : [],
            counter : 0,
        }
    },
    mutations : {
        setRequest(state, request) {
            state.jobs = request
        },
        setJobs(state, payload) {
            state.jobs.push(payload)
        },
        incrementCounter(state) {
            state.counter++;
        },
        defaultCounter(state) {
            state.counter = 0
        }
    },
    actions : {
       async load({commit}) {
           commit('defaultCounter')
           const {data} = await axios.get('/request.json') 
            const dataMap = Object.keys(data).map(id=>{
               return {...data[id], id}});
            commit('setRequest', dataMap)

            for (const item of dataMap) {
                if(item.status ==='active') {
                commit('incrementCounter')       
                }
            }


            
        },
        async loadOne(_, id) {
            console.log('id', id);
            const {data} = await axios.get(`/request/${id}.json`)
            return data
        },
        async update(_, payload) {
            console.log(payload.data.value);
            await axios.put(`/request/${payload.id}.json`, payload.data.value)
        }

    },
  
    
})