<template>
	<div class="infoWrap">
		<div class="inner">
			<h4 class="infoTitle">company <br>history</h4>
			<div class="infoContentWrap">
				<p class="simpleTxt">present ~ 2011</p>
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
	}
	.infoContentWrap {
		width: 100%;
	}
	.simpleTxt {
		text-transform: capitalize;
	}
	.infoHistoryWrap .yearByYear {
		background: #ffffff;
		width: 30%;
		margin-right: 20px;
		padding: 34px 32px 24px 42px;
		min-height: 340px;
	}
	.ctTitle {
		font-size: 1.8rem;
		font-weight: bold;
		margin-bottom: 50px;
	}
	.ctTxt::before {
		content: '-';
		display: inline-block;
		padding-right: 10px;
	}
	.ctTxt {
		font-size: 1rem;
	}
	.infoHistoryWrap .majorIssue {
		margin-bottom: 12px;
	}
</style>
