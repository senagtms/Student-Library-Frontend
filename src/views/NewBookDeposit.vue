<template>
  
    <section id="userAddForm">
      <div class="container">
        <div class="row">
          <div class="col">
            <form>
              <div class="form-group" >
                <label>Öğrenci Seç</label>
                <select class="custom-select" v-model="newDepositBook.userid">
                  <option>Open this select menu</option>
                  <option :value="item.id"  v-for="item in depositUser" :key="item.id">{{item.name}}</option>

                </select>
              </div>
              <div class="form-group">
                <label>Kitap Seç</label>
                <select class="custom-select" v-model="newDepositBook.bookid">
                  <option selected>Open this select menu</option>
                  <option :value="item.id" v-for="item in depositBook" :key="item.id">{{item.title}}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Kitabın Geleceği Tarih</label>
                <input type="date" class="form-control" v-model="newDepositBook.date" />
              </div>

              <button type="submit" class="btn btn-primary" @click.prevent="newUserDeposit">Kaydet</button>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>

import { onBeforeMount,ref,reactive} from 'vue';
import { useRouter } from 'vue-router';

const apiUrl = "http://localhost:5001/deposit";
const apiUrlStudent = "http://localhost:5001/users";
const apiUrlBook = "http://localhost:5001/books";


const depositBook= ref([]);
const depositUser=ref([]);

const router = useRouter();

onBeforeMount(async()=>{
  const data = await fetch(apiUrlStudent);
  depositUser.value = await data.json()
    const data2 = await fetch(apiUrlBook);
  depositBook.value = await data2.json();
})




const  newDepositBook= reactive({
    userid:'',
    bookid:'',
    date:''
})

const newUserDeposit = async()=>{
    const data =  await fetch(apiUrl, {
      method:'POST',
      headers:{"Content-Type":'application/json'},
      body:JSON.stringify({
          userid: newDepositBook.userid,
          bookid: newDepositBook.bookid,
          date: newDepositBook.date
        })
    });
        router.push("/");
}
</script>

<style>

</style>