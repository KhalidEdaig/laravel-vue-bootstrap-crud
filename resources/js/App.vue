<template>
	<div class="container">
		<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet" />
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
			<router-link to="/" class="navbar-brand">
				<img class="logo" src="../../public/images/logo.png" alt="mind-dev-info" />
				<span class="h5">MDI-Tutorials</span>
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<div class="navbar-nav me-navbar">
					<router-link to="/" class="nav-item nav-link">Home</router-link>
					<router-link to="/search-and-reading-books" class="nav-item nav-link">Read Books</router-link>
				</div>
			</div>
		</nav>
		<div class="text-center mt-2">
			<a href="#" target="_blank">
				<div class="d-flex justify-content-center">
					<div class="laravel">
						<a href="https://laravel.com/docs/6.x" target="_blank" rel="noopener noreferrer">
							<i class="fab fa-laravel fa-2x"></i>
						</a>
					</div>
					<div class="vue">
						<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
							<i class="fab fa-vuejs fa-2x"></i>
						</a>
					</div>
					<div class="bootstrap">
						<a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
							<i class="fab fa-bootstrap fa-2x"></i>
						</a>
					</div>
				</div>
			</a>
			<br />
			<span class="text-secondary">Laravel & Vue & Bootstrap CRUD Single Page Application</span>
		</div>
		<br />

		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {};
</script>
<style lang="scss">
$fontSize_a: 1rem;
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	font-family: "Lato", sans-serif;
	.logo {
		width: 1.5rem;
		height: 1rem;
		&:hover {
			transform: rotate(180deg);
		}
	}
	.bootstrap {
		a {
			font-size: $fontSize_a;
			color: #0097e6;
			&:hover {
				padding-bottom: 0.2rem;
				border-bottom: 0.2rem solid #e84118;
			}
		}
	}
	.vue {
		margin-right: 4rem;
		a {
			font-size: $fontSize_a;
			color: #38c172;
			&:hover {
				padding-bottom: 0.2rem;
				border-bottom: 0.2rem solid #e84118;
			}
		}
	}
	.laravel {
		margin-right: 4rem;
		a {
			font-size: $fontSize_a;
			color: #e84118;
			&:hover {
				padding-bottom: 0.2rem;
				border-bottom: 0.2rem solid #e84118;
			}
		}
	}
	.view {
		background-color: #dcdde1;
	}
	.zoom {
		box-shadow: 0px 10px #dcdde1;
	}
}
</style>
