<template>
  <div class="about">
    <infoWrap00 />
    <infoWrap01 />
		<infoWrap02 />
		<infoWrap03 />
    <div class="aboutBottomWrap">
      <p>두손소프트의 새로운 소식도 확인해보십시오.</p>
      <router-link
			:to="{name: 'news-name'}" class="toNewsBtn"
      >뉴스룸 페이지 가기</router-link>
    </div>
  </div>
</template>

<script>
import infoWrap00 from '@/components/infocontent/infoWrap00'
import infoWrap01 from '@/components/infocontent/infoWrap01'
import infoWrap02 from '@/components/infocontent/infoWrap02'
import infoWrap03 from '@/components/infocontent/infoWrap03'

export default {
  components: {
    infoWrap00,
    infoWrap01,
    infoWrap02,
    infoWrap03,
  }
}
</script>

<style>
  .v-content__wrap > .about {
		padding:0;
  }
  .aboutBottomWrap {
    background: rgba(0,0,0,.5);
    padding:5vw;
    width:100%
  }
  .aboutBottomWrap p {
    text-align: center;
    font-size: 1.6rem;
    /* font-weight: bold; */
    color:#fff;
  }
  .aboutBottomWrap .toNewsBtn {
    text-decoration: none;
    width:220px;
    margin: 20px auto 0;
    display: block;
    border:1px solid rgba(255,255,255,.4);
    text-align: center;
    padding:10px 50px;
    color:#fff;
    transition: all .3s;
  }
  .aboutBottomWrap .toNewsBtn:hover {
    border:1px solid rgba(255,255,255,.1);
    background: rgba(255,255,255,.4);
    color:rgba(0,0,0,.9)
  }
</style>
