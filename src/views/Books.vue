<template>
<div>
      <section id="userActions">
      <div class="container">
        <div class="row mb-3">
          <div class="col f-right">
             <router-link class="btn btn-block btn-lg btn-primary my-button" to="/yeniKitap"> Yeni Kitap</router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="users">
      <div class="container">
        <div class="row">
          <div class="col" v-for="book in books" :key="book.id">
            <ul class="list-group">
              <li class="list-group-item user-log-item">
                <div class="title">{{book.title}}</div>
                <div class="author">{{book.author}}</div>
                  <div class="author">{{book.summary}}</div>
                <div class="log-action">
                  <div class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      İşlemler
                    </a>
                    <span class="dropdown-arrow"></span>
                    <ul class="dropdown-menu">
                      <li><a href="#">Düzenle</a></li>
                      <li><a href="#">Sil</a></li>
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
import { onBeforeMount,ref } from 'vue';
const apiUrl= "http://localhost:5001/books"
const books = ref([]);

onBeforeMount(async()=>{

      const booksData= await fetch(apiUrl);
      books.value = await booksData.json()


})


</script>

<style>

</style>