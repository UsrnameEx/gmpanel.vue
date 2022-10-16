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
import PostItem from "@/components/Posts/post-item";
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

<style>
.posts a {
	text-decoration: none;
	color: #222;
	margin-top: 1em;
}

.posts:first-child {
	padding-top: 0.8rem;
}

.posts:last-child {
	padding-bottom: 0.8rem;
}

</style>