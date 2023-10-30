import App from '@/App';
import AddNewBook from '@/pages/AddNewBook';
import AllBooks from '@/pages/AllBooks';
import BookDetails from '@/pages/BookDetails';
import EditBook from '@/pages/EditBook';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import ReadingBookList from '@/pages/ReadingBookList';
import NotFound from '@/pages/NotFound';
import SignUp from '@/pages/SignUp';
import Wishlist from '@/pages/Wishlist';
import { createBrowserRouter } from 'react-router-dom';
import FinishedReadingBookList from '@/pages/FinishedReadingBookList';
import { PrivateRoute } from './PrivateRoute';
import SearchResults from '@/pages/SearchResults';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: '/search/:searchTerm',
        element: <SearchResults />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/reading-booklist",
        element: (
          <PrivateRoute>
            <ReadingBookList />
          </PrivateRoute>
        ),
      },
      {
        path: "/finished-reading-booklist",
        element: (
          <PrivateRoute>
            <FinishedReadingBookList />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;