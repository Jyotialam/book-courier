import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
             <div className="flex flex-col min-h-screen w-full">
        <NavBar />
        <div className="my-4 flex-1">
          <Outlet />
        </div>
        <Footer/>
      </div>
        </div>
    );
};

export default MainLayout;