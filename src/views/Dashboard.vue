<template>

  <div class="row">
    <div class="column column-1">
      <div class="card">
        <TextResults/>
      </div>
    </div>
    <div class="column column-1">
      <div class="card">
        <Settings/>
      </div>
    </div>
    <div class="column column-2">
      <div class="card">
        <GraphResults/>
      </div>
    </div>
  </div>
  <Footer viewMore='report'/>

</template>

<script>
import GraphResults from '../components/GraphResults.vue'
import Settings from '../components/Settings.vue'
import TextResults from '../components/TextResults.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Settings, TextResults, GraphResults, Footer },
  name: 'Dashboard'
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Float four columns side by side */
.row {
  padding: 0 5em;
}
.column {
  float: left;
  padding: 0 20px;
}

.column-1 {
  width: 25%;
}

.column-2 {
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    display: block;
    margin-bottom: 20px;
  }
  .column-1 {
    width: 100%;
  }
  .column-2 {
    width: 100%;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px 6px;
  text-align: center;
  background-color: #f8f7f7;
  height: 450px;
}
</style>
