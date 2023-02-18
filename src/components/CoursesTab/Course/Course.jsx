import React, {useState} from 'react';
import Resources from './Resources/Resources';
import Videos from './Videos/Videos';
import css from './Course.module.css';

const Course = props => {
    const {title, text, videos, resources} = props.course;
    const [button, setButton] = useState(0);

    return(
        <div className={css.container}>
            <div className={css.title}><h3>{title}</h3></div>
            <div className={css.text}>{text}</div>
            <div className={css.tab}>
                <div onClick={()=>setButton(0)} className={button === 0 ? css.active : ''}>Lessons</div>
                <div onClick={()=>setButton(1)} className={button === 1 ? css.active : ''}>Resources</div>
                <div onClick={props.handleGoBack}>Back To Course List</div>
            </div>

            {button === 0
                ? <Videos videos={videos}/>
                : <Resources resources={resources}/>
            }
        </div>
    )
}

export default Course;
