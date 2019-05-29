<template>
	<div
		class="modal"
		v-if="visible"
	>
		<div class="modal__dialog">
			<header class="modal__header">
				<span>{{ title }}</span>
			</header>
			<div class="modal__body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-modal',

	props: {
		visible: {
			type: Boolean,
			require: true,
			default: false,
		},
		title: {
			type: String,
			require: false,
		}
	}
}
</script>

<style>
	.modal {
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: #000;
	}
</style>
