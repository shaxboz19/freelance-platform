import axios from '../axios/request'
import {computed,  ref} from 'vue'
import {useRouter} from 'vue-router';
import { useStore } from 'vuex';


export function useRequest() {
    const name = ref('');
    const date = ref('');
    const text = ref ('');
    const formValue = ref({});
    const router = useRouter();
    const store = useStore();

    const isActive = computed( () =>{
      return (name.value && date.value && text.value) ? false : true;
    });
 
    
  const create = async () =>{
      formValue.value = {
      status : 'active',
      name : name.value,
      date : date.value,
      text : text.value,
      
    } 
    
    
    const date2 =new Date(Date.parse(date.value)) 
    if(date2-Date.now()<0) {
      console.log('date2', date2);
      formValue.value.status = 'done'
    }
     const {data} = await axios.post('/request.json', {...formValue.value})
     store.commit('setJobs', {...formValue} ) 
     router.push('/')
     console.log(data);
    //  console.log('Date', new Date.now);

  }
    return {
      name, date, text, isActive, formValue, create
    }
}