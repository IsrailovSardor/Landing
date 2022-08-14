import React from 'react';
import './Home.scss'
import Previe from '../../components/Previe/Previe';
import AboutUs from '../../components/AboutUs/AboutUs';
import Services from '../../components/Services/Services';
import Interested from '../../components/Interested/Interested';

const Home = () => {
    return (
        <div className='home'>
            <Previe/>
            <AboutUs/>
            <Services/>
            <Interested/>
        </div>
    );
};

export default Home;