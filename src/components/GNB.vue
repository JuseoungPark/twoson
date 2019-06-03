<template>
	<div class="gnbWrap">
		<ul class="gnb">
			<li
				v-for="(menu ,i) in gnb"
				:key="i"
				class="gnbItems"
			>
				<button
					@click="$router.push('/' + menu.route)"
				>{{ menu.item }}</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			gnb: [
				{
					item: '포트폴리오',
					route: 'portfolio/project'
				},
				{
					item: '솔루션',
					route: 'solution'
				},
				{
					item: '회사정보',
					route: 'about'
				},
				{
					item: '뉴스룸',
					route: 'news'
				},
			]
		}
	}
}
</script>

<style>
	.gnb {
		display: flex;
	}
	.gnb .gnbItems {
		margin-left: 30px;
		color:#fff
	}
	.gnbWrap {
		float: right;
		height: 100%;
		padding-top: 20px
	}
</style>
