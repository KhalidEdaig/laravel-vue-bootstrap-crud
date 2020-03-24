<template>
	<div>
		<div class="row mb-4">
			<div class="col-10">
				<h3 class="h2">Edit Book</h3>
			</div>
			<div class="col-2">
				<router-link to="/" class="nav-item nav-link btn btn-success">View All Book</router-link>
			</div>
		</div>
		<hr />
		<div class="view zoom px-2 py-2">
			<div class="row justify-content-center">
				<div class="col-md-6">
					<form @submit.prevent="updateBook">
						<div class="form-group">
							<label>Name</label>
							<input type="text" class="form-control" v-model="book.name" />
						</div>
						<div class="form-group">
							<label>Author</label>
							<input type="text" class="form-control" v-model="book.author" />
						</div>
						<div class="text-center">
							<button type="submit" class="btn btn-warning">Update Book</button>
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
	created() {
		this.axios
			.get(`http://localhost:8000/api/book/edit/${this.$route.params.id}`)
			.then(response => {
				this.book = response.data;
				// console.log(response.data);
			});
	},
	methods: {
		updateBook() {
			this.axios
				.post(
					`http://localhost:8000/api/book/update/${this.$route.params.id}`,
					this.book
				)
				.then(response => {
					this.$router.push({ name: "home" });
				});
		}
	}
};
</script>
