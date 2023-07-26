import style from '../../Styles/button.module.css';

/*
props:
- text: string
- tagColor: string
- textColor: string
*/
export default function WISETagButton(props) {
    var btnClass = `${style.tagbutton} `;
	return (
    	<button className={btnClass} 
        style={{ backgroundColor: `${props.tagColor}`, 
                 borderColor: `${props.tagColor}`,
                 color: `${props.textColor}`}}>
            {props.text}
        </button>
    )
}