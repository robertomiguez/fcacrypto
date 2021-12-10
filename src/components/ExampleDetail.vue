<template>
  <div>{{ coin }}</div>
</template>

<script>
export default {
  name: 'ExampleDetail',
  props: {
    coin: {
      type: String,
      required: true
    }
  }

}
</script>

<style>

</style>
