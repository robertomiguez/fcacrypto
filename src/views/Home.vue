<template>
  <div class="flex-container">
    <div class="flex-item-side"></div>
    <div class="text-primary fca-description ">{{ $t("fcadescription") }}</div>
    <div class="flex-item-side"></div>
    <div class="flex-item-left"><img class="dollar-btc" src="@/assets/dollar-btc.png"></div>
    <div class="flex-item-right">
      <button type="button" class="btn btn-outline-primary">
        <router-link :to="{ name: 'Dashboard'}">
          {{ $t("starthere") }}
        </router-link>
      </button>
    </div>
    <div class="flex-item-center"><Sentence/></div>
    <div class="flex-item-center"><Footer/></div>
  </div>
</template>

<script>
// import { onMounted } from 'vue'
// import { useStore } from 'vuex'

import Sentence from '../components/Sentence.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Sentence,
    Footer
  },
  setup () {
    /*     const store = useStore()
    onMounted(async () => {
      await store.dispatch('loadHistoricalMarket')
      store.dispatch('fillSettings')
    })
 */
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.flex-item-center {
  flex: 1 100%;
}

.flex-item-right {
  flex: 1;
  text-align: left;
}

.flex-item-left {
  flex: 1.8;
  text-align: right;
}

.flex-item-side {
  flex: 1 25%;
}

.fca-description {
  font-size: 1.5em;
  font-family: 'Signika', sans-serif;
  flex: 1 50%;
  padding: 1em 0;
}
.dollar-btc {
  width: 576px;
  height: 387px;
}
@media screen and (max-width: 600px) {
  .flex-item-right, .flex-item-left {
    flex: 100%;
    text-align: center;
    padding: 0.4em;
  }
  .flex-item-side {
    flex: 0%;
  }
  .fca-description {
    flex: 100%;
    font-size: 1.1em;
  }
  .dollar-btc {
    width: 228px;
    height: 141px;
  }
}

</style>
