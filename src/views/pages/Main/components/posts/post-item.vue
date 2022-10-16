<template>
	<div class="post__item">
		<a href="#">
			<div class="col-12 post-item">
				<div class="card border-dark">
					<div class="card-body">
						<h5 class="card-title"><span v-html="post.title"></span></h5>
						<p class="card-text"><span v-html="post.shortDescription"></span></p>
						<p class="card-text"><small class="text-muted"><span v-html="post.datePublication"></span></small>
						</p>
					</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: "post-item",
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>

</style>