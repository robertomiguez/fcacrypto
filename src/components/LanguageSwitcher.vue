
<template>
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <img :src="imgUrl"> {{ language }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#" @click="onClick('en')"><img src="@/assets/uk.png"> english</a></li>
      <li><a class="dropdown-item" href="#" @click="onClick('pt')"><img src="@/assets/br.png"> portugues</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</template>

<script>
import { useI18n } from 'vue3-i18n'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const i18n = useI18n()
    const store = useStore()

    const onClick = async lang => {
      i18n.setLocale(lang)
      store.state.fiatCoin = lang === 'en' ? { id: 'USD', symbol: '$', name: 'Dollar' } : { id: 'BRL', symbol: 'R$', name: 'Real' }
      store.state.periodicity = { id: 1, name: lang === 'en' ? 'daily' : 'diariamente' }
      store.state.starting = { id: 30, name: lang === 'en' ? 'one month ago' : 'um mês atrás' }
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
    return { onClick, language, imgUrl }
  }
}
</script>

<style>
img {
  width: 32px;
  height: 18px;
  vertical-align: middle;
  padding-left: 5px;
}
</style>
