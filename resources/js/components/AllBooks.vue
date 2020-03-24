<template>
	<div>
		<div class="row mb-4">
			<div class="col-10">
				<h3 class="h2">All Books</h3>
			</div>
			<div class="col-2">
				<router-link to="/add" class="nav-item nav-link btn btn-success">Add Book</router-link>
			</div>
		</div>
		<hr />
		<div class="px-2 py-2 rounded view zoom">
			<div class="alert alert-danger" v-show="books.length<=0">Sorry : Rigth now not exist books</div>
			<table class="table table-bordered table-dark" v-show="books.length>0">
				<thead>
					<tr>
						<!-- <th>ID</th> -->
						<th>Name</th>
						<th>Author</th>
						<th>Created At</th>
						<th>Updated At</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="book in books" :key="book.id">
						<!-- <td>{{ book.id }}</td> -->
						<td>{{ book.name }}</td>
						<td>{{ book.author }}</td>
						<td>{{ book.created_at }}</td>
						<td>{{ book.updated_at }}</td>
						<td class="text-center">
							<div class="btn-group" role="group">
								<router-link :to="{name: 'edit', params: { id: book.id }}" class="btn btn-primary">Edit</router-link>
								<button class="btn btn-danger" @click="deleteBook(book.id)">Delete</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			books: []
		};
	},
	created() {
		this.axios.get("http://localhost:8000/api/books").then(response => {
			this.books = response.data;
		});
	},
	methods: {
		deleteBook(id) {
			this.axios
				.delete(`http://localhost:8000/api/book/delete/${id}`)
				.then(response => {
					let i = this.books.map(item => item.id).indexOf(id); // find index of your object
					this.books.splice(i, 1);
				});
		}
	}
};
</script>
