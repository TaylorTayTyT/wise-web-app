import style from "../../Styles/button.module.css";
import Icons from "../../Assets/icons.js";

/*
props:
- hasarrow: boolean
- text: string
- color(optional): string "ko"
- handleClick: function
*/

export default function WISETextButton(props) {
  var btnClass = `${style.textbutton}`;
  if (props.color === "ko") {
    btnClass = `${style.textbuttonko}`;
  }
  if (props.hasarrow) {
    var iconClass = ` ${style.icon} `;
    return (
      <button className={btnClass} onClick={props.handleClick}>
        <Icons.Arrow className={iconClass} />
        &nbsp;
        {props.text}
      </button>
    );
  }
  return <button className={btnClass} onClick={props.handleClick}>{props.text}</button>;
}
