<template>
	<nav v-if="items" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
		<ol class="breadcrumb bg-light">
			<li v-for="(item, i) in items" :key="i" class="breadcrumb-item" :class="{active: i === items.length - 1}">
				<router-link v-if="item.link" :to="item.link">{{ item.title }}</router-link>
				<span v-else v-html="item.title"></span>
			</li>
		</ol>
	</nav>
</template>

<script>
export default {
	name: 'Breadcrumbs',
	
	props: {
		items: {
			type: Array,
			required: true
		}
	},
}
</script>

<style scoped>
.breadcrumb a {
	text-decoration: none;
	color: black;
}

.breadcrumb {
	padding: 0.4rem 1.5rem 0.4rem;
	margin-bottom: 0.4rem;
}

@media (max-width: 768px) {
	.breadcrumb {
		display: inline-block !important;
		width: 100%;
	}
	
	.breadcrumb .breadcrumb-item:first-child {
		margin-left: 0.6rem;
	}
}
</style>
