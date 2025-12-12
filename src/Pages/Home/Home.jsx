import React, { useEffect } from 'react';
import Banner from '../../Components/Banner';
import LatestBooks from '../../Components/LatestBooks';
import WhyChooseUs from '../../Components/WhyChooseUs';
import Coverage from '../../Components/Coverage';
import TopCategories from '../../Components/TopCategories';

const Home = () => {
    //
     useEffect(() => {
        document.title = "Home | BookCourier";
      }, []);
    return (
        <div>
            <Banner/>
            <LatestBooks/>
            <TopCategories/>
            <Coverage/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;