<template>
	<header class="sticky-top">
		<nav class="navbar navbar-expand-md navbar-light bg-light">
			<div class="container-fluid">
				<a href="/" class="navbar-brand">Project Name</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
				        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
				        aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item active">
							<a href="#" class="nav-link">Главная</a>
						</li>
						<li class="nav-item active">
							<a href="/posts" class="nav-link">Блог</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link">Про нас</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link">Контакты</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
	
	components: {},
	
	data() {
		return {
			header: false,
			userData: false,
		}
	},
	
	methods: {
		scrollTop() {
			$('html, body').animate({
				scrollTop: 0
			}, 100)
		}
	}
}
</script>
