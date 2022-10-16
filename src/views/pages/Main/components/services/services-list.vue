<template>
	<div class="services">
		<div class="container padding">
			<div class="row padding">
				<service-card v-for="service in services" :service="service" :button="button" :key="service.id"></service-card>
			</div>
		</div>
	</div>
</template>

<script>
import ServiceCard from "@/views/pages/Main/components/services/service-card";
export default {
	name: "services-list",
	components: {ServiceCard},
	props:{
		services: {
			type: Array,
			required: false
		},
		button: {
			type: String,
			required: false,
			default: 'Посмотреть'
		}
	}
}
</script>

<style scoped>

</style>