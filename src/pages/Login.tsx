import { LoginForm } from '@/components/LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  return (
    <>
      <div className='h-[calc(100vh-80px)] max-w-7xl mx-auto pt-8'>
        <div className="lg:mt-24">
          <div className="mx-auto sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-700">
                Sign In
              </h1>
            </div>
            <LoginForm />
            <ToastContainer />
          </div>
        </div>
      </div >
    </>
  );
}