import React, { useState, Fragment } from 'react';
// import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Turn as Hamburger } from 'hamburger-react'
import css from './Header.module.css';
import Logo from '../../images/logo.png';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

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
                                <li><HashLink to="/#homepage">homepage</HashLink></li>
                                <li><HashLink to="/#about">about</HashLink></li>
                                <li><HashLink to="/#membership">membership</HashLink></li>
                                <li><a href="/courses">courses</a></li>
                                <li><HashLink to="/#benefits">benefits</HashLink></li>
                                <li><HashLink to="/#teams">team</HashLink></li>
                                <li><HashLink to="/#faq">faq</HashLink></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Container>

                <div className={`${css.navbar} ${isOpen ? css.activeNavbar : ''}`}>
                    <Container maxWidth="xl">
                        <Grid container>
                            <Grid xs={12}>
                                <ul>
                                    <li><HashLink to="/#homepage">homepage</HashLink></li>
                                    <li><HashLink to="/#about">about</HashLink></li>
                                    <li><HashLink to="/#membership">membership</HashLink></li>
                                    <li><a href="/courses">courses</a></li>
                                    <li><HashLink to="/#benefits">benefits</HashLink></li>
                                    <li><HashLink to="/#teams">team</HashLink></li>
                                    <li><HashLink to="/#faq">faq</HashLink></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;