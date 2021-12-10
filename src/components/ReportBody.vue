<template>
  <p>
    <table class="table table-striped w-75 p-3">
      <thead>
        <tr>
          <th>{{ $t("day") }}</th>
          <th>{{ $t("date") }}</th>
          <th>{{ $t("price") }}</th>
          <th>{{ $t("invested") }}</th>
          <th>{{ $t("qtdacc") }} <CryptoCoinSymbol/></th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="(transaction, index) in transactions" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ transaction.dateTime.slice(0,8) }}</td>
          <td><FiatCoinSymbol/>{{ transaction.price }}</td>
          <td>{{ transaction.quantityCrypto.toFixed(8) }} (<FiatCoinSymbol/><PurchaseAmount/>)</td>
          <td>{{ transaction.quantityCryptoAcc.toFixed(8) }} (<FiatCoinSymbol/>{{ transaction.purchaseAcc }})</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="table-primary">
          <td></td>
          <td class="now">{{ $t("now") }}</td>
          <td class="now"><FiatCoinSymbol/><LastQuoteValue/></td>
          <td class="now"><FiatCoinSymbol/><TotalInvested/></td>
          <td class="now"><QuantityCrypto/> (<FiatCoinSymbol/><TotalValue/>)</td>
        </tr>
<!--
        <tr>
          <td></td>
          <td class="now"><LastQuoteDate/></td>
          <td class="now"><FiatCoinSymbol/><LastQuoteValue/></td>
          <td class="now"><FiatCoinSymbol/><TotalInvested/></td>
          <td class="now"><FiatCoinSymbol/><TotalValue/></td>
          <td class="now"><QuantityCrypto/></td>
          <td class="now"><QuantityCrypto/></td>
        </tr>
 -->
      </tfoot>
    </table>
  </p>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PurchaseAmount from './PurchaseAmount.vue'
import TotalInvested from './TotalInvested.vue'
import QuantityCrypto from './QuantityCrypto.vue'
import TotalValue from './TotalValue.vue'
// import LastQuoteDate from './LastQuoteDate.vue'
import LastQuoteValue from './LastQuoteValue.vue'
import FiatCoinSymbol from './FiatCoinSymbol.vue'
import CryptoCoinSymbol from './CryptoCoinSymbol.vue'
export default {
  name: 'ReportBody',
  components: {
    PurchaseAmount,
    TotalInvested,
    QuantityCrypto,
    TotalValue,
    // LastQuoteDate,
    LastQuoteValue,
    FiatCoinSymbol,
    CryptoCoinSymbol
  },
  setup () {
    const store = useStore()
    const transactions = computed(() => store.getters.getTransactions)
    return { transactions }
  }
}
</script>

<style>
table {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  margin: 0 auto;
}

table thead tr th{
}

table th, table td {
}

table th {
}

table td {
  text-align: center;
}

.now {
  font-weight: 500;
  font-weight: bolder;
}

@media screen and (max-width: 600px) {
  table {
    font-size: .70rem;
  }
  table td {
  }
}

</style>
