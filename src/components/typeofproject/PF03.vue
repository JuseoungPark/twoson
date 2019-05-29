<template>
	<div>
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
					img: '01',
					title: 'ㅇㅇ'
				},
				{
					img: '01',
					title: 'ㄴㄴ'
				},
				{
					img: '02',
					title: 'ㅋㅋ'
				},
				{
					img: '02',
					title: 'ㅎㅎ'
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
