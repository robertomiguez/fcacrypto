<template>
  <div class='text-primary sentence'>
    <span>
      {{ $t("sentence1") }}
      <span class="lowercasex">
        <FiatCoinSymbol/><PurchaseAmount/> {{ $t("of") }} <span class="capitalize"><CryptoCoinName/></span> <PeriodicityName/> <StartingName/>,
      </span>
    </span>
    <div>
      {{ $t("sentence3") }}
      <span class="lowercases">
        <FiatCoinSymbol/><TotalInvested/> {{ $t("sentence4") }} <FiatCoinSymbol/><TotalValue/>* (<FiatCoinSymbol/><Profit/>* {{ $t("sentence5") }} <ProfitStatus/>),
        {{ $t("sentence6") }} <QuantityCrypto/> <CryptoCoinSymbol/>.
      </span>
    </div>
  </div>

</template>

<script>
import CryptoCoinName from './CryptoCoinName.vue'
import CryptoCoinSymbol from './CryptoCoinSymbol.vue'
import FiatCoinSymbol from './FiatCoinSymbol.vue'
import PeriodicityName from './PeriodicityName.vue'
import Profit from './Profit.vue'
import ProfitStatus from './ProfitStatus.vue'
import PurchaseAmount from './PurchaseAmount.vue'
import QuantityCrypto from './QuantityCrypto.vue'
import StartingName from './StartingName.vue'
import TotalInvested from './TotalInvested.vue'
import TotalValue from './TotalValue.vue'
export default {
  name: 'Sentence',
  components: {
    CryptoCoinName,
    StartingName,
    TotalInvested,
    FiatCoinSymbol,
    PeriodicityName,
    PurchaseAmount,
    Profit,
    TotalValue,
    QuantityCrypto,
    ProfitStatus,
    CryptoCoinSymbol
  }
}
</script>

<style>
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.sentence {
  font-size: 2em;
  font-family: 'Signika', sans-serif;
  padding: 2em 0em 1em 0em;
}
@media screen and (max-width: 600px) {
  .sentence {
    font-size: 1.4em;
    padding: 1em 0.4em;
  }
}
</style>
