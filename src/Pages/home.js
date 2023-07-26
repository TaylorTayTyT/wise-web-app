import WISEHeader from '../Components/Headers/WISEHeader';
import style from '../Styles/home.module.css';
import SideNav from '../Components/SideNav/SideNav';
import WISECardHome from '../Components/Cards/WISECardHome';
import React from 'react';

import { useNavigate } from 'react-router';

export default function Home({}) {
    const navigate = useNavigate();

    return (
        <div>
            <SideNav />
            <div className={style.page}>
                <WISEHeader title="Home" dark="true"></WISEHeader>
                <div className={style.page2}>
                    <div className={style.item}>
                        <WISECardHome title="Groups" text="Explore communities having similar interests." header="Explore Groups" color="var(--maize-crayola)" handleBtnClick={() => {navigate('/groups')}}/>
                    </div>
                    <div className={style.item}>
                        <WISECardHome title="Events" text="Explore events happening near you." header="Explore Events" color="var(--pistachio)" handleBtnClick={() => {navigate('/events')}}/>
                    </div>
                    <div className={style.item}>
                        <WISECardHome title="Community" text="Explore nearby community organizations like communities centers." header="Explore Community" color="var(--french-blue-sky)"/>
                    </div>
                    <div className={style.item}>
                        <WISECardHome title="Nonprofits" text="Explore nonprofits and their services and opportunities." header="Explore Nonprofits" color="var(--light-purple)"/>
                    </div>
                    <div className={style.item}>
                        <WISECardHome title="Businesses" text="Explore organizations working for senior citizens." header="Explore Businesses" color="var(--sandy-brown)" handleBtnClick={() => {navigate('/businesses')}}/>
                    </div>
                    <div className={style.item}>
                        <WISECardHome title="Government" text="Explore local government programs, resources, and opportunities." header="Explore Government" color="var(--gray)"/>
                    </div>
                </div>
            </div>
        </div>
    )
}