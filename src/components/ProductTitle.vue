<template>
  <section class="product-title">
    <h1>{{ productTitle }}</h1>
  </section>
</template>

<script>
export default {
  name: 'ProductTitle',
  props: ['productTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  h1 {
    margin-top: 0;
    margin-bottom: $component-spacer;
    text-align: center;
    font-size: 1.25m;
    font-weight: 100;

    @media(min-width: 768px) {
      font-size: 1.5em;
    }
  }
</style>
