<template>
	<div
		class="modal"
		v-if="visible"
		@click.self="handleWrapperClick"
	>
		<div
			class="modal__dialog"
		>
			<div class="closeWrap">
				<button
					@click="$emit('update:visible', !visible)"
					class="closeBtn"
				><span>Close</span></button>
			</div>
			<ModalHeader
				:popupTitleOfChild="popupTitle"
				:orderingAgent="orderingAgent"
				:description="description"
			/>
			<div class="modal__body">
				<slot></slot>
			</div>
			<nav id="pf-nav" class="pf-nav">
				<ul class="pf-nav-list">
					<li
						v-for="pjTab in tabs"
						:key="pjTab"
						class="pf-nav-item"
					>
						<a
							:href="`${pjTab.zzz}`"
							class="pf-nav-a"
							@click="is-current"
						>{{ pjTab.name }}</a>
					</li>
				</ul>
			</nav>
			<Require></Require>
			<Conclusion></Conclusion>
			<Actualization></Actualization>
			<Outcome></Outcome>

			<!-- 프로젝트 문의 -->
			<div class="project-inquiry">
				<h3 class="head-copy">두손소프트가 함께 고민하겠습니다</h3>
				<button
					class="btn-ghost wt"
				>프로젝트 문의</button>
			</div>
		</div>
	</div>
</template>

<script>
import ModalHeader from '@/components/Modal-Header'
import Require from '@/views/post/PF-Content-01'
import Conclusion from '@/views/post/PF-Content-02'
import Actualization from '@/views/post/PF-Content-03'
import Outcome from '@/views/post/PF-Content-04'

export default {
	name: 'my-modal',

	props: {
		visible: {
			type: Boolean,
			require: true,
			default: false,
		},
	},

	methods: {
		handleWrapperClick () {
			this.$emit(`update:visible`, false)
		}
	},

	data: () => ({

		orderingAgent: 'SAMSUNG X 두손소프트',
		popupTitle: '삼성과 두손소프트가 함께 작업한 <br> 삼성페이 VR 프로젝트',
		description: 'Samsung Pay(삼성 페이)는 기존 플라스틱 카드로 결제할 수 있는 거의 모든 곳에서 사용 가능한 간편하고 안전한 모바일 결제 서비스입니다. MST 결제방식과 NFC 결제방식을 모두 지원하여, 다른 어떤 모바일 결제 서비스보다도 훨씬 더 많은 곳에서 사용이 가능합니다. <br> 또한 Samsung Pay 및 신용카드/체크카드 사용 내역을 한 곳에서 제공하고, 현명한 소비생활을 위한 팁을 제공합니다.',


		tabs: [
			{
				zzz: '#',
				name: '고객사 요구사항',
			},
			{
				zzz: '#',
				name: '핵심과제 도출',
			},
			{
				zzz: '#',
				name: '실행안 구체화',
			},
			{
				zzz: '#',
				name: '구축 성과',
			},
		],
	}),

	components: {
		ModalHeader,
		Require,
		Conclusion,
		Actualization,
		Outcome,
	},

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
		overflow: hidden;
		margin: 0 auto;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal__dialog {
    width: 100%;
		height: 100%;
    background: #fff;
		color: #555;
		overflow: auto;
		background-repeat: no-repeat;
		background-size: cover;
	}

	/* tab */
	.pf-nav-list {
		display: flex;
		background-color: #fff;
    box-shadow: 0 8px 16px rgba(58,59,60,.2);
		position: relative;
		z-index: 10;
	}
	.pf-nav-item {
		width: 25%;
		text-align: center;
	}
	.pf-nav-item:first-child .pf-nav-a {
    border-left: 0;
	}
	.pf-nav-a.is-current, .pf-nav-a:hover {
		border-left-color: #555;
    background-color: #3a3b3c;
    color: #fff;
	}
	.pf-nav-a {
    padding: 18px 0;
		display: block;
		border-left: 1px solid #555;
		font-size: 18px;
	}
	a {
		color: #555;
    background-color: transparent;
	}

	/* 프로젝트 문희 */
	.project-inquiry {
		/* height: 200px; */
		min-height: 120px;
		background: #0054A6;
		color: #fff;
		text-align: center;
		padding: 42px 0;
	}
	.head-copy {
		font-size: 34px;
		font-weight: normal;
		margin-bottom: 30px;
	}
	.btn-ghost.wt {
		border: 1px solid #fff;
	}
	.project-inquiry .btn-ghost {
		padding: 8px 32px;
		letter-spacing: -0.04em;
		font-size: 26px;
		font-weight: lighter;
	}
</style>
