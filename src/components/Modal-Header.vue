<template>
	<header
		class="modal__header"
		:style="{'background-image': 'url(' + require(`@/assets/${headerImg}`) + ')'}"
	>
		<div
			class="popUp-overlay"
			:style="{'background-color': `${bgcr}`}"
		>
		<div class="postTitleWrap">
			<h3 class="orderingAgent">{{ orderingAgent }}</h3>
			<h2
				class="postTitle"
				v-html="popupTitleOfChild"
			></h2>
			<p
				class="postDescription"
				v-html="description"
			></p>
			<a
				href="https://www.samsungsvc.co.kr/index.do"
				class="btn-ghost btn-pf-link"
				target="_blank"
			>사이트 바로가기</a>
			<dl
				class="pf-description"
				v-for="item in items"
				:key="item"
			>
				<dt>{{ item.dt }}</dt>
				<dd>{{ item.dd }}</dd>
			</dl>
		</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Modal-Header',

	props: {
		popupTitleOfChild: {
			type: String,
			require: false,
		},
		orderingAgent: {
			type: String,
			require: false,
		},
		description: {
			type: String,
			require: false,
		},
	},

	data: () => ({
		img: 'solution-ts-web-scanner-cr',

		headerImg: '24_galaxy_s10_mockup.jpg',

		items: [
			{
				dt: '발주사',
				dd: '삼성',
			},
			{
				dt: '프로젝트 수행기간',
				dd: '2018년 11월 ~ 2019년 7월 (9개월)',
			},
			{
				dt: '프로젝트 업무범위',
				dd: '글로벌 롤아웃 전략 수립 및 실행, 기업 아이덴티티 강화, 모바일 최적화(반응형웹), 다국어 사이트 구축(영문, 국문, 중문), UI/UX 개선',
			},
		],

		bgcr: 'rgba(0,42,84,.6)'
	}),
}
</script>

<style>
	.modal__header {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-attachment: fixed;
		color: #fff;
		border-bottom: 1px solid #555;
	}
	.popUp-overlay {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.postTitleWrap {
		width: 74%;
		height: 100vh;
		text-align: center;
		padding: 14% 0 6%;
		text-shadow: rgba(0,0,0,0.5) 0 0 20px;
		overflow: auto;
	}
	.postTitleWrap::-webkit-scrollbar {
		display:none;
	}
	.closeWrap {
		position: fixed;
		top: 60px;
		right: 5%;
	}
	.closeBtn {
		background: url(~@/assets/btn-popup-close-white.png) 0 0 no-repeat;
		background-size: contain;
		width: 40px;
		height: 40px;
	}
	.closeWrap span {
		text-indent: -9999px;
		opacity: 0;
		font-size: 0;
		width: 0;
	}
	.orderingAgent {
		font-size: 28px;
		font-weight: lighter;
		margin-bottom: 100px;
	}
	.postTitle {
		font-size: 56px;
		line-height: 72px;
		font-weight: lighter;
		letter-spacing: -0.025em;
		margin-bottom: 24%;
	}
	.postDescription {
		text-align: left;
		font-size: 24px;
		line-height: 44px;
		font-weight: lighter;
		word-break: keep-all;
		text-shadow: rgba(0,0,0,0.7) 0 0 20px;
		margin-bottom: 60px;
	}
	.pf-description:first-of-type {
		margin-top: 200px;
	}
	.pf-description {
		width: 70%;
		margin: 0 auto;
		text-align: left;
		margin-bottom: 50px;
	}
	.pf-description dt {
		font-size: 21px;
		font-weight: bold;
		margin-bottom: 8px;
	}
	.pf-description dd {
		font-size: 24px;
		font-weight: lighter;
		word-break: keep-all;
	}
</style>
