<template>
	<div class="solution">

		<!-- TS 솔루션소개 배너 영역 -->
		<SoluitonBanner />

		<!-- 솔루션 pord 영역 -->
		<SL01 />

		<v-container grid-list-xl text-xs-center>
			<v-layout row wrap>
				<v-flex v-for="(item, i) in items" :key="i" xs4>
					<SolutionCard
						:imgOfChild="item.img"
						:titleOfChild="item.title"
						:subTitleOfChild="item.subTitle"
						class="solutionCard"
					/>
					<button @click="handleClickButton">얍</button>
				</v-flex>
			</v-layout>
		</v-container>

		<app-my-modal
      :popupTitleOfChild="popupTitle"
      :visible.sync="visible"
		>
      <!-- <div>
        This is modal body
      </div> -->
    </app-my-modal>

	</div>
</template>

<script>
import SoluitonBanner from '@/components/banner/SoluitonBanner'
import SL01 from '@/components/typeofsolution/SL01'
import SolutionCard from '@/components/Card'

// 모달 데려올거야
import { mapGetters, mapActions } from 'vuex'
import myModal from '@/components/Modal'

export default {
	components: {
		SoluitonBanner,
		SL01,
		SolutionCard,
		appMyModal: myModal,
	},

	data () {
		return {
			items: [
				{
					img: 'solution-ts-web-fc-note.jpg',
					title: '<b>ts</b> web <b>fc</b> note',
					subTitle: '사진촬영부터 작성, 수정, 데이터 전송까지 <br> 오직 스트리밍 솔루션',
				},
				{
					img: 'solution-ts-pdf-web-viewer.png',
					title: '<b>ts pdf</b> web viewer',
					subTitle: '청약서, 설명서, 동의서 등.. <br> 플러그인 설치없이 PDF 열람가능한 솔루션',
				},
				{
					img: 'solution-ts-web-scanner.png',
					title: '<b>ts</b> web scanner',
					subTitle: '사진촬영, 자동보정, 수동보정, 전송까지 <br> 오직 스트리밍 솔루션',
				},
			],
			// 팝업
			visible: false,
			popupTitle: 'TS PDF Web Viewer',
		}
	},

	methods: {
		handleClickButton () {
      this.visible = !this.visible
    }
	},
}
</script>

<style>
	.v-content__wrap > .solution {
		padding: 82px 0 0 0;
	}
	.cardWrap.solutionCard:hover .cardTitleWrap {
		background: rgba(41,158,224,.95);
	}
</style>
