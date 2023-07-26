import * as React from 'react';
import WISEMenuButton from "../Buttons/WISEMenuButton";
import { ReactComponent as Logo } from "../../Assets/wise_logo.svg";
import WISETextButton from "../Buttons/WISETextButton";
import style from "../../Styles/sideNav.module.css";

import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";

function SideNav(props) {
    const mobile = useMediaQuery('(max-width:1000px)')
    const [isOpen, setOpen] = React.useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen)
    };

    return(
        <div>
            <div className={(mobile && !isOpen) ? style.navButton : style.hidden}>
                <WISETextButton text="Menu" handleClick={toggleMenu} />
            </div>
            <div className={mobile ? (isOpen ? style.sidenav : style.hidden) : style.sidenav}>
                <div className={mobile ? style.hidden : style.logo}>
                    <Logo />
                </div>
                <div className={style.title}>
                    Menu
                    <div className={mobile ? style.closeButton : style.hidden}>
                        <WISETextButton text="Close Menu" handleClick={toggleMenu} />
                    </div>
                </div>
                <div className={style.btncontainer}>
                    <div className={style.btn}>
                        <Link to={'/groups'} onClick={toggleMenu}>
                            <WISEMenuButton color="var(--maize-crayola)" textColor="var(--space-cadet)">Groups</WISEMenuButton>
                        </Link>
                    </div>
                    <div className={style.btn}>
                        <Link to={'/events'} onClick={toggleMenu}>
                            <WISEMenuButton className={style.btn} color="var(--pistachio)" textColor="var(--space-cadet)">Events</WISEMenuButton>
                        </Link>
                    </div>
                    <div className={style.btn}>
                        <Link to={'/community'} onClick={toggleMenu}>
                            <WISEMenuButton className={style.btn} color="var(--french-blue-sky)" textColor="var(--space-cadet)">Community</WISEMenuButton>
                        </Link>
                    </div>
                    <div className={style.btn}>
                        <Link to={'/nonprofits'} onClick={toggleMenu}>
                            <WISEMenuButton className={style.btn} color="var(--light-purple)" textColor="var(--space-cadet)">Nonprofits</WISEMenuButton>
                        </Link>
                    </div>
                    <div className={style.btn}>
                        <Link to={'/businesses'} onClick={toggleMenu}>
                            <WISEMenuButton className={style.btn} color="var(--sandy-brown)" textColor="var(--space-cadet)">Businesses</WISEMenuButton>
                        </Link>
                    </div>
                    <div className={style.btn}>
                        <Link to={'/government'} onClick={toggleMenu}>
                            <WISEMenuButton className={style.btn} color="var(--gray)" textColor="var(--space-cadet)">Government</WISEMenuButton>
                        </Link>
                    </div>
                    <div className={style.btn}>
                        <Link to={'/home'} onClick={toggleMenu}>
                            <WISEMenuButton className={style.btn} color="var(--space-cadet)" textColor="white">Home</WISEMenuButton>
                        </Link>
                    </div>
                    <div className={style.btn}>
                        <Link to={'/settings'} onClick={toggleMenu}>
                            <WISEMenuButton className={style.btn} color="var(--space-cadet)" textColor="white">Settings</WISEMenuButton>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideNav;