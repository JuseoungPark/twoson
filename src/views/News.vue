<template>
	<div class="news">
		<h2>뉴스룸 자리입니다.</h2>

		<router-link
			:to="{name: 'about-name'}"
		>회사정보</router-link>

		<!-- card 레이아웃 들어올 자리 -->
		<Card />
	</div>
</template>

<script>
import Card from '@/components/news/CardOfNews'

export default {
	components: {
		Card
	},
}
</script>

<style>
	.v-content__wrap > .news {
		padding: 82px 0 0 0;
	}
</style>
