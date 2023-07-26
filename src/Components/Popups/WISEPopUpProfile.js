import style from '../../Styles/popupProfile.module.css';
import WISETextButton from '../Buttons/WISETextButton';
import WISEStandardButton from '../Buttons/WISEStandardButton';
import CardContentFlat from '../Cards/CardContentFlat';
import CardContentList from '../Cards/CardContentList'
import CollapsibleCard from '../Cards/CollapsibleCard';


/*
* @prop title - Title of header
* @prop text - Text of header
* @prop hasSecondaryButton - seconadary button enable boolean
*/

export default function WISEPopUpProfile(props) {

    return(
        <div className={style.maincontainer}>
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
            <div className={style.cards}>
  <div className={style.cardwrapper}>
    <CollapsibleCard header="test" content={<CardContentFlat />} hasButton="true" />
  </div>
  <div className={style.cardwrapper}>
    <CollapsibleCard header="test" content={<CardContentFlat />} hasButton="true" />
  </div>
  <div className={style.cardwrapper}>
    <CollapsibleCard header="test" content={<CardContentFlat />} hasButton="true" />
  </div>
  <CollapsibleCard header="test" content={<CardContentFlat />} hasButton="true" />
</div>


            <div className={style.report__button}>
            <WISEStandardButton type="secondary" size="large"/>
            </div>
        </div>
    )
}