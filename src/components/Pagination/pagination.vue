<template>
	<div class="pagination-block bg-light">
		<nav v-if="countPages > 1">
			<paginate
					v-model="page"
					:page-count="countPages"
					:page-range="5"
					:margin-pages="2"
					:click-handler="changeHandler"
					:prev-text="'&laquo;'"
					:next-text="'&raquo;'"
					:prev-class="'page-item'"
					:prev-link-class="'page-link'"
					:next-class="'page-item'"
					:next-link-class="'page-link'"
					:container-class="'pagination justify-content-center'"
					:page-class="'page-item'"
					:page-link-class="'page-link'">
			</paginate>
		</nav>
	</div>
</template>

<script>
import Paginate from "vuejs-paginate-next";

export default {
	name: "pagination",
	components: {Paginate},
	props: {
		page: {
			type: Number,
			required: true,
			default: 1
		},
		countPages: {
			type: Number,
			required: true,
			default: 1
		},
		changeHandler: {
			type: Function,
			required: true
		}
	}
}
</script>

<style scoped>
.pagination-block .pagination {
	padding: 0.4rem 0 0.4rem 0;
	--bs-pagination-border-radius: 0;
	--bs-pagination-border-width: 0;
	--bs-pagination-custom-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
	
	--bs-pagination-bg: --bs-pagination-custom-color;
	--bs-pagination-disabled-bg: --bs-pagination-custom-color;
	--bs-pagination-color: black;
}
</style>