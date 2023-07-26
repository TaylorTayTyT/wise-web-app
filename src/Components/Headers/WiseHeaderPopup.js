import style from '../../Styles/headerPopup.module.css';
import WISETextButton from '../Buttons/WISETextButton';
import WISEStandardButton from '../Buttons/WISEStandardButton';

/*
* Creates a WISEHeaderPopup using WISEStandandButton
* @prop title - Title of header
* @prop text - Text of header
* @prop hasSecondaryButton - seconadary button enable boolean
*/

export default function WISEHeaderInput(props) {

    return(
        <div className = {style.header}>            
            <div className={style.headertextButton}>
                <WISETextButton text = 'Close' />
            </div>           
            
            <div className={style.container}>
                <div className={style.image}>
                    
                </div>
                <div className={style.textcontainer}>
                    <h2 className= {style.title}>
                        {props.title}
                    </h2>
                    <h3 className= {style.text}>
                        {props.text}
                    </h3>
                </div>
                <div className={style.buttoncontainer}>
                <div className={style.primary__button}>
                <WISEStandardButton type="primary" size="medium">
                    Button
                </WISEStandardButton>
                </div>
                {props.hasSecondaryButton === "true" &&
                <div className={style.secondary__button}>
                <WISEStandardButton type="secondary" size="medium">
                    Button
                </WISEStandardButton>
                
                </div>
                }
                </div>
            </div>
                
        </div>
    )
}