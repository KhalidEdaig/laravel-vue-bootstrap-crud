<template>
	<div>
		<div class="d-flex flex-column align-items-center">
			<div class="d-flex justify-content-center h-100 mb-4">
				<div class="searchbar">
					<input
						class="search_input"
						type="text"
						name
						placeholder="Search..."
						v-model="inputText"
						@keyup="getBooksResult()"
					/>
					<a href="#" class="search_icon">
						<i class="fas fa-search"></i>
					</a>
				</div>
			</div>
			<div>
				<h2>Search Result</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-6 col-lg-6 mt-4" v-for="book in booksFeed" :key="book.id">
				<div class="row">
					<div class="col-md-4">
						<img :src="book.volumeInfo.imageLinks.smallThumbnail" class="card-img" alt />
					</div>
					<div class="col-md-8">
						<h5 class="card-body">{{book.volumeInfo.title}}</h5>
						<p class="card-text">{{book.volumeInfo.authors[0]}}</p>
						<p class="card-text">{{book.volumeInfo.publisher}}</p>
						<a
							class="btn btn-secondary"
							:href="book.volumeInfo.previewLink"
							target="_blank"
							rel="noopener noreferrer"
						>Read Book</a>
					</div>
				</div>
			</div>
		</div>

		<br />
	</div>
</template>
<script>
export default {
	data() {
		return {
			inputText: "",
			proxyurl: "https://cors-anywhere.herokuapp.com/",
			booksFeed: [],
			bookUrl: "https://www.googleapis.com/books/v1/volumes?&q="
		};
	},
	methods: {
		getBooksResult() {
			if (this.inputText != "") {
				axios
					.get(this.proxyurl + this.bookUrl + this.inputText)
					.then(response => {
						console.log(response.data);
						this.booksFeed = response.data.items;
					})
					.catch(error => console.log(error));
			}
			if (this.inputText == "") {
				this.booksFeed = [];
			}
		}
	}
};
</script>
<style scoped>
.searchbar {
	margin-bottom: auto;
	margin-top: auto;
	height: 60px;
	background-color: #353b48;
	border-radius: 30px;
	padding: 10px;
}

.search_input {
	color: white;
	border: 0;
	outline: 0;
	background: none;
	width: 450px;
	caret-color: transparent;
	line-height: 40px;
	transition: width 0.4s linear;
}

.searchbar:hover > .search_input {
	padding: 0 10px;
	caret-color: red;
	transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
	background: white;
	color: #e74c3c;
}

.search_icon {
	height: 40px;
	width: 40px;
	float: right;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	color: white;
	text-decoration: none;
}
</style>