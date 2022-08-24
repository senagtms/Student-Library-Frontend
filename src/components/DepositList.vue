<template>
<div>
      <section id="userActions">
      <div class="container">
        <div class="row mb-3">
          <div class="col f-right">
            <router-link class="btn btn-block btn-lg btn-primary my-button" to="/kitapTeslim">Kitap Teslim</router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="userLogs">
      <div class="container">
        <div class="row">
          <div class="col" >
            <ul class="list-group" >
              <li class="list-group-item user-log-item"  v-for="item in depositList" :key="item.id">
                <div class="user-name">{{item.name}}</div>
                <div class="book-name">{{item.title}}</div>
                <div class="log-time">
                  <div class="date">{{item.expiretime}}</div>
                </div>
                <div class="log-action">
                  <div class="dropdown" v-if="item.status == 0">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      İşlemler
                    </a>
                    <span class="dropdown-arrow"></span>
                    <ul class="dropdown-menu">
                      <li><a href="#" @click="getDeposit(item.depositid)">Teslim Al</a></li>
                      <li><a href="#" @click="cancel(item.depositid)">İptal</a></li>
                    </ul>
                  </div>
                  <div v-else> Teslim edildi</div>
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

const apiUrl = "http://localhost:5001/deposit";

const depositList= ref([]);

onBeforeMount(async()=>{
      const data = await fetch(apiUrl)
      depositList.value = await data.json();
})
 
 const getDeposit = async(id)=>{
    const api = "http://localhost:5001/deposit/"+id;
    const data = await fetch(api,
    {
        method:"PATCH",
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify({
              status : 1,
        }) 
    });

    const currentData = depositList.value.find((item)=> item.depositid === id);
    currentData.status = 1;

 }

    const cancel= async(id)=>{

      const api = "http://localhost:5001/deposit/"+id;
      const data = await fetch(api,
        {
        method:"DELETE"
        })

        depositList.value= depositList.value.filter((item)=>{
          return item.id !== id
        })
    



    }



</script>

<style>

</style>