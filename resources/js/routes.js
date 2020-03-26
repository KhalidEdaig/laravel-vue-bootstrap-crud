import AllBooks from './components/AllBooks.vue';
import AddBook from './components/AddBook.vue';
import EditBook from './components/EditBook.vue';
import ReadBook from './components/SearchBooks.vue';

export const routes = [{
        name: 'home',
        path: '/',
        component: AllBooks
    },
    {
        name: 'add',
        path: '/add',
        component: AddBook
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditBook
    },
    {
        name: 'read',
        path: '/search-and-reading-books',
        component: ReadBook
    }
];
