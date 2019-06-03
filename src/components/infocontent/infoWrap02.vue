<template>
	<div class="infoWrap">
		<div class="inner">
			<div class="infoTitleWrap history">
				<h4 class="infoTitle">company <br>History</h4>
			</div>
			<div class="infoContentWrap history">
				<!-- <p class="simpleTxt">present ~ 2011</p> -->
				<ul class="infoHistoryWrap">
					<li
						v-for="yearByYear in history"
						:key="yearByYear.key"
						class="yearByYear"
					>
						<h5 class="ctTitle">{{ yearByYear.years }}</h5>
						<ul class="majorIssueWrap">
							<li
								v-for="issue in yearByYear.issues"
								:key="issue.key"
								class="majorIssue"
							>
								<p
									v-html="issue.event"
									class="ctTxt"
								></p>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		history: [
			{
				years: '2018',
				issues: [
					{ event: 'GFC 2019 (NICE)' },
					{ event: '푸르덴셜 글로벌푸르덴셜 글로벌푸르덴셜 글로벌푸르덴셜 글로벌' },
					{ event: 'NH손해보험' },
					{ event: 'GFC 2019 (NICE)' },
					{ event: '푸르덴셜 글로벌' },
					{ event: 'NH손해보험' },
					{ event: 'GFC 2019 (NICE)' },
					{ event: '푸르덴셜 글로벌' },
					{ event: 'NH손해보험' },
					{ event: 'GFC 2019 (NICE)' },
					{ event: '푸르덴셜 글로벌' },
					{ event: 'NH손해보험' },
					{ event: 'GFC 2019 (NICE)' },
					{ event: '푸르덴셜 글로벌' },
					{ event: 'NH손해보험' },
				],
			},
			{
				years: '2017',
				issues: [
					{ event: '누가' },
					{ event: '무엇을' },
					{ event: '했을까' },
				],
			},
			{
				years: '2016',
				issues: [
					{ event: '마지' },
					{ event: '막둥' },
					{ event: '다람쥐' },
				],
			}
		],
	}),

}
</script>

<style>
	.infoHistoryWrap {
		display: flex;
		height: inherit;
	}
	.infoContentWrap.history {
		width: 65%;
		height: 100%;
	}
	.simpleTxt {
		text-transform: capitalize;
	}
	.infoWrap .infoTitleWrap.history {
		width:35%;
	}
	.infoHistoryWrap .yearByYear {
		background: #ffffff;
		width: 33%;
		margin-right: 1.5vw;
		padding: 1.5vw 0 1.5vw 1.5vw;
	}
	.infoHistoryWrap .yearByYear:last-of-type {
		margin-right: 0;
	}
	.majorIssueWrap {
		height:calc(100% - 25px - 2.5vw);
		overflow-y: auto;
		padding-right: calc(1.5vw + 13px)
	}
	.ctTitle {
		font-size: 25px;
		font-weight: bold;
		margin-bottom: 1.5vw;
	}
	.ctTxt::before {
		content: '-';
		display: inline-block;
		position: absolute;
		left: 0;
	}
	.ctTxt {
		padding-left: 10px;
		position: relative;
		font-size: 16px
	}
	.infoHistoryWrap .majorIssue {
		margin-bottom: 10px;
	}
</style>
