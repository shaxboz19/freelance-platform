<template>
  <span :class="['badge', className]"> {{text}} </span>
</template>

<script>
import {onMounted, watch, ref} from 'vue'
export default {
  props : ['type'],
 setup(props) {

   onMounted(()=>{
     console.log('type', props.type);
   })
  const  textMap = {
    active : 'Активный',
    penging : 'Выполняется',
    done : 'Завершен',
    canceled : 'Отменен'
  };
  const classMap = {
    active : 'primary',
    pending : 'warning',
    done : 'primary',
    canceled  : 'danger'
  }

  const className = ref(classMap[props.type]);
    const text = ref(textMap[props.type]);
     watch(props, val =>{
        className.value = classMap[val.type];
        text.value = textMap[val.type];
    })

   return {
      text ,
      className
      
   }
 }  
}
</script>