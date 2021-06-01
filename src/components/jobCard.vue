<template>
    <div>
      <h3 class="text-white">Всего активных задач: {{incrementCounter}} </h3>
    <div class="card" v-for="(item, index) in jobs" :key="index" >
      <h2 class="card-title">
        {{item.name}}
        <app-status :type = 'item.status'></app-status>
      </h2>
      <p>
        <strong>
          <small>
            {{item.date}}
          </small>
        </strong>
      </p>
      <router-link v-slot="{navigate}" custom :to="{name: 'task', params: {id: item.id}}">
      <button class="btn primary" @click="navigate" >Посмотреть</button>
      </router-link>
    </div>
  </div>

</template>

<script>
import appStatus from '../components/AppStatus'
import {computed } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { appStatus } ,
     props : ['jobs'],
     setup() {
     const store = useStore()

        //  for (const item of props.jobs) {
        //   console.log('item', item.value.status);
        //   if(item.value.status==='active'){
        //     store.state.counter =1
        //   }
          
        // }
      
      const incrementCounter = computed(()=>{
       return  store.state.counter
      })
         
       return {
         incrementCounter,
         
       }
     }
    
}
</script>