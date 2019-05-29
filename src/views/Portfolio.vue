<template>
	<div>
		<TopBanner />

		<!-- 탭 -->
		<Tab />

		<router-link
			:to="{name: 'solution-name'}"
		>솔루션 페이지 이동</router-link>

	</div>
</template>

<script>
import TopBanner from '@/components/banner/PageTitle'
import Tab from '@/components/Tab'

export default {
	components: {
		TopBanner,
		Tab,
	}
}
</script>

<style>

</style>
