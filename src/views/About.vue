<template>
  <div class="about">
    <infoWrap00 />
    <infoWrap01 />
		<infoWrap02 />
		<infoWrap03 />

    <router-link
			:to="{name: 'news-name'}"
		>뉴스룸</router-link>
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
		padding: 82px 0 0 0;
	}
</style>
