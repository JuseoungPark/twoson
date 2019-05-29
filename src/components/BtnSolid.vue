<template>
	<button>{{ txtOfChild }}</button>
</template>

<script>
export default {
	props: [
		'txtOfChild'
	],
}
</script>

<style>
	/* 버튼 마진값 수정 요 */
	/* button:first-child {
		margin-right: 10px;
	} */
	button.solid {
		background: #3F3D43;
		padding: 5px 0;
		min-width: 150px;
		line-height: 20px;
		color: #fff;
	}
	button.ghost {
		border: 1px solid #707070;
		background: #ffffff;
		color: #000;
		padding: 5px 0;
		line-height: 20px;
		min-width: 150px;
	}
</style>
