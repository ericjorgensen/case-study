<template>
  <section class="product-images">
    <slick ref="slick" class="product-images__main-slider" :options="mainSliderOptions">
      <template v-for="image in productImages.PrimaryImage">
        <img :src="image.image">
      </template>
      <template v-for="image in productImages.AlternateImages">
        <img :src="image.image">
      </template>
    </slick>
    <button class="product-images__enlarge-image" @click="showModal = true">
      <icon name="search-plus"></icon> <span class="product-images__enlarge-image-text">view larger</span>
    </button>  
    <div class="product-images__nav-slider-container">
      <button class="product-images__nav-slider__prev-arrow slick-arrow"><icon name="angle-left"></icon></button>
      <slick ref="slick" class="product-images__nav-slider" :options="navSliderOptions">
        <template v-for="image in productImages.PrimaryImage">
          <img :src="image.image" :height="50" :width="50">
        </template>
        <template v-for="image in productImages.AlternateImages">
          <img :src="image.image" :height="50" :width="50">
        </template>
      </slick>
      <button class="product-images__nav-slider__next-arrow slick-arrow"><icon name="angle-right"></icon></button>
    </div>  
    <modal v-if="showModal" @close="showModal = false">
      <div class="product-images__modal-slider-container" slot="body">
        <button class="product-images__modal-slider__prev-arrow slick-arrow"><icon name="angle-left"></icon></button>
        <slick ref="slick" class="product-images__modal-slider" :options="modalSliderOptions">
          <template v-for="image in productImages.PrimaryImage">
            <img :src="image.image">
          </template>
          <template v-for="image in productImages.AlternateImages">
            <img :src="image.image">
          </template>
        </slick>
        <button class="product-images__modal-slider__next-arrow slick-arrow"><icon name="angle-right"></icon></button>
      </div>
    </modal>
  </section>
</template>

<script>
import Modal from './ProductModal'
import Slick from 'vue-slick'

export default {
  components: { Slick, Modal },
  data () {
    return {
      mainSliderOptions: {
        slidesToShow: 1,
        arrows: false
      },
      navSliderOptions: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
        asNavFor: '.product-images__main-slider',
        focusOnSelect: true,
        arrows: true,
        variableWidth: true,
        prevArrow: '.product-images__nav-slider__prev-arrow',
        nextArrow: '.product-images__nav-slider__next-arrow'
      },
      modalSliderOptions: {
        slidesToShow: 1,
        arrows: true,
        prevArrow: '.product-images__modal-slider__prev-arrow',
        nextArrow: '.product-images__modal-slider__next-arrow'
      },
      showModal: false
    }
  },
  name: 'ProductImages',
  props: ['productImages'],
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import "../styles/_variables.scss";
  @import "../styles/_slick.scss";

  .product-images__enlarge-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto $component-spacer auto;
    background: transparent;
    color: $color-gray-dark;

    .fa-icon {
      margin-right: 5px;
      height: 24px;
      width: 24px;
    }
  }

  .product-images__enlarge-image-text {
    
  }

  // Overrides go here

  .product-images__main-slider {
    margin-bottom: 2 * $component-spacer;
  } 

  .product-images__nav-slider-container, .product-images__modal-slider-container {
    display: flex;
    justify-content: center;

    .slick-arrow {
      color: $color-gray-medium;
      background: transparent;

      &:focus, &:active {
        border: none;
        outline: none;
      }

      .fa-icon {
        width: 30px;
        height: 30px;
      }
    }

  }

  .product-images__nav-slider {
    flex-basis: auto;
    width: 60%;

    @media(min-width: 960px) {
      width: 40%;
    }


    .slick-current {
      border: solid 1px $color-gray-dark;
      border-radius: $border-radius-standard;
    }

    .slick-slide {
      margin: 0 5px;

      &:focus, &:active {
        outline: none!important;
      }
    }
  }

  .product-images__modal-slider-container {
    justify-content: space-between;
  }

  .product-images__modal-slider {
    width: 80%;
  }
</style>
