<template>
	<footer class="container-fluid">
		<div class="container">
			<div class="row padding text-center">
				<div class="col-md-4 text-start">
					<h2>Полезные ссылки</h2>
					<ul>
						<li><a href="#">Ссылка с какиим-либо названием #1</a></li>
						<li><a href="#">Ссылка с каким-то другим названием #2</a></li>
						<li><a href="#">Ссылка #3</a></li>
					</ul>
				</div>
				<div class="col-md-4 text-start">
					<h2>Полезные материалы</h2>
					<ul>
						<li><a href="#">Ссылка с какиим-либо названием #1</a></li>
						<li><a href="#">Ссылка с каким-то другим названием #2</a></li>
						<li><a href="#">Ссылка #3</a></li>
					</ul>
				</div>
				<div class="col-md-4">
					<h2>Наши контакты</h2>
					<a href="#"><i class="fa-brands fa-discord">Twitter</i></a>
					<a href="#"><i class="fab fa-youtube">YouTube</i></a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	
	data() {
		return {
			footer: false,
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
