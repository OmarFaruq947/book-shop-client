import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
        <ToastContainer />
      </div>
    </div>
  );
}