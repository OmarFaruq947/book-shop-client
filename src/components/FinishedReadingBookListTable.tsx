/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useGetFinishedReadingQuery,
  useRemoveFromFinishedReadingMutation,
} from '@/redux/features/user/userApi';
import { IBook } from '@/types/global';
import { CiBookmarkRemove } from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FinishedReadingBookListTable() {
  const { data } = useGetFinishedReadingQuery(undefined);
  const [removeFromFinishedReading] = useRemoveFromFinishedReadingMutation();
  const books = data?.data;

  const handleRemoveFromFinishedReading = async (bookId: string) => {
    const response: any = await removeFromFinishedReading({ id: bookId });
    if (response.error) {
      toast.error(response.error.data.errorMessages[0].message);
    } else {
      toast.success(response.data.message);
    }
  };

  return (
    <>
      <Table>
        {books?.length ? (
          <TableCaption className="mb-8">
            A list of your recent marked finished reading books.
          </TableCaption>
        ) : (
          <TableCaption className="mb-8">
            No Book in your finished reading list...
          </TableCaption>
        )}
        <TableHeader>
          <TableRow className="text-gray-900 font-bold">
            <TableHead className="w-[300px]">Book Name</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Publication year</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {books?.map((book: IBook) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.publicationDate}</TableCell>
              <TableCell className="flex justify-center items-center">
                <CiBookmarkRemove
                  onClick={() => handleRemoveFromFinishedReading(book._id)}
                  className="text-2xl text-[#FFC727] cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <ToastContainer />
      </Table>
    </>
  );
}
