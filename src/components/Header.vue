<template>
	<div class="header">
		<div class="headline text-uppercase">
			<h1
				@click="$router.push('/')"
				class="logo"
			></h1>
		</div>
		<GNB />
		<!-- <v-btn
			flat
			class="menu-icon"
		>
			<span class="mr-2 hide">햄버거 메뉴</span>
		</v-btn> -->
	</div>
</template>

<script>
import GNB from '@/components/GNB'

export default {
	components: {
		GNB
	}
}
</script>

<style>
	.header {
		background: rgba(0, 0, 0, .6);
		position: fixed;
		width:100%;
		height: 60px;
		z-index: 999;
		padding: 0 5vw
	}
	.logo {
		background: url(~@/assets/logo.png) 0 0 no-repeat;
		background-size: cover;
		width: 218px;
		height: 48px;
		cursor: pointer;
		float: left;
		margin-top:4px
	}
	.menu-icon {
		background: url(~@/assets/menu-btn.png) 0 0 no-repeat;
		background-size: contain;
		width: 37px;
		height: 23px;
	}
	.v-btn.menu-icon {
		margin: 0;
		min-width: auto;
	}
</style>
