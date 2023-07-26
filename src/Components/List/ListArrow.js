/*
props:
title: String (main text)
location: String (subtext)
handleClick: function
*/

import style from '../../Styles/list.module.css';
import WISEIconButton from '../Buttons/WISEIconButton';

export default function ListArrow({title, location, handleClick}) {
    return (
        <div className={style.list_arrow}>
            <div className={style.list_arrow_text}>
                <span className={style.list_arrow_title}>{title}</span>
                { (location) &&
                    <span className={style.list_arrow_subtext}>{location}</span>
                }
            </div>
            <div><WISEIconButton type="right" handleClick={handleClick}></WISEIconButton></div>
        </div>
    )  
}