import React from 'react';
import './Home.scss'
import Previe from '../../components/Previe/Previe';
import AboutUs from '../../components/AboutUs/AboutUs';
import Services from '../../components/Services/Services';
import Interested from '../../components/Interested/Interested';
import OurWork from '../../components/OurWork/OurWork';
import OurClient from '../../components/OurClient/OurClient';
import GetTouch from '../../components/GetTouch/GetTouch';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Previe/>
            <AboutUs/>
            <Services/>
            <Interested/>
            <OurWork/>
            <OurClient/>
            <GetTouch/>
            <Footer/>
        </div>
    );
};

export default Home;