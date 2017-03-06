<template>
  <div class="product-features">
    <h2>Product Highlights</h2>
    <ul class="product-features__feature-list">
      <li v-for="feature in productFeatures">
        <icon name="circle"></icon>
        <span v-html="feature"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductFeatures',
  props: ['productFeatures']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../styles/_variables.scss";

  .product-features h2 {
    text-transform: lowercase;
    font-weight: 500;
    font-size: 1.5em;
  }

  .product-features__feature-list {
    color: $color-gray-darker;
    font-size: .7em;
    font-weight: 400;
    list-style-type: none;

    li, strong {
      font-weight: 400;
    }

    li {
      margin-bottom: 5px;

      .fa-icon {
        position: relative;
        bottom: 2px;
        height: 3px;
        width: 3px;
        margin-right: 10px;
      }
    }

  }

</style>
