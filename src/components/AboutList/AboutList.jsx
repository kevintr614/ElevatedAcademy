import css from './AbouList.module.css';

const AboutList = props => {
    const {icon, title, text} = props.data;
    return(
        <div className={css.card}>
            <div className={css.icon}><img src={icon} alt=""/></div>
            <div className={css.title}>{title}</div>
            <div className={css.text}>{text}</div>
        </div>
    )
}

export default AboutList;