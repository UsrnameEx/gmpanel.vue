<template>
	<div class="servers">
		<div class="container-fluid p-3">
			<table class="table">
				<tbody>
				<servers-item v-for="server in servers" :server="server" :key="server.id"></servers-item>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import ServersItem from "@/views/pages/Main/components/servers/servers-item";
export default {
	name: "servers-list",
	components: {ServersItem},
	props: {
		servers: {
			type: Array,
			required: false
		}
	}
}
</script>

<style scoped>

</style>