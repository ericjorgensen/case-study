<template>
  <section class="product-actions-secondary">
    <button id="add-to-registry">Add to Registry</button>
    <button id="add-to-list">Add to List</button>
    <button id="share">Share</button>
  </section>
</template>

<script>
export default {
  name: 'ProductActionsSecondary'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/_variables.scss";

  .product-actions-secondary {
    display: flex;
    align-items: stretch;
    margin-bottom: $component-spacer;
  }

  button {
    flex-grow: 1;
    flex-basis: 33%;
    margin-left: 5px;
    padding: 5px;
    background: $color-gray-light;
    border-radius: $border-radius-standard;
    color: $color-gray-darker;
    font-size: .7em;
    text-transform: uppercase;

    &:first-child {
      margin-left: 0;
    }
  }
</style>
