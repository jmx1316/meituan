<template>
  <div id="app">
    <div class="title">
      <div class="line"></div>
      <div class="text">附近商家</div>
      <div class="line"></div>
    </div>
    <router-link to="good">
      <div class="seller">
        <img src="https://p0.meituan.net/xianfu/46b360f3b83dc93fb9bddcdd97acd8f35235.jpg@150w_150h_1e_1c" alt="sellerpic" width="84px"
          height="63px">
          <div class="name">赛百味（黄龙时代广场店）</div>
          <div class="distance">1.7km</div>
          <div class="amount">月售194</div>
          <div class="price">起送¥20 配送¥5</div>
          <div class="time">30分钟</div>
      </div>
    </router-link>
    <router-link to="good">
      <div class="seller">
        <img src="https://p0.meituan.net/xianfu/46b360f3b83dc93fb9bddcdd97acd8f35235.jpg@150w_150h_1e_1c" alt="sellerpic" width="84px"
          height="63px">
          <div class="name">赛百味（黄龙时代广场店）</div>
          <div class="distance">1.7km</div>
          <div class="amount">月售194</div>
          <div class="price">起送¥20 配送¥5</div>
          <div class="time">30分钟</div>
      </div>
    </router-link>
    <router-link to="good">
      <div class="seller">
        <img src="https://p0.meituan.net/xianfu/46b360f3b83dc93fb9bddcdd97acd8f35235.jpg@150w_150h_1e_1c" alt="sellerpic" width="84px"
          height="63px">
          <div class="name">赛百味（黄龙时代广场店）</div>
          <div class="distance">1.7km</div>
          <div class="amount">月售194</div>
          <div class="price">起送¥20 配送¥5</div>
          <div class="time">30分钟</div>
      </div>
    </router-link>
    <router-link to="good">
      <div class="seller">
        <img src="https://p0.meituan.net/xianfu/46b360f3b83dc93fb9bddcdd97acd8f35235.jpg@150w_150h_1e_1c" alt="sellerpic" width="84px"
          height="63px">
          <div class="name">赛百味（黄龙时代广场店）</div>
          <div class="distance">1.7km</div>
          <div class="amount">月售194</div>
          <div class="price">起送¥20 配送¥5</div>
          <div class="time">30分钟</div>
      </div>
    </router-link>
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
  .seller
    height: 100px
    & img
      position: relative;
      left: 12px;
    .name
      position: relative
      display: inline-block
      left: 15px
      bottom: 50px
      color: rgb(77, 85, 93)
      font-size: 16px
      font-weight: bold
    .amount
      position: relative
      display: block
      left: 105px
      bottom: 40px
      color: rgb(77, 85, 93)
      font-size: 12px
      text-decoration: none
    .time
      position: relative
      display: inline-block   
      left: 235px
      bottom: 50px
      color: rgb(77, 85, 93)
      font-size: 12px    
    .price
      position: relative
      display: inline-block
      left: 105px
      bottom: 30px
      color: rgb(77, 85, 93)
      font-size: 12px
    .distance
      position: relative
      display: inline-block   
      left: 40px
      bottom: 50px
      color: rgb(77, 85, 93)
      font-size: 12px
      display: inline-block
</style>