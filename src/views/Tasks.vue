<template>
<div>
  <h1 class="text-white center" v-if="!jobs">Задач пока нет</h1>
  <job-card :jobs ='jobs'></job-card>
  </div>
</template>

<script>

import {onMounted, ref}  from 'vue'
import {useStore} from 'vuex'
import JobCard from '../components/jobCard.vue'
export default {
  components: {JobCard},
  
  setup() {
   const store = useStore()
   const jobs  = ref()
    onMounted(async ()=>{
       await store.dispatch('load')
       jobs.value = store.state.jobs
       console.log(jobs.value);
    }) 
    return {
      jobs
    }
    
  }
  

}
</script>
