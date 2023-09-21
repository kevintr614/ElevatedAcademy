import React, { Fragment, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import css from './Mint.module.css';
import VipPass from '../../images/vip-pass.gif';
import FounderPass from '../../images/founder-pass.gif';

const Mint = () => {
    const [index, setIndex] = useState(0);
    const [list] = useState([
        {            
            image: FounderPass,
            url: 'https://mint.elevatedyachtclub.com/founder',
            content: [
                {
                    label: 'ETH',
                    value: '2.5'
                },{
                    label: 'Presale Supply',
                    value: '30/30'
                },{
                    label: 'ETH',
                    value: '3.5'
                },{
                    label: 'Total Supply',
                    value: '3/400'
                },
            ]
        }
    ]);

    const handleClick = (value) => {
        setIndex(value)
    }

    return(
        <Fragment>
            <Grid xs={12}>
                <ul className={css.categories}>                   
                    <li className={index === 1 ? css.categoryActive : ''} onClick={()=>handleClick(1)}>Founder Pass</li>                   
                </ul>
            </Grid>
            {list[index] !== undefined
                ?
                <Grid container columnSpacing={7} rowSpacing={0}>
                    <Grid xs={12}>
                        <img className={css.imageList} alt="" src={list[index].image}/>
                    </Grid>
                    <Grid xs={12}>
                        <Grid container className={css.minContainer}>
                            {list[index].content.map((item, index) =>
                                <Grid xs={6} sm={6} md={6} lg={3} lgOffset={index === 2 ? 6 : 0} key={index} className={css.list}>
                                    <div className={css.value}>{item.value}</div>
                                    <div className={css.label}>{item.label}</div>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <a target="_blank" rel="noreferrer" href={list[index].url} className={`button ${css.button}`}>Mint
                            Now</a>
                    </Grid>
                </Grid>
                :
                <Grid xs={12}>
                    <div className={css.comingSoon}>Coming soon</div>
                </Grid>
            }
        </Fragment>
    )
}

export default Mint;
