import React from 'react';
import css from './Tab.module.css';

const Tab = props => {
    const {title, image, subtitle, url, onClick} = props;
    return(
        <div className={css.container} onClick={onClick}>
            <img className={css.image} alt="" src={require('../../../images/'+ image)}/>
            <div className={css.paragraph}>
                <div className={css.title}>{title}</div>
                <div className={css.subtitle}>{subtitle}</div>
            </div>
            <div className={css.button}>View Videos</div>
        </div>
    )
}

export default Tab;