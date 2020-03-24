<template>
	<div>
		<div class="row mb-4">
			<div class="col-10">
				<h3 class="h2">Add Books</h3>
			</div>
			<div class="col-2">
				<router-link to="/" class="nav-item nav-link btn btn-success">View All Book</router-link>
			</div>
		</div>
		<hr />
		<div class="view zoom px-2 py-2">
			<div class="row justify-content-center">
				<div class="col-md-6">
					<form @submit.prevent="addBook">
						<div class="form-group">
							<label>Name</label>
							<input type="text" class="form-control" v-model="book.name" />
						</div>
						<div class="form-group">
							<label>Author</label>
							<input type="text" class="form-control" v-model="book.author" />
						</div>
						<div class="text-center">
							<button type="submit" class="btn btn-primary">Add Book</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			book: {}
		};
	},
	methods: {
		addBook() {
			this.axios
				.post("http://localhost:8000/api/book/add", this.book)
				.then(
					response => this.$router.push({ name: "home" })
					// console.log(response.data)
				)
				.catch(error => console.log(error))
				.finally(() => (this.loading = false));
		}
	}
};
</script>
