<template>
  <section class="product-promotions">
    <ul class="fa">
      <li v-for="promotion in productPromotions">
        <icon name="tag"></icon>
        {{ promotion.Description[0].shortDescription }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ProductPromotions',
  props: ['productPromotions']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  .fa-icon {
    position: relative;
    top: 4px;
    margin-right: 5px;
  }

  .product-promotions {
    margin-bottom: $component-spacer;
    color: $color-target-red;
    padding: 12px 0;
    border-top: solid 1px $color-gray-medium;
    border-bottom: solid 1px $color-gray-medium;
    font-size: .8em;

    @media(min-width: 768px) {
      font-size: 1em;
    }
  }

</style>
