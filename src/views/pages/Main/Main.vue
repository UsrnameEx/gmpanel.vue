<template>
	<div v-if="content" id="content">
		<div class="bg-light">
			<servers-list :servers="content.servers"></servers-list>
			<posts-list :posts="content.posts"></posts-list>
			<div class="information">
				<div class="container-fluid">
					<div class="row p-3">
						<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<p class="lead">
								<span v-html="content.about.text"></span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<services-list :services="content.services.items" :button="content.services.button"></services-list>
		</div>
	</div>
</template>

<script>
import {useRequest} from "@/hooks/useRequest";

import ServersList from "@/views/pages/Main/components/servers/servers-list";
import PostsList from "@/components/Posts/posts-list";
import ServicesList from "@/views/pages/Main/components/services/services-list";

export default {
	name: 'Main',
	
	data() {
		return {
			content: false
		}
	},
	
	components: {ServicesList, PostsList, ServersList},
	
	created() {
		this.getContent();
	},
	
	methods: {
		getContent() {
			useRequest('MainPage/loadPage', {}, (res) => {
				this.content = res.content;
			});
		}
	}
}
</script>
<style scoped>

</style>