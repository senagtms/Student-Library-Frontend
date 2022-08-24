<template>
     <section id="userAddForm">
      <div class="container">
        <div class="row">
          <div class="col">
            <form >
              <div class="form-group">
                <label>İsim </label>
                <input type="text" class="form-control" v-model="updateUser.name"/>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="updateUser.email" />
              </div>
              <div class="form-group">
                <label>Telefon</label>
                <input type="text" class="form-control" v-model="updateUser.tel" />
              </div>

              <button type="submit" class="btn btn-primary" @click.prevent="updateData">Kaydet</button>
            </form>
          </div>
        </div>
      </div>
    </section>

</template>

<script setup>
import { useRoute,useRouter } from 'vue-router';
import { reactive,ref } from 'vue';
import { onBeforeMount } from 'vue';


const route = useRoute();
const router = useRouter();
const id  = route.params.id;
const studentInfo = ref({})


const updateUser=reactive({
    name:'',
    email:'',
    tel:''

})
const apiUrl = "http://localhost:5001/updateUser/"+id;


onBeforeMount(async()=>{

    const info = await fetch(apiUrl)
    studentInfo.value  = await info.json();
    updateUser.name = studentInfo.value.name;
    updateUser.email= studentInfo.value.email;
    updateUser.tel= studentInfo.value.tel;
    console.log(studentInfo.value)

})



const updateData = async()=> {
    const data = await fetch(apiUrl, 
    {
        method:"PATCH",
        headers:{"Content-type":"Application/json"},
        body:JSON.stringify({
            name: updateUser.name,
            email:updateUser.email,
            tel:updateUser.tel
        })
    }
)
    router.push("/ogrenciler")



}


</script>

<style>

</style>

