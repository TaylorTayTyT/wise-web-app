import WISEStandardButton from '../Buttons/WISEStandardButton';
import { Card, CardContent, CardActions } from "@material-ui/core";
import style from '../../Styles/card.module.css';
/*
* Creates a WiseCardHome using WISEStandandButton
* @prop title - Title of CardHome
* @prop text - Text of CardHome
* @prop header - Text in button
* @prop color - color of background
* @prop handleBtnClick
*/
export default function WISECardHome(props) {
    return (
      <Card elevation={0} className={style.home_container} style={{backgroundColor: props.color,
      borderRadius: "30px"}}>
        <CardContent className={style.text_container} style={{
          padding: "0px",
          color: "var(--space-cadet)",
          fontFamily: "Inter-SemiBold",
          fontSize: '30px'}}>
          <h5 >{props.title}</h5>
          <p style={{
            paddingBottom: "0px",
            fontFamily: "Inter-Regular",
            fontSize: '20px'}}>{props.text}</p>
        </CardContent>
        <CardActions className={style.button_container} style={{
          paddingBottom: "0px",
          paddingTop: "0px",
          paddingLeft: "0px",
          paddingRight: "0px"}}>
          <WISEStandardButton type="primary" size="large" handleClick={props.handleBtnClick}>
            {props.header}
          </WISEStandardButton>
        </CardActions>
      </Card>
    )
  }