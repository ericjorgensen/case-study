<template>
  <div class="product-actions-primary">
    <div class="product-actions-primary__pick-up-in-store-container" v-if="purchasingChannelCode === '0' || purchasingChannelCode === '2'">
      <button class="product-actions-primary__pick-up-in-store-button">Pick up in store</button>
      <p class="hidden-xs product-actions-primary__pick-up-in-store-label">Find in a store</p>
    </div>
    <div class="product-actions-primary__add-to-cart-container" v-if="purchasingChannelCode === '0' || purchasingChannelCode === '1'">
      <button class="product-actions-primary__add-to-cart-button">Add to Cart</button>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'ProductActionsPrimary',
  props: ['purchasingChannelCode']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  .product-actions-primary {
    display: flex;

    @media(max-width: 767px) {
      margin-bottom: $component-spacer;
    }
  }

  .product-actions-primary__pick-up-in-store-container, .product-actions-primary__add-to-cart-container {
    flex-basis: 50%;
    flex-grow: 1;
    margin-left: 5px;
    text-align: center;

    &:first-child {
      margin-left: 0;
    }

    button {
      padding: 7px 0;
      width: 100%;
      font-size: 1em;
      text-transform: uppercase;
      color: #fff;
      font-weight: 300;
      border-radius: $border-radius-standard;
      box-shadow: 0px 1px 2px rgba(100,100,100,.5);
    }
  }

  .product-actions-primary__pick-up-in-store-button {
    background: -moz-linear-gradient(top, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0.82) 9%, rgba(0,0,0,1) 99%, rgba(0,0,0,1) 100%); 
    background: -webkit-linear-gradient(top, rgba(255,255,255,0.8) 0%,rgba(0,0,0,0.82) 9%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%); 
    background: linear-gradient(to bottom, rgba(255,255,255,0.8) 0%,rgba(0,0,0,0.82) 9%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccffffff', endColorstr='#000000',GradientType=0 );
  }
  .product-actions-primary__add-to-cart-button {
    background: -moz-linear-gradient(top, rgba(255,255,255,0.8) 0%, rgba(193,23,19,0.81) 7%, rgba(199,23,19,1) 99%, rgba(199,23,19,1) 100%);
    background: -webkit-linear-gradient(top, rgba(255,255,255,0.8) 0%,rgba(193,23,19,0.81) 7%,rgba(199,23,19,1) 99%,rgba(199,23,19,1) 100%);
    background: linear-gradient(to bottom, rgba(255,255,255,0.8) 0%,rgba(193,23,19,0.81) 7%,rgba(199,23,19,1) 99%,rgba(199,23,19,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccffffff', endColorstr='#c71713',GradientType=0 );
  }

  .product-actions-primary__pick-up-in-store-label {
    margin-top: 5px;
    font-weight: 800;
    text-transform: lowercase;
    font-size: .6em;
    color: #000;
  }

</style>
