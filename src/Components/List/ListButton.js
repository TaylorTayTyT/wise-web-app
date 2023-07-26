/*
props:
title: String (main text)
img: image file or url
buttonName: String (text for button)
handleClick: function
*/
import style from '../../Styles/list.module.css';
import WISEStandardButton from '../Buttons/WISEStandardButton';

export default function ListButton({title, img, buttonName, handleClick}) {

    return (
        <div className={style.list_arrow}>
            { (img) &&
                <img className={style.image} src={img} alt="profile"/>
            }
            <div className={style.list_arrow_text}>
                <span className={style.list_arrow_title}>{title}</span>
            </div>
            <div><WISEStandardButton type="primary" size="small" handleClick={handleClick}>{buttonName}</WISEStandardButton></div>
        </div>
    )
}