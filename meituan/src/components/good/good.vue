<template>
  <div id="app">
    <div class="header">
    </div>
    <div class="seller-tab">
      <router-link to="home" class="seller-item">
        <div class="item">
            商品
        </div>
      </router-link>
      <router-link to="order" class="seller-item">
        <div class="item"> 
            评价
        </div>
      </router-link>
      <router-link to="mine" class="seller-item">
        <div class="item">
            商家
        </div>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="sheetstyle/stylus">
.header
  background: url(https://p0.meituan.net/xianfu/46b360f3b83dc93fb9bddcdd97acd8f35235.jpg@150w_150h_1e_1c);
  height: 80px
  filter: blur(3px)
.seller-tab
  position: fixed
  top: 80px
  display:flex
  width: 100%
  flex: 100
  background: #fff
  height:36px
  vertical-align: middle
  & > a
    font-size: 14px
    color: rgb(77, 85, 93)
    &.active
      color: #ff0000
  .seller-item
    flex: 1
    flex-direction:row
    .item
      text-align: center
      width: 100%
      display: inline-block
      vertical-align: middle
      
</style>
