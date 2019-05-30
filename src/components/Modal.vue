<template>
	<div
		class="modal"
		v-if="visible"
		@click.self="handleWrapperClick"
	>
		<div class="modal__dialog">
			<header class="modal__header">
				<h2 class="postTitle">{{ popupTitleOfChild }}</h2>
				<button @click="$emit('update:visible', !visible)">Close</button>
			</header>
			<div class="modal__body">
				<slot></slot>
				<img :src="require(`@/assets/${img}.png`)" alt="">
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
		popupTitleOfChild: {
			type: String,
			require: false,
		}
	},

	methods: {
		handleWrapperClick () {
			this.$emit(`update:visible`, false)
		}
	},

	data: () => ({
		img: 'solution-ts-web-scanner-cr'
	}),
}
</script>

<style>
	.modal {
		background-color: rgba(0,0,0,.9);
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		position: fixed;
		overflow: auto;
		margin: 0;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal__dialog {
    width: 100%;
    background: #303030;
		color: #fff;
		padding: 20% 18%;
	}
@media (min-width: 1920px) {
	.modal__dialog {
		padding: 20% 28%;
	}
}
	/* ::-webkit-scrollbar {
		display:none;
	} */
	header.modal__header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		/* margin-bottom: 50px; */
	}
	.modal__body {
		margin: 0 auto;
		/* padding: 16px 100px; */
		text-align: center;
		background: rgba(0,0,0,.2);
	}
	.modal__body img {
		width: 100%;
	}
</style>
