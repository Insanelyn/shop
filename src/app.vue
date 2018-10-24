<template>
  <div id="itemPage" class="container my-5">
    <div class="row justify-content-around">
      <div class="col-md-11">
        <img src="./assets/logo.png">
      </div>
      <div class="col-md-1">
        <ShoppingCart />
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort by
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Price acending</a>
          <a class="dropdown-item" href="#">Price decending</a>
        </div>
      </div>
    </div>

    <div class="row">
      <Item
      v-for="item of articles"
      :key="item.invId"
      :invId="item.invId"
      :name="item.product_name"
      :image="item.image"
      :price="item.price"
      :category="item.category"

 />
    </div>
  </div>
</div>
</div>
</template>
<script>
import Item from './Item.vue';
import ShoppingCart from './ShoppingCart.vue';

import axios from 'axios';

  export default {
    data() {
      return {
        articles: [],
      }
    },
      created() {
        axios.get(`http://localhost:5000/articles`, {crossdomain:true})
        .then(response => {

          this.articles = response.data


        })
        .catch(e => {
          console.log(e)
        })
    },
    name: 'itemPage',
    computed: {
      forSale() { return this.$store.getters.forSale; },
      inCart() { return this.$store.getters.inCart; },
    },
    components: {
      Item,
      ShoppingCart,
    },
  }

  </script>
  <style>
  .card {
    width: 260px;
    padding: 4px;
    margin: 10px;
  }
  img {
    width: 250px;
    margin-bottom: 10px;
  }
  </style>
