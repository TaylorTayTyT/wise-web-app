import style from '../../Styles/header.module.css';
import WISETextButton from '../Buttons/WISETextButton';
import WISETextField from '../Inputs/WISETextField';
import Icon from '../../Assets/icons';
import WISEStandardButton from '../Buttons/WISEStandardButton';
import WISESelect from '../Selects/WISESelect';
import SideNav from '../SideNav/SideNav';

import { useNavigate } from 'react-router-dom';
// props:
// dark: boolean (referring to theme of page)
// hasTextButton: boolean (the '<- back' button)
// backgroundColor: string (if dark is false then use this color)
// title: string (displayed text on the header)
// button: String (button name)
// select: WISESelect
// searchField: WISETextField

export default function WISEHeaderSearch(props) {

    const navigate = useNavigate();

    const headerStyle = props.dark ? "header_ko" : ""
    const textStyle = props.dark ? "text_ko" : ""
    const titleStyle = props.dark ? "text_secondary" : ""
    const buttonStyle = props.dark ? "ko" : "primary"
    const backgroundColorStyle = props.dark ? null : {backgroundColor: props.backgroundColor}

    return(
        <div className = {`${style.header} ${style[headerStyle]}`} style = {backgroundColorStyle}>            
            <div className={`${style.button_menu_container}`}>
                <div className={`${style.button_container}`}>
                    {props.hasTextButton && <WISETextButton color = {`${[buttonStyle]}`} hasarrow = {true} text = ' Back' handleClick={() => {navigate(-1)}}></WISETextButton>}
                </div>
                <div className={`${style.text} ${style[textStyle]} ${style.menu_container}`}>  </div>
            </div>
            <div className={`${style.text_and_input_container}`}>
            <div className= {`${style.text} ${style.title} ${style[titleStyle]}`}>
                    {props.title}
                    {(props.button)&&
                        <div className = {style.right}><WISEStandardButton type = {`${[buttonStyle]}`} size="medium" handleClick={props.handleClick}>{props.button}</WISEStandardButton></div>
                    }
                    
                </div>
                
                <div className = {`${style.text_field_container}`}> 
                    {props.searchField}
                </div>
                
            </div>
            {props.select}
        </div>
    )
}
