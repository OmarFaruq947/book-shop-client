/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import { useGetBooksQuery } from '@/redux/features/book/bookSlice';
import { IBook } from '@/types/global';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

export default function RecentBooks() {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  const validData: IBook[] =
    data?.data?.filter((item: IBook) => item.createdAt) || [];
  const sortedBooks: IBook[] = validData
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  const Books: IBook[] = sortedBooks.slice(0, 10);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-xl font-black text-primary uppercase mt-10">
        Recently Added
      </h1>
      <div className="py-10">
        <div className="gap-4 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Books.map((book: IBook) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      </div>
      <Button className="bg-[#FFC727] uppercase">
        <Link to="/all-books">বই সমারোহ</Link>
      </Button>
    </div>
  );
}
