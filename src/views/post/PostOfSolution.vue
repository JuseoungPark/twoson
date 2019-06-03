<template>
	<div id="postWrap">
		<h3>활용 예시 태그입니다.<br> 클릭시 해당 사례를 모달 처리할 계획입니다.</h3>
		<div class="tagWrap">
			<Tag
				v-for="tag in tagOfSolution"
				:key="tag.key"
				:tagOfChild="tag.name"
			/>
		</div>
		<div
			v-for="(post, i) in posts"
			:key="i.key"
			class="postContentWrap"
		>
			<h2 class="postTitle">{{ i + post.title }}</h2>
			<!-- :src="'~@/assets/' + post.img + '.png'" 이거는 참고해보자 -->
			<figure class="postImgTitle">
				<img
				src="~@/assets/main-layout-03.png"
				alt="솔루션 타이틀"
				>
			</figure>

			<div class="postContent">
				<p>여기에 관리자 페이지에서 작성한 컨텐츠가 들어올 것입니다.</p>
			</div>
			<!-- <router-view/> 이것도 -->
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		// 솔루션 적용사례
		tagOfSolution: [
			{
				name: '삼성생명'
			},
			{
				name: '흥국생명'
			},
			{
				name: '미래에셋투자증권'
			},
			{
				name: '나이스신용평가정보'
			},
		],
		// 솔루션 포스트 내용
		posts: [
			{
				title: 'TS Web FC Note',
				img: 'main-layout-03',
			},

			
		],
		
		
	}),

	props: [

	],
}
</script>

<style>
	#postWrap {
		padding: 100px 20%;
		background: #303030;
		color: #fff;
		width: 100%;
		position: absolute;
		top: -64px;
		left: 0;
		z-index: 200;
	}
	.tagWrap {
		margin-bottom: 80px;
		display: flex;
		justify-content: center;
	}
	.postTitle {
		font-size: 34px;
	}
	.postImgTitle {
		width: 100%;
		height: 380px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 50px;
	}
	.postImgTitle img {
		width: 100%;
		height: auto;
	}
</style>
