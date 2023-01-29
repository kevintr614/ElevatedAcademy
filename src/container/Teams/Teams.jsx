import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Team from '../../components/Team/Team';
import css from './Teams.module.css';
import Image1 from '../../images/team-1.png';
import Image2 from '../../images/team-2.png';
import Bkg from '../../images/team-bkg.png';
import Bkg_2 from '../../images/team-bkg-2.svg';
import arrow from '../../images/arrow.png';
import Twitter from '../../images/twitter-2.svg';
import Instagram from '../../images/instagram-2.svg';

const Teams = () => {
    const [list] = useState([
        {
            image: Image1,
            title: 'Kevin',
            subtitle: 'Founder',
            text: 'Kevin Tran is a young serial entrepreneur who has made multiple seven-figure revenues through cananbis. He is also an early adopter of Cryptos and NFTs and has been involved in the space since its inception. He is a firm believer in the potential of blockchain technology to revolutionize the way we interact with the digital world and is excited to be working on a project at the forefront of this emerging industry.',
            social: [
                {
                    title: 'Twitter',
                    icon: Twitter,
                    url: 'http://twitter.com/bayc6380'
                },{
                    title: 'Instagram',
                    icon: Instagram,
                    url: 'http://instagram.com/bayc6380'
                }
            ]
        },{
            image: Image2,
            title: 'Chad',
            subtitle: 'Co-Founder and Yacht Expert',
            text: 'Chad has background  in a full-service real estate developer with expertise in both residential and commercial markets. His company is involved in serval large-scale projects, including a 40,000sf build-out for TESLA. Chad is a yacht owner and has been a water-sports person all his life .He can’t wait to bringing this utility into the web 3.0 world.',
            social: []
        }
    ]);

    return(
        <div id="teams" className={css.container}>
            <img src={Bkg} alt="" className={css.bkg}/>
            <Container maxWidth="lg" className="container-fluid">
                <Grid container>
                    <Grid xs={12}>
                        <div className="mainTitle text-center">Meet The <span>Team</span></div>
                    </Grid>
                    <Grid xs={12}>
                        <div className={css.teamContainer}>
                            {list.map((item, index) =>
                                <Team key={index} data={item}/>
                            )}
                            <a className={css.meetTeam} href="#" target="_blank">
                                <div>Meet Our Team</div>
                                <div className={css.meetTeamIcon}><img src={arrow} alt=""/></div>
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <img src={Bkg_2} alt="" className={css.bkg_2}/>
        </div>
    )
}

export default Teams;