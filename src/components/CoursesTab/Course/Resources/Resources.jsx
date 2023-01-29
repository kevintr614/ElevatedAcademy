import React from 'react'
import css from './Resources.module.css';

const Resources = props => {
    const {resources} = props;

    console.log(resources)
    return(
        resources.map((item, index) =>
            <div key={index} className={css.container}>
                <div className={css.mainTitle}><h1>{item.title}</h1></div>
                <div className={css.text}>{item.text}</div>
                <ul className={css.list}>
                    {item.list.map((listItem, listIndex) =>
                        <li key={listIndex}>
                            <a target="_blank" rel="noreferrer" href={require("../../../../files/"+ listItem.pdf)}>
                                <div className={css.title}>{listItem.title}</div>
                                <div className={css.caption}>{listItem.caption}</div>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        )
    )
}

export default Resources;