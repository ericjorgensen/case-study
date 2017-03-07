<template>
  <section class="product-quantity">
    <span class="product-quantity__quantity-label">Quantity:</span>
    <button class="qty-decrease" v-on:click="decreaseQuantity"><icon name="minus-circle"></icon></button> <input id="product-quantity-value" type="text" v-model="productQuantityValue"> <button class="qty-increase" v-on:click="increaseQuantity"><icon name="plus-circle"></icon></button>
  </section>
</template>

<script>
export default {
  name: 'ProductQuantity',
  props: ['productQuantity'],
  data: function () {
    return {
      productQuantityValue: 1
    }
  },
  methods: {
    increaseQuantity: function () {
      this.productQuantityValue++
    },
    decreaseQuantity: function () {
      if (this.productQuantityValue !== 0) {
        this.productQuantityValue--
      }
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  .product-quantity {
    display: inline-flex;
    align-items: center;
    margin-bottom: $component-spacer;
    padding: 5px 10px;
    border: solid 1px $color-gray-medium;
    border-radius: $border-radius-standard;
  }

  .product-quantity__quantity-label {
    margin-right: 50px;
    font-size: .9em;
    text-transform: lowercase;
  }

  input {
    display: inline-block;
    max-width: 50px;
    text-align: center;
    border: none;
    font-weight: 800;
    font-size: 1.25em;
    color: #000;
  }

  button {
    padding: 0;
    position: relative;
    // Fixes weird overlap bug caused by active state outline
    z-index: 999;
    color: $color-gray-medium;
    background: transparent;
    border: none;

    .fa-icon {
      height: 25px;
      width: 25px;
    }

    &:hover {
      opacity: .8;
    }
  }

</style>
