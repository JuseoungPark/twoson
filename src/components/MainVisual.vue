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
						<h2 class="mainTitle">about <br>us</h2>
					</div>	
				</div>
				<div class="copyR">
					<div class="copyRT">
						<p>회사소개</p>
						<p class="udline">TwoSonSoft</p>
					</div>
					<div class="copyRB">
						<p class="subCopy">두손소프트는 국내 유수기업의 사업컨설팅과 함께 신규사업, 개발사업, 혁신사업 등 다양한 프로젝트 구축 경험이 있습니다.</p>
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
		height: 102vh;
		background: url(~@/assets/main-visual-03.jpg) 0 70% no-repeat;
		background-size: cover;
		line-height: 1;
		color: #fff;
	}
	.overlay {
		/* background: rgba(0,0,0,.2); */
		background: rgba(0,49,97,.6);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mainCopy {
		width: 84%;
		height: 66%;
		display: flex;
		justify-content: space-between;
		margin-top: 82px;
	}
	.copyL {
		width: 50%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}
	.copyLT {
		display: flex;
		width: 100%;
	}
	.copyLT ul:first-child {
		margin-right: 177px;
	}
	.copyLT ul li {
		margin-bottom: 10px;
		font-weight: 300;
	}
	.copyLB {
		width: 100%;
	}
	.mainTitle {
		font-size: 70px;
		font-weight: 800;
		line-height: 64px;
		color: #fff;
		text-transform: uppercase;
	}
	.copyR {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}
	.copyRT {
		width: 100%;
		position: relative;
	}
	.copyRT p {
		transform: rotate(90deg);
		text-align: left;
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 18px;
	}
	.copyRT p.udline {
		text-decoration-line: underline;
		top: 140px;
		margin-right: -10px;
	}
	.copyRB .subCopy {
		width: 366px;
		word-break: keep-all;
		line-height: 20px;
	}
</style>
