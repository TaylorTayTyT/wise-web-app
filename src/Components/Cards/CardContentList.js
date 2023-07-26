import style from '../../Styles/card.module.css';
import ListFlat from '../List/ListFlat';
import WISEStandardButton from '../Buttons/WISEStandardButton';

/*
props:
arrow: boolean
hasButton: boolean
buttonText: String
items: JSON object array
*/

// const items = [
//     {title: "Text1"},
//     {title: "Text2", location: "Location"},
//     {title: "Text3"},
//     {title: "Text4"}
// ]

export default function CardContentList({arrow, hasButton, buttonText, items}) {
    return(
        <div className={style.container}>
            {items && items.map((item, index) => (
                <ListFlat 
                    arrow={arrow} 
                    color={(index%2 === 0) ? "var(--cultured)" : "white"} 
                    title={item.title}
                    date={item.date}
                    location={item.location}
                    />
                
            ))}

            {hasButton && 
                <div className={style.btnContainer}>
                    <WISEStandardButton type="primary" size="large">
                        {buttonText}
                    </WISEStandardButton>
                </div>
            }
            
        </div>
    )
}