import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: `1px solid rgba(236, 185, 86, 0.3)`,
    background: 'transparent',
    color: 'rgba(255, 255, 255, 0.48)',
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

const FaqList = props => {
    const [list, setList] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setList(props.list);
    }, [props.list]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {list.map((item, index) =>
                <Accordion
                    key={index}
                    expanded={expanded === 'panel'+ index}
                    onChange={handleChange('panel' + index)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '80%', flexShrink: 0 }}>
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.text}</Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </div>
    );
}

export default FaqList;