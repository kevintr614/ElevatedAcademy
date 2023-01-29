import React, {useState} from 'react'
import Video from '../Video/Video';
import css from './Videos.module.css';

const Videos = props => {
    const {videos} = props;
    const [lightboxStatus, setLightboxStatus] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const handleClick = id => {
        setVideoId(id);
        setLightboxStatus(true);
    }

    return (
        <>
            {videos.map((item, index) =>
                <div key={index} className={css.container}>
                    <div className={css.mainTitle}><h1>{item.title}</h1></div>
                    <div className={css.text}>{item.text}</div>
                    <ul className={css.list}>
                        {item.list.map((listItem, listIndex) =>
                            <li key={listIndex}>
                                <div className={css.tab} onClick={() => handleClick(listItem.youtube)}>
                                    <div>
                                        <div className={css.title}>{listItem.title}</div>
                                        <div className={css.description}>{listItem.description}</div>
                                    </div>
                                    <div className={css.caption}>{listItem.caption}</div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            )}

            {lightboxStatus &&
                <Video
                    videoId={videoId}
                    onClick={()=>setLightboxStatus(false)}
                />
            }
        </>
    )
}

export default Videos;