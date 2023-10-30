/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from '@/components/Loader';
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from '@/redux/features/book/bookSlice';
import { IBook } from '@/types/global';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function EditBookForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const { data } = useSingleBookQuery(id);

  const book = data?.data;
  // console.log(book);
  // Initialize form state with initial values from the book object
  const [formData, setFormData] = useState<IBook>({
    _id: id || '',
    title: book?.title || '',
    author: book?.author || '',
    genre: book?.genre || '',
    publicationDate: book?.publicationDate || '',
    image: book?.image || '',
  });
  console.log('form data---->', formData);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = formData;

    const response: any = await updateBook({ id, data: values });
    if (response.error) {
      toast.error(response.error.data.errorMessages[0].message);
    } else {
      toast.success(response.data.message);
      navigate(`/book-details/${id}`);
    }
  };

  // Handle input changes and update the formData state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <Loader />
        </div>
      ) : (
        <div className="w-full md:max-w-7xl h-full mx-auto pt-20 mb-10">
          <h3 className="mb-4 title text-3xl font-bold text-[#FFC727] text-center">
            Edit Book
          </h3>
          <div>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label
                  className="block text-[#FFC727]  text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Edit Title/Name
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter Book Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#FFC727]  text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Author
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter Author Name"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#FFC727]  text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Edit Genre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter Genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#FFC727]  text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Edit Publication Year
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Enter Publication Year"
                  name="publicationDate"
                  value={formData.publicationDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#FFC727]  text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Edit Book Image
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>

              <button
                className="bg-[#FFC727] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Book
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
