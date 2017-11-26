<template>
  <div>
    <p v-show="loadingStatus">加载中...</p>
    <button @click="getAllProducts()">点击加载所有商品</button>
    <ul>
      <li v-for="p in allProducts">
        {{ p.title }} - {{ p.price }}
        <!--<br>-->
        <!--<button-->
          <!--:disabled="!p.inventory"-->
          <!--@click="addToCart(p)">-->
          <!--Add to cart-->
        <!--</button>-->
      </li>
    </ul>
    <p>Total: {{ total }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Example',
    computed: {
      ...mapGetters('example', [
        // 将this.loadingStatus映射为this.$store.getters.loadingStatus
        'loadingStatus',
        'allProducts'
      ]),
      total () {
        console.log(this.allProducts)
        return this.allProducts.reduce((total, p) => total + p.price, 0)
      }
    },
    methods: {
      getAllProducts () {
        this.$store.dispatch('example/getAllProducts')
      }
    }
  }
</script>
