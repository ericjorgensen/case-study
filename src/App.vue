<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <product-title v-bind:productTitle="item.CatalogEntryView[0].title"></product-title>
          <product-images v-bind:productImages="item.CatalogEntryView[0].Images[0]"></product-images>
          <product-reviews v-bind:productReviews="item.CatalogEntryView[0].CustomerReview[0]" class="hidden-xs"></product-reviews>
        </div>
        <div class="col-xs-12 col-sm-6">
          <product-price v-bind:productPrice="item.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue"></product-price>
          <product-promotions v-bind:productPromotions="item.CatalogEntryView[0].Promotions"></product-promotions>
          <product-quantity></product-quantity>
          <product-actions-primary v-bind:purchasingChannelCode="item.CatalogEntryView[0].purchasingChannelCode"></product-actions-primary>
          <product-returns></product-returns>
          <product-actions-secondary></product-actions-secondary>
          <product-features v-bind:productFeatures="item.CatalogEntryView[0].ItemDescription[0].features"></product-features>
          <product-reviews v-bind:productReviews="item.CatalogEntryView[0].CustomerReview[0]" class="visible-xs"></product-reviews>
        </div>
      </div>
    </div>      
  </div>
</template>

<script>
import ProductTitle from './components/ProductTitle'
import ProductImages from './components/ProductImages'
import ProductReviews from './components/ProductReviews'
import ProductPrice from './components/ProductPrice'
import ProductPromotions from './components/ProductPromotions'
import ProductQuantity from './components/ProductQuantity'
import ProductActionsPrimary from './components/ProductActionsPrimary'
import ProductReturns from './components/ProductReturns'
import ProductActionsSecondary from './components/ProductActionsSecondary'
import ProductFeatures from './components/ProductFeatures'

export default {
  name: 'app',
  components: { ProductTitle, ProductImages, ProductReviews, ProductPrice, ProductPromotions, ProductQuantity, ProductActionsPrimary, ProductReturns, ProductActionsSecondary, ProductFeatures },
  data: function () {
    return {
      item: require('./data/data.json')
    }
  },
  mounted: function () {
  }
}
</script>

<style src="./styles/styles.scss" lang="scss"></style>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}


</style>
