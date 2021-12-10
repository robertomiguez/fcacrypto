
<template>
  <Example :propCoins="coins"/>
</template>

<script>
import { ref } from 'vue'
import Example from '../components/Example.vue'

export default {
  name: 'ViewExample',
  components: {
    Example
  },
  setup () {
    const coins = ref(['bitcoin', 'Ethereum', 'Polkadot'])
    return { coins }
  }
}
</script>
