<template>
  <div id="contentWrap">
    <MainVisual />
    <div class="mainLayout">
      <h3 class="layoutTitle">ts projects</h3>
      <p class="layoutSubTxt afterImg">다양한 프로젝트 구축 경험</p>
      <MainContainer />
      <SubContainer />
    </div>
  </div>
</template>

<script>
import MainVisual from '@/components/MainVisual'
import MainContainer from '@/components/main/MainContainer'
import SubContainer from '@/components/main/SubContainer'

export default {
  components: {
    MainVisual,
    MainContainer,
    SubContainer,
  }
}
</script>

<style>
  .mainLayout {
    background: url(~@/assets/bg-noise.jpg) 0 0 repeat;
    padding: 150px 0 75px;
    text-align: center;
  }
  .layoutSubTxt.afterImg::after {
    content: '';
    display: block;
    margin: 20px auto 50px;
    background: url(~@/assets/img-title.png) 0 0 no-repeat;
    background-size: contain;
    width: 6px;
    height: 80px;
  }
</style>

