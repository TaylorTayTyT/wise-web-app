import WISEHeader from '../Components/Headers/WISEHeader';
import style from '../Styles/home.module.css';
import SideNav from '../Components/SideNav/SideNav';
import WISECardHome from '../Components/Cards/WISECardHome';
import ListFlat from '../Components/List/ListFlat';

import { useNavigate } from "react-router-dom";

export default function Settings({}) {

    const navigate = useNavigate();

    return (
        <div className={style.page}>
            <WISEHeader title="Settings" dark="true" hasTextButton="true"></WISEHeader>
            <div className={style.page2}>
                
                <div className={style.item}>
                    <ListFlat arrow="true" title="About" handleClick={() => {navigate('/about')}}></ListFlat>
                    <ListFlat arrow="true" title="Language" handleClick={() => {navigate('/language')}}></ListFlat>
                    <ListFlat arrow="true" title="Help" handleClick={() => {navigate('/help')}}></ListFlat>
                    <ListFlat arrow="true" title="Feedback" handleClick={() => {navigate('/appFeedback')}}></ListFlat>
                    <ListFlat arrow="true" title="Privacy Policy"></ListFlat>
                    <ListFlat arrow="true" title="Terms"></ListFlat>
                </div>
                
            </div>
            <SideNav />
        </div>
        
    )
}