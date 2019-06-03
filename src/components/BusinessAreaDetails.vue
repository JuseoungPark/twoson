<template>
	<div class="businessAreaDetails">
    <div>
      <ul class="tabArea">
        <li class="areaName" v-for="(area, index) in areas" :key="index" @click="clicktab(index)">
            {{ area.name }}
            <img :src="require(`@/assets/area-${area.img}.png`)" :alt="area.alt">
        </li>
      </ul>
      <div class="tabCont">
        
          <div class="areaContentWrap" v-for="(area, index) in areas" :key="index" ref="areaContentWrap"
          v-show="indexNumber"
          >
            <!-- <div :class="{'show' : selected === index}"> -->
            <h4 class="titleTxt">{{ area.title }}</h4>
            <p class="subTxt" v-html="area.subTxt"></p>
            <router-link
              :to="{name: area.routeName}"
            >{{ area.cta }}</router-link>
          </div>
      </div>
    </div>
		<!-- <v-tabs
      v-model="active"
			fixed-tabs
    >
      <v-tab
        v-for="area in areas"
        :key="area.key"
        ripple
        class="tabArea"
      >
        <p class="areaName">{{ area.name }}</p>
        <img :src="require(`@/assets/area-${area.img}.png`)" :alt="area.alt">
      </v-tab>
      <v-tab-item
        v-for="area in areas"
        :key="area.key"
        class="tabContent"
      >

        <v-card flat>
          <v-card-text
						class="areaContentWrap"
					>
            <h4 class="titleTxt">{{ area.title }}</h4>
            <p class="subTxt" v-html="area.subTxt"></p>
            <router-link
              :to="{name: area.routeName}"
            >{{ area.cta }}</router-link>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs> -->
	</div>
</template>

<script>
export default {
	data () {
      return {
        active: null,
        areaContentWrapShowShowShow : false,
        indexNumber : null,
        areas: [
          {
            name: '전략기획본부',
            img: '01',
            alt: '??',
            title: '두손기획이 떴다',
            subTxt: '두손 전략기획본부는 제안의 신이라 불립니다.<br> 주요사업인 금융, 보험 업종을 넘어 다양한 사업분야 확장을 위해 노력하고 있습니다.<br> 2019년에는 NICE신용평가정보와 GA를 위한 기업분석시스템을 기획했습니다.',
            cta: '두손의 제안',
            routeName: 'pj-p-name',
          },
          {
            name: 'SI',
            img: '02',
            alt: '',
            title: 'SI 영역입니다.',
            subTxt: '~',
            cta: '두손의 프로젝트',
            routeName: 'pj-c-name',
          },
          {
            name: 'R&D',
            img: '01',
            alt: '',
            title: 'R&D 영역입니다.',
            subTxt: '~',
            cta: '두손의 솔루션',
            routeName: 'solution-name',
          },
          {
            name: 'Design',
            img: '01',
            alt: '',
            title: '디자인 영역입니다.',
            subTxt: '~',
          },
          {
            name: 'Support',
            img: '01',
            alt: '',
            title: '경영지원팀 영역입니다.',
            subTxt: '~',
          },
        ],
      }
		},
		
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      },
      clicktab (index) {
        // console.log(index)
        let indexNumber = index
        let e = this.$refs.areaContentWrap[indexNumber]
        // return this.indexNumber
        // console.log(e)
        this.areaContentWrapShow = this.$refs.areaContentWrap[indexNumber]
        console.log(this.areaContentWrapShow)// 해당 div
        console.log(indexNumber)
        this.indexNumber = indexNumber
        console.log(indexNumber,this.indexNumber)
        return this.indexNumber
      }
    }
}
</script>


<style>
  .show {
    display: block
  }
  .none {
    display: none
  }
  .areaName {
    float:left;
    margin-right: 100px;
    text-align: center;
    cursor: pointer;
    color:rgba(0,0,0,.4);
    transition: all .3s
  }
  .areaName:hover {
    color:rgba(0,0,0,1)
  }
  .tabArea:after {
    content :"";
    display:block;
    clear: both;
  }
  .areaContentWrap:first-of-type {
    display: block
  }
	.areaContentWrap {
    display: none;
  }
  .tabCont {
    background: #f1f1f1;
    height: calc(60vh - 60px - 152px);
    padding: 2.5vw;
    position:relative
  }
  .tabArea {
    position: relative;
    margin-bottom: 40px;
  }
  .tabArea img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    z-index: -1;
  }
  .areaName {
    font-weight: bold;
    letter-spacing: -0.04em;
    font-size: 1.6rem;
  }
  .tabContent {
    margin-top: 40px;
  }
  .areaContentWrap .titleTxt {
    margin-bottom: 16px;
    font-size: 16px
  }
  .areaContentWrap .subTxt {
    line-height: 24px
  }
  .areaContentWrap a {
    text-decoration: none;
    display: inline-block;
    border:1px solid rgba(0,0,0,.4);
    text-align: center;
    padding:10px 50px;
    color:#000;
    margin-top:10px;
    transition: all .3s;
    position: absolute;
    bottom:2.5vw
  }
  .areaContentWrap a:hover {
    background: #fff
  }
</style>
