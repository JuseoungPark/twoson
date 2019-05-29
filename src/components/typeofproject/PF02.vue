<template>
	<div>
		<h2>완료한 프로젝트</h2>

		<v-container grid-list-xl text-xs-center>
			<v-layout row wrap>
				<v-flex v-for="(item, i) in items" :key="i" xs4>
					<v-card>
						<v-img
							class="white--text"
							height="140"
							:src="require(`@/assets/area-${item.img}.png`)"
						></v-img>
						<v-card-title>
							<span>{{ item.title }}</span>
						</v-card-title>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{
					img: '02',
					title: '삼성생명'
				},
				{
					img: '01',
					title: 'NH손해보험'
				},
				{
					img: '02',
					title: '푸르덴셜'
				},
				{
					img: '01',
					title: 'dsfsdf'
				},
				{
					img: '02',
					title: 'dsfsdf'
				},
				{
					img: '01',
					title: 'dsfsdf'
				},
				{
					img: '02',
					title: 'dsfsdf'
				},
				{
					img: '01',
					title: 'dsfsdf'
				},
				{
					img: '02',
					title: 'dsfsdf'
				}
			]
		}
	}
}
</script>

<style>

</style>
