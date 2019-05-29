<template>
	<v-toolbar app>
		<v-toolbar-title class="headline text-uppercase">
			<h1
				@click="$router.push('/')"
				class="logo"
			></h1>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<GNB />
		<!-- <v-btn
			flat
			class="menu-icon"
		>
			<span class="mr-2 hide">햄버거 메뉴</span>
		</v-btn> -->
	</v-toolbar>
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
	.logo {
		background: url(~@/assets/logo.png) 0 0 no-repeat;
		background-size: cover;
		width: 218px;
		height: 48px;
		cursor: pointer;
	}
	.v-toolbar,
	.v-toolbar__content {
		height: 82px !important;
		border-bottom: 1px solid #D9D9D9;
	}
	.theme--light.v-toolbar {
		background: rgba(255,255,255,.4);
		color: #000;
	}
	.v-btn__content {
		color: #fff;
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
