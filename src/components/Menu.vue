<template>
  <div id="nav">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">DCA Crypto - DEMO VERSION</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="#" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" @click="hideNavBar('Home')">{{ $t("home") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" @click="hideNavBar('Dashboard')">{{ $t("dashboard") }}</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" @click="hideNavBar('Report')">{{ $t("report") }}</router-link>
            </li>
          </ul>
          <Languageswitcher/>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Languageswitcher from './LanguageSwitcher.vue'
export default {
  name: 'Menu',
  components: {
    Languageswitcher
  },
  setup () {
    const router = useRouter()
    const hideNavBar = (name) => {
      router.push({ name: name })
    }
    return { hideNavBar }
  }

}
</script>

<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: lightgrey;
}

#nav a.router-link-exact-active {
  color: white;
  border-radius: .5rem;
}

.languageswitcher {
  text-align: right;
}

</style>
