import WISEHeader from "../Components/Headers/WISEHeader";
import SideNav from '../Components/SideNav/SideNav';
import ListArrow from "../Components/List/ListArrow";
import style from "../Styles/helpPage.module.css";

import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Help(props) {

    const navigate = useNavigate();

    return(
        <div>   
            <div className={style.main_container}>
                <WISEHeader dark={true} hasTextButton={true} title="Help" />
    
                <Row className={style.secondary_container}>
                    <Col sm={5} className={style.image}></Col>
                    <Col className={style.form_container}>
                        <h5>Encountered an issue?</h5>
                        <p>If you have run into a bug or other issue that prevents you from using our app, please let us know by filling out our bug report form.</p>
                        <ListArrow title="Fill Out Bug Report Form" handleClick={() => {navigate('/bugReport')}}/>
                        <h5>Need to contact us?</h5>
                        <p>If you have another concern or would like to contact us directly about our app, please fill out our contact form and we’ll get back to you as soon as we can.</p>
                        <ListArrow title="Fill Contact Form" handleClick={() => {navigate('/contact')}}/>
                    </Col>
                </Row>
            </div>
            <SideNav />
        </div>
    );
}