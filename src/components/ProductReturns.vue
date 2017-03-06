<template>
  <div class="product-returns">
    <span class="product-returns__label">Returns</span>
    <p class="product-returns__text">This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.</p>
  </div>
</template>

<script>
export default {
  name: 'ProductReturns'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/_variables.scss";
  .product-returns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: $component-spacer;
  }

  .product-returns__label {
    margin-right: 15px;
    text-transform: lowercase;
  }

  .product-returns__text {
    padding-left: 15px;
    border-left: solid 1px $color-gray-medium;
    font-size: .2em;
  }

</style>
