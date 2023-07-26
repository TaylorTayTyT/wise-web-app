import style from '../../Styles/button.module.css';
import Icon from '../../Assets/icons';

/*
props:
type: String = "add" | "edit" | "down" | "right" | "up"
dark: boolean (referring to theme of page)
handleClick: function
*/
export default function WISEIconButton({ type, dark, handleClick }) {
    const iconType = type
    const btnStyle = dark ? "ko" : "primary"

    const renderIcon = () => {
        if(iconType === "add") {
            return <Icon.Add className={`${style.icon} ${style.icon_add}`} />
        } else if(iconType === "edit") {
            return <Icon.Edit className={`${style.icon}`} />
        } else if(iconType === "down") {
            return <Icon.Caret className={`${style.icon} ${style.icon_down}`} />
        } else if(iconType === "right") {
            return <Icon.Caret className={`${style.icon} ${style.icon_right}`} style={{ transform: 'rotate(270deg)'}} />
        } else if(iconType === "up") {
            return <Icon.Caret className={`${style.icon}`} style={{ transform: 'rotate(180deg)'}} />
        } 
    }

	return (
    	<button className={`${style.icon_container} ${style[btnStyle]}`} onClick={handleClick} >
            {renderIcon()}
        </button>
    )
}