<template>
	<div class="solution">
		<h2>솔루션 페이지입니다.</h2>

		<router-link
			:to="{name: 'portfolio-name'}"
		>포트폴리오</router-link>

		<Banner />
		<SL01 />

	</div>
</template>

<script>
import Banner from '@/components/Banner'
import SL01 from '@/components/typeofsolution/SL01'

export default {
	components: {
		Banner,
		SL01,
	}
}
</script>

<style>
	.v-content__wrap > .solution {
		padding: 82px 0 0 0;
	}
</style>
