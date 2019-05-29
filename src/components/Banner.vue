<template>
	<div class="banner">
		<div class="inner">
			<div>
				<h5 class="contentTitle">두손소프트만의 솔루션을 만나보세요!</h5>
				<ul>
					<li
						v-for="item in items"
						:key="item.key"
						class="typeOfSolution"
					>{{ item.title }}</li>
				</ul>
			</div>
			<div class="img">
				<img src="~@/assets/area-02.png" alt="상황별 솔루션 클릭시, 이미지 변동">
				<!-- <img :src="require(`~@/assets/area-${img}.png`)" alt="상황별 솔루션 클릭시, 이미지 변동"> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{
					title: '별도 ActiveX, Plug-in 설치없는 스트리밍 방식에',
				},
				{
					title: '기존 시스템에 탈부착이 가능한 Component 구조로',
				},
				{
					title: 'PC, Tablet, Mobile 어디서든 사용 가능합니다',
				},
			],

			// img: '02'
		}
	}
}
</script>

<style>
	.banner {
		background: #292929;
		min-height: 200px;
		display: flex;
		align-items: center;
		padding: 40px 0;
	}
	.banner .inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.contentTitle {
		margin-bottom: 30px;
		font-size: 14px;
		color: #a8a8a8;
		font-weight: normal;
	}
	.typeOfSolution {
		margin-bottom: 16px;
		font-size: 16px;
		letter-spacing: -0.025em;
		color: #ffffff;
	}
	.typeOfSolution:last-child {
		margin-bottom: 0;
	}
	.typeOfSolution:hover {
		text-decoration-line: underline;
		cursor: pointer;
	}
	.banner .img {
		width: 64%;
		height: 278px;
		background: rgba(255,255,255,.7);
		overflow: hidden;
	}
	.banner .img img {
		width: auto;
		height: 100%;
	}
</style>
