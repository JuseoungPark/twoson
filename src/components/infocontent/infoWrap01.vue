<template>
	<div class="infoWrap wt">
		<div class="inner">
			<h4 class="infoTitle">company <br>information</h4>
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
					<span class="counting">{{ nums.countingTxt1 }}</span>
					<b class="primary-color blue--text text--darken-3">{{ nums.counting }}</b>
					<span class="counting">{{ nums.countingTxt2 }}</span>
					<span class="subCounting">{{ nums.subCounting }}</span>
					<span class="subCounting">{{ nums.subCountingTxt }}</span>
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
					subTitle: '',
					countingTxt1: '',
					counting: '',
					countingTxt2: '',
					subCounting: '',
					subCountingTxt: '',
				},
				{
					title: '걸어온 시간',
					subTitle: '',
					countingTxt1: '',
					counting: '',
					countingTxt2: '',
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
		padding: 8% 0 8%;
		background: #f6f6f6;
		text-align: left;
		height: 100vh;
	}
	.infoWrap.wt {
		background: #ffffff;
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
		display: flex;
		flex-wrap: wrap;
		text-align: left;
	}
	.infoWrap .countingWrap {
		width: 50%;
	}
	.infoWrap .countingWrap:nth-child(2),
	.infoWrap .countingWrap:nth-child(4) {
		border-left: 1px solid #DBDBDB;
		padding-left: 50px;
	}
	.infoWrap .countingWrap:nth-child(1),
	.infoWrap .countingWrap:nth-child(2) {
		border-bottom: 1px solid #DBDBDB;
		padding-bottom: 30px;
	}
	.infoWrap .countingWrap:nth-child(3),
	.infoWrap .countingWrap:nth-child(4) {
		padding-top: 40px;
	}
	.infoWrap .countingWrap .countingTitle {
		font-size: 18px;
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
	.infoWrap .counting:nth-last-of-type(3) {
		margin-right: 40px;
	}
	.infoWrap .primary-color {
		font-size: 80px;
		letter-spacing: -0.04em;

	}
	.infoWrap .subCounting {
		color: #767676;
	} 
</style>