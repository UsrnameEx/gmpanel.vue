<template>
	<div class="content">
		<Breadcrumbs :items="breadcrumbs"></Breadcrumbs>
		
		<div class="bg-light">
			<posts-list :posts="posts"></posts-list>
		</div>
		
		<pagination :page="page" :countPages="countPages" :changeHandler="changePage"></pagination>
	</div>
</template>

<script>
import {useRequest} from "@/hooks/useRequest";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import PostsList from "@/components/Posts/posts-list";
import Pagination from "@/components/Pagination/pagination";

export default {
	name: 'PostsPage',
	
	data() {
		return {
			breadcrumbs: [],
			posts: [],
			page: 1,
			countPages: 100
		}
	},
	
	components: {Pagination, PostsList, Breadcrumbs},
	
	created() {
		this.getPage();
		
		this.getPosts();
	},
	
	methods: {
		getPage() {
			useRequest('PostsPage/loadPage', {}, (res) => {
				this.breadcrumbs = res.breadcrumbs;
			});
		},
		
		getPosts() {
			let params = {
				page: this.page
			};
			
			useRequest('PostsPage/getPosts', params, (res) => {
				if(res.status === 'ok') {
					this.posts = res.items;
					this.countPages = res.countPages;
				}
			})
		},
		
		changePage() {
			this.getPosts()
			
			this.scrollToTop()
		},
		
		scrollToTop() {
			window.scrollTo(0, 0);
		},
	}
}
</script>
<style scoped>
.posts:last-child {
	margin-bottom: 0.8rem;
}
</style>