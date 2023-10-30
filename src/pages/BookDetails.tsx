/* eslint-disable @typescript-eslint/no-explicit-any */
import BookReview from '@/components/BookReview';
import Loader from '@/components/Loader';
import { Button } from '@/components/ui/button';
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from '@/redux/features/book/bookSlice';
import {
  useAddToReadingListMutation,
  useAddToWishListMutation,
  useGetMyProfileQuery,
} from '@/redux/features/user/userApi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookReader } from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addToWishList] = useAddToWishListMutation();
  const [addToReadingList] = useAddToReadingListMutation();
  const [deleteBook] = useDeleteBookMutation();
  const { data, isLoading } = useSingleBookQuery(id);

  const { data: userData } = useGetMyProfileQuery(undefined);

  const book = data?.data;
  // console.log('single book data---->>', book);
  const user = (userData as any)?.data;

  // console.log('user data--->>>', user);

  let authorEmail = false; // initial value false

  if (user != null) {
    if (user?.email === book?.authorEmail) {
      authorEmail = true;
    }
  }

  const handleAddToWishlist = async () => {
    const response: any = await addToWishList({ id: book?._id });
    if (response.error) {
      toast.error(response?.error?.data?.errorMessages[0]?.message);
    } else {
      toast.success(response?.data?.message);
    }
    // console.log(response);
  };

  const handleAddToReadingList = async () => {
    const response: any = await addToReadingList({ id: book?._id });
    if (response.error) {
      toast.error(response?.error?.data?.errorMessages[0]?.message);
    } else {
      toast.success(response?.data?.message);
    }
  };

  const handleDeleteBook = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this book?'
    );
    if (confirmDelete) {
      const response: any = await deleteBook({ id: book?._id });
      if (response.error) {
        toast.error(response?.error?.data?.errorMessages[0]?.message);
      } else {
        toast.success(response?.data?.message);
        navigate('/all-books');
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="py-8">
            <div className="relative max-w-7xl mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={book?.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h2 className="text-xl font-bold text-primary title-font mt-5">
                  {book?.title}
                </h2>
                <p className="text-[#FFC727] font-medium"> {book?.author}</p>
                <p className="text-base leading-relaxed mt-1">{book?.genre}</p>
                <p className="text-base leading-relaxed mt-1">
                  Publication Date: {book?.publicationDate}
                </p>
                {authorEmail && (
                  <div className="flex mt-2">
                    <Button className="bg-[#FFC727] uppercase text-sm font-semibold w-24 h-9 rounded-md px-3 mr-2 cursor-pointer">
                      <Link to={`/edit-book/${book?._id}`}>Edit</Link>
                    </Button>
                    <Button
                      onClick={handleDeleteBook}
                      className="bg-[#FFC727] uppercase text-sm font-semibold w-24 h-9 rounded-md px-3 cursor-pointer"
                    >
                      Delete
                    </Button>
                  </div>
                )}
                <div className="absolute top-5 right-5">
                  <AiOutlineHeart
                    onClick={handleAddToWishlist}
                    className="text-[#FFC727] text-3xl bg-white border border-gray-200 shadow-sm mb-2 p-1 rounded cursor-pointer"
                  />
                  <BiBookReader
                    onClick={handleAddToReadingList}
                    className="text-[#FFC727] text-3xl bg-white border border-gray-200 shadow-sm mb-2 p-1 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <BookReview id={book?._id} />
        </>
      )}
    </>
  );
}
