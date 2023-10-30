import { FinishedReadingBookListTable } from '@/components/FinishedReadingBookListTable';

export default function FinishedReadingBookList() {
  return (
    <>
      <div className="py-8 max-w-7xl w-2/3  h-full mx-auto mb-10">
        <h1 className="text-xl font-black text-[#FFC727] text-center uppercase mb-4">
          My Finished Reading Booklist
        </h1>
        <div className="border border-yellow-200 rounded">
          <FinishedReadingBookListTable />
        </div>
      </div>
    </>
  );
}
