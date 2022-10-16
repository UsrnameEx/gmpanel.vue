<template>
	<div class="content">
		<Header></Header>
		<main class="container">
			<section class="section-content py-3">
				<div class="row">
					<aside class="col-lg-3">
						<nav class="sidebar card py-2 mb-4">
							<ul class="nav flex-column" id="nav_accordion">
								<li v-for="item in menu" class="nav-item has-submenu">
									<router-link v-if="item.items" :to="item.link" class="nav-link" data-bs-toggle="collapse"
									             :data-bs-target="'#menu' + item.id" :aria-controls="'menu' + item.id">
										<span v-html="item.title"></span>
										<i class="bi small bi-caret-down-fill"></i>
									</router-link>
									<router-link v-else :to="item.link" class="nav-link">
										<span v-html="item.title"></span>
									</router-link>
									<ul v-if="item.items" class="submenu collapse" :class="{'show': displaySubMenu(item.items)}"
									    v-bind:id="'menu' + item.id">
										<li v-for="children in item.items">
											<router-link :to="children.link" class="nav-link">
												{{ children.title }}
											</router-link>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</aside>
					<div class="col-lg-9">
						<router-view></router-view>
					</div>
				</div>
			</section>
		</main>
		<Footer></Footer>
	</div>
</template>
<script>

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import eventBus from "@/eventBus";

export default {
	name: 'BasicView',
	
	data() {
		return {
			menu: []
		}
	},
	
	components: {Footer, Header},
	
	created() {
		eventBus.on('loadApp', (res) => {
			this.menu = res.sidebar.menu;
		});
	},
	
	methods: {
		displaySubMenu: function (data) {
			let status = false;
			let activeUrl = this.$route.path;
			data.forEach(function (item) {
				if (item.link === activeUrl) {
					status = true;
				}
			});
			
			return status;
		},
	}
}
</script>
<style>
</style>
