<template>

  <div class="card-group m-3">
    <div class="card border-primary mt-3">
      <div class="card-body text-primary">
        <Settings/>
      </div>
    </div>
    <div class="card border-primary mt-3">
      <div class="card-body text-primary">
        <TextResults/>
      </div>
    </div>
    <div class="card border-primary mt-3" style="flex-grow: 2">
      <div class="card-body text-primary">
        <GraphResults/>
      </div>
    </div>
  </div>
  <Footer/>

</template>

<script>
import GraphResults from '../components/GraphResults.vue'
import Settings from '../components/Settings.vue'
import TextResults from '../components/TextResults.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Settings, TextResults, GraphResults, Footer },
  name: 'Dashboard'
}
</script>

<style scoped>
</style>
