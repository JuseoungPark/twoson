<template>
	<div>
		<v-btn
			class= "contactBtn white--text"
			fixed
			@click="dialog = !dialog"
		>
			<h4>{{ title }}</h4>
			<p>{{ copy }}</p>
		</v-btn>

		<!-- modal -->
		<v-dialog v-model="dialog" max-width="500px">
			<v-card>
				<v-card-text>
					<v-text-field
						label="이름"
						v-model="name"
					></v-text-field>
					<v-text-field
						label="전화번호"
						v-model="num"
					></v-text-field>
					<v-text-field
						label="이메일"
						v-model="mail"
					></v-text-field>
					<v-textarea
						name="input-7-1"
						label="내용을 입력해주세요."
						value=""
					></v-textarea>
					<small class="grey--text">* 개인정보는 연락을 위한 수단으로만 활용됩니다.</small>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn flat color="primary" @click="dialog = false">Submit</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	data () {
		return {
			dialog: false,

			// contact 채용소식
			title: 'contact',
			// copy: '현재 2019년 상반기 공개채용이 진행중입니다.',
		}
	},

	methods: {
		
	}
}
</script>

<style>
	.contactBtn {
		/* background: rgba(0,79,156,1) !important; */
		background: rgba(0,0,0,.7) !important;
		z-index: 999;
		padding: 20px;
		text-align: left;
		bottom: 20px;
		right: 20px;
		text-transform: uppercase;
		min-height: 56px;
	}
	/* .contactBtn .v-btn:before {
		position: none;
	} */
	.v-btn__content {
		flex-direction: column;
		align-items: flex-start;
	}
	.v-btn__content h4 {
		margin-bottom: 10px;
	}
</style>
