<template>
	<div class="infoWrap wt">
		<div class="inner column">
			<h4 class="infoTitle">company<br>organization</h4>
			<div class="infoContentWrap w-100">
				<BusinessAreaDetails />
			</div>	
		</div>
	</div>
</template>

<script>
import BusinessAreaDetails from '@/components/BusinessAreaDetails'

export default {	
	components: {
		BusinessAreaDetails
	}
}
</script>

<style>
	.inner.column {
		flex-direction: column;
	}
	.businessAreaWrap {
		display: flex;
		justify-content: space-around;
	}
</style>
