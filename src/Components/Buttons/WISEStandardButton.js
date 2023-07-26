import style from '../../Styles/button.module.css';

/*
props:
type: String - 'primary' | 'secondary' | 'ko'
size: String - 'small' | 'medium' | 'large'
handleClick: function
*/
export default function WISEStandardButton(props) {
    const btnClass = `${style.standard} ${style[props.type]} ${style[props.size]}`;
	return (
    	<button className={btnClass} onClick={props.handleClick} >
            {props.children}
        </button>
    )
}