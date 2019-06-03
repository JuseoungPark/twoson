<template>
	<div class="mainVisual">
		<div class="overlay">
			<div class="mainCopy">
				<div class="copyL">
					<div class="copyLT">
						<ul>
							<li>SI & SM 사업(기술용역)</li>
							<li>개발 사업</li>
							<li>디자인 및 퍼블리싱 사업</li>
							<li>IT 컨설팅 사업</li>
						</ul>
						<ul>
							<li>RIA 전문개발회사</li>
							<li>컨설팅 및 IT Infra 구축 </li>
							<li>Software Development</li>
						</ul>
					</div>
					<div class="copyLB">
						<h2 class="mainTitle">Playground<br>For Developers</h2>
						<p class="subCopy">두손소프트는 국내 유수기업의 사업컨설팅과 함께 신규사업, 개발사업, 혁신사업 등 다양한 프로젝트 구축 경험이 있습니다.</p>
					</div>
				</div>
				<div class="copyR">
					<div class="copyRT">
						<p>두손소프트</p>
						<p class="udline">TwoSonSoft</p>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {

}
</script>

<style>
	.mainVisual {
		height: 100vh;
		background: url(~@/assets/main-visual-04.jpg) 50% 50% no-repeat;
		background-size: cover;
		line-height: 1;
		color: #fff;
	}
	.overlay {
		/* background: rgba(0,0,0,.2); */
		background: rgba(0,0,0,.45);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mainCopy {
		box-sizing: border-box;
		width:100%;
		padding: calc(5vw + 60px) 5vw 5vw 5vw;
		height: inherit;
		position: relative;
	}
	.copyL {
		width:100%
	}
	.copyLT {
		display: flex;
		width: 100%;
	}
	.copyLT ul:first-child {
		margin-right: 5vw;
	}
	.copyLT ul li {
		margin-bottom: 14px;
		font-weight: 300;
	}
	.copyLB {
		width: calc(100% - 10vw);
		position:absolute;
		bottom:5vw
	}
	.mainTitle {
		font-family: "Lato" !important;
		font-size: 6.5rem;
		line-height: 5.5rem;
		color: rgba(255,255,255,0.8);
		text-transform: uppercase;
		float: left;
	}
	.subCopy {
		width: 25vw;
		word-break: keep-all;
		line-height: 24px;
		font-size: 14px;
		float: right;
		text-align: right;
		font-weight: lighter;
		position:absolute;
		bottom: 0;
		right: 0;
	}
	.copyR {
		height: 100%;
	}
	.copyRT {
		position:absolute;
		right: 5vw;
		top:calc(60px + 5vw + 14px)
	}
	.copyRT p {
		font-weight: lighter;
		display: block;
		transform: rotate(90deg);
		text-align: right;
		margin-bottom: calc(50vh - 60px - 5vw);
		margin-right : -25px
	}
</style>
