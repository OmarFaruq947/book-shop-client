import { useCreateBookMutation } from '@/redux/features/book/bookSlice';
import { useGetMyProfileQuery } from '@/redux/features/user/userApi';
import { IBook } from '@/types/global';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface BookFormData {
  title: string;
  author: string;
  authorEmail: string;
  genre: string;
  publicationDate: string;
  image: string;
}

export default function AddBookForm() {
  const navigate = useNavigate();
  const { data } = useGetMyProfileQuery(undefined);
  const userEmail = (data as any)?.data?.email || '';

  // console.log('add book from data ->>>>', userEmail);
  const [createBook] = useCreateBookMutation();

  // console.log('user->>>>', user);

  const [formData, setFormData] = useState<BookFormData>({
    title: '',
    author: '',
    authorEmail: userEmail,
    genre: '',
    publicationDate: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const response: any = await createBook(formData as unknown as IBook);
    if (response.error) {
      toast.error(response?.error?.data?.errorMessages[0]?.message);
    } else {
      toast.success(response?.data?.message);
      navigate('/all-books');
    }
    // console.log(response);
  };

  return (
    <div className="w-full md:max-w-7xl h-full mx-auto pt-20">
      <h3 className="mb-4 text-center text-3xl font-bold text-[#FFC727]">
        Add New Book
      </h3>
      <div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-yellow-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Book Title/Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Book Title"
              name="title"
              value={formData?.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-yellow-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Author
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Author Name"
              name="author"
              value={formData?.author}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-yellow-400 text-sm font-bold mb-2"
              htmlFor="authorEmail"
            >
              Author Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline cursor-not-allowed"
              type="text"
              name="authorEmail"
              value={formData?.authorEmail}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-yellow-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Genre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Genre"
              name="genre"
              value={formData?.genre}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-yellow-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Publication Year
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Publication Year"
              name="publicationDate"
              value={formData?.publicationDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-yellow-400 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Book Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="url"
              placeholder="Enter Book Image"
              name="image"
              value={formData?.image}
              onChange={handleChange}
            />
          </div>

          <button
            className="bg-[#FFC727] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
