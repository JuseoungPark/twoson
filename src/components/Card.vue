<template>
	<v-card class="cardWrap">
		<v-img
			min-height="334"
			:src="require(`@/assets/${imgOfChild}`)"
			class="cardImages"
		>
			<v-card-title class="cardTitleWrap">
				<div
					class="cardTitle"
				>
					<h3
						class="cardMainTitle"
						v-html="titleOfChild"
					></h3>
					<p
						class="cardSubTitle"
						v-html="subTitleOfChild"
					></p>
				</div>
				<span></span>
			</v-card-title>
		</v-img>
	</v-card>
</template>

<script>
export default {
	name: 'SolutionCard',

	props: {
		imgOfChild: String,
		titleOfChild: String,
		subTitleOfChild: String,
	},

}
</script>

<style>
	.cardWrap {
		position: relative;
	}
	.cardTitleWrap {
		position: absolute;
		bottom: 0;
		width: 100%;
		background: rgba(255,255,255,.9);
		padding: 20px;
		min-height: 95px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		transition-duration: 0.5s;
	}
	.cardTitle {
		text-align: left;
		letter-spacing: -0.04em;
	}
	.cardMainTitle {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 5px;
		text-transform: capitalize;
	}
	.cardMainTitle b {
		text-transform: uppercase;
	}
	.cardSubTitle {
		font-size: 16px;
		word-break: keep-all;
	}

	/* card hover */
	.cardWrap:hover .cardTitleWrap {
		background: rgba(40,40,57,.85);
		height: 100%;
		padding: 50px;
		cursor: pointer;
	}
	.cardWrap:hover .cardTitle {
		color: #fff;
	}
	.cardWrap:hover .cardMainTitle,
	.cardWrap:hover .cardMainTitle b {
		font-size: 18px;
		font-weight: normal;
		margin-bottom: 24px;
	}
	.cardWrap:hover .cardSubTitle {
		font-size: 26px;
		font-weight: lighter;
	}
</style>
