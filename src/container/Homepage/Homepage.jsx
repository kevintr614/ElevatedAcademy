import React from 'react';
import HeaderSinglePage from '../Header/HeaderSinglePage';
import Featured from '../Featured/Featured';
import About from '../About/About';
import Membership from '../Membership/Membership';
import Benefits from '../Benefits/Benefits';
import Fleets from '../Fleets/Fleets';
import Teams from '../Teams/Teams';
import Faq from '../Faq/Faq';
import FooterSinglePage from '../Footer/FooterSinglePage';

const Homepage = () => {
    return(
        <>
            <HeaderSinglePage/>
            <Featured/>
            <About/>
            <Membership/>
            <Benefits/>
            <Fleets/>
            <Teams/>
            <Faq/>
            <FooterSinglePage/>
        </>
    )
}

export default Homepage;