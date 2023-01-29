import React, {useState} from 'react';
import css from './Courses.module.css';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Wallet from '../Wallet/Wallet';
import CoursesTab from '../../components/CoursesTab/CoursesTab';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Courses = () => {
    const [tokenId, setTokenId] = useState(null);
    const [permissionStatus, setPermissionStatus] = useState(false);
    const [message, setMessage] = useState("");

    const handleLoginWallet = id => {
        if(id === '0x00' || id === '0x01'){
            setTokenId(id);
            if(id === '0x00') setMessage('Congratulations, you have successfully logged in with VIP Pass privileges.')
            if(id === '0x01') setMessage('Congratulations, you have successfully logged in with Founder Pass privileges.')
        }
        setPermissionStatus(true);
    }

    return(
        <>
            <Header/>
            <Wallet tokenId={handleLoginWallet}/>
            <div id="faq" className={css.container}>
                <Container maxWidth="lg" className="container-fluid">
                    <Grid container>
                        <Grid xs={12}>
                            <div className="mainTitle text-center">Courses <span>List</span><br/><br/></div>
                        </Grid>
                        <Grid xs={12}>
                            {permissionStatus
                                ? tokenId !== null
                                    ?
                                        <>
                                            <div className={css.title}>{message}</div><br/><br/>
                                            <CoursesTab tokenId={tokenId}/>
                                        </>
                                    :
                                    <div className={css.title}>
                                        <h2 style={{color: "var(--yellow)"}}>Access Denied</h2><br/>
                                        We apologize, but it appears that you do not have access to this section of our website. In order to access this exclusive content, you must first purchase our Elevated NFT.<br/><br/>
                                        Thank you for your understanding,<br/>
                                        Elevated Yacht Club
                                    </div>
                                : <div className={css.title}>connect wallet to access this section</div>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer/>
        </>
    )
    }

export default Courses;