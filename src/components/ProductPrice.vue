<template>
  <section class="product-price">
    <strong>{{ productPrice }}</strong> <span class="product-price__description">Online Price</span>
  </section>
</template>

<script>
export default {
  name: 'ProductPrice',
  props: ['productPrice']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../styles/_variables.scss";

.product-price {
  margin-top: $component-spacer / 2;

  @media(min-width: 768px) {
    margin-top: 0;
  }
}

strong {
  font-size: 1.2em;
}

.product-price__description {
  text-transform: lowercase;
  color: $color-gray-dark;  
  font-size: .5em;
}

.product-price {
  padding-bottom: 30px;
}

</style>
