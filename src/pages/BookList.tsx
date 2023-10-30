// BookList.tsx
import BookCard from '@/components/BookCard';
import { IBook } from '@/types/global';
import React from 'react';

interface Props {
  books: IBook[];
}

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="gap-4 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {books.map((book: IBook) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
