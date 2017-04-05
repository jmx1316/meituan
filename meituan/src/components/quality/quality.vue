<template>
  <div id="app">
    <div class="title">
      <div class="line"></div>
      <div class="text">品质专区</div>
      <div class="line"></div>
    </div>
    <div class="quality-item">
      <router-link to="order" class="tab-item">
        <figure class="quality-item-list">
          <img src="../../icon/seller.png" alt="seller" width="48px" height="48px">
          <figcaption>
            品牌商家
          </figcaption>
        </figure>
      </router-link>
      <router-link to="order" class="tab-item">
        <figure class="quality-item-list">
          <img src="../../icon/remark.png" alt="remark" width="48px" height="48px">
          <figcaption>
            精品套餐
          </figcaption>
        </figure>
      </router-link>
      <router-link to="order" class="tab-item">
        <figure class="quality-item-list">
          <img src="../../icon/package.png" alt="package" width="48px" height="48px">
          <figcaption>
            点评高分
          </figcaption>
        </figure>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style lang="stylus" rel="sheetstyle/stylus">
  .title
    display: flex
    width: 80%
    margin: 28px auto 24px auto
    .line
      flex: 1
      position: relative
      top: -6px
      border-bottom: 1px solid rgba(0,0,0,0.5)
    .text
      padding: 0 12px
      font-weight: 700
      font-size: 14px
  .quality-item
    display:flex
    width: 100%
    text-align: center
    margin: 10px 0 0 0
    & > a
      font-size: 14px
      color: rgb(77, 85, 93)
      text-decoration: none
      &.active
        color: #ff0000
    .tab-item
      flex: 1
      .quality-item-list
        text-align: center
        width: 100%
        display: inline-block
        figcaption
          padding-top: 12px
          padding-bottom: 14px
</style>