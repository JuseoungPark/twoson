<template>
	<div class="footer">
		<div class="footerWrap">
			<div class="contentWrap left">
				<ul class="joinWrap">
					<li
						v-for="menu in footerMenu"
						:key="menu.key"
					>
						<router-link
							:to="{ name: menu.link }"
							class="footerMenu"
							:class="{ udLine: menu.underline }"
						>{{ menu.title }}</router-link>
					</li>
				</ul>
				<p class="copyright"><span>twosonsoft.</span> all rights reserved</p>
			</div>
			<div class="contentWrap right">
				<ul>
					<li
						v-for="address in address"
						:key="address"
					>
						<p>주소 : {{ address.address }}</p>
						<p>대표이사 : {{ address.ceo }}</p>
						<p>전화 : {{ address.phone }}</p>
						<p>팩스 : {{ address.fax }}</p>
						<p>이메일 : {{ address.mail }}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			footerMenu: [
				{
					title: '프로젝트 문의',
					link: '',
				},
				{
					title: '입사지원',
					link: '',
					underline: true,
				},
				{
					title: '회사소개서 받기',
					link: '',
				}
			],
			address: [
				{
					address: '서울특별시 구로구 디지털로26길 111 JNK디지털타워 502호',
					ceo: '손영대',
					phone: '02-3461-8686',
					fax: '070-8677-5460',
					mail: 'twosonsoft@twosonsoft.com',
				},
			],
		}
	}
}
</script>

<style>
	.footer {
		height: 150px;
		background: #3F3D43;
		padding-top: 47px;
		color: rgba(255,255,255,.7);
	}
	.footerWrap {
		width: 97%;
		margin: 0 auto;
	}
	.footerWrap ul {
		display: flex;
	}
	.footerWrap .contentWrap .joinWrap {
		margin-bottom: 35px;
	}
	.footerMenu {
		color: rgba(255,255,255,.7);
		text-decoration-line: none;
		margin-right: 25px;
	}
	.footerMenu.udLine {
		color: #fff;
		text-decoration-line: underline;
	}
	.copyright {
		text-transform: capitalize;
	}
	.copyright span {
		text-transform: uppercase;
	}
	.contentWrap li p {
		line-height: 25px;
		margin-bottom: 0;
	}
	.contentWrap li p:nth-child(3),
	.contentWrap li p:nth-child(4),
	.contentWrap li p:nth-child(5) {
		display: inline-block;
		margin-right: 10px;
	}
</style>
