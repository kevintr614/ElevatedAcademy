import React, {useState, useEffect} from 'react';
import css from './SocialIcons.module.css';

const SocialIcons = props => {
    const [social, setSocial] = useState([]);

    useEffect(()=>{
        setSocial(props.social);
    }, [props.social]);

    return(
        <ul className={css.social}>
            {social.map((item, index) =>
                <li key={index}>
                    <a target="_blank" rel="noreferrer" href={item.url}>
                        <img src={item.icon} alt={item.title} title={item.title}/>
                    </a>
                </li>
            )}
        </ul>
    )
}

export default SocialIcons;