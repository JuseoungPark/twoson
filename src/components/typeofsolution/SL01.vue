<template>
	<v-container grid-list-xl text-xs-center>
		<v-layout row wrap>
			<v-flex v-for="(item, i) in itemsOfSolution" :key="i" xs4>
				<v-card>
					<v-img
						class="white--text"
						height="140"
						:src="require(`@/assets/solution-${item.img}.png`)"
					></v-img>
					<v-card-title>
						<v-btn
							@click="dialog = true"
							class="black"
						>{{ item.title }}</v-btn>
						<!-- <router-link
							:to="{
								name: 'solution-post-name',
								params: {
									id: i + 1
								}
							}"
						>
							<span>{{ item.title }}</span>
						</router-link> -->
					</v-card-title>
				</v-card>
			</v-flex>
		</v-layout>

		<v-layout row justify-center>
      <v-btn color="primary" dark @click="dialog = true">팝업 뎁스 1</v-btn>
      <v-btn color="primary" dark @click="dialog2 = true">팝업 뎁스 2</v-btn>
      <v-btn color="primary" dark @click="dialog3 = true">팝업 뎁스 3</v-btn>
      
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
				<div class="modalContainerWrap">
					<div class="tagWrap">
						<v-btn color="primary" dark @click="dialog2 = !dialog2">팝업 들어갈 자리입니다.</v-btn>
						<Tag
							v-for="tag in tagOfSolution"
							:key="tag.key"
							:tagOfChild="tag.name"
						/>
					</div>
					<button
						@click="dialog = false"
						class="btnClose"
					></button>
					<div class="solutionContentWrap">
						<div class="solutionContentFullWrap">
							<h4 class="solutionTitle">TS Web FC Note</h4>
							<figure class="solutionThumbnail">
								<img src="~@/assets/portfolio-thumbnail-prudential.png" alt="">
							</figure>
							<h5 class="solutionSubTitle">두손소프트가 삼성과 함께 구축한 VR 시스템</h5>
							<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a.</p>
						</div>

						<div class="solutionContentFullWrap">
							<h5 class="solutionSubTitle">Lorem ipsum dolor sit amet.</h5>
							<div class="solutionContentHalfWrap">
								<figure class="solutionImg">
									<img src="~@/assets/portfolio-thumbnail-prudential.png" alt="">
								</figure>
								<p class="solutionTxt">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,</p>
							</div>
						</div>
					</div>

					<div style="flex: 1 1 auto;"></div>
				</div>
        <!-- <v-card tile>
					
          <v-card-text class="modalContainerWrap">
            <v-btn color="primary" dark @click="dialog2 = !dialog2">태그 들어갈것</v-btn>
						<div class="tagWrap">
							<h3>활용 예시 태그입니다.<br> 클릭시 해당 사례를 모달 처리할 계획입니다.</h3>
							<Tag
								v-for="tag in tagOfSolution"
								:key="tag.key"
								:tagOfChild="tag.name"
							/>
						</div>
						<button
							@click="dialog = false"
							class="btnClose"
						></button>
            <div class="solutionContentWrap">
							<h4 class="solutionInfoTitle">TS Web FC Note</h4>
							<figure class="solutionThumbnail">
								<img src="~@/assets/portfolio-thumbnail-prudential.png" alt="">
							</figure>
						</div>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card> -->
      </v-dialog>
      <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            <v-btn color="primary" dark @click="dialog3 = !dialog3">Open Dialog 3</v-btn>
            <v-select
              :items="select"
              label="A Select List"
              item-value="text"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click="dialog2=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-tile v-for="(item, i) in items" :key="i" @click="">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click="dialog3=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			// 솔루션 적용사례
			tagOfSolution: [
				{
					name: '삼성생명'
				},
				{
					name: '흥국생명'
				},
				{
					name: '미래에셋투자증권'
				},
				{
					name: '나이스신용평가정보'
				},
			],
			itemsOfSolution: [
				{
					img: '01',
					title: 'TS Web FC Note'
				},
				{
					img: '02',
					
					title: 'TS Web Scanner'
				},
				{
					img: '01',
					title: 'TS PDF WebViewer'
				},
				{
					img: '02',
					title: 'TS Web FC Note'
				},
			],

			dialog: false,
			dialog2: false,
			dialog3: false,
			notifications: false,
			sound: true,
			widgets: false,
			items: [
				{
					title: 'Click Me'
				},
				{
					title: 'Click Me'
				},
				{
					title: 'Click Me'
				},
				{
					title: 'Click Me 2'
				}
			],
			select: [
				{ text: 'State 1' },
				{ text: 'State 2' },
				{ text: 'State 3' },
				{ text: 'State 4' },
				{ text: 'State 5' },
				{ text: 'State 6' },
				{ text: 'State 7' }
			]
		}
	}
}
</script>

<style>
	.v-dialog {
		background: #303030;
		color: #fff;
		/* overflow-y: auto; */
	}
	.btnClose {
		background: url(~@/assets/btn-popup-close-white.png) 0 0 no-repeat;
		background-size: contain;
		width: 30px;
		height: 30px;
		position: fixed;
		right: 10%;
		top: 15%;
	}
	.solutionContentWrap {

	}
	.modalContainerWrap {
		padding: 14% 18% 0 !important;
		width: 100%;
	}
	.solutionContentWrap .solutionTitle {
		margin-bottom: 16px;
		font-size: 40px;
	}
	.solutionContentFullWrap {
		margin-bottom: 100px;
	}
	.solutionContentHalfWrap {
		display: flex;
		justify-content: space-between;
	}
	.solutionContentHalfWrap .solutionImg {
		width: 48%;
		height: 300px;
		overflow: hidden;
	}
	.solutionContentHalfWrap .solutionTxt {
		width: 48%;
	}
	.solutionImg img {
		width: auto;
		height: 100%;
	}
	.solutionThumbnail {
		width: 100%;
		height: 480px;
		overflow: hidden;
		margin-bottom: 56px;
	}
	.solutionThumbnail img {
		width: 100%;
	}
	.tagWrap {
		margin-bottom: 80px;
	}
	.solutionSubTitle {
		font-size: 26px;
		color: #E9E9E9;
		font-weight: normal;
		margin-bottom: 30px;
	}
	.solutionSubTitle + p,
	.solutionTxt {
		font-size: 20px;
		color: #CBCBCB;
		font-weight: lighter;
		word-break: keep-all;
	}

@media (min-width: 1920px) {
	.modalContainerWrap {
		padding: 14% 22% 0 !important;
	}
	.solutionThumbnail {
		height: 520px;
	}
}
</style>
