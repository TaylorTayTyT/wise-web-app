import style from '../../Styles/card.module.css';
import WISETagButton from '../Buttons/WISETagButton';

/*
props:
sections - array of JS objects
*/

export default function CardContentFlat(props) {
    return(
        <div className={style.container}>
            {props.sections.map((section) => (
                <div className={style.section} key={section.id} >
                    <h5>{section.header}</h5>
                    {section.text && <p>{section.text}</p>}
                    {section.tags && section.tags.map((tag, i) => (
                        <WISETagButton text={tag} key={i} tagColor={section.tagColor} textColor={section.textColor} />
                    ))}
                </div>
            ))}
        </div>
    )
}