<template>
  <div id="app">
    <div class="banner">
      <img src="../../icon/banner.png" alt="banner" width="100%" height="140px">
    </div>
    <div class="item">
      <router-link to="good" class="tab-item">
        <figure class="item-list">
          <img src="../../icon/icon-food.png" alt="home" width="48px" height="48px">
          <figcaption>
            美食
          </figcaption>
        </figure>
      </router-link>
      <router-link to="good" class="tab-item">
        <figure class="item-list">
          <img src="../../icon/icon-shopcart.png" alt="home" width="48px" height="48px">
          <figcaption>
            美团超市
          </figcaption>
        </figure>
      </router-link>
      <router-link to="good" class="tab-item">
        <figure class="item-list">
          <img src="../../icon/icon-fruit.png" alt="home" width="48px" height="48px">
          <figcaption>
            生鲜果蔬
          </figcaption>
        </figure>
      </router-link>
      <router-link to="good" class="tab-item">
        <figure class="item-list">
          <img src="../../icon/icon-drink.png" alt="home" width="48px" height="48px">
          <figcaption>
            甜点饮品
          </figcaption>
        </figure>
      </router-link>
    </div>
    <div class="item">
      <router-link to="good" class="tab-item">
        <figure class="item-list">
          <img src="../../icon/icon-super.png" alt="home" width="48px" height="48px">
          <figcaption>
            正餐优选
          </figcaption>
        </figure>
      </router-link>
      <router-link to="good" class="tab-item">
        <figure class="item-list">
          <img src="../../icon/icon-send.png" alt="home" width="48px" height="48px">
          <figcaption>
            美团专送
          </figcaption>
        </figure>
      </router-link>
      <router-link to="good" class="tab-item">
        <figure class="item-list">
          <img src="../../icon/icon-homefood.png" alt="home" width="48px" height="48px">
          <figcaption>
            家常菜
          </figcaption>
        </figure>
      </router-link>
      <router-link to="good" class="tab-item">
        <figure class="item-list">
          <img src="../../icon/icon-snack.png" alt="home" width="48px" height="48px">
          <figcaption>
            小吃馆
          </figcaption>
        </figure>
      </router-link>
    </div>
    <split></split>
    <quality></quality>
    <split></split>
    <sell></sell>
  </div>
</template>

<script>
  import split from '../split/split'
  import quality from '../quality/quality'
  import sell from '../sell/sell'

  export default {
    components: {
      split,
      quality,
      sell
    }
  }

</script>

<style lang="stylus" rel="sheetstyle/stylus">
  .item
    display: flex
    margin: 10px 0 15px 0
    width: 100%
    text-align: center
    & > a
      font-size: 14px
      color: rgb(77, 85, 93)
      text-decoration: none
    .tab-item
      flex: 1
    
      figcaption
        padding-top: 5px
        color: #666
</style>
// .item-list
      // text-align: center
      // flex: 1