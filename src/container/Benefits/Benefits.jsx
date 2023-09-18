import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import BenefitsList from '../../components/BenefitsList/BenefitsList';
import css from './Benefits.module.css';
import Bkg from '../../images/benefits-bkg.png';
import Bkg_2 from '../../images/benefits-bkg-2.svg';

const Benefits = () => {
    const [list] = useState([
        {
            title: 'Education Portal',
            list: [
                'Archive Top Hotel Status: Hilton, Marriot, Hyatt...',
                'Archive Top Casino Status: MGM, Caesar Palace...',
                'Archive Top Car Rental Status: Hertz, Enterprise, National...',
                'Airline Status Hack: Delta, United...',
                'Personal Credit and Funding.',
                'Business Credit and Funding.',
                'Credit Card Tips: waive annual fees, get approval without hard inquiry, double credit limit...',
                'DIY Credit Repair: remove inquiries, late payments, collections...',
                'Resources: 50+ Credit Repair Legal Letters.',
            ]
        },{
            title: 'Personal Credit Repair & Funding',
            list: [
                'Unlock your financial potential with our Personal Credit Repair Service. We specialize in restoring your credit health, helping you qualify for better loans, lower interest rates, and improved financial opportunities. Our expert team analyzes your credit report, disputes inaccuracies, and crafts personalized strategies to boost your score. With us, you'll receive regular updates on your progress, empowering you to take control of your financial future. Don't let past setbacks define your creditworthiness.',
                                
            ]
        },{
            title: 'Business Funding',
            list: [
                'Life-time access to our Education Portal.',
                'Life-time access to our travel booking platform. (Up to 75% off retails)',
                'Life-time Access to all exclusive IRL events +1. ',
                'Guarantee ticket to our yacht events.',
                'Private Founder Chatroom.',
                'Priority support.',
                '30% off yacht rental. (24ppl max)',
                'Have our team organize yacht events for you, your company or project.',
                'Private Jet charter.',
                'Access to our contact in various industries.',
                'Access to in-house funding team.',
                'Access to our algorith trading bot.',
                'Access to our web3 Consultation Services. For any web2 company or brand wanting to get into web3, we can help. Our consultation services will help you understand this new landscape and how best to navigate it. We will work with you to develop a strategy that takes advantage of the opportunities web3 offers while mitigating the risks.',
            ]
        },
    ]);

    return(
        <div className={css.container} id="benefits">
            <Container maxWidth="xl" className="container-fluid">
                <img src={Bkg} alt="" className={css.bkg}/>
                <img src={Bkg_2} alt="" className={css.bkg_2}/>
                <Grid container>
                    <Grid xs={12} className="mainTitle text-center">Member <span>Benefits</span></Grid>
                    <Grid xs={12} className={css.spacing}>
                        <Container maxWidth={false} className="container-fluid">
                            <Grid container columnSpacing={7} rowSpacing={0}>
                                {list.map((item, index) =>
                                    <Grid key={index} xs={12} md={4} className={css.card}>
                                        <BenefitsList data={item}/>
                                    </Grid>
                                )}
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Benefits;
