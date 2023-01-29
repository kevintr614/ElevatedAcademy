import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import css from './BenefitsList.module.css';
import Circle from '../../images/circle.png';

const BenefitsList = props => {
    const {title, list} = props.data;
    return(
        <div className={css.card}>
            <div className={css.title}><img alt="" src={Circle}/> {title}</div>
            <ul>
                {list.map((item, index) =>
                    <li key={index}><CircleIcon/> {item}</li>
                )}
            </ul>
        </div>
    )
}

export default BenefitsList;