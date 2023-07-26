import style from '../../Styles/button.module.css';
import WISEIconButton from './WISEIconButton';

/*
props:
function: Function for handle click
Children: Title for button_list
*/
export default function WISEButtonList(props) {
    return(
        <div className={style.button_list_container}>
            <div className={style.button_list_title}>
                {props.children}
            </div>
            <div className={style.button_list_icon}>
               <WISEIconButton type="right" dark={false} handleClick={props.function}/>
            </div>
        </div>
    )
}