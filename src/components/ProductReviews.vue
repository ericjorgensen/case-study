<template>
  <div class="product-reviews">
    <span v-for="n in Number(productReviews.consolidatedOverallRating)" class="product-reviews__stars"><icon name="star" ></icon></span>
    <strong class="product-reviews__label">overall</strong> <a href="#" class="product-reviews__review-count"><strong class="product-reviews__label">view all {{ productReviews.totalReviews }} reviews</strong></a>
    <div class="product-reviews__reviews-container">
      <div class="row">
        <div class="col-xs-6">
          <h3 class="product-reviews__review-heading">Pro</h3>
          <p class="product-reviews__review-heading-description">Most helpful 4-5 star review</p>
        </div>
        <div class="col-xs-6">
          <h3 class="product-reviews__review-heading">Con</h3>
          <p class="product-reviews__review-heading-description">Most helpful 1-2 star review</p>
        </div>
      </div>
      <hr>
    </div>  
    <!-- {{ mostHelpfulNegativeReview }}
    {{ mostHelpfulPositiveReview }} -->
  </div>
</template>

<script>
export default {
  name: 'ProductReviews',
  props: ['productReviews'],
  computed: {
    mostHelpfulNegativeReview: function () {
      return this.getMostHelpfulNegativeReview(this.productReviews.Reviews, 'helpfulVotes', 'neg')
    },
    mostHelpfulPositiveReview: function () {
      return this.getMostHelpfulPositiveReview(this.productReviews.Reviews, 'helpfulVotes', 'pos')
    }
  },
  methods: {
    getMostHelpfulReview: function (arr, prop, posOrNeg) {
      var max
      var comparisonValues = posOrNeg === 'pos' ? [4, 5] : [1, 2]
      for (var i = 0; i < arr.length; i++) {
        if ((!max || parseInt(arr[i][prop]) > parseInt(max[prop])) && (parseInt(arr[i]['overallRating']) === comparisonValues[0] || parseInt(arr[i]['overallRating']) === comparisonValues[1])) {
          max = arr[i]
        }
      }
      return max
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../styles/_variables.scss";

  .product-reviews {
    margin-top: $component-spacer;
  }

  .product-reviews__stars {
    color: $color-target-red;

    .fa-icon {
      vertical-align: bottom;
    }
  }

  .product-reviews__label {
    font-size: .8em;
  }

  .product-reviews__review-count {
    color: #000;
    float: right;
    text-decoration: none;
  }

  .product-reviews__reviews-container {
    margin-top: $component-spacer / 2;
    padding: 10px 20px;
    background: $color-gray-light;
  }

  .product-reviews__review-heading {
    margin: 0;
    font-weight: 500;
    font-size: .8em;
    text-transform: uppercase;
  }

  .product-reviews__review-heading-description {
    margin: $component-spacer / 4 0;
    color: $color-gray-darker;
    font-size: .6em;
  }


</style>
