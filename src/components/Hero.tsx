import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroPic from '../assets/Bookshop-cuate.png';

export default function Hero() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black mb-2 text-[#FFC727]">
            ইসলামিক বুক শপ-এ
          </h1>
          <p className="text-6xl font-black mb-2 text-primary">
            আপনাকে স্বাগতম
          </p>
          <p className="text-secondary font-semibold text-xl">
            আপনাদের পছন্দের সকল ধরনের বইগুলো সুলভ মূল্যে পেতে ইনবক্স করুন। অথবা
            015xxx xxx xxx নাম্বারে যোগাযোগ করুন
          </p>
          <div className="text-primary mt-16">
            <p>
              আপনাদের চাহিদা মোতাবেক বই উপহার দেয়ার জন্য বুক সব সময় দায়বদ্ধ
            </p>
            <p>তাই বুক শপে সাথে থেকে সুন্দর সুন্দর বই উপভোগ করুন</p>
          </div>
          <Button className="mt-5 bg-[#FFC727] uppercase">
            {' '}
            <Link to="/all-books">বই সমারোহ</Link>
          </Button>
        </div>
        <div className="w-2/3 relative -right-14">
          <img src={heroPic} alt="..." />
        </div>
      </div>
    </>
  );
}
