<template>
	<tr>
		<td><span v-html="server.address"></span></td>
		<td><span v-html="server.name"></span></td>
		<td><span v-html="server.online"></span></td>
		<td><span v-html="server.map"></span></td>
	</tr>
</template>

<script>
export default {
	name: "servers-item",
	props: {
		server:{
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>

</style>