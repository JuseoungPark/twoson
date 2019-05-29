<template>
	<button class="tagBtn"># {{ tagOfChild }}</button>
</template>

<script>
export default {
	props: [
		'tagOfChild'
	],

	// 임시방편
	// data () {
	// 	return {
	// 		tagOfChild: '삼성'
	// 	}
	// }
}
</script>

<style>
	.tagBtn {
		background: #0054A6;
		color: #fff;
		padding: 6px 27px 5px;
		border-radius: 12px;
		font-size: 16px;
		margin-right: 10px;
		font-weight: bold;
		text-transform: capitalize;
	}
	.tagBtn:last-of-type {
		margin-right: 0;
	}
</style>
