import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import FaqList from '../../components/FaqList/FaqList';
import css from './Faq.module.css';

const Faq = () => {
    const [list] = useState([
        {
            title: 'How can I mint Elevated Yacht Club NFT?',
            text: "You can mint our nft using ETH with metamask or you pay for the NFT with credit card."
        },{
            title: 'How can I view my NFT after mint?',
            text: "Log in to opensea.io using the wallet that was used to mint the NFT. If you paid with a credit card, be sure to check the hidden folder. If you are still can't find it, it should be still in your winter wallet (www.usewinter.com)"
        },{
            title: 'Why I cannot mint Founder Pass?',
            text: "It's invited only. Please fill out the application here: https://forms.gle/E7FM3sUBGEe8cD6V9 "
        },{
            title: 'Where can I contact the team?',
            text: "Best way to contact us is via Twitter or Discord."
        },{
            title: 'What is Elevated Yacht Club smart contract address?',
            text: "https://etherscan.io/address/0x79be5d1566bd6202a52284e7dee277a414100f88"
        }
    ]);

    return(
        <div id="faq" className={css.container}>
            <Container maxWidth="md" className="container-fluid">
                <Grid container>
                    <Grid xs={12}>
                        <div className="mainTitle text-center">Frequently Asked <br/><span>Questions</span></div>
                    </Grid>
                    <Grid xs={12}>
                        <div className={css.spacing}>
                            <FaqList list={list}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Faq;
