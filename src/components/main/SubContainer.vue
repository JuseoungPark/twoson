<template>
	<div class="mainInner">
		<div class="mainLayout taL">
      <h3 class="layoutTitle">it <span>business</span></h3>
      <p class="layoutSubTxt">humanism thru technology, next biz leader.</p>
			<p class="contentSubtxt">다양한 기술 경험을 바탕으로 국내 유수 기업 사업컨설팅 및 신규사업, 개발사업, 혁신사업 등 다방면의 프로젝트 구축 경험이 있습니다. <br>또한 다우기술, 어도비, 마이크로소프트 등의 기술파트너로서 다양한 프로젝트의 수주와 개발완수를 위해서 두손이 두발로 뛰고 있습니다.</p>

			<div class="bottomWrap">
				<div class="business">
					<ul>
						<li
							v-for="business in mainITBusiness"
							:key="business"
							class="businessTxt"
						>
							<span>{{ business.title }}</span>
						</li>
					</ul>
				</div>
				<div class="btnWrap">
					<BtnSolid
						:txtOfChild="apply"
						class="solid"
					/>
					<BtnSolid
						:txtOfChild="ask"
						class="ghost"
					/>
				</div>
			</div>
    </div>
	</div>
</template>

<script>
export default {
	data: () => ({
		apply: '입사지원',
		ask: '프로젝트 문의',

		mainITBusiness: [
			{
				title: '시스템 통합'
			},
			{
				title: 'it 솔루션 제공'
			},
			{
				title: 'it 컨설팅'
			},
			{
				title: '인력개발사업'
			},
		],
	}) 
}
</script>

<style>
	.layoutTitle span {
		text-transform: capitalize;
	}
	.layoutSubTxt + .contentSubtxt {
		color: #919191;
		margin-top: 12px;
		word-break: keep-all;
	}
	.bottomWrap {
		display: flex;
		justify-content: space-between;
	}
	.contentSubtxt + .bottomWrap {
		margin-top: 120px;
	}
	.businessTxt {
		color: #3F3D43;
		text-transform: uppercase;
		margin-right: 14px;
	}
	.businessTxt span::after {
		content: '';
		display: inline-block;
		background: url(~@/assets/img-slash.png) 0 0 no-repeat;
		background-size: cover;
		vertical-align: bottom;
		width: 19px;
		height: 19px;
		margin-left: 14px;
	}
	.businessTxt:last-child span::after {
		display: none;
	}
</style>
