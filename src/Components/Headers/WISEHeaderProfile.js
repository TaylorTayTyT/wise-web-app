import React, {useState, useEffect } from 'react';
import style from '../../Styles/header.module.css';
import WISETextButton from '../Buttons/WISETextButton';
import WISEStandardButton from '../Buttons/WISEStandardButton';
import SideNav from '../SideNav/SideNav';

import { useNavigate } from 'react-router';

// props:
// dark: boolean (referring to theme of page)
// hasTextButton: boolean (the '<- back' button)
// backgroundColor: string (if dark is false then use this color)
// text: string (displayed text on the header)
// titleText: string (displayed in the TextField)
// img: string (profile picture)
// buttonData: list (list of the buttons information plus more)
//      buttonDatas includes
//          id: string (unique key)
//          children: string (text)
//          isStretched: boolean (if the button stretches)

export default function WISEHeaderProfile(props) {

    const navigate = useNavigate();

    const [isImageCollapse,setImageCollapse] = useState(false);
    const collapseImage = () => {
        if(window.scrollY > 0){
            setImageCollapse(true);
        }
        else{
            setImageCollapse(false);
        }
    };
    window.addEventListener('scroll',collapseImage);

    const imageStyle = isImageCollapse ? "image_container_collapse" : ""

    var notStretchCount = 0
    var buttonCount = 0;
    const numOfButtons = props.buttonData.length
    const headerStyle = props.dark ? "header_ko" : ""
    const textStyle = props.dark ? "text_ko" : ""
    const titleStyle = props.dark ? "text_secondary" : ""
    const buttonStyle = props.dark ? "ko" : "primary"
    const backgroundColorStyle = props.dark ? null : {backgroundColor: props.backgroundColor}
    const buttonElements = props.buttonData.map(button => {
        const stretchedStyle = button.isStretched ? "button_grid_Stretched": "button_grid_item"
        if (button.isStretched === false){
            notStretchCount = notStretchCount + 1
        }
        buttonCount = buttonCount + 1
        if(buttonCount === numOfButtons && notStretchCount%2 === 1){
            return <div key={button.id} className ={`${style[stretchedStyle]} ${style.button_grid_item_last_odd}`}><WISEStandardButton children = {button.children} size = "medium" type = {`${[buttonStyle]}`} /></div>
        }
        else{
            return <div key={button.id} className ={`${style[stretchedStyle]}`}><WISEStandardButton children = {button.children} size = "medium" type = {`${[buttonStyle]}`} /></div>
        }
    })

    return(
        <div className = {`${style.header} ${style[headerStyle]} ${style.header_profile}`} style = {backgroundColorStyle}>            
            <div className={`${style.button_menu_container}`}>
                <div className={`${style.button_container}`}>
                    {props.hasTextButton && <WISETextButton color = {`${[buttonStyle]}`} hasarrow = {true} text = ' Back' handleClick={() => {navigate(-1)}}></WISETextButton>}
                </div>

                    <div className={`${style.text} ${style[textStyle]} ${style.menu_container}`}> <SideNav/> </div>

            </div>            
            <div className={`${style.main_container}`}>
                <div className={`${style.image_and_item_container}`}>
                    <div className={`${style.image_container} ${style[imageStyle]}`} style ={{backgroundImage: `url(${props.img})`}}></div>
                    <div className={`${style.texts_container_profile}`}>
                        <div className={`${style.text} ${style.title} ${style[titleStyle]}`}>{props.titleText}</div>
                        <div className={`${style.text} ${style[titleStyle]}`}>{props.text}</div>
                    </div>
                </div>
                <div className={`${style.buttons_container} ${style.button_grid}`}>
                    {buttonElements}
                </div>
            </div>
        </div>
    )
}