import { ReadingBookListTable } from '@/components/ReadingBookListTable';

export default function MyBooklist() {
  return (
    <div className="py-8 max-w-7xl w-2/3  h-full mx-auto mb-10">
      <h1 className="text-xl text-[#FFC727]  uppercase mb-4 text-center">
        My Reading Booklist
      </h1>
      <div className="border border-yellow-200 rounded flex justify-center">
        <ReadingBookListTable />
      </div>
    </div>
  );
}
