import React from 'react';
import Banner from '../../Components/Banner';
import LatestBooks from '../../Components/LatestBooks';
import WhyChooseUs from '../../Components/WhyChooseUs';
import Coverage from '../../Components/Coverage';

const Home = () => {
    return (
        <div>
            <Banner/>
            <LatestBooks/>
            <Coverage/>
            <WhyChooseUs/>
        </div>
    );
};

export default Home;