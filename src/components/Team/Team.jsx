import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import css from './Team.module.css';

const Team = props => {
    const {title, image, subtitle, text, social} = props.data;

    return(
        <div className={css.card}>
            <div className={css.image}><img alt="" src={image}/></div>
            <div className={css.social}>
                <SocialIcons social={social}/>
            </div>
            <div className={css.title}>{title}</div>
            <div className={css.subtitle}>{subtitle}</div>
            <div className={css.text}>{text}</div>
        </div>
    )
}

export default Team;