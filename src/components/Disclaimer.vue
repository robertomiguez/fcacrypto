<template>
    <div class='disclaimer'>{{ $t("disclaimer") }}
      <div>{{ $t("disclaimer2") }}</div>
    </div>
</template>

<script>
export default {
  name: 'Diclaimer'
}
</script>

<style>
.disclaimer {
  font-size: 0.7em;
  font-family: 'Inder';
  line-height: 1.5em;
  margin: 0px 17%;
  color: #666;
  text-align: left;
  padding: 3em 0 0 0;
}

@media screen and (max-width: 480px) {
  .disclaimer {
    margin: 0 0 1px 0;
    padding: 1em 1em 0 1em;
  }
}

</style>
