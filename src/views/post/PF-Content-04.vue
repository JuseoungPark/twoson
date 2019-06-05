<template>
	<section
		id="pf-outcome"
		class="pf-section pf-outcome"
	>
		<h2 class="pf-section-title">구축 성과</h2>

		<div class="l-outcome">

			<div class="outcome-chart">
				<figure class="chart-fig"><div class="chart-box"><div class="chart-bar" style="visibility: inherit; opacity: 1; height: 78%;"></div></div>
					<b class="chart-num">78%</b>
					<figcaption class="chart-caption">
						<span class="chart-text">모바일 페이지뷰 증가율</span>
					</figcaption>
				</figure>
				<figure class="chart-fig"><div class="chart-box"><div class="chart-bar" style="visibility: inherit; opacity: 1; height: 83%;"></div></div>
					<b class="chart-num">83%</b>
					<figcaption class="chart-caption">
						<span class="chart-text">모바일 결제 이탈율 감소</span>
					</figcaption>
				</figure>
			</div>

			<div class="outcome-panel">
				<div class="outcome-panel-cell">
					<strong class="outcome-point">83%</strong>
					<p class="outcome-content">이번 사이트 재구축 프로젝트로 모바일 페이지뷰가 증가했으며 모바일 결제 시의 이탈율도 큰 폭으로 감소하였다. 특히 모바일 결제 단계에서의 이탈율 감소는 매출과 밀접하게 연관된다.</p>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
export default {
	name: 'pf-outcome',

	data () {
		return {

		}
	},
}
</script>

<style>
	.pf-section.pf-outcome {
		color: #fff;
		background: rgba(0,0,0,.85);
	}
	.pf-section.pf-outcome .pf-section-title {
		margin-bottom: 48px;
	}
	.l-outcome {
		display: flex;
		justify-content: space-between;
	}
	.outcome-chart {
		width: 44%;
		display: flex;
	}
	.chart-fig {
    width: 50%;
    text-align: center;
    word-break: keep-all;
    word-wrap: break-word;
	}
	.outcome-panel {
		width: 44%;
	}
	.chart-box {
    position: relative;
    margin-right: 24px;
    min-height: 240px;
		height: 320px;
    background-color: #e1e5ee;
	}
	.chart-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0%;
    background-color: #0054A6;
	}
	.outcome-panel .outcome-point {
    display: block;
    font-size: 5.4em;
    font-weight: normal;
    letter-spacing: -0.025em;
    word-break: keep-all;
    word-wrap: break-word;
		font-family: 'Montserrat Alternates';
		margin-bottom: 12px;
	}
	.pf-section p {
    font-size: 1em;
		font-size: 21px;
    line-height: 1.8;
    letter-spacing: -0.025em;
		word-break: keep-all;
		font-weight: lighter;
	}
	.chart-num {
    display: block;
    margin-right: 10px;
    margin-top: .5em;
    margin-bottom: .2em;
    font-family: 'Montserrat Alternates', Montserrat Alternates;
		font-weight: normal;
    line-height: 1.2;
		/* padding-top: 16px; */
    font-size: 3.2em;
	}
</style>
