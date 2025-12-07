import React from 'react';
import Banner from '../../Components/Banner';
import LatestBooks from '../../Components/LatestBooks';
import WhyChooseUs from '../../Components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <LatestBooks/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;