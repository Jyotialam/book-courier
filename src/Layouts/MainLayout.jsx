import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

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