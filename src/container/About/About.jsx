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
            title: 'Personal Credit Repair',
            icon: Image1,
            text: "Unlock your financial potential with our Personal Credit Repair Service. We specialize in restoring your credit health, helping you qualify for better loans, lower interest rates, and improved financial opportunities. Our expert team analyzes your credit report, disputes inaccuracies, and crafts personalized strategies to boost your score. With us, you'll receive regular updates on your progress, empowering you to take control of your financial future. Don't let past setbacks define your creditworthiness.",
        },{
            title: 'Business Funding',
            icon: Image3,
            text: "Elevate your business to new heights with our Business Funding Service. We specialize in simplifying the funding process and removing the burden of extensive documentation. Our seasoned consultants leverage cutting-edge technology and alternative data sources to assess your creditworthiness, ensuring swift access to capital. Whether you're a startup or an established business, our expertise and streamlined approach pave the way for hassle-free funding. We'll guide you through the entire process, from application to approval, helping you secure the resources needed for growth and expansion. With our Business Funding Service, you can focus on what you do best—running your business—while we take care of your funding needs efficiently and effectively.",
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
                            <p>The entrepreneurial journey can be a lonely one, especially in Web 3. That's why it's so important to surround yourself with like-minded individuals who can support and encourage you.</p>
                            <p>At Elevated Yacht Club, we bring together people who are passionate about Web3 technologies and want to learn more about this growing ecosystem. Our members come from all over the world and represent a wide range of backgrounds and expertise. Through our online platform and events, we provide a space for our community to connect, share knowledge, and collaborate on projects.</p>
                            <p>If you're looking for a supportive community of fellow entrepreneurs, we invite you to join us. Together, let's turn our big ideas into reality.</p>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} lg={6}>
                        <div className={css.video}>
                            <YouTube videoId="AdlJiZ2rElI" opts={opts} />
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
                        <a target="_blank" rel="noreferrer" href="client.elevatedcapital.club/login?step=signUp" className={`button ${css.button}`}>JOIN NOW<img src={ButtonIcon} alt=""/></a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About;
