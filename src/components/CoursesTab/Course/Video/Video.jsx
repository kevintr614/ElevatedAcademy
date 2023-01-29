import React from 'react';
import css from './Video.module.css';

const Video = props => {
    const {videoId, onClick} = props;

    return(
        <div className={css.container}>
            <div className={css.body}>
                <div className={css.shadow} onClick={onClick}/>
                <div className={css.video}>
                    <div className={css.videoFrame}>
                        <iframe
                            width="560" height="315"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video