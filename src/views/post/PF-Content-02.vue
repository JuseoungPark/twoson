<template>
	<section
		id="pf-conclusion"
		class="pf-section pf-conclusion"
		:style="{'background-image': 'url(' + require(`@/assets/${bgImg}`) + ')'}"
		style="filter: blur(0px);"
	>
		<h2 class="pf-section-title">핵심과제 도출</h2>

		<ul>
			<li
				v-for="(li, i) in PFrequire"
				:key="i"
				class=""
			>
				<dl>
					<dt class="break-word"><span class="num">{{ i + 1 }}</span>{{ li.requireTitle }}</dt>
					<dd class="break-word">{{ li.requireEx }}</dd>
				</dl>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'pf-conclusion',

	data () {
		return {
			bgImg: 'portfolio-thumbnail-nice.jpg',

			PFrequire: [
				{
					requireTitle: '글로벌 커뮤니케이션 전략 수립',
					requireEx: '국내에서 진행되는 대부분의 다국어 프로젝트는 국문 사이트를 우선 구축하고 컨텐츠만 번역하여 언어별 사이트를 구축하는 것이 일반적인 방식이다. 그러나 본 프로젝트는 영문 사이트를 기준으로 글로벌 스탠다드를 수립하는 것을 목표로 하였다.',
				},
				{
					requireTitle: '컨텐츠 개선 작업',
					requireEx: '국내에서 진행되는 대부분의 다국어 프로젝트는 국문 사이트를 우선 구축하고 컨텐츠만 번역하여 언어별 사이트를 구축하는 것이 일반적인 방식이다. 그러나 본 프로젝트는 영문 사이트를 기준으로 글로벌 스탠다드를 수립하는 것을 목표로 하였다.',
				},
				{
					requireTitle: '모바일 최적화',
					requireEx: '국내에서 진행되는 대부분의 다국어 프로젝트는 국문 사이트를 우선 구축하고 컨텐츠만 번역하여 언어별 사이트를 구축하는 것이 일반적인 방식이다. 그러나 본 프로젝트는 영문 사이트를 기준으로 글로벌 스탠다드를 수립하는 것을 목표로 하였다.',
				},
			],
		}
	},
}
</script>

<style>
	.pf-section.pf-conclusion {
		color: #272727;
		/* filter: blur(5px); */
		background-attachment: fixed;
		background-size: cover;
	}
	.pf-section.pf-conclusion .pf-section-title {
		margin-bottom: 68px;
		color: #fff;
		text-shadow: rgba(0,0,0,.9) 0 0 20px;
	}
	.pf-conclusion li {
		margin-bottom: 30px;
		background: #fff;
		box-shadow: rgba(0,0,0,.34) 0 3px 10px;
		padding: 40px 120px;
		min-height: 240px;
	}

	.pf-conclusion dl {
		display: flex;
		align-items: flex-start;
		color: #000;
	}
	.pf-conclusion dl dt {
		font-size: 28px;
		font-weight: lighter;
		margin-right: 4%;
		line-height: 1.2em;
		display: flex;
		width: 42%;
	}
	.pf-conclusion dl dt .num {
		margin-right: 60px;
	}
	.pf-conclusion .num {
		font-size: 56px;
		font-weight: lighter;
		font-family: 'Montserrat Alternates';
		line-height: 1;
	}
	.pf-conclusion dl dd {
		font-size: 18px;
		font-weight: lighter;
		line-height: 26px;
		width: 54%;
	}
</style>
