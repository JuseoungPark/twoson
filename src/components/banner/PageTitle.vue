<template>
	<v-img
		class="pageTitleWrap portfolio"
		:src="require(`@/assets/page-title-${img}.png`)"
		:alt="`두손소프트 포트폴리오를 소개하는 이미지로, ` + alt"
	>
		<div class="overlay">
			<v-container class="pageTitleTxtWrap" style="height: 100%">
				<v-layout row wrap bannerTitle>
					<h3 class="bannerTitleChild lT">RECENT PROJECT</h3>
					<div class="bannerTitleChild rT">
						<p>2019 / 05</p>
					</div>
					<div class="copyWrap bannerTitleChild lB">
						<h4 class="pjcorpo">{{ pjSubTitle }}</h4>
						<h2 class="pjTitle">{{ pjTitle }}</h2>
						<p class="pjSubCopy">{{ pjSubCopy }}</p>
					</div>
					<button
						class="btn widthIcon bannerTitleChild rB"
						@click="portfolioModal"
					>자세한 내용 보러 가기</button>
					<!-- <Modal :visible="showModal"></Modal> -->
					<!-- <button @click="handleClickButton">Toggle Modal</button> -->
				</v-layout>
			</v-container>
		</div>
	</v-img>
</template>

<script>
// import Modal from '@/components/Modal'

export default {
	// components: {
	// 	Modal
	// },

	data () {
		return {
			pjSubTitle: 'nice평가정보',
			pjTitle: 'nice reasy',
			pjSubCopy: '기존 웹으로 서비스 되고 있는 기술신용평가 은행 서비스를 모바일 기반으로 서비스 제공. Android, iOS별 Hybrid App 방식의 모바일 서비스 구축 (더미 텍스트입니다.)',
			img: 'nice',
			alt: '두손이 자랑하는 기업분석보고서 자체서비스입니다.',

			// showModal: false
		}
	},

	// methods: {
	// 	portfolioModal() {
	// 		this.show = !this.show
	// 	}
	// },
}
</script>

<style>
	.pageTitleWrap {
		background: url(~@/assets/page-title-nice.png) 50 50 no-repeat;
		background-size: contain;
		width: 100%;
		height: 722px;
		color: #fff;
	}
	.pageTitleWrap.portfolio {
		margin-bottom: 80px;
	}
	.pageTitleWrap.portfolio .overlay {
		background: rgba(0,0,0,.6);
	}
	.pageTitleTxtWrap {
		padding: 182px 0 100px;
	}
	.bannerTitle {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		justify-content: space-between;
		align-items: space-between;
	}
	.bannerTitleChild {
		width: 50%;
		height: 50%;
		display: inline-block;
		display: flex;
		flex-direction: column;
	}
	.bannerTitleChild.lT {
		font-size: 30px;
	}
	.bannerTitleChild.rT {
		font-size: 16px;
		font-weight: lighter;
		position: relative;
	}
	.bannerTitleChild.rT p {
		transform: rotate(90deg);
		position: absolute;
		top: 20px;
		right: -20px;
	}
	.bannerTitleChild.lB {
		justify-content: flex-end;
	}
	.bannerTitleChild.rB {
		justify-content: flex-end;
		text-align: right;
		width: 182px;
		color: #C8C7C6;
	}
	.pjcorpo {
		font-size: 20px;
		font-weight: normal;
	}
	.pjTitle {
		font-size: 72px;
		text-transform: uppercase;
		margin-bottom: 16px;
		line-height: 1;
	}
	.pjSubCopy {
		color:#B4B5B5;
		font-size: 16px;
		font-weight: lighter;
		word-break: keep-all;
	}
</style>
