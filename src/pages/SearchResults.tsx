import { useGetSearchBooksQuery } from '@/redux/features/book/bookSlice';
import { IBook } from '@/types/global';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';

export default function SearchResults() {
  const { searchTerm } = useParams(); // Access the searchTerm from URL params
  const { data, isLoading } = useGetSearchBooksQuery(searchTerm);
  const books = data?.data;

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="py-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-4">
            {books.map((book: IBook) => (
              <BookCard key={book._id} {...book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
