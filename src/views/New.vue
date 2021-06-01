<template>
  <form class="card"  @submit.prevent="create">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="text"></textarea>
    </div>

    <button class="btn primary" :disabled = "isActive" >Создать</button>
  </form>
</template>


<script>
import {useRequest} from '../use/requestJob'
export default {
  setup() {
  

  return {
    ...useRequest()
  }
  }
}
</script>