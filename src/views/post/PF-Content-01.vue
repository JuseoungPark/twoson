<template>
	<section
		id="pf-require"
		class="pf-section pf-require"
		:style="{'background-image': 'url(' + require(`@/assets/${bgImg}`) + ')'}"
	>
		<h2 class="pf-section-title">고객사 요구사항</h2>

		<ul>
			<li
				v-for="(li, i) in PFrequire"
				:key="i"
				class=""
			>
				<p class="num">{{ i + 1 }}</p>
				<dl>
					<dt class="break-word">{{ li.requireTitle }}</dt>
					<dd class="break-word">{{ li.requireEx }}</dd>
				</dl>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'pf-require',

	data () {
		return {
			// bgImg: '24_galaxy_s10_mockup.jpg',
			bgImg: '34_galaxy_s10_mockup_1.jpg',

			PFrequire: [
				{
					requireTitle: '미려한 디자인에 담긴 전략과 컨텐츠',
					requireEx: '국내에서 진행되는 대부분의 다국어 프로젝트는 국문 사이트를 우선 구축하고 컨텐츠만 번역하여 언어별 사이트를 구축하는 것이 일반적인 방식이다. 그러나 본 프로젝트는 영문 사이트를 기준으로 글로벌 스탠다드를 수립하는 것을 목표로 하였다.',
				},
				// {
				// 	requireTitle: '미려한 디자인에 담긴 전략과 컨텐츠',
				// 	requireEx: '국내에서 진행되는 대부분의 다국어 프로젝트는 국문 사이트를 우선 구축하고 컨텐츠만 번역하여 언어별 사이트를 구축하는 것이 일반적인 방식이다. 그러나 본 프로젝트는 영문 사이트를 기준으로 글로벌 스탠다드를 수립하는 것을 목표로 하였다.',
				// },
				// {
				// 	requireTitle: '미려한 디자인에 담긴 전략과 컨텐츠',
				// 	requireEx: '국내에서 진행되는 대부분의 다국어 프로젝트는 국문 사이트를 우선 구축하고 컨텐츠만 번역하여 언어별 사이트를 구축하는 것이 일반적인 방식이다. 그러나 본 프로젝트는 영문 사이트를 기준으로 글로벌 스탠다드를 수립하는 것을 목표로 하였다.',
				// },
				// {
				// 	requireTitle: '미려한 디자인에 담긴 전략과 컨텐츠',
				// 	requireEx: '국내에서 진행되는 대부분의 다국어 프로젝트는 국문 사이트를 우선 구축하고 컨텐츠만 번역하여 언어별 사이트를 구축하는 것이 일반적인 방식이다. 그러나 본 프로젝트는 영문 사이트를 기준으로 글로벌 스탠다드를 수립하는 것을 목표로 하였다.',
				// },
			],
		}
	},
}
</script>

<style>
	/* 고객 요구사항 */
	.pf-section {
		/* min-height: 900px; */
		padding: 200px 14% 40px;
		min-height: calc(100vh - 62px);
	}
	.pf-section .pf-section-title {
		font-size: 46px;
		font-weight: lighter;
		letter-spacing: -0.04em;
	}

	.pf-section.pf-require {
		color: #272727;
		background: #EDEDED;
		background-position: 50% 494px;
		background-repeat: no-repeat;
		background-size: 62%;
		/* height: calc(100vh - 62px); */
		min-height: 944px;
	}
	.pf-section.pf-require .pf-section-title {
		margin-bottom: 120px;
	}
	.pf-require li {
		margin-bottom: 50px;
	}

	.pf-require dl {
		display: flex;
		align-items: flex-start;
		color: #606060;
	}
	.pf-require dl dt {
		font-size: 28px;
		font-weight: lighter;
		margin-right: 12%;
		line-height: 1.2em;
	}
	.pf-require .num {
		font-size: 56px;
		font-weight: lighter;
		font-family: 'Montserrat Alternates';
		line-height: 1;
	}
	.pf-require dl dd {
		font-size: 18px;
		font-weight: lighter;
		line-height: 26px;
		max-width: 50%;
	}
</style>
