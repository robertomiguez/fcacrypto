<template>
  <div class="title">{{ $t("totalinvested") }}</div>
  <div class="result"><TotalInvested/> <FiatCoinSymbol/> </div>
  <div class="title"><ProfitStatus/></div>
  <div class="result"><FiatCoinSymbol/><Profit/> (<ProfitPercent/>%) </div>
  <div class="title">{{ $t("totalvalue") }}</div>
  <div class="result"><FiatCoinSymbol/><TotalValue/></div>
  <div class="title">{{ $t("quantity") }} {{ $t("of") }} <CryptoCoinName/> </div>
  <div class="result"><QuantityCrypto/>  <CryptoCoinSymbol/></div>
  <hr>
  <ViewMore to='report'/>
</template>

<script>
import TotalInvested from './TotalInvested.vue'
import Profit from './Profit.vue'
import TotalValue from './TotalValue.vue'
import CryptoCoinName from './CryptoCoinName.vue'
import QuantityCrypto from './QuantityCrypto.vue'
import ProfitPercent from './ProfitPercent.vue'
import FiatCoinSymbol from './FiatCoinSymbol.vue'
import ProfitStatus from './ProfitStatus.vue'
import ViewMore from './ViewMore.vue'
import CryptoCoinSymbol from './CryptoCoinSymbol.vue'
export default {
  name: 'Results',
  components: {
    TotalInvested,
    Profit,
    TotalValue,
    QuantityCrypto,
    CryptoCoinName,
    ProfitPercent,
    FiatCoinSymbol,
    ProfitStatus,
    ViewMore,
    CryptoCoinSymbol
  }
}
</script>

<style scoped>

.title {
  font-weight: 700;
  font-size: 20px;
  padding: 5px;
}
.result {
  font-size: 20px;
  padding: 5px;
}
hr {
  border-top: 1px dotted gray;
}
.btn {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 40px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition: 0.3s;
  border-radius: 16px;
}

.btn:hover {
  background-color: #3e8e41;
  color: white;
}
</style>
