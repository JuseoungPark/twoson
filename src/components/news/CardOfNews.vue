<template>
	<iv class="cardWrap news">
		<v-container grid-list-xl text-xs-center>
			<v-layout row wrap>
				<v-flex v-for="(item, i) in itemsOfSolution" :key="i" xs3>
					<v-card
						:class="{ event: item.eventOn }"
					>
						<v-card-title>
							<h5 class="typeOfNews">{{ item.type }}</h5>
							<h4 class="titleOfNews">{{ item.title }}</h4>
							<ul class="card__hashtags">
								<li
									class="hashtag"
									v-for="hashtag in item.hashtags"
									:key="hashtag"
								>{{ hashtag.hashtag }}</li>
							</ul>
						</v-card-title>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</iv>
</template>

<script>
export default {
	data: () => ({
		itemsOfSolution: [
			{
				type: '이벤트',
				title: '문제 풀고 제주도 가자!',
				eventOn: true,
				hashtags: [
					{	hashtag: 'IT트렌드' }, {	hashtag: '아버지' }, {	hashtag: '정답을 알려줘' },
				],
			},
			{
				type: '뉴스',
				title: '에델마을 방문 기부금 전달',
			},
			{
				type: '뉴스',
				title: '2019년 2분기 자체 서비스 오픈예정',
			},
			{
				type: '뉴스',
				title: '2018년 창립 7주년 기념 세미나',
			},
		],
	}),
}
</script>

<style>
	.event .v-card__title {
		background: rgba(0,84,166,.9);
	}
	.event .titleOfNews,
	.event .typeOfNews,
	.event .hashtag {
		color: #fff;
	}
	.cardWrap.news .v-card__title {
		flex-direction: column;
		align-items: flex-start;
		letter-spacing: -0.075em;
		/* min-height: 240px; */
	}
	.typeOfNews {
		font-size: 13px;
		font-weight: 700;
		color: #999;
		margin-bottom: 12px;
	}
	.titleOfNews {
		font-size: 28px;
		line-height: 36px;
		font-weight: normal;
		color: #3a3b3c;
		word-break: keep-all;
		text-align: left;
	}
	.card__hashtags {
		margin-top: 10px;
		display: flex;
	}
	.hashtag {
		margin-right: 10px;
	}
	.hashtag::before {
		content: '#';
		display: inline-block;
		padding-right: 4px;
	}
</style>
