<template>
	<div class="infoWrap wt">
		<div class="inner">
			<div class="infoTitleWrap companyInfo">
				<h4 class="infoTitle">company <br>information</h4>
			</div>
			<ul class="infoCountingWrap">
				<li
					v-for="nums in num"
					:key="nums.key"
					class="countingWrap"
				>
					<h5 class="countingTitle">{{ nums.title }}</h5>
					<p
						class="subTxt"
						v-html="nums.subTitle"
					></p>
					<div class="subTxtContent">
						<span class="counting">{{ nums.countingTxt1 }}</span>
						<b class="primary-color blue--text text--darken-3">{{ nums.counting }}</b>
						<span class="counting">{{ nums.countingTxt2 }}</span>
						<span class="subCounting">{{ nums.subCounting }}</span>
						<span class="subCounting">{{ nums.subCountingTxt }}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			num: [
				{
					title: '업계 위치',
					subTitle: '두손소프트의 경쟁력, <br>지표가 말해줍니다.',
					countingTxt1: '상위',
					counting: '7',
					countingTxt2: '%',
					subCounting: '1476',
					subCountingTxt: '위',
				},
				{
					title: 'Human resource',
					subTitle: '80명의 사원이 <br>두손소프트와 함께 하고 있습니다.',
					countingTxt1: '정직원',
					counting: '100',
					countingTxt2: '%',
					subCounting: '',
					subCountingTxt: '',
				},
				{
					title: 'Project',
					subTitle: '두손의 가치를 빛낸 프로젝트들',
					countingTxt1: '총',
					counting: '000',
					countingTxt2: '개',
					subCounting: '',
					subCountingTxt: '',
				},
				{
					title: '걸어온 시간',
					subTitle: '회사설립연도 2011년',
					countingTxt1: '두손이 걸어온',
					counting: '8',
					countingTxt2: '년',
					subCounting: '',
					subCountingTxt: '',
				},
			]
		}
	}
}
</script>

<style>
	.infoWrap {
		display: flex;
		padding: calc(60px + 5vw) 5vw 5vw 5vw;
		text-align: left;
		height: 100vh;
	}
	.infoWrap.wt {
		background: #ffffff;
	}
	.infoWrap .infoTitleWrap.companyInfo {
		width:35%
	}
	.infoWrap .infoTitle {
		font-size: 72px;
		letter-spacing: -0.04em;
		word-break: keep-all;
		text-align: left;
		line-height: 76px;
		text-transform: capitalize;
	}
	.infoWrap .infoCountingWrap {
		width:65%;
		display: flex;
		flex-wrap: wrap;
		text-align: left;
	}
	.infoWrap .countingWrap {
		width: 50%;
		position: relative;
	}
	.infoWrap .countingWrap:nth-child(2),
	.infoWrap .countingWrap:nth-child(4) {
		border-left: 1px solid #DBDBDB;
		padding-left: 2.5vw;
	}
	.infoWrap .countingWrap:nth-child(1),
	.infoWrap .countingWrap:nth-child(2) {
		border-bottom: 1px solid #DBDBDB;
		padding-bottom: 2.5vw;
	}
	.infoWrap .countingWrap:nth-child(3),
	.infoWrap .countingWrap:nth-child(4) {
		padding-top: 2.5vw;
	}
	.infoWrap .countingWrap .countingTitle {
		font-size: 25px;
		letter-spacing: -0.04em;
		margin-bottom: 20px;
	}
	.infoWrap .countingWrap .subTxt {
		font-size: 20px;
		color: #767676;
		font-weight: 300;
		line-height: 26px;
	}
	.infoWrap .counting {
		color: #000;
	}
	/*
	.infoWrap .counting:nth-last-of-type(3) {
		margin-right: 40px;
	} */
	.infoWrap .primary-color {
		font-size: 80px;
		letter-spacing: -0.04em;

	}
	.infoWrap .subCounting {
		color: #767676;
	}
	.subTxtContent {
		position: absolute;
		bottom: calc(2.5vw - 30px);
		right: 2.5vw;
	}
	.subTxtContent span {
		font-size: 18px
	}
</style>