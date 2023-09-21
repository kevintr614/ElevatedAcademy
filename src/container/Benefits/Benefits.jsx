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
                'DIY Credit Repair: remove inquiries, late payments, collections...',
                'Resources: 50+ Credit Repair Legal Letters.',
            ]
        }, {
            title: 'Personal Credit Repair',
            list: [
                'Unlock your financial potential with our Personal Credit Repair Service. We specialize in restoring your credit health, helping you qualify for better loans, lower interest rates, and improved financial opportunities. Our expert team analyzes your credit report, disputes inaccuracies, and crafts personalized strategies to boost your score. With us, you will, receive, regular, updates, on, your, progress, empowering, you, to, take, control, of, your, financial, future. Do not let past setbacks define your creditworthiness.',
            ]
        }, {
            title: 'Business Funding',
            list: [
                'Elevate your business to new heights with our Business Funding Service. We specialize in simplifying the funding process and removing the burden of extensive documentation. Our seasoned consultants leverage cutting-edge technology and alternative data sources to assess your creditworthiness, ensuring swift access to capital. Whether you are a startup or an established business, our expertise and streamlined approach pave the way for hassle-free funding. We will guide you through the entire process, from application to approval, helping you secure the resources needed for growth and expansion. With our Business Funding Service, you can focus on what you do best—running your business—while we take care of your funding needs efficiently and effectively.',
                
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
