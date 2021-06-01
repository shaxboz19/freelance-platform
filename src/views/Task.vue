<template>
 <div>
  <div class="card" v-if="data.status">
    <h2>{{data.name}}</h2>
    <p><strong>Статус</strong>: <app-status :type='data.status' ></app-status></p>
    <p><strong>Дэдлайн</strong>: {{ data.date }}</p>
    <p><strong>Описание</strong>: {{data.text}} </p>
    <div>
      <button class="btn" v-if="data.status ==='active' ">Взять в работу</button>
      <button class="btn primary" @click="update('done')">Завершить</button>
      <button class="btn danger" @click="update('canceled')" >Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{$route.params.id}} </strong> нет.
  </h3>
  </div>
</template>

<script>

import appStatus from '../components/AppStatus'
import {onMounted, ref,  }  from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'


export default {
  components: {appStatus},
  setup() {
    const store = useStore()
    const route = useRoute()
    const data = ref({})
    onMounted(async ()=>{
      data.value = await store.dispatch('loadOne', route.params.id) 

    });
    
    return {
      data, 
      update : (val)=> {
        data.value.status = val
        store.dispatch('update', {data, id: route.params.id})
        
      }
    }
  }

}
</script>

<style scoped>

</style>