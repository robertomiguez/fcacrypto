<template>
  <report-header/>
  <report-body/>
  <Footer/>
</template>

<script>
import ReportHeader from '../components/Sentence.vue'
import ReportBody from '../components/ReportBody.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Report',
  components: { ReportHeader, ReportBody, Footer }
}
</script>

<style>

</style>
