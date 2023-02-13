import React, {useEffect, useState} from 'react'
import Video from '../Video/Video';
import css from './Videos.module.css';
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: `1px solid rgba(236, 185, 86, 0.3)`,
    background: 'transparent',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '20px',
    lineHeight: '20px',
    padding: '10px 0',
    '& svg': {
        color: '#FFF',
    },
    '& .MuiButtonBase-root': {
        paddingLeft: 0,
    },
    '& .MuiAccordionSummary-content': {
        margin: 0
    },
    '& .MuiAccordionDetails-root': {
        paddingLeft: 0
    }
}));

const Videos = props => {
    const {videos} = props;
    const [lightboxStatus, setLightboxStatus] = useState(false);
    const [videoId, setVideoId] = useState(null);

    // const handleClick = id => {
    //     setVideoId(id);
    //     setLightboxStatus(true);
    // }

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {videos.map((item, index) =>
                <div key={index} className={css.container}>
                    <div className={css.mainTitle}><h1>{item.title}</h1></div>
                    <div className={css.text}>{item.text}</div>
                    <div className={css.list}>
                        {item.list.map((listItem, listIndex) =>
                            <Accordion
                                key={listIndex}
                                expanded={expanded === 'panel'+ listIndex}
                                onChange={handleChange('panel' + listIndex)}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{backgroundColor: 'var(--yellow)'}}
                                >
                                    <Typography sx={{ width: '80%', flexShrink: 0, textAlign: 'left', fontSize: 25, color: '#FFFFFF', padding: '0 10px' }}>
                                        {listItem.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{textAlign: 'left', paddingTop: 2}}>
                                        {listItem.description}
                                        {listItem.image !== undefined && listItem.image !== ''
                                            ? <img className={css.image} src={require('../../../../images/'+ listItem.image)}/>
                                            : ''
                                        }
                                        {listItem.youtube !== undefined && listItem.youtube !== ''
                                            ? <div className={css.video}>
                                                <div className={css.videoFrame}>
                                                    <iframe
                                                        width="560" height="315"
                                                        src={`https://www.youtube.com/embed/${listItem.youtube}`}
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                            : ''
                                        }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )}
                    </div>
                </div>
            )}

            {/*{lightboxStatus &&*/}
            {/*    <Video*/}
            {/*        videoId={videoId}*/}
            {/*        onClick={()=>setLightboxStatus(false)}*/}
            {/*    />*/}
            {/*}*/}
        </>
    )
}

export default Videos;

// <li key={listIndex}>
//     <div className={css.tab} onClick={() => handleClick(listItem.youtube)}>
//         <div>
//             <div className={css.title}>{listItem.title}</div>
//             <div className={css.description}>{listItem.description}</div>
//         </div>
//         <div className={css.caption}>{listItem.caption}</div>
//     </div>
// </li>