import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Mint from '../../components/Mint/Mint';
import css from './Membership.module.css';
import Image from '../../images/membership.png';

const Membership = () => {
    return(
        <Container id="membership" maxWidth="xl" className="container-fluid">
            <Grid container>
                <Grid sm={12} md={6} className={css.image}>
                    <img src={Image} alt="membership"/>
                </Grid>
                <Grid sm={12} md={6} className={css.textContent}>
                    <Grid container className={css.spacing}>
                        <Grid xs={12}>
                            <div className="mainTitle">Levels of <span>Membership</span></div>
                        </Grid>
                        <Mint/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Membership;