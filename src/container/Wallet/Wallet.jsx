import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import css from './Wallet.module.css';
import Logo from '../../images/logo.png';

import { initOnboard } from '../../utils/onboard';
import { useConnectWallet, useWallets } from '@web3-onboard/react';

const Coll1 = "0x79be5d1566bd6202a52284e7dee277a414100f88";//Genesis

const Wallet = props => {
    const [{wallet}, connect] = useConnectWallet();
    const connectedWallets = useWallets();
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (connectedWallets.length > 0) getWalletNFTs();
    }, [connectedWallets]);

    const connectWallet = async () => {
        const wallets = await initOnboard.connectWallet();

        const connectedWalletsLabelArray = wallets.map(
            ({label}) => label
        )

        window.localStorage.setItem(
            'connectedWallets',
            JSON.stringify(connectedWalletsLabelArray)
        )
    }

    useEffect(() => {
        const previouslyConnectedWallets = JSON.parse(
            window.localStorage.getItem('connectedWallets')
        )

        if (previouslyConnectedWallets?.length) {
            setWalletFromLocalStorage(previouslyConnectedWallets)
        }
    }, [initOnboard, connect])

    const setWalletFromLocalStorage = async (wallets) => {
        await connect({
            autoSelect: {
                label: wallets[0],
                disableModals: true
            }
        })
    }

    const getWalletNFTs = async () => {
        if (wallet) {
            const options = {
                method: 'GET',
                url: 'https://eth-mainnet.g.alchemy.com/nft/v2/F0al7kaxZLS99s19_dDdXTsuecnClqIT/getNFTs',
                params: {
                    owner: wallet.accounts[0].address,
                    contractAddresses: [Coll1],
                    withMetadata: 'true'
                },
                headers: {accept: 'application/json'}
            };
            axios
                .request(options)
                .then(function (response) {
                    const allNfts = response.data;
                    if (allNfts.ownedNfts !== undefined && allNfts.ownedNfts.length > 0) {
                        const id = allNfts.ownedNfts[0].id.tokenId;
                        const userTitle = id === "0x00" ? "Founder Pass" : "VIP Pass";
                        setTitle(userTitle);
                        props.tokenId(allNfts.ownedNfts[0].id.tokenId);
                    } else {
                        props.tokenId(null);
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }

    return (
        <Fragment>
            <div className={css.headerContainer}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid xs={12}>
                            <div className={css.container}>
                                <div>
                                    {
                                        wallet
                                            ? title !== ''
                                                ? <div className={css.title}>{title}</div>
                                                : <div className={css.title}>Unauthorized</div>
                                            : <div className={css.button} onClick={connectWallet}>Connect wallet</div>
                                    }
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Fragment>
    )
}

export default Wallet;