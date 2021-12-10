<template>
    <Disclaimer/>
    <hr>
    <div class='footer'>
      <div class='powered'>{{ $t("datafrom") }}
      <router-link :to="{ name: 'coingecko'}">
          {{ provider }}
        </router-link>
      </div>
      <div class='more'><ViewMore :to='viewMore'/></div>
    </div>
</template>

<script>
import { computed } from 'vue'

import ViewMore from '../components/ViewMore.vue'
import Disclaimer from '../components/Disclaimer.vue'

export default {
  name: 'Footer',
  components: {
    ViewMore,
    Disclaimer
  },
  props: {
    viewMore: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const provider = computed(() => process.env.VUE_APP_PROVIDER)
    return { provider }
  }
}
</script>

<style scoped>
hr {
  border-top: 1px dotted gray;
  margin: 3em 0.5em 0 0.5em;
}
.footer {
  font-size: 0.9em;
  font-family: 'Inder', sans-serif;
  line-height: 1.5em;
  color: #666;
  padding: 1em 1em 0 1em;
  }
.powered {
  float: left;
  }
.more {
  float: right;
}
</style>
