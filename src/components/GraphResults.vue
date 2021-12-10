<template>
  <div class='wrapped'>
    <vue3-chart-js
        :id="chart.id"
        ref="chartRef"
        :type="chart.type"
        :data="chart.data"
        :options="chart.options"
        @before-render="beforeRenderLogic"
    />
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'GraphResults',
  components: {
    Vue3ChartJs
  },
  setup () {
    const store = useStore()
    const chartRef = ref(null)
    let transactionsDateTime = []
    let transactionsPurchase = []
    let transactionsPurchaseAcc = []
    let ds = []

    const cryptoCoinName = computed(() => store.getters.getCryptoCoin.name)
    const transactions = computed(() => store.getters.getTransactions)
    const lastQuoteDate = computed(() => store.getters.getLastQuoteDate)
    const totalValue = computed(() => store.getters.getTotalValue)
    const totalInvested = computed(() => store.getters.getTotalInvested)

    const updateDataChart = () => {
      transactionsDateTime = transactions.value.map(({ dateTime }) => dateTime.slice(0, -6))
      transactionsDateTime.push(lastQuoteDate.value.slice(0, -6))
      transactionsPurchaseAcc = transactions.value.map(({ purchaseAcc }) => purchaseAcc)
      transactionsPurchaseAcc.push(totalValue.value)
      transactionsPurchase = transactions.value.map(({ purchaseAmount }) => purchaseAmount)
      transactionsPurchase.push(totalInvested.value)
      ds = [
        {
          label: 'Return',
          data: transactionsPurchaseAcc,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'Invested',
          data: transactionsPurchase,
          fill: false,
          borderColor: 'rgb(75, 0, 100)',
          tension: 0.1
        }
      ]
    }

    updateDataChart()

    watch([
      cryptoCoinName,
      transactions,
      lastQuoteDate,
      totalValue
    ], () => {
      updateDataChart()
      updateChart()
    })

    const chart = {
      id: 'line',
      type: 'line',
      data: {
        labels: transactionsDateTime,
        datasets: ds
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            ticks: {
              // maxTicksLimit: 100
              // stepSize: 20
            }
          }]
        }
      }
    }

    const updateChart = () => {
      chart.options.plugins.title = {
        text: 'Updated Chart',
        display: true
      }
      chart.data.labels = transactionsDateTime
      chart.data.datasets = ds
      chartRef.value.update(250)
    }

    const beforeRenderLogic = (event) => {
      // ...
      // if(a === b) {
      //  event.preventDefault()
      // }
    }

    return {
      chart,
      chartRef,
      beforeRenderLogic
    }
  }
}
</script>

<style scoped>
.wrapped {
  height: 380px !important;
}
</style>
