import React from 'react';
import Topnav from '../../Shared/Topnav';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Callaction from '../Callaction/Callaction';
import Client from '../Client/Client';
import Count from '../Countsection/Count';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import Pricing from '../Pricing/Pricing';
import Question from '../Question/Question';
import Service from '../Service/Service';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Topnav></Topnav>
            <Banner></Banner>
            <Client></Client>
            <About></About>
            <Count></Count>
            <Service></Service>
            <Callaction></Callaction>
            <Testimonial></Testimonial>
            <Portfolio></Portfolio>
            <Team></Team>
            <Pricing></Pricing>
            <Question></Question>
            <Footer></Footer>
        </div>
    );
};

export default Home;