<template>
	<div class="mainInner">
		<ul>
			<li
				v-for="item in items"
				:key="item.key"
				class="mainCtLayout"
				:class="item.class"
			>
				<div
					class="overlay"
					:class="item.overlay"
				>
					<div class="mainTxtWrap">
						<div class="mainTitleWrap">
							<h4 class="contentTitle">{{ item.title }}</h4>
							<p class="contentSubTxt" v-html="item.subTxt"></p>
						</div>
						<router-link
							:to="{name: item.link}"
						>
							<button
								class="btn"
								:class="{
									withIcon: item.icon,
									solid: item.solid,
									gray: item.gray,
								}"
							>{{ item.btn }}</button>
						</router-link>
					</div>
					<div class="postWrap">
						<h5 class="postTitle">{{ item.postTitle }}</h5>
						<!-- {{ date() }} 날짜 들어가고 -->
						<p class="postSubTxt">{{ item.postSubTxt }}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{
					title: 'portfolio',
					subTxt: '국내 유수기업의 사업컨설팅과 함께',
					class: 'portFolio',
					overlay: 'wt',
					btn: '목록 보러가기',
					icon: true,
					link: 'pj-i-name',
				},
				{
					title: 'solution',
					subTxt: 'Non-ActiveX, Non-Plugin',
					class: 'solution',
					overlay: 'pp',
					btn: '목록 보러가기',
					icon: false,
					link: 'solution-name',
				},
				{
					title: 'news',
					subTxt: '# 두손스토리 <br># IT News',
					class: 'news',
					overlay: 'gradient',
					btn: '뉴스 더보기',
					icon: false,
					solid: true,
					gray: true,
					link: 'news-name',
					postTitle: '에델마을 방문 기부금 전달',
					postSubTxt: '지난 16일 SI사업부 배재성 과장과 경영지원실 이아람 대리가 두손소프트 대표로 서울시 구로구 천왕동에 위치한 에델마을을 찾아 기부금 전달을 하고 왔습니다.',
				},
			],
		}
	}
}
</script>

<style>
	.mainInner {
		width: 100vw;
		/* padding:0 5vw; */
		max-width: 1200px;
		margin: 0 auto;
	}
	.mainInner ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.mainCtLayout {
		text-align: center;
	}
	.mainCtLayout .contentTitle {
		font-size: 40px;
		text-transform: capitalize;
		font-weight: bold;
	}
	.mainCtLayout .contentSubTxt {
		font-size: 16px;
		font-weight: 300;
		font-family: "Noto Sans KR"
	}
	.mainCtLayout.portFolio {
		background: url(~@/assets/main-layout-02.jpg) center center no-repeat;
		background-size: cover;
		/* border: 1px solid #AEAEAE; */
		width:calc(50vw - 10px);
		max-width:590px;
		height: 50vw;
		max-height:590px;
		text-align: right;
	}
	.mainCtLayout.portFolio .mainTxtWrap {
		/* margin-left: 10vh; */
		width:100%
	}
	.mainCtLayout.portFolio .contentTitle {
		color: #000;
	}
	.mainCtLayout.solution .contentTitle {
		color: #fff;
	}
	.mainCtLayout.solution {
		background: #42424B;
		/* background: url(~@/assets/main-layout-02.png) 104px 176px no-repeat; */
		background-size: cover;
		width:calc(50vw - 10px);
		max-width:590px;
		height: 50vw;
		max-height:590px;
		color: #fff;
	}
	.mainCtLayout.solution .mainTxtWrap {
		margin: 0 auto;
	}
	.mainCtLayout.solution .contentSubTxt {
		margin-bottom: 34px;
	}
	.mainCtLayout.solution .btn {
		color: #fff;
	}
	.mainCtLayout.solution .contentSubTxt::after {
		display: block;
		content: '';
		border-right: 1px solid rgba(255,255,255,.5);
		width: 1px;
		height: 50px;
		margin: 0 auto;
		margin-top: 35px;
	}
	.mainCtLayout.news {
		width: 100vw;
		max-width:1200px;
		height: 50vw;
		max-height:calc(600px - 1vw);
		background: rgba(0,0,0,.3);
		text-align: left;
		margin-top: 20px;
		background: url(~@/assets/main-layout-03.png) 0 0 no-repeat;
		background-size: cover;
	}
	.mainCtLayout .overlay {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 80px;
	}

	/* overlay */
	.overlay.gradient {
		background: linear-gradient(to top, rgba(73,73,105,0.8), rgba(255,255,255,0));
	}
	.overlay.wt {
		background: rgba(65, 148, 168, 0.4);
	}
	.overlay.pp {
		background: rgba(16,16,27,.7);
	}
	.mainTxtWrap {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.mainCtLayout.news .contentTitle,
	.mainCtLayout.news .contentSubTxt {
		color: #333350;
	}
	.mainCtLayout.news .postWrap {
		width: 30vh;
		color: #fff;
		text-align: justify;
		align-self: flex-end;
		word-break: break-all;
	}
	.postTitle {
		font-size: 20px;
		line-height: 29px;
		margin-bottom: 20px;
	}
	.postSubTxt {
		font-weight: 300
	}
	
	/* type of btn */
	.btn {
		color: #000;
	}
	.btn.solid.gray {
		text-align: center;
		color: #000;
		background: rgba(255,255,255,.5);
		transition:all .4s
	}
	.btn.solid.gray:hover {
		background: rgba(255,255,255,.8);
	}
	.btn.withIcon::after {
		content: '';
		display: inline-block;
		margin-left: 9px;
		background: #000;
		background: url(~@/assets/icon-btn.png) 0 0 no-repeat;
		background-size: contain;
		width: 30px;
		height: 8px;
	}
</style>
