<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="footer">
      <router-link to="home" class="tab-item">
        <figure class="footer-item">
          <img src="../src/icon/icon-home.png" alt="home" width="29px" height="27px">
          <figcaption>
            首页
          </figcaption>
        </figure>
      </router-link>
      <router-link to="order" class="tab-item">
        <figure class="footer-item">
          <img src="../src/icon/icon-order.png" alt="order" width="29px" height="27px">
          <figcaption>
            订单
          </figcaption>
        </figure>
      </router-link>
      <router-link to="mine" class="tab-item">
        <figure class="footer-item">
          <img src="../src/icon/icon-mine.png" alt="mine" width="29px" height="27px">
          <figcaption>
            我的
          </figcaption>
        </figure>
      </router-link>
    </div>
  </div>
</template>

<script>
  import home from './components/home/home'
  import split from './components/split/split'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      home,
      split
    }
  }

</script>

<style lang="stylus" rel="sheetstyle/stylus">
  .footer
    position: fixed
    bottom: 0px
    display:flex
    width: 100%
    flex: 100
    background: #fff
    & > a
      font-size: 14px
      color: rgb(77, 85, 93)
      &.active
        color: #ff0000
    .tab-item
      flex: 1
      .footer-item
        text-align: center
        width: 100%
        display: inline-block
</style>