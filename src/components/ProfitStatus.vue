<template>
  {{ profitStatus }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue3-i18n'
export default {
  name: 'profitStatus',
  setup () {
    const store = useStore()
    const { t } = useI18n()

    const profitStatus = computed(() => store.getters.getProfit < 0 ? t('losses') : t('profit'))
    return { profitStatus }
  }
}
</script>

<style>

</style>
