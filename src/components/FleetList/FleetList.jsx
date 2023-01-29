import css from './FleetList.module.css';

const FleetList = props => {
    const {title, image, text} = props.data;

    return (
        <div className={css.card}>
            <div className={css.image}><img alt="" src={image}/></div>
            <div className={css.title}>{title}</div>
            <div className={css.text}>{text}</div>
        </div>
    )
}

export default FleetList;