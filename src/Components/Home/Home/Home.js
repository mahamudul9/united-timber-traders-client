import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;