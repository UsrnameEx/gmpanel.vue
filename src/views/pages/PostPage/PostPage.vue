<template>
	<div class="content">
		<Breadcrumbs :items="breadcrumbs"></Breadcrumbs>
		<div class="bg-light">
			<div v-if="content.description" class="post p-3">
				<h1>{{ content.pageTitle }}</h1>
				<img v-if="content.image.src" v-bind:src="content.image.src"
				     v-bind:alt="content.image.alt">
				<span v-html="content.description.text"></span>
			</div>
		</div>
	</div>
</template>

<script>
import {useRequest} from "@/hooks/useRequest";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import {useMeta} from "@/hooks/useMeta";

export default {
	name: 'PostItem',
	
	data() {
		return {
			content: false,
			breadcrumbs: []
		}
	},
	
	components: {Breadcrumbs},
	
	created() {
		this.getPage();
	},
	
	methods: {
		getPage() {
			useRequest('PostPage/loadPage', {}, (res) => {
				this.content = res.content;
				this.breadcrumbs = res.breadcrumbs;
			});
		}
	}
}
</script>
<style scoped>
.post img {
	max-width: 100%;
	height: auto;
	margin-top: 1em;
	margin-bottom: 1em;
}

.post img:first-child {
	margin-top: 0;
}

h1 {
	margin: 0;
}
</style>