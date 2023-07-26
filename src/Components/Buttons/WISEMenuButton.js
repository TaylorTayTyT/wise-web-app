import style from '../../Styles/button.module.css';

export default function WISEMenuButton(props) {
    return(
        <div className={style.menu_container}>
            <button className={style.menu} style={{ backgroundColor: props.color, color: props.textColor }} onClick={props.handleClick}>
                <span className={style.menu_text}>{props.children}</span>
            </button>
        </div>
    )
}