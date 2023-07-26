import WISEHeader from '../Components/Headers/WISEHeader';
import style from '../Styles/home.module.css';
import SideNav from '../Components/SideNav/SideNav';
import WISECardHome from '../Components/Cards/WISECardHome';
import WISEStandardButton from '../Components/Buttons/WISEStandardButton';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About({}) {
    return (
        <div className={style.page}> 
            <WISEHeader title="About" dark="true" hasTextButton="true"></WISEHeader>
                
            <Row>
                <Col sm={5} className={style.image}></Col>

                <Col className={style.textBlock}>
                    <h6>
                        What is WISE Cities?
                    </h6>
                    <p></p>
                    <p>
                        WISE Cities is a startup started by college students in 2020 who wanted to give back to those who cared for them. We focus on connecting older adults with opportunities, resources, and events in their local community through uncomplicated technology.
                    </p>
                    <br/>
                    <h6>
                        Our Mission
                    </h6>
                    <p></p>
                    <p>
                        Our mission is to not just make cities smarter, but to make them wiser as well. We understand that not all communities are made for aging well. We want to change that so that all older adults have the opportunity to age independently in a healthy and enjoyable manner.
                    </p>
                    <br/>
                    <h6>
                        Our Values
                    </h6>
                    <p></p>
                    <p>
                        Our company values simplicity, trust, empathy, and innovation above all else. We are here to create new better solutions you can rely on that are straigtforward and made for you.
                    </p>
                    <br/>
                    <h6>
                        More Information
                    </h6>
                    <p></p>
                    <p>
                        If you are interested in learning more about us, we encourage you to visit our website. 
                    </p>
                    <br/>
                    <WISEStandardButton type="primary" size="large" handleClick={() => {window.open("https://www.wisecities.us/", "_blank")}}>Visit Our Website</WISEStandardButton>
                </Col>
            </Row>

            <SideNav />
        </div>        
    )
}