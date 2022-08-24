<template>
    <header>
      <div class="row demo-row">
        <div class="col">
          <nav
            class="navbar navbar-inverse navbar-embossed navbar-expand-lg"
            role="navigation"
          >
          <router-link class="navbar-brand" to="/">Kütüphane</router-link>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbar-collapse-01"
            ></button>
            <div class="collapse navbar-collapse" id="navbar-collapse-01">
              <ul class="nav navbar-nav mr-auto">
                <li>
                  <router-link  to="/">Anasayfa</router-link>
                </li>
                <li>
                  <router-link to="/ogrenciler">Öğrenciler</router-link>
                </li>
                <li>
                  <router-link to="/kitaplar">Kitaplar</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>