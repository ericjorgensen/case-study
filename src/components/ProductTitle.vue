<template>
  <div class="product-title">
    <h1>{{ productTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductTitle',
  props: ['productTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin-top: 0;
    text-align: center;
    font-size: 1em;
    font-weight: 100;
  }
</style>
