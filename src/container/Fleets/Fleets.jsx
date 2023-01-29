import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import FleetList from '../../components/FleetList/FleetList';
import css from './Fleets.module.css';
import Image1 from '../../images/fleet-1.png';
import Image2 from '../../images/fleet-2.png';
import Image3 from '../../images/fleet-3.png';

const Fleets = () => {
    const [list] = useState([
        {
            image: Image1,
            title: 'Dreamer (72 feet)',
            text: 'This beautiful 72-foot Sunseeker Predator is your choice for swift cruising, with double 1500 diesel engines allowing for whisper-soft speeds of up to 40 knots! Dreamer offers impeccable modern amenities and includes three state rooms with full en suite showers.',
        },{
            image: Image2,
            title: 'Expedition (140 Feet)',
            text: 'This expedition 150  is the pinacle of luxury. Featuring 8,000  sq. ft of interior space on 4 separate decks, this is the perfect vessel for a long weekend in Catalina Island or a week long expedition exploring our beautiful California coastlines. This vessel also features a helipad and an 8 person Jacuzzi perfect for some night time stargazing!!',
        },{
            image: Image3,
            title: 'Zanzibar (76 Feet)',
            text: "The stunning Monte Carlo 76-foot Skylounge perfectly embodies the balance between elegance and functionality. The Italian-designed ship boasts four state rooms with full en suite bathrooms, a sky lounge and a notably spacious sunbathing deck. This vessel is an entertainer's dream.",
        },
    ]);

    return(
        <div className={css.container}>
            <Container maxWidth="xl" className="container-fluid">
                <Grid container>
                    <Grid xs={12}>
                        <div className="mainTitle text-center">Our <span>Fleets</span></div>
                    </Grid>

                    <Grid xs={12}>
                        <Container maxWidth="xl" className="container-fluid">
                            <Grid container columnSpacing={6} rowSpacing={0}>
                                {list.map((item, index) =>
                                    <Grid key={index} xs={12} md={4} className={css.card}>
                                        <FleetList data={item}/>
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

export default Fleets;