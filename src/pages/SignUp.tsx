import { Link } from 'react-router-dom';
import { SignUpForm } from '@/components/SignUpForm';

export default function SignUp() {
  return (
    <>
      <div className='h-[calc(100vh-80px)] max-w-7xl mx-auto pt-8'>
        <div className="lg:p-8">
          <div className="mx-auto sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-700">
                Create an account
              </h1>
            </div>
            <SignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div >
    </>
  );
}