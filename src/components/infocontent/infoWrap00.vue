<template>
	<div class="infoWrap infoWrap00">
		<div class="infoTitleWrap">
			<div class="ggg">
				<h4 class="infoTitle">{{ infoTitle }}developers <br>playground</h4>
				<h5 class="infoSubTitle">{{ infoSubTitle }}</h5>
			</div>
			<p class="infoSubCopy">방황하여도, 할지라도 얼음과 타오르고 스며들어 무엇을 사막이다. 동산에는 황금시대를 만천하의 보라. 노래하며 그들은 원대하고, 것이다. 황금시대의 따뜻한 수 무엇을 더운지라 것이다. 끝에 구하지 가장 이상의 그들에게 것이다.</p>
		</div>
		<div class="infoContentWrap">
			<figure class="infoImgWrap">
				<img src="~@/assets/img-info-playground.png" alt="두손소프트, 개발자들에게 놀이터같은 공간이 되기를 꿈꿔봅니다.">
			</figure>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			infoSubTitle: '두손소프트는 개발자의 놀이터가 되는 꿈을 꿉니다.'
		}
	}
}
</script>

<style>
	.infoWrap.infoWrap00 {
		display: flex;
		justify-content: space-between;
	}
	.infoTitleWrap {
		width: 48%;
		padding: 0 12% 0 80px;
		word-break: keep-all;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.infoTitleWrap h4.infoTitle {
		font-size: 72px;
		margin-bottom: 26px;
	}
	.infoTitleWrap .infoSubTitle {
		font-weight: normal;
	}
	.infoSubTitle {
		font-size: 20px;
		letter-spacing: -0.04em;
	}
	.infoSubCopy {
		font-size: 16px;
		font-weight: lighter;
		color: #333;
	}
	.infoWrap .infoContentWrap {
		width: 52%;
	}
	.infoImgWrap {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	.infoImgWrap img {
		width: 100%;
		height: auto;
		position: absolute;
		right: 0;
	}
</style>