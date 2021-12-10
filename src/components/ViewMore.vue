<template>
   <router-link :to='to'>{{ $t("viewmore") }}</router-link>
</template>

<script>
export default {
  name: 'ViewMore',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
