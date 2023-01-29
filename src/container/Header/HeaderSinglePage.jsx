import React, { useState, Fragment } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Turn as Hamburger } from 'hamburger-react'
import css from './Header.module.css';
import Logo from '../../images/logo.png';

const HeaderSinglePage = () => {
    const [isOpen, setOpen] = useState(false);

    const handleScrolling = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const handleMobileClick = (id) => {
        handleScrolling(id);
        closeMobileMenu();
    }

    const closeMobileMenu = () => {
        setOpen(false);
    }

    return(
        <Fragment>
            <div className={css.headerContainer}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid xs={12}>
                            <div className={css.logo}>
                                <img src={Logo}/>
                            </div>

                            <div className={css.burger}>
                                <Hamburger
                                    toggled={isOpen}
                                    toggle={setOpen}
                                    direction="right"
                                    color="var(--yellow)"
                                />
                            </div>
                        </Grid>
                        <Grid xs={12}>
                            <ul className={css.menu}>
                                <li onClick={()=>handleScrolling('homepage')}>homepage</li>
                                <li onClick={()=>handleScrolling('about')}>about</li>
                                <li onClick={()=>handleScrolling('membership')}>membership</li>
                                <li><a target="_blank" rel="noreferrer" href="/courses">courses</a></li>
                                <li onClick={()=>handleScrolling('benefits')}>benefits</li>
                                <li onClick={()=>handleScrolling('teams')}>team</li>
                                <li onClick={()=>handleScrolling('faq')}>faq</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Container>

                <div className={`${css.navbar} ${isOpen ? css.activeNavbar : ''}`}>
                    <Container maxWidth="xl">
                        <Grid container>
                            <Grid xs={12}>
                                <ul>
                                    <li onClick={()=>handleMobileClick('homepage')}>homepage</li>
                                    <li onClick={()=>handleMobileClick('about')}>about</li>
                                    <li onClick={()=>handleMobileClick('membership')}>membership</li>
                                    <li><a target="_blank" rel="noreferrer" href="/courses">courses</a></li>
                                    <li onClick={()=>handleMobileClick('benefits')}>benefits</li>
                                    <li onClick={()=>handleMobileClick('teams')}>team</li>
                                    <li onClick={()=>handleMobileClick('faq')}>faq</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderSinglePage;