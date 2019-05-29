<template>
	<div>
		<v-container grid-list-xl text-xs-center>
			<v-layout row wrap>
				<v-flex v-for="(item, i) in items" :key="i" xs4>
					<v-card class="cardWrap">
						<v-img
							height="334"
							:src="require(`@/assets/portfolio-thumbnail-${item.img}`)"
						>
							<v-card-title class="cardTitleWrap">
								<div
									class="cardTitle"
									:class="{ ing: item.ing }"
								>
									<p class="cardMainTitle">{{ item.title }}</p>
									<p class="cardSubTitle">{{ item.subTitle }}</p>
								</div>
								<span></span>
							</v-card-title>
						</v-img>
						
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{
					img: 'nice.jpg',
					title: 'GFC (NICE평가정보)',
					subTitle: 'GA 기업보고서 제공서비스',
					ing: true,
				},
				{
					img: 'mirae.jpg',
					title: '미래에셋',
					subTitle: '모바일 영업지원 시스템 구축',
					ing: true,
				},
				{
					img: 'heungkuk.png',
					title: '흥국생명',
					subTitle: '모바일 서비스 구축',
					ing: true,
				},
				{
					img: 'prudential.png',
					title: '푸르덴셜생명',
					subTitle: '솔루션 패키지 제공',
					ing: true,
				},
				{
					img: '03.png',
					title: '삼성생명',
					subTitle: '기업보고서서비스 개발',
					ing: false,
				},
				{
					img: '04.png',
					title: '슬랙',
					subTitle: 'uiux 변경'
				},
				{
					img: '03.png',
					title: '우버',
					subTitle: '솔루션 패키지 제공',
				},
				{
					img: '02.png',
					title: 'dsfsdf',
				},
				{
					img: '01.png',
					title: 'dsfsdf',
				}
			]
		}
	}
}
</script>

<style>
	.cardWrap {
		position: relative;
	}
	.cardTitleWrap {
		position: absolute;
		bottom: 0;
		width: 100%;
		background: rgba(255,255,255,.9);
		padding: 20px;
		min-height: 95px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.cardTitle {
		text-align: left;
		letter-spacing: -0.04em;
	}
	.cardMainTitle {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 5px;
	}
	.cardSubTitle {
		font-size: 16px;
		word-break: keep-all;
	}
	.ing + span::after {
		content: '진행중';
		display: inline-block;
		background: #DB5F4C;
		color: #fff;
		border-radius: 20px;
		padding: 8px 12px;
		font-size: 16px;
		line-height: 1;
	}
	/* card hover */
	.cardWrap:hover .cardTitleWrap {
		background: rgba(40,40,57,.85);
		height: 100%;
		padding: 50px;
		cursor: pointer;
	}
	.cardWrap:hover .cardTitle {
		color: #fff;
	}
	.cardWrap:hover .cardMainTitle {
		font-size: 18px;
		font-weight: normal;
		margin-bottom: 24px;
	}
	.cardWrap:hover .cardSubTitle {
		font-size: 26px;
		font-weight: bold;
	}
</style>
