<template>
	<div class="titleWrap">
		<div class="contentWrap tabs">
			<button
				v-for="portfolio in typeOfPF"
				:key="portfolio"
				class="tabsBtn"
				:class="{ on: portfolio.on }"
				@click="$router.push({name: portfolio.name})"
			>{{ portfolio.type }}</button>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import project from '@/components/typeofproject/PF01'
// import projectC from '@/components/typeofproject/PF02'
import projectP from '@/components/typeofproject/PF03'

export default {

	components: {
		project,
		// projectC,
		projectP,
	},

	data () {
		return {
			typeOfPF: [
				{
					type: '프로젝트',
					name: 'pj-i-name',
					on: true,
				},
				// {
				// 	type: '완료',
				// 	name: 'pj-c-name'
				// },
				{
					type: '제안',
					name: 'pj-p-name',
					on: false,
				},
			]
		}
	}
}
</script>

<style>
	.titleWrap {
		margin: 0 auto;
		text-align: center;
	}
	.contentWrap.tabs {
		display: flex;
		justify-content: center;
		margin-bottom: 56px;
	}
	/* .tabsBtn {
		margin-right: 30px;
	}
	.tabsBtn:last-child {
		margin-right: 0;
	} */
	.tabsBtn {
		/* width: 222px;
		height: 96px; */
		padding: 31px 70px;
		font-size: 23px;
		font-weight: bold;
		letter-spacing: -0.025em;
		color: #A4A4A4;
	}
	.tabsBtn.on {
		border-bottom: 1px solid #333;
		color: #333;
	}
</style>
