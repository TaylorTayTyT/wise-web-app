import * as React from 'react';
import { useState } from 'react';
import style from "../Styles/contactFormPage.module.css";
import WISEHeader from "../Components/Headers/WISEHeader";
import SideNav from '../Components/SideNav/SideNav';
import WISETextField from '../Components/Inputs/WISETextField';
import WISEStandardButton from '../Components/Buttons/WISEStandardButton';
import WISEModalHeader from '../Components/Modals/WISEModalHeader';
import Icon from '../Assets/icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactForm(props) {

    const [sendClicked, setSendClicked] = useState(false)
    const [cancelClicked, setCancelClicked] = useState(false)
    const [yesClicked, setYesClicked] = useState(false)

    // TODO: add functionality for sending message
    const handleSendClicked = () => {
        setSendClicked(true);
    }

    const handleCancelClicked = () => {
        setCancelClicked(true);
    }

    const handleDoneClicked = () => {
        setSendClicked(false);
        setYesClicked(false);
    }

    const handleNoClicked = () => {
        setCancelClicked(false);
    }

    const handleYesClicked = () => {
        setCancelClicked(false);
        setYesClicked(true);
    }

    return(
        <div>
            <div className={style.main_container}>
                <WISEHeader dark={true} hasTextButton={true} title="Contact Form"></WISEHeader>
                <div className={style.input_text}>
                    <h5>Please provide us with your email so we can get back to you.</h5>
                    <WISETextField multiline={false} placeholder="Your Email" hasIcon={false} />
                    <h5>Write your message below.</h5>
                    <WISETextField multiline={true} placeholder="Your message..." hasIcon={false} />
                    <Row className={style.buttons_container}>
                        <Col className={style.cancel_button}>
                            <WISEStandardButton type="secondary" size="large" handleClick={() => handleCancelClicked()}>Cancel</WISEStandardButton>
                        </Col>
                        <Col className={style.submit_button}>
                            <WISEStandardButton type="primary" size="large" handleClick={() => handleSendClicked()}>Send</WISEStandardButton>
                        </Col>
                    </Row>
                </div>
            </div>
            <SideNav />

            <WISEModalHeader 
                type="primary"
                title="Message Sent!"
                text="Your message has been sent to our team. We will respond via email within the next businesses week."
                btn1="Done"
                icon={<Icon.Check/>}
                open={sendClicked}
                handleBtn1Click={() => handleDoneClicked()}
                />
            
            <WISEModalHeader 
                type="secondary"
                title="Cancel Submission?"
                text="Are you sure you want to cancel this submission? If you do, your responses will not be saved and we will not receive your message."
                btn1="No"
                btn2="Yes"
                icon={<Icon.Warning/>}
                open={cancelClicked}
                handleBtn1Click={() => handleNoClicked()}
                handleBtn2Click={() => handleYesClicked()}
                />
            
            <WISEModalHeader 
                type="primary"
                title="Submission Canceled!"
                text="Your submission has been canceled."
                btn1="Done"
                icon={<Icon.Check/>}
                open={yesClicked}
                handleBtn1Click={() => handleDoneClicked()}
                />
        </div>
    );
}