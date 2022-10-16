<template>
	<div class="posts">
		<div class="container-fluid">
			<div class="row p-1">
				<post-item v-for="post in posts" :post="post" :key="post.id"></post-item>
			</div>
		</div>
	</div>
</template>

<script>
import PostItem from "@/views/pages/Main/components/posts/post-item";
export default {
	name: "posts-list",
	components: {PostItem},
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>

</style>