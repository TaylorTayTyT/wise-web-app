/*
props:
arrow: boolean
color: String = 'var(--cultured)' | 'white'
title: String (main text)
date: String (subtext), has calendar icon
location: String (subtext), has location pin icon
subtext: String (subtext), no icon
handleClick: function
*/

import style from '../../Styles/list.module.css';
import Icon from '../../Assets/icons';
import WISEIconButton from '../Buttons/WISEIconButton';

export default function ListFlat({title, location, date, arrow, color, subtext, handleClick}) {
    return (
        <div className={style.list_flat} style={{ backgroundColor: color }}>
            <div className={style.list_flat_text}>
                <span className={style.list_arrow_title}>{title}</span>
                    { (date) &&
                        <div className={style.list_flat_secondary}>
                            <Icon.Calendar className={style.icon}/>
                            <span className={style.list_arrow_subtext}>{date}</span>
                        </div>
                    }
                    
                    { (location) &&
                        <div className={style.list_flat_secondary}>
                            <Icon.Location className={style.icon}/>
                            <span className={style.list_arrow_subtext}>{location}</span>
                        </div>
                    }

                    { (subtext) &&
                        <div className={style.list_flat_secondary}>
                            <span className={style.list_arrow_subtext}>{subtext}</span>
                        </div>
                    }
                    
            </div>
            { (arrow) &&
                <div><WISEIconButton type="right" handleClick={handleClick}></WISEIconButton></div>
            }
        </div>
    )
}
