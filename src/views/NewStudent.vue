<template>
     <section id="userAddForm">
      <div class="container">
        <div class="row">
          <div class="col">
            <form >
              <div class="form-group">
                <label>İsim</label>
                <input type="text" class="form-control" v-model="newuser.name"/>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="newuser.email" />
              </div>
              <div class="form-group">
                <label>Telefon</label>
                <input type="text" class="form-control" v-model="newuser.tel" />
              </div>

              <button type="submit" class="btn btn-primary" @click.prevent="createUser">Kaydet</button>
            </form>
          </div>
        </div>
      </div>
    </section>

</template>

<script setup>

import {reactive} from 'vue'
import { useRouter } from 'vue-router'

const apiUrl =  "http://localhost:5001/createUsers"
const router = new useRouter();

  const newuser = reactive({
        name:'',
        email:'',
        tel:''

      })

const createUser = async()=>{
      await fetch(apiUrl,
    { method:'POST',
    headers:{"Content-Type":'application/json'},
    body:JSON.stringify({
      name:newuser.name,
      email:newuser.email,
      tel:newuser.tel
        })
    });
   
   router.push({name:'ogrenciler'})
}




</script>

<style>

</style>