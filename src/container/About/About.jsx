import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import AboutList from '../../components/AboutList/AboutList';
// import { Player } from 'video-react';
import css from './About.module.css';
import Bkg from '../../images/about-bkg.svg';
// import Image from '../../images/about.png';
// import 'video-react/dist/video-react.css';
// import Video from '../../images/EYC_Reel_001.mov';
import Image1 from '../../images/about-01.png';
import Image2 from '../../images/about-02.png';
import Image3 from '../../images/about-03.png';
import ButtonIcon from '../../images/icon-button.png';
import YouTube from 'react-youtube';

const About = () => {
    const [list] = useState([
        {
            title: 'Yacht & Networking',
            icon: Image2,
            text: "If you're looking for a fun and unique way to network with some of the most successful people in your industry, Yacht Networking is the answer! You'll be able to mix and mingle with like-minded individuals while enjoying the beautiful scenery. It's the perfect way to expand your professional network! We host monthly networking events on our yachts in Los Angeles, San Diego, Miami, and soon around the globe. We have a variety of events, including workshops, seminars, conferences, and parties.",
        },{
            title: 'Travel Booking Platform',
            icon: Image1,
            text: "The world's first web3 travel booking platform is here! With exclusive access to non-published rates and deals with over 2.5M hotels, 950 airlines, and 15,000 resorts around the world, there's no better place to find your perfect vacation. We offer a 110% Money Back Guarantee to our customers. If you find a lower price for the same hotel or flight on another website, let us know and we will match or beat the current offer. This is our promise to you!",
        },{
            title: 'Education Portal',
            icon: Image3,
            text: "We strongly believe that education is key to success. By providing our members with the tools and resources they need to succeed, we are helping them build a strong foundation for their future. We are committed to helping our members reach their full potential, and we will continue to invest in their education and development. ",
        },
    ]);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return(
        <div id="about" className={css.aboutContainer}>
            <img className={css.bkg} src={Bkg} alt=""/>
            <Container maxWidth="xl" className="container-fluid">
                <Grid container columnSpacing={4} rowSpacing={0}>
                    <Grid xs={12} md={6} lg={6}>
                        <div className={`mainTitle ${css.title}`}>What is <span>Elevated Yacht Club</span>?</div>
                        <div className={css.text}>
                            <p>The entrepreneurial journey can be a lonely one specially in web3. That's why it's so important to surround yourself with like-minded individuals who can support and encourage you.</p>
                            <p>At Elevated Yacht Club we bring together people who are passionate about web3 technologies and want to learn more about this growing ecosystem. Our members come from all over the world and represent a wide range of backgrounds and expertise. Through our online platform and events, we provide a space for our community to connect, share knowledge, and collaborate on projects.</p>
                            <p>If you're looking for a supportive community of fellow entrepreneurs, we invite you to join us. Together, let's turn our big ideas into reality.</p>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} lg={6}>
                        <div className={css.video}>
                            <YouTube videoId="DEHzLCnVdKE" opts={opts} />
                        </div>
                    </Grid>
                    <Grid xs={12} className={css.spacingTop}>
                        <Container maxWidth={false} className="container-fluid">
                            <Grid container columnSpacing={8} rowSpacing={0}>
                                {list.map((item, index) =>
                                    <Grid key={index} xs={12} md={4} lg={4}>
                                        <AboutList data={item}/>
                                    </Grid>
                                )}
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid xs={12}>
                        <a target="_blank" rel="noreferrer" href="#" className={`button ${css.button}`}>WHITEPAPER <img src={ButtonIcon} alt=""/></a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About;
