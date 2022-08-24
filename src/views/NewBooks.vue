<template>
  
    <section id="userAddForm">
      <div class="container">
        <div class="row">
          <div class="col">
            <form >
              <div class="form-group">
                <label>Başlığı</label>
                <input type="text" class="form-control"  v-model="newbook.title"/>
              </div>
              <div class="form-group">
                <label>Yazarı</label>
                <input type="text" class="form-control" v-model="newbook.author"/>
              </div>
              <div class="form-group">
                <label>Özeti</label>
                <textarea v-model="newbook.summary"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary" @click.prevent="createBooks" >Kaydet</button>
            </form>
          </div>
        </div>
      </div>
    </section>

</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const apiUrl = "http://localhost:5001/createBooks";

const router = new useRouter();

const newbook = reactive({
    title: '',
    author: '',
    summary: ''
})
const createBooks = async()=>{

    await fetch(apiUrl, 
    {
        method:"POST",
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify({
        title : newbook.title,
        author: newbook.author,
        summary: newbook.summary}) 
        
        }
        )

  router.push({name:'kitaplar'})
    
}
</script>

<style>

</style>