
<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <img :src="imgUrl" class="flag"> {{ language }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#" @click="onClick('en')"><img src="@/assets/uk.png" class="flag"> english</a></li>
      <li><a class="dropdown-item" href="#" @click="onClick('pt')"><img src="@/assets/br.png" class="flag"> portugues</a></li>
    </ul>
  </div>
</template>

<script>
import { useI18n } from 'vue3-i18n'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const i18n = useI18n()
    const store = useStore()

    const onClick = async lang => {
      i18n.setLocale(lang)
      store.state.cryptoCoin = { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' }
      store.state.fiatCoin = lang === 'en' ? { id: 'USD', symbol: '$', name: 'Dollar' } : { id: 'BRL', symbol: 'R$', name: 'Real' }
      store.state.periodicity = { id: 7, name: lang === 'en' ? 'weekly' : 'semanalmente' }
      store.state.starting = { id: 183, name: lang === 'en' ? 'six months ago' : 'seis meses atrás' }
      Promise.all([
        store.dispatch('loadFiatCoins', lang),
        store.dispatch('loadPeriodicities', lang),
        store.dispatch('loadStartings', lang)
      ])
      await store.dispatch('loadHistoricalMarket')
      store.dispatch('fillSettings')
    }
    const language = computed(() => {
      return i18n.getLocale() === 'en' ? 'english' : 'portugues'
    })
    const imgUrl = computed(() => {
      const pic = i18n.getLocale() === 'en' ? 'uk' : 'br'
      return require(`../assets/${pic}.png`)
    })

    onMounted(onClick(navigator.language.slice(0, 2)))

    return { onClick, language, imgUrl }
  }
}
</script>

<style scoped>
.flag {
  width: 32px;
  height: 18px;
  vertical-align: middle;
  padding-left: 5px;
}
</style>
