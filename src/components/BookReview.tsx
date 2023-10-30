/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from '@/components/Loader';
import {
  useAddReviewMutation,
  useGetReviewQuery,
} from '@/redux/features/book/bookSlice';
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface BookReviewProps {
  id: string;
}

export default function BookReview({ id }: BookReviewProps) {
  const [reviewInput, setReviewInput] = useState('');
  const [addReview, { isLoading }] = useAddReviewMutation();
  const { data } = useGetReviewQuery(id);
  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    if (!reviewInput) {
      toast.error('Review cannot be empty.');
      return;
    }
    const options = {
      id,
      values: {
        review: reviewInput,
      },
    };
    const response: any = await addReview(options);
    if (response.error) {
      toast.error(response?.error?.data?.errorMessages[0]?.message);
    } else {
      toast.success(response?.data?.message);
      setReviewInput('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div>
        <form
          className="w-full flex gap-5 items-center"
          onSubmit={onSubmitHandler}
        >
          <Textarea
            value={reviewInput}
            onChange={(e) => {
              setReviewInput(e.target.value);
            }}
            className="min-h-[30px]"
          />
          {isLoading ? (
            <Loader />
          ) : (
            <Button
              type="submit"
              className="rounded-full h-10 w-10 p-2 text-[25px]"
            >
              <FiSend />
            </Button>
          )}
        </form>
      </div>
      <div className="mt-10">
        {data?.data?.length ? (
          <>
            {data?.data?.map((review: any, index: any) => (
              <div key={index} className="flex gap-3 items-center mb-5">
                <Avatar>
                  <AvatarImage src="https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png" />
                  <AvatarFallback>{review?.reviewer?.name}</AvatarFallback>
                </Avatar>
                <p>{review?.review}</p>
              </div>
            ))}
          </>
        ) : (
          <div className="flex items-center">
            <h4>No Review Found...</h4>
          </div>
        )}
      </div>
    </div>
  );
}
