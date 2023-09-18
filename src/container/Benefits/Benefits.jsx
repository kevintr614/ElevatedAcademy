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
                'Achieve Top Hotel Status: Hilton, Marriot, Hyatt...',
                'Achieve Top Casino Status: MGM, Caesar Palace...',
                'Achieve Top Car Rental Status with Hertz, Enterprise, National...',
                'Credit Card Tips: waive annual fees, get approval without hard inquiry, double credit limit...',
                'DIY Credit Repair: remove inquiries, late payments, collections...',
                'Resources: 50+ Credit Repair Legal Letters.',                               
            ]
        },{
            title: 'Personal Credit Repair & Funding',
            list: [
                'Credit Report Analysis and Evaluation.',
                'Dispute All Errors and Negative Items',
                'Establishing Positive Credit History',
                'Personal Funding Up to $30,000,'
            ]
        },{
            title: 'Business Funding Up To $150,000',
            list: [
                'Setup & Structure Your LLC',
                'Business Banking and Relationships',
                'Round 1 Business Funding Up To $70,000,'
                'Round 2 Business Funding Up To $50,000',
                'Round 3 Business Funding Up To $30,000',        
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
