import React from 'react';
import css from './Template.module.css';

const Template = props => {
    const {title, description, image, youtube} = props;

    return(
        <div className={css.container}>
            <div className={css.title}>{title}</div>
            <div className={css.description}>{description}</div>

            {image !== '' &&
                <div className={css.image}>
                    <img alt={title} src={image} />
                </div>
            }

            {youtube !== '' &&
                <div className={css.youtube}>
                    {/*<YouTube videoId={youtube} opts={opts} />*/}

                    <iframe
                        src={`https://www.youtube.com/embed/${youtube}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                        allowFullScreen/>
                </div>
            }
        </div>
    )
}

export default Template;