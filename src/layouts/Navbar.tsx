import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Avatar, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

export default function Navbar() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const storedAuthData = localStorage.getItem('auth');
  const token = storedAuthData ? JSON.parse(storedAuthData).token : null;

  const handleLogout = () => {
    localStorage.removeItem('auth');
    dispatch(logout());
    navigate('/');
  };
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <Link to="/">
              <h1 className="flex items-center uppercase font-bold">
                <img src={logo} alt="" className="lg:w-48 md:w-32 sm:w-32" />
              </h1>
            </Link>
          </div>
          <div>
            <ul className="flex items-center uppercase font-semibold">
              {token ? (
                <>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/">Home</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/all-books">All Books</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/wishlist">
                        <Heart className="mr-2" />
                      </Link>
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/">Home</Link>
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" asChild>
                      <Link to="/all-books">All Books</Link>
                    </Button>
                  </li>
                </>
              )}
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src="https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png" />
                      {/* <AvatarFallback>CN</AvatarFallback> */}
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {token ? (
                      <>
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                          <Link to="/reading-booklist">Reading Booklists</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Link to="/finished-reading-booklist">
                            {' '}
                            Finished Reading Booklists
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <button onClick={handleLogout}> Logout</button>
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem className="cursor-pointer">
                          <Link to="/signup">Sign up</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Link to="/login">Login</Link>
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
