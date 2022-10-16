<template>
	<div class="col-md-4">
		<div class="card">
			<img :src="service.image"
			     class="card-img-top"
			     alt="">
			<div class="card-body">
				<h4 class="card-title"><span v-html="service.title"></span></h4>
				<p class="card-text"><span v-html="service.text"></span></p>
				<router-link v-bind:to="service.link" class="btn btn-warning" exact-active-class=""><span v-html="button"></span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "service-card",
	props: {
		service: {
			type: Object,
			required: true
		},
		button: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>

</style>