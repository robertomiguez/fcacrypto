<template>
  <Sentence/>
  <Footer viewMore='dashboard'/>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import Sentence from '../components/Sentence.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Sentence,
    Footer
  },
  setup () {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('loadHistoricalMarket')
      store.dispatch('fillSettings')
    })
  }
}
</script>

<style scoped>
</style>
