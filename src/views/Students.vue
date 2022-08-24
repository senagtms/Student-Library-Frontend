<template>

<div>
    <section id="userActions">
      <div class="container">
        <div class="row mb-3">
          <div class="col f-right">
            <router-link class="btn btn-block btn-lg btn-primary my-button" to="/yeniOgrenci"> Yeni Kullanıcı</router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="users">
      <div class="container">
        <div class="row">
          <div class="col">
            <ul class="list-group" >
              <li class="list-group-item user-list-item" v-for="student in users" :key="student._id">
                <div class="user-name">{{student.name}}</div>
                <div class="log-action">
                  <div class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      İşlemler
                    </a>
                    <span class="dropdown-arrow"></span>
                    <ul class="dropdown-menu">
                      <li><router-link :to="'/ogrenciDuzenle/'+ student.id">Düzenle</router-link></li>
                      <li><a href="#" @click="cancel(student.id)">Sil</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</div>
  
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';


  const users = ref([])
  const apiUrl= "http://localhost:5001/users"



  onBeforeMount(async()=>{
      const user = await fetch(apiUrl)
      users.value = await user.json();
  })

  const cancel = async(id)=>{
    const api = "http://localhost:5001/users/"+id;

    const deleteData = fetch(api,
    { 
      method:"DELETE"
    }  )  

      users.value= users.value.filter(item=>{
        return item.id !== id
      })

  }


</script>

<style>

</style>