<template>
	<!-- <div class="banner">
		<div class="inner">
			<div>
				<h2
					class="solutionBannerTitle"
					v-html="title"
				></h2>

				<p
					class="solutionBannerSub"
					v-html="subCopy"
				></p>
			</div>
			<div class="img">
				<img src="~@/assets/img-solution-banner.png" alt="상황별 솔루션 클릭시, 이미지 변동">
			</div>
		</div>
	</div> -->
	<v-card class="banner">
		<v-img
			:src="require(`@/assets/${img}.png`)"
		>
			<v-card-title class="inner">
				<div
					class="solutionBannerTxtWrap"
				>
					<h2
						class="solutionBannerTitle"
						v-html="title"
					></h2>
					<p
						class="solutionBannerSub"
						v-html="subCopy"
					></p>
				</div>
				<span></span>
			</v-card-title>
		</v-img>	
	</v-card>
</template>

<script>
export default {
	data () {
		return {
			img: 'img-solution-banner-2',

			title: '"혹시 클라이언트신가요?"',

			subCopy: '두손소프트는 귀사의 훌륭한 파트너가 되겠습니다. <br><br> 필요한 자리에 맞춤형 컴포넌트를 제공하여, <br> 적은 리소스만으로도 실속있는 솔루션을 완성시켜드립니다. <br><br> <b>기업 적용사례</b>, 지금 확인해보세요!',
		}
	}
}
</script>

<style>
	.banner {
		background: #292929;
		min-height: 200px;
		display: flex;
		align-items: center;
	}
	.banner .inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}
	.contentTitle {
		margin-bottom: 30px;
		font-size: 14px;
		color: #a8a8a8;
		font-weight: normal;
	}
	.solutionBannerTitle {
		margin-bottom: 36px;
		font-size: 36px;
		letter-spacing: -0.025em;
		color: #ffffff;
		font-weight: 300;
	}
	.solutionBannerSub {
		color: #ededed;
	}
	.solutionBannerSub b {
		border-bottom: 1px solid #fff;
		padding-bottom: 2px;
		color: #fff;
	}
	.solutionBannerTxtWrap {
		padding-left: 8%;
	}
</style>
