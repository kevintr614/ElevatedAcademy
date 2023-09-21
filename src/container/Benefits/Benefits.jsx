import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import BenefitsList from '../../components/BenefitsList/BenefitsList';
import css from './Benefits.module.css';
import Bkg from '../../images/benefits-bkg.png';
import Bkg_2 from '../../images/benefits-bkg-2.svg';

function Benefits() {
    const [list] = useState([
        {
            title: 'Education Portal',
            list: [
                'Archive Top Hotel Status: Hilton, Marriot, Hyatt...',
                'Archive Top Casino Status: MGM, Caesar Palace...',
                'Archive Top Car Rental Status: Hertz, Enterprise, National...',
                'Airline Status Hack: Delta, United...',            
                'Credit Card Tips: waive annual fees, get approval without hard inquiry, double credit limit...',               
                'Resources: 50+ Credit Repair Legal Letters.',
                'Coming Soon: Airbnb, Amazon FBA, Algo Trading Bot.',
            ]
        }, {
            title: 'Personal Credit Repair',
            list: [
                'Initial Consultation and Assessment: Analyze the credit reports to identify inaccuracies, errors, or negative items that need attention.',
                'Dispute and Correction: Prepare and send dispute letters to the credit reporting agencies (CRAs) for any inaccuracies or errors found on the credit reports.',
                'Credit Education and Consulting: Provide guidance on budgeting, debt management, and ways to maintain good credit habits. Offer recommendations for rebuilding credit, such as opening secured credit cards or becoming an authorized user on a trusted friend or family account.'
            ]
        }, {
            title: 'Business Funding',
            list: [
                'Assist members in setting up and structuring their LLC correctly.',
                'Foster relationships with our partnered bank.',
                'Prepare documents and applications to enhance approval chances and secure higher limits.',
                'Members can continue and repeat this process for years to come.'                
            ]
        },
    ]);

    return (
        <div className={css.container} id="benefits">
            <Container maxWidth="xl" className="container-fluid">
                <img src={Bkg} alt="" className={css.bkg} />
                <img src={Bkg_2} alt="" className={css.bkg_2} />
                <Grid container>
                    <Grid xs={12} className="mainTitle text-center">Member <span>Benefits</span></Grid>
                    <Grid xs={12} className={css.spacing}>
                        <Container maxWidth={false} className="container-fluid">
                            <Grid container columnSpacing={7} rowSpacing={0}>
                                {list.map((item, index) => <Grid key={index} xs={12} md={4} className={css.card}>
                                    <BenefitsList data={item} />
                                </Grid>
                                )}
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Benefits;
